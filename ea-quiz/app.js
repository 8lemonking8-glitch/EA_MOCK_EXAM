const DATA_URL = "questions.json";
const STORAGE_KEY = "ea-final-quiz-state-v7";
const letters = ["A", "B", "C", "D"];

let QUESTIONS = [];
let LECTURES = [];
let STRICT_DISCUSSION_MAP = [];
let CHEAT_SHEET = [];
let autoAdvanceTimer = null;

const state = {
  order: [],
  mockOrder: [],
  current: 0,
  mode: "all",
  lecture: "all",
  search: "",
  answers: {}
};

const els = {
  answeredStat: document.getElementById("answeredStat"),
  accuracyStat: document.getElementById("accuracyStat"),
  correctStat: document.getElementById("correctStat"),
  wrongStat: document.getElementById("wrongStat"),
  progressBar: document.getElementById("progressBar"),
  allModeBtn: document.getElementById("allModeBtn"),
  unansweredBtn: document.getElementById("unansweredBtn"),
  discussionBtn: document.getElementById("discussionBtn"),
  coreBtn: document.getElementById("coreBtn"),
  mockBtn: document.getElementById("mockBtn"),
  masteryBtn: document.getElementById("masteryBtn"),
  weaknessBtn: document.getElementById("weaknessBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  wrongBtn: document.getElementById("wrongBtn"),
  resetBtn: document.getElementById("resetBtn"),
  searchInput: document.getElementById("searchInput"),
  lectureRow: document.getElementById("lectureRow"),
  questionList: document.getElementById("questionList"),
  lectureGuide: document.getElementById("lectureGuide"),
  emptyState: document.getElementById("emptyState"),
  questionCard: document.getElementById("questionCard"),
  topicTag: document.getElementById("topicTag"),
  questionIndex: document.getElementById("questionIndex"),
  questionText: document.getElementById("questionText"),
  memoryCard: document.getElementById("memoryCard"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  cheatSheet: document.getElementById("cheatSheet"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn")
};

async function loadQuizData() {
  const response = await fetch(`${DATA_URL}?v=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Cannot load ${DATA_URL}: ${response.status}`);
  const data = await response.json();
  QUESTIONS = data.questions || [];
  LECTURES = data.lectures || [];
  STRICT_DISCUSSION_MAP = data.strictDiscussionMap || [];
  CHEAT_SHEET = data.cheatSheet || [];
  state.order = QUESTIONS.map((question) => question.id);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return;
    if (Array.isArray(saved.order)) {
      const validIds = new Set(QUESTIONS.map((question) => question.id));
      const savedOrder = saved.order.filter((id) => validIds.has(id));
      if (savedOrder.length === QUESTIONS.length) state.order = savedOrder;
    }
    if (saved.answers && typeof saved.answers === "object") state.answers = saved.answers;
    if (Number.isInteger(saved.current)) state.current = Math.max(0, Math.min(saved.current, QUESTIONS.length - 1));
    if (saved.lecture === "all" || LECTURES.some((lecture) => lecture.id === saved.lecture)) state.lecture = saved.lecture;
    if (Array.isArray(saved.mockOrder)) {
      const validIds = new Set(QUESTIONS.map((question) => question.id));
      state.mockOrder = saved.mockOrder.filter((id) => validIds.has(id));
    }
    if (["all", "wrong", "unanswered", "discussion", "core", "mock", "mastery", "discussionWeak"].includes(saved.mode)) {
      state.mode = saved.mode;
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    order: state.order,
    mockOrder: state.mockOrder,
    current: state.current,
    mode: state.mode,
    lecture: state.lecture,
    answers: state.answers
  }));
}

function getQuestionById(id) {
  return QUESTIONS.find((question) => question.id === id);
}

function getLectureById(lectureId) {
  return LECTURES.find((lecture) => lecture.id === lectureId);
}

function getLectureForQuestion(questionId) {
  return getLectureById(getQuestionById(questionId)?.lecture);
}

function getQuestionDiscussions(questionId) {
  const question = getQuestionById(questionId);
  if (question?.discussion === true) {
    return [{
      lecture: getLectureById(question.discussionLecture || question.lecture),
      page: question.discussionPage,
      title: question.discussionTopic,
      tip: question.discussionRole === "prerequisite" ? "Discussion prerequisite" : "Direct Discussion practice",
      questionIds: [question.id],
      crossRefIds: []
    }];
  }
  return [];
}

function isDiscussionQuestion(questionId) {
  return getQuestionById(questionId)?.discussion === true;
}

function isCoreQuestion(questionId) {
  return !isDiscussionQuestion(questionId);
}

function getDiscussionKey(question) {
  if (!question?.discussion) return "";
  return `${question.discussionLecture}|${question.discussionPage}|${question.discussionTopic}`;
}

function getDiscussionTopicStats() {
  return STRICT_DISCUSSION_MAP.map((entry) => {
    const ids = entry.ids.filter((id) => getQuestionById(id));
    const answered = ids.filter((id) => state.answers[id]).length;
    const correct = ids.filter((id) => state.answers[id]?.correct).length;
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
    const status = !answered ? "unstarted" : accuracy < 60 ? "danger" : accuracy < 80 ? "warning" : "mastered";
    return { ...entry, ids, answered, correct, total: ids.length, accuracy, status };
  });
}

function getWeakDiscussionKeys() {
  return new Set(getDiscussionTopicStats()
    .filter((item) => item.answered > 0 && item.accuracy < 80)
    .map((item) => `${item.lecture}|${item.page}|${item.topic}`));
}

function modeMatches(questionId, mode = state.mode) {
  const question = getQuestionById(questionId);
  const record = state.answers[questionId];
  const weakDiscussionKeys = getWeakDiscussionKeys();
  const discussionKey = getDiscussionKey(question);
  return (
    mode === "all" ||
    mode === "mock" ||
    (mode === "wrong" && record && !record.correct) ||
    (mode === "unanswered" && !record) ||
    (mode === "discussion" && isDiscussionQuestion(questionId)) ||
    (mode === "core" && isCoreQuestion(questionId)) ||
    (mode === "mastery" && isDiscussionQuestion(questionId)) ||
    (mode === "discussionWeak" && isDiscussionQuestion(questionId) && ((record && !record.correct) || weakDiscussionKeys.has(discussionKey)))
  );
}

function questionMatchesLecture(questionId, lectureId = state.lecture) {
  return lectureId === "all" || getQuestionById(questionId)?.lecture === lectureId;
}

function getQuestionSearchText(question) {
  const discussions = getQuestionDiscussions(question.id);
  return [
    question.topic,
    question.question,
    ...(question.options || []),
    question.explanation,
    question.questionZh,
    question.answerZh,
    question.explanationZh,
    question.memory,
    question.ask,
    question.clue,
    question.choose,
    question.avoid,
    ...discussions.flatMap(({ lecture, page, title, tip }) => [lecture?.title, lecture?.summary, lecture?.examFocus, page, title, tip])
  ].filter(Boolean).join(" ").toLowerCase();
}

function searchMatches(questionId, term = state.search.trim().toLowerCase()) {
  return !term || getQuestionSearchText(getQuestionById(questionId)).includes(term);
}

function orderedIdsForCurrentMode() {
  if (state.mode === "mock" && state.mockOrder.length !== 40) state.mockOrder = buildMockExamOrder();
  return state.mode === "mock" ? state.mockOrder : state.order;
}

function idsForLecture(lectureId, { applyMode = true, applySearch = true } = {}) {
  const term = state.search.trim().toLowerCase();
  return orderedIdsForCurrentMode().filter((id) =>
    questionMatchesLecture(id, lectureId) &&
    (!applyMode || modeMatches(id)) &&
    (!applySearch || searchMatches(id, term))
  );
}

function filteredIds() {
  return idsForLecture(state.lecture, { applyMode: true, applySearch: true });
}

function currentQuestion() {
  const ids = filteredIds();
  if (!ids.length) return null;
  state.current = Math.max(0, Math.min(state.current, ids.length - 1));
  return getQuestionById(ids[state.current]);
}

function normalizeCurrent() {
  const ids = filteredIds();
  state.current = ids.length ? Math.max(0, Math.min(state.current, ids.length - 1)) : 0;
}

function getLectureProgress(lectureId) {
  const ids = idsForLecture(lectureId, { applyMode: true, applySearch: true });
  const answered = ids.filter((id) => state.answers[id]).length;
  const correct = ids.filter((id) => state.answers[id]?.correct).length;
  return { total: ids.length, answered, correct, wrong: answered - correct };
}

function getOptionOrder(questionId) {
  const orders = [
    [0, 1, 2, 3],
    [1, 3, 0, 2],
    [2, 0, 3, 1],
    [3, 2, 1, 0],
    [1, 0, 2, 3],
    [2, 3, 1, 0],
    [3, 1, 0, 2],
    [0, 2, 3, 1]
  ];
  return orders[(questionId * 7 + 3) % orders.length];
}

function getDisplayLetter(question, originalIndex) {
  const displayIndex = getOptionOrder(question.id).indexOf(originalIndex);
  return letters[displayIndex >= 0 ? displayIndex : originalIndex];
}

function cleanQuestionStem(value) {
  return String(value || "")
    .replace(/\bAccording to the historical background in Lecture\s*\d+,?\s*/gi, "")
    .replace(/\bAccording to Lecture\s*\d+,?\s*/gi, "")
    .replace(/\bIn Lecture\s*\d+,?\s*/gi, "")
    .replace(/\bin Lecture\s*\d+\b/gi, "")
    .replace(/\bintroduced in Lecture\s*\d+\b/gi, "introduced")
    .replace(/\blisted in Lecture\s*\d+\b/gi, "listed")
    .replace(/\bfrom Lecture\s*\d+\b/gi, "")
    .replace(/\bthe course slides\b/gi, "the course")
    .replace(/\bin the slides\b/gi, "")
    .replace(/\bthe slides\b/gi, "the course material")
    .replace(/\s+([?:,.])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function cleanQuestionTranslation(value) {
  return String(value || "")
    .replace(/根据\s*Lecture\s*\d+\s*[，,]?\s*/gi, "")
    .replace(/在\s*Lecture\s*\d+\s*中\s*[，,]?\s*/gi, "")
    .replace(/Lecture\s*\d+\s*中\s*[，,]?\s*/gi, "")
    .replace(/以下哪一项是\s*Lecture\s*\d+\s*中列出的/gi, "以下哪一项是")
    .replace(/课件中\s*/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function answerQuestion(questionId, selected) {
  clearAutoAdvance();
  const beforeIds = filteredIds();
  const beforeIndex = beforeIds.indexOf(questionId);
  const question = getQuestionById(questionId);
  const isCorrect = selected === question.answer;
  state.answers[questionId] = { selected, correct: isCorrect };
  saveState();
  render();
  if (!isCorrect) return;

  autoAdvanceTimer = setTimeout(() => {
    autoAdvanceTimer = null;
    const ids = filteredIds();
    const currentIndex = ids.indexOf(questionId);
    if (currentIndex >= 0 && currentIndex < ids.length - 1) state.current = currentIndex + 1;
    if (currentIndex === -1) state.current = Math.min(Math.max(beforeIndex, 0), Math.max(ids.length - 1, 0));
    saveState();
    render();
  }, 450);
}

function renderStats() {
  const ids = filteredIds();
  const records = ids.map((id) => state.answers[id]).filter(Boolean);
  const answered = records.length;
  const correct = records.filter((record) => record.correct).length;
  const wrong = answered - correct;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  els.answeredStat.textContent = `${answered}/${ids.length}`;
  els.accuracyStat.textContent = `${accuracy}%`;
  els.correctStat.textContent = String(correct);
  els.wrongStat.textContent = String(wrong);
  els.progressBar.style.width = `${ids.length ? (answered / ids.length) * 100 : 0}%`;
}

function renderModes() {
  els.allModeBtn.classList.toggle("primary", state.mode === "all");
  els.unansweredBtn.classList.toggle("primary", state.mode === "unanswered");
  els.wrongBtn.classList.toggle("primary", state.mode === "wrong");
  els.discussionBtn.classList.toggle("primary", state.mode === "discussion");
  els.coreBtn.classList.toggle("primary", state.mode === "core");
  els.mockBtn.classList.toggle("primary", state.mode === "mock");
  els.masteryBtn.classList.toggle("primary", state.mode === "mastery");
  els.weaknessBtn.classList.toggle("primary", state.mode === "discussionWeak");
}

function renderLectureFilters() {
  const buttons = [
    { id: "all", title: "全部", progress: getLectureProgress("all") },
    ...LECTURES.map((lecture) => ({ id: lecture.id, title: lecture.label, progress: getLectureProgress(lecture.id) }))
  ];
  els.lectureRow.innerHTML = buttons.map((item) => `
    <button class="btn lecture-btn ${state.lecture === item.id ? "primary" : ""}" type="button" data-lecture="${escapeHtml(item.id)}">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${item.progress.answered}/${item.progress.total} 已答</span>
    </button>
  `).join("");
}

function questionRefs(ids) {
  return ids?.length ? ids.map((id) => `Q${id}`).join("、") : "";
}

function renderLectureGuide() {
  const topicStats = getDiscussionTopicStats().filter((item) => state.lecture === "all" || item.lecture === state.lecture);
  const topicCards = topicStats.map((item) => `
    <div class="guide-card ${item.status === "unstarted" ? "" : item.status}">
      <strong>${escapeHtml(`${item.lecture} ${item.page} · ${item.topic}`)}</strong>
      <span class="guide-meta">正确：${item.correct}/${item.total}；已答：${item.answered}/${item.total}；正确率：${item.answered ? `${item.accuracy}%` : "未开始"}</span>
      <span>${escapeHtml(item.status === "danger" ? "低于 60%，优先补这一组。" : item.status === "warning" ? "低于 80%，建议进入 Weakness 模式。" : item.status === "mastered" ? "当前掌握度达标。" : "尚未作答。")}</span>
      <span class="guide-questions">覆盖题：${escapeHtml(questionRefs(item.ids))}</span>
    </div>
  `).join("");

  if (state.lecture === "all") {
    els.lectureGuide.innerHTML = `<div class="guide-title">Discussion Mastery Map</div>${topicCards}`;
    return;
  }

  const lecture = getLectureById(state.lecture);
  const progress = getLectureProgress(lecture.id);
  els.lectureGuide.innerHTML = `
    <div class="guide-title">${escapeHtml(lecture.title)} 必会 Discussion</div>
    <div class="guide-card">
      <strong>${escapeHtml(lecture.summary)}</strong>
      <span class="guide-meta">当前筛选进度：${progress.answered}/${progress.total} 已答，${progress.correct} 正确，${progress.wrong} 错题</span>
      <span class="guide-focus">${escapeHtml(lecture.examFocus)}</span>
    </div>
    ${topicCards}
  `;
}

function renderQuestionList() {
  const ids = filteredIds();
  els.questionList.innerHTML = "";
  ids.forEach((id, index) => {
    const question = getQuestionById(id);
    const record = state.answers[id];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "qdot";
    if (index === state.current) button.classList.add("current");
    if (record?.correct) button.classList.add("correct");
    if (record && !record.correct) button.classList.add("wrong");
    if (isDiscussionQuestion(id)) button.classList.add("discussion");
    const lecture = getLectureForQuestion(id);
    const discussionTitle = getQuestionDiscussions(id).map((item) => item.title).join(" / ");
    button.textContent = String(id);
    button.title = `Question ${id} · ${lecture?.title || "Lecture"} · ${question.topic}${discussionTitle ? ` · Discussion: ${discussionTitle}` : ""}`;
    button.addEventListener("click", () => {
      clearAutoAdvance();
      state.current = index;
      saveState();
      render();
    });
    els.questionList.appendChild(button);
  });
}

function renderCheatSheet() {
  els.cheatSheet.innerHTML = CHEAT_SHEET.map((item) => `
    <div class="cheat-card">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.note)}</span>
    </div>
  `).join("");
}

function renderQuestion() {
  const ids = filteredIds();
  const question = currentQuestion();
  const hasQuestion = Boolean(question);
  els.emptyState.classList.toggle("show", !hasQuestion);
  els.questionCard.style.display = hasQuestion ? "" : "none";
  if (!question) return;

  const record = state.answers[question.id];
  const lecture = getLectureForQuestion(question.id);
  const discussions = getQuestionDiscussions(question.id);
  const discussionText = discussions.length
    ? discussions.map(({ lecture: itemLecture, page, title }) => `${itemLecture?.label || ""} ${page} · ${title}`).join("；")
    : `${lecture?.label || "Lecture"} 基础定义/组件清单`;

  els.topicTag.textContent = `${lecture?.title || "Lecture"} · ${question.topic}${discussions.length ? " · Discussion" : ""}`;
  els.questionIndex.textContent = `Question ${question.id} | ${state.current + 1} of ${ids.length}`;
  els.questionText.textContent = cleanQuestionStem(question.question);
  els.memoryCard.innerHTML = record
    ? `<strong>速记</strong><span>${escapeHtml(question.memory || "先看题干关键词，再排除明显不属于该框架的选项。")}</span>`
    : `<strong>${escapeHtml(lecture?.label || "Lecture")} 作答提示</strong><span>${escapeHtml(lecture?.examFocus || "先独立判断，不显示口诀；选完后会显示题目翻译、速记和解析。")}</span>`;

  els.options.innerHTML = "";
  getOptionOrder(question.id).forEach((originalIndex, displayIndex) => {
    const option = question.options[originalIndex];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    if (record) {
      if (originalIndex === question.answer) button.classList.add("correct");
      if (originalIndex === record.selected && originalIndex !== question.answer) button.classList.add("wrong");
    }
    button.innerHTML = `<span class="letter">${letters[displayIndex]}</span><span>${escapeHtml(option)}</span>`;
    button.addEventListener("click", () => answerQuestion(question.id, originalIndex));
    els.options.appendChild(button);
  });

  if (!record) {
    els.feedback.className = "feedback placeholder";
    els.feedback.innerHTML = "<strong>解析</strong><span>答题后这里会显示题目翻译、正确答案翻译、关键词和详细解析。</span>";
    els.prevBtn.disabled = state.current === 0;
    els.nextBtn.disabled = state.current >= ids.length - 1;
    return;
  }

  const selectedLetter = getDisplayLetter(question, record.selected);
  const correctLetter = getDisplayLetter(question, question.answer);
  const human = {
    ask: question.ask || `题目问：${cleanQuestionTranslation(question.questionZh || question.question)}`,
    clue: question.clue || question.memory || "看题干关键词，再排除明显不属于该框架的选项。",
    choose: question.choose || question.explanationZh || question.explanation,
    avoid: question.avoid || "其他选项通常属于别的框架，或把概念范围说得太大/太小。"
  };
  const zhBlock = `
    <div><strong>${discussions.length ? "对应 Discussion" : "题目来源"}</strong><span>${escapeHtml(discussionText)}</span></div>
    <div><strong>速记</strong><span>${escapeHtml(question.memory || "先看题干关键词，再排除明显不属于该框架的选项。")}</span></div>
    <div><strong>题目翻译</strong><span>${escapeHtml(cleanQuestionTranslation(question.questionZh || question.question) || "暂无翻译")}</span></div>
    <div><strong>正确答案翻译</strong><span>${correctLetter}. ${escapeHtml(question.answerZh || question.options[question.answer])}</span></div>
    <div><strong>题目在问什么</strong><span>${escapeHtml(cleanQuestionTranslation(cleanQuestionStem(human.ask)))}</span></div>
    <div><strong>关键词</strong><span>${escapeHtml(human.clue)}</span></div>
    <div><strong>为什么选 ${correctLetter}</strong><span>${escapeHtml(human.choose)}</span></div>
    <div><strong>其他选项为什么不选</strong><span>${escapeHtml(human.avoid)}</span></div>
    <div><strong>English note</strong><span>${escapeHtml(question.explanation)}</span></div>
  `;
  els.feedback.className = `feedback show ${record.correct ? "correct" : "wrong"}`;
  els.feedback.innerHTML = record.correct
    ? `<strong>回答正确：${correctLetter}</strong>${zhBlock}`
    : `<strong>回答错误：你选了 ${selectedLetter}，正确答案是 ${correctLetter}</strong>${zhBlock}`;
  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.disabled = state.current >= ids.length - 1;
}

function render() {
  normalizeCurrent();
  renderStats();
  renderModes();
  renderLectureFilters();
  renderQuestionList();
  renderLectureGuide();
  renderCheatSheet();
  renderQuestion();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clearAutoAdvance() {
  if (!autoAdvanceTimer) return;
  clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = null;
}

function shuffleOrder() {
  clearAutoAdvance();
  const target = state.mode === "mock" ? state.mockOrder : state.order;
  const next = [...target];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  if (state.mode === "mock") state.mockOrder = next;
  else state.order = next;
  state.current = 0;
  saveState();
  render();
}

function shuffledIds(ids) {
  const next = [...ids];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function sampleIds(predicate, count, excluded) {
  const pool = shuffledIds(QUESTIONS.filter((question) => predicate(question) && !excluded.has(question.id)).map((question) => question.id));
  const picked = pool.slice(0, count);
  picked.forEach((id) => excluded.add(id));
  return picked;
}

function buildMockExamOrder() {
  const excluded = new Set();
  const picked = [
    ...sampleIds((question) => question.sourceType === "discussion", 16, excluded),
    ...sampleIds((question) => question.sourceType === "discussion-prerequisite", 8, excluded),
    ...sampleIds((question) => question.sourceType === "core", 12, excluded),
    ...sampleIds((question) => question.sourceType === "application", 4, excluded)
  ];
  if (picked.length < 40) picked.push(...sampleIds(() => true, 40 - picked.length, excluded));
  return shuffledIds(picked).slice(0, 40);
}

function setMode(mode) {
  clearAutoAdvance();
  state.mode = mode;
  if (mode === "mock") {
    state.lecture = "all";
    state.mockOrder = buildMockExamOrder();
  }
  state.current = 0;
  saveState();
  render();
}

function setLecture(lectureId) {
  clearAutoAdvance();
  state.lecture = lectureId;
  state.current = 0;
  saveState();
  render();
}

function bindEvents() {
  els.allModeBtn.addEventListener("click", () => setMode("all"));
  els.unansweredBtn.addEventListener("click", () => setMode("unanswered"));
  els.discussionBtn.addEventListener("click", () => setMode("discussion"));
  els.coreBtn.addEventListener("click", () => setMode("core"));
  els.mockBtn.addEventListener("click", () => setMode("mock"));
  els.masteryBtn.addEventListener("click", () => setMode("mastery"));
  els.weaknessBtn.addEventListener("click", () => setMode("discussionWeak"));
  els.wrongBtn.addEventListener("click", () => setMode("wrong"));
  els.shuffleBtn.addEventListener("click", shuffleOrder);
  els.resetBtn.addEventListener("click", () => {
    if (!confirm("确定要清空做题记录吗？")) return;
    clearAutoAdvance();
    state.answers = {};
    state.current = 0;
    state.mode = "all";
    state.lecture = "all";
    saveState();
    render();
  });
  els.searchInput.addEventListener("input", (event) => {
    clearAutoAdvance();
    state.search = event.target.value;
    state.current = 0;
    render();
  });
  els.lectureRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lecture]");
    if (!button) return;
    const lectureId = button.dataset.lecture;
    if (lectureId === "all" || getLectureById(lectureId)) setLecture(lectureId);
  });
  els.prevBtn.addEventListener("click", () => {
    clearAutoAdvance();
    state.current -= 1;
    saveState();
    render();
  });
  els.nextBtn.addEventListener("click", () => {
    clearAutoAdvance();
    state.current += 1;
    saveState();
    render();
  });
  window.addEventListener("keydown", (event) => {
    const question = currentQuestion();
    if (!question) return;
    const key = event.key.toLowerCase();
    const optionOrder = getOptionOrder(question.id);
    if (["1", "2", "3", "4"].includes(key)) answerQuestion(question.id, optionOrder[Number(key) - 1]);
    if (["a", "b", "c", "d"].includes(key)) answerQuestion(question.id, optionOrder[letters.indexOf(key.toUpperCase())]);
    if (key === "arrowleft" && !els.prevBtn.disabled) {
      clearAutoAdvance();
      state.current -= 1;
      saveState();
      render();
    }
    if (key === "arrowright" && !els.nextBtn.disabled) {
      clearAutoAdvance();
      state.current += 1;
      saveState();
      render();
    }
  });
}

function showLoadError(error) {
  els.questionCard.style.display = "none";
  els.emptyState.classList.add("show");
  els.emptyState.innerHTML = `
    <strong>题库 JSON 加载失败</strong><br>
    请通过本地服务器打开此页面，而不是直接双击 file:// 打开。<br>
    当前错误：${escapeHtml(error.message)}
  `;
}

loadQuizData()
  .then(() => {
    loadState();
    bindEvents();
    render();
  })
  .catch(showLoadError);
