// =============================================
// Cangjie 3 Practice App
// =============================================

// --- Cangjie Key Mapping ---
const CANGJIE_KEY_MAP = {
    a: '日', b: '月', c: '金', d: '木', e: '水', f: '火', g: '土',
    h: '竹', i: '戈', j: '十', k: '大', l: '中', m: '一', n: '弓',
    o: '人', p: '心', q: '手', r: '口', s: '尸', t: '廿', u: '山',
    v: '女', w: '田', x: '難', y: '卜', z: '重'
};

// Convert English code to Cangjie radicals display
function codeToRadicals(code) {
    return code.split('').map(c => CANGJIE_KEY_MAP[c] || c).join('');
}

// --- Radical Table Data ---
const RADICAL_GROUPS = [
    {
        name: '哲理類',
        radicals: [
            { key: 'A', char: '日', aux: '日 曰' },
            { key: 'B', char: '月', aux: '月 ⺝ 冂' },
            { key: 'C', char: '金', aux: '金 八 合 㕣' },
            { key: 'D', char: '木', aux: '木' },
            { key: 'E', char: '水', aux: '水 氵 氺' },
            { key: 'F', char: '火', aux: '火 灬 丷 ⺌' },
            { key: 'G', char: '土', aux: '土 士' }
        ]
    },
    {
        name: '筆劃類',
        radicals: [
            { key: 'H', char: '竹', aux: '竹 ⺮' },
            { key: 'I', char: '戈', aux: '戈 丶 乀' },
            { key: 'J', char: '十', aux: '十' },
            { key: 'K', char: '大', aux: '大 丆' },
            { key: 'L', char: '中', aux: '中 ⺁ 丨' },
            { key: 'M', char: '一', aux: '一 ⺈' },
            { key: 'N', char: '弓', aux: '弓 乙 亅 ⺃' }
        ]
    },
    {
        name: '人體類',
        radicals: [
            { key: 'O', char: '人', aux: '人 入 亻 𠆢' },
            { key: 'P', char: '心', aux: '心 忄 ⺗' },
            { key: 'Q', char: '手', aux: '手 扌' },
            { key: 'R', char: '口', aux: '口' }
        ]
    },
    {
        name: '字形類',
        radicals: [
            { key: 'S', char: '尸', aux: '尸' },
            { key: 'T', char: '廿', aux: '廿 艹' },
            { key: 'U', char: '山', aux: '山 屮 凵' },
            { key: 'V', char: '女', aux: '女' },
            { key: 'W', char: '田', aux: '田 囗' },
            { key: 'Y', char: '卜', aux: '卜 亠 丶' }
        ]
    },
    {
        name: '特殊',
        radicals: [
            { key: 'X', char: '難', aux: '難以分類' },
            { key: 'Z', char: '重', aux: '重複字首' }
        ]
    }
];

// --- Common Character Frequency Lists ---
// Traditional Chinese characters ordered by usage frequency
const CHAR_FREQ = '的一是不了人我在有他這中大來上個國到說們為子和你地出會也時要就可以生對自都那得後沒麼學多能她過把走找事看想什去從而最還很起第年因定法行只些所小明後其力同電回家物太前心已開面用公部問經下通市實動情天四理方由目作活門間接全文關機工又長比好日合進當意民代信被但成總現二應內無三知道十新手常與重老西利美月正場世教金體北花水兒書白入高如報化口點兩此表身者海少頭給位女加做裡果直才於東政相然許先台本立使受制向區數安將感打並親解度它軍字真式業特別再發更取及期決次讓城便話證住九夜怎戰氣處服各建完反原系統運產記八司平治品命題始資料種導每員結令集石持光計共言任條樣路風覺連象歲愛術改設色張容早思呢根清片河父精強聲注落滿段費認識男星轉半類展價科保傳望請候青史帶規管兵達車護技米整否投示幹追府究微底確深角步查約英推足聯極號考官顯包充響積待準母營團節議吃隊紀形萬息座據基具往黑站供影習超論居陳易拿獨視權衛陽速球績突織增益般演喝香夠志夫藏例銀責企即近怕嗎環境遠味討雲吸屬醫農維練圍項古畫局限雜週購估哪課擊配商印景毛單勢左危執塊寶劉毫群陸純降紅杯除離混雙洲岸施築範獲絕歐模預普圖壓版激訴唱黃移修忘編險補評村端標詞協殺願層裝階額背助序介招質船靈室義養煙適州播針判竹亂搞奇紫搜副概幕承固林佛觀負夏複雖絲閱擔審復採輪委附網湖鮮密伯楊互齊健腦庫創遺逐彩穿恐禁隨蘇席鄉繼宮腳描園穩龍黨盤餘刺春秋冬冷熱藍綠木火土山田雨雪雷霧草樹森江池塘泉溪波浪潮魚鳥蟲蛇龜鹿馬牛羊豬雞鴨鵝狗貓兔虎豹狼熊蜂蝶蟻螞蚊蠅蛙鯨鯊鱷鳳飛跑跳游泳騎坐停跪趴躺睡醒夢笑哭喊叫吹彈拉踢抱握拍拖扔丟撿拾搬送遞交付買賣租借欠存換算寫讀聽答罵講談辯釋翻譯照錄尋瀏覽載啟閉刪製貼儲列收覆分享登註冊碼帳板桌窗檔案夾程軟硬碟螢鍵滑鼠耳喇叭線插按鈕選索引頁址擎器郵件箱訊曆筆備提鬧鐘錶溫濕晴陰暴陣颱震嘯洪乾旱沙塵捲冰雹霜凍融蒸';

// --- Common Phrases ---
const PHRASES = {
    greetings: [
        '你好', '早安', '午安', '晚安', '你好嗎', '謝謝你',
        '不客氣', '對不起', '沒關係', '再見', '好久不見',
        '很高興認識你', '請問', '麻煩你', '辛苦了', '加油',
        '生日快樂', '新年快樂', '恭喜發財', '身體健康'
    ],
    food: [
        '吃飯', '喝水', '早餐', '午餐', '晚餐', '好吃',
        '白飯', '炒飯', '牛肉', '豬肉', '雞肉', '魚肉',
        '蔬菜', '水果', '麵包', '牛奶', '咖啡', '綠茶',
        '點心', '甜品', '火鍋', '燒烤', '海鮮', '便當'
    ],
    weather: [
        '天氣', '今天', '明天', '下雨', '晴天', '陰天',
        '颱風', '打雷', '出太陽', '溫度', '氣溫', '涼快',
        '炎熱', '寒冷', '潮濕', '乾燥', '多雲', '大風',
        '降溫', '回暖', '天氣預報', '紫外線'
    ],
    work: [
        '工作', '上班', '下班', '開會', '報告', '電腦',
        '辦公室', '同事', '老闆', '客戶', '項目', '計劃',
        '進度', '完成', '加班', '出差', '薪水', '升職',
        '面試', '合約', '文件', '電郵', '會議室', '截止日期'
    ],
    school: [
        '學校', '老師', '同學', '上課', '下課', '功課',
        '考試', '成績', '畢業', '大學', '中學', '小學',
        '教室', '圖書館', '操場', '數學', '英文', '中文',
        '科學', '歷史', '地理', '音樂', '體育', '美術'
    ],
    proverbs: [
        '一心一意', '三心兩意', '四面八方', '五花八門',
        '七上八下', '十全十美', '百發百中', '千方百計',
        '一馬當先', '水落石出', '半途而廢', '自食其力',
        '大公無私', '心想事成', '有口無心', '不知不覺',
        '日新月異', '出人頭地', '一目了然', '目中無人'
    ]
};

// =============================================
// State
// =============================================
let state = {
    mode: 'single',
    correct: 0,
    wrong: 0,
    startTime: null,
    timerInterval: null,
    // Single mode
    currentChars: [],
    currentCharIndex: 0,
    // Phrase mode
    currentPhrase: '',
    phraseCharIndex: 0,
    // Speed mode
    speedChars: [],
    speedCharIndex: 0,
    speedTimeLimit: 60,
    speedActive: false,
    speedTimeout: null,
    // Blind mode
    blindChars: [],
    blindCharIndex: 0,
    blindInputLength: 0,
    // Mobile detection
    isMobile: false
};

// =============================================
// Utility Functions
// =============================================

function getCharPool(difficulty) {
    const allFreq = [...new Set(CHAR_FREQ.split(''))].filter(c => CANGJIE3_DATA[c]);

    switch (difficulty) {
        case 'common500': return allFreq.slice(0, Math.min(500, allFreq.length));
        case 'common1000': return allFreq.slice(0, Math.min(1000, allFreq.length));
        case 'common2000': return allFreq;
        case 'common3000': return allFreq;
        default: return Object.keys(CANGJIE3_DATA);
    }
}

function pickRandom(arr, count) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function $(id) {
    return document.getElementById(id);
}

function resetStats() {
    state.correct = 0;
    state.wrong = 0;
    state.startTime = Date.now();
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(updateTimer, 1000);
    updateStatsDisplay();
}

function updateStatsDisplay() {
    $('stat-correct').textContent = state.correct;
    $('stat-wrong').textContent = state.wrong;
    const total = state.correct + state.wrong;
    $('stat-accuracy').textContent = total > 0
        ? Math.round(state.correct / total * 100) + '%'
        : '-';

    if (state.startTime && total > 0) {
        const minutes = (Date.now() - state.startTime) / 60000;
        if (minutes > 0.05) {
            const cpm = Math.round(state.correct / minutes);
            $('stat-speed').textContent = cpm + ' 字/分';
        }
    }
}

function updateTimer() {
    if (!state.startTime) return;
    const seconds = Math.floor((Date.now() - state.startTime) / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    $('stat-timer').textContent = m + ':' + String(s).padStart(2, '0');
}

// =============================================
// Mode Switching
// =============================================

function switchMode(mode) {
    state.mode = mode;

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Show/hide sections
    document.querySelectorAll('.mode-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === 'mode-' + mode);
    });

    // Show/hide stats bar based on mode
    $('stats-bar').style.display = mode === 'radical' ? 'none' : 'flex';

    // Stop any running timers
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    if (state.speedTimeout) {
        clearTimeout(state.speedTimeout);
        state.speedTimeout = null;
    }
    state.speedActive = false;
    $('speed-input').disabled = true;

    // Initialize mode
    switch (mode) {
        case 'single': initSingleMode(); break;
        case 'phrase': initPhraseMode(); break;
        case 'speed': initSpeedMode(); break;
        case 'blind': initBlindMode(); break;
        case 'radical': renderRadicalTable(); break;
    }
}

// =============================================
// Single Character Practice
// =============================================

function initSingleMode() {
    resetStats();
    generateNewSet();
    focusInput('cangjie-input');
}

function generateNewSet() {
    const difficulty = $('difficulty-select').value;
    const pool = getCharPool(difficulty);
    state.currentChars = pickRandom(pool, 8);
    state.currentCharIndex = 0;
    renderCharQueue();
    showCurrentChar();
    clearInput('cangjie-input');
    $('cangjie-display').textContent = '';
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    focusInput('cangjie-input');
}

function renderCharQueue() {
    const container = $('char-queue');
    container.innerHTML = '';
    state.currentChars.forEach((char, i) => {
        const el = document.createElement('div');
        el.className = 'queue-char' + (i === state.currentCharIndex ? ' active' : '');
        el.textContent = char;
        container.appendChild(el);
    });
}

function showCurrentChar() {
    if (state.currentCharIndex >= state.currentChars.length) {
        $('current-char').textContent = '✓';
        $('char-info').textContent = '本組完成！點擊「新一組」繼續';
        return;
    }
    const char = state.currentChars[state.currentCharIndex];
    $('current-char').textContent = char;
    $('current-char').classList.add('pop');
    setTimeout(() => $('current-char').classList.remove('pop'), 300);

    const codes = CANGJIE3_DATA[char];
    if (codes) {
        $('char-info').textContent = `共 ${codes.length} 個倉頡碼`;
    }
}

function handleSingleInput(e) {
    const input = $('cangjie-input');
    const value = input.value.toLowerCase().replace(/[^a-z]/g, '');
    input.value = value;

    // Show radicals as user types
    $('cangjie-display').textContent = codeToRadicals(value);

    if (e.key === 'Enter' || e.type === 'vk-enter') {
        checkSingleAnswer(value);
    }
}

function checkSingleAnswer(value) {
    if (!value || state.currentCharIndex >= state.currentChars.length) return;

    const char = state.currentChars[state.currentCharIndex];
    const codes = CANGJIE3_DATA[char];
    const feedback = $('feedback');
    const input = $('cangjie-input');
    const queueItems = $('char-queue').children;

    if (codes && codes.includes(value)) {
        // Correct
        state.correct++;
        feedback.textContent = '正確！ ' + codeToRadicals(value) + ' (' + value.toUpperCase() + ')';
        feedback.className = 'feedback correct';
        input.classList.add('correct');
        if (queueItems[state.currentCharIndex]) {
            queueItems[state.currentCharIndex].classList.remove('active');
            queueItems[state.currentCharIndex].classList.add('done');
        }
        setTimeout(() => {
            input.classList.remove('correct');
            state.currentCharIndex++;
            if (state.currentCharIndex < state.currentChars.length && queueItems[state.currentCharIndex]) {
                queueItems[state.currentCharIndex].classList.add('active');
            }
            showCurrentChar();
            clearInput('cangjie-input');
            $('cangjie-display').textContent = '';
        }, 500);
    } else {
        // Wrong
        state.wrong++;
        feedback.textContent = '錯誤！請再試';
        feedback.className = 'feedback wrong';
        input.classList.add('wrong', 'shake');
        setTimeout(() => {
            input.classList.remove('wrong', 'shake');
        }, 500);
    }
    updateStatsDisplay();
}

function showHint() {
    if (state.currentCharIndex >= state.currentChars.length) return;
    const char = state.currentChars[state.currentCharIndex];
    const codes = CANGJIE3_DATA[char];
    if (codes && codes.length > 0) {
        const firstChar = codes[0][0];
        $('cangjie-display').textContent = CANGJIE_KEY_MAP[firstChar] + ' ...';
        $('char-info').textContent = `首碼：${firstChar.toUpperCase()} (${CANGJIE_KEY_MAP[firstChar]})，共 ${codes[0].length} 碼`;
    }
}

function showAnswer() {
    if (state.currentCharIndex >= state.currentChars.length) return;
    const char = state.currentChars[state.currentCharIndex];
    const codes = CANGJIE3_DATA[char];
    if (codes) {
        const display = codes.map(c => codeToRadicals(c) + ' (' + c.toUpperCase() + ')').join(' / ');
        $('feedback').textContent = '答案：' + display;
        $('feedback').className = 'feedback';
        $('char-info').textContent = '';
    }
}

function skipChar() {
    const queueItems = $('char-queue').children;
    if (state.currentCharIndex < state.currentChars.length && queueItems[state.currentCharIndex]) {
        queueItems[state.currentCharIndex].classList.remove('active');
        queueItems[state.currentCharIndex].classList.add('failed');
    }
    state.wrong++;
    state.currentCharIndex++;
    if (state.currentCharIndex < state.currentChars.length && queueItems[state.currentCharIndex]) {
        queueItems[state.currentCharIndex].classList.add('active');
    }
    showCurrentChar();
    clearInput('cangjie-input');
    $('cangjie-display').textContent = '';
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    updateStatsDisplay();
}

// =============================================
// Phrase Practice
// =============================================

function initPhraseMode() {
    resetStats();
    loadNewPhrase();
}

function loadNewPhrase() {
    const category = $('phrase-category').value;
    const phrases = PHRASES[category];
    state.currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    state.phraseCharIndex = 0;
    renderPhraseDisplay();
    clearInput('phrase-input');
    $('phrase-cangjie-display').textContent = '';
    $('phrase-feedback').textContent = '';
    $('phrase-feedback').className = 'feedback';
    focusInput('phrase-input');
}

function renderPhraseDisplay() {
    const container = $('phrase-display');
    container.innerHTML = '';
    for (let i = 0; i < state.currentPhrase.length; i++) {
        const span = document.createElement('span');
        span.className = 'phrase-char';
        if (i === state.phraseCharIndex) span.classList.add('active');
        if (i < state.phraseCharIndex) span.classList.add('done');
        span.textContent = state.currentPhrase[i];
        container.appendChild(span);
    }

    // Show current char info
    if (state.phraseCharIndex < state.currentPhrase.length) {
        const char = state.currentPhrase[state.phraseCharIndex];
        const codes = CANGJIE3_DATA[char];
        $('phrase-chars').textContent = codes
            ? `目前：${char}（共 ${codes.length} 個倉頡碼）`
            : `目前：${char}（無倉頡碼）`;
    } else {
        $('phrase-chars').textContent = '完成！';
    }
}

function handlePhraseInput(e) {
    const input = $('phrase-input');
    const value = input.value.toLowerCase().replace(/[^a-z]/g, '');
    input.value = value;

    $('phrase-cangjie-display').textContent = codeToRadicals(value);

    if (e.key === 'Enter' || e.type === 'vk-enter') {
        checkPhraseAnswer(value);
    }
}

function checkPhraseAnswer(value) {
    if (!value || state.phraseCharIndex >= state.currentPhrase.length) return;

    const char = state.currentPhrase[state.phraseCharIndex];
    const codes = CANGJIE3_DATA[char];
    const feedback = $('phrase-feedback');
    const input = $('phrase-input');

    if (codes && codes.includes(value)) {
        state.correct++;
        state.phraseCharIndex++;
        feedback.textContent = '正確！ ' + char + ' = ' + codeToRadicals(value);
        feedback.className = 'feedback correct';
        renderPhraseDisplay();
        clearInput('phrase-input');
        $('phrase-cangjie-display').textContent = '';

        if (state.phraseCharIndex >= state.currentPhrase.length) {
            feedback.textContent = '完成！「' + state.currentPhrase + '」';
            setTimeout(() => loadNewPhrase(), 1500);
        }
    } else if (!codes) {
        // Character not in dictionary, skip it
        state.phraseCharIndex++;
        renderPhraseDisplay();
        clearInput('phrase-input');
        $('phrase-cangjie-display').textContent = '';
    } else {
        state.wrong++;
        feedback.textContent = '錯誤！請再試';
        feedback.className = 'feedback wrong';
        input.classList.add('wrong', 'shake');
        setTimeout(() => input.classList.remove('wrong', 'shake'), 500);
    }
    updateStatsDisplay();
}

// =============================================
// Speed Test
// =============================================

function initSpeedMode() {
    $('speed-text').innerHTML = '<p style="color:var(--text-secondary)">選擇時間和難度，然後按「開始測試」</p>';
    $('speed-results').innerHTML = '';
    $('speed-input').disabled = true;
    $('speed-input').value = '';
    $('speed-cangjie-display').textContent = '';
}

function startSpeedTest() {
    const difficulty = $('speed-difficulty').value;
    const timeLimit = parseInt($('speed-time').value);
    const pool = getCharPool(difficulty);

    state.speedChars = pickRandom(pool, 50);
    state.speedCharIndex = 0;
    state.speedTimeLimit = timeLimit;
    state.speedActive = true;

    resetStats();
    renderSpeedText();
    $('speed-results').innerHTML = '';
    $('speed-input').disabled = false;
    clearInput('speed-input');
    $('speed-cangjie-display').textContent = '';
    focusInput('speed-input');

    // Set timeout for end
    state.speedTimeout = setTimeout(() => endSpeedTest(), timeLimit * 1000);
}

function renderSpeedText() {
    const container = $('speed-text');
    container.innerHTML = '';
    const displayCount = Math.min(state.speedChars.length, state.speedCharIndex + 20);
    for (let i = state.speedCharIndex; i < displayCount; i++) {
        const span = document.createElement('span');
        span.className = 'speed-char';
        if (i === state.speedCharIndex) span.classList.add('active');
        if (i < state.speedCharIndex) span.classList.add('done');
        span.textContent = state.speedChars[i];
        container.appendChild(span);
    }
}

function handleSpeedInput(e) {
    if (!state.speedActive) return;
    const input = $('speed-input');
    const value = input.value.toLowerCase().replace(/[^a-z]/g, '');
    input.value = value;

    $('speed-cangjie-display').textContent = codeToRadicals(value);

    if (e.key === 'Enter' || e.type === 'vk-enter') {
        checkSpeedAnswer(value);
    }
}

function checkSpeedAnswer(value) {
    if (!value || !state.speedActive) return;

    const char = state.speedChars[state.speedCharIndex];
    const codes = CANGJIE3_DATA[char];
    const input = $('speed-input');

    if (codes && codes.includes(value)) {
        state.correct++;
        state.speedCharIndex++;
        input.classList.add('correct');
        setTimeout(() => input.classList.remove('correct'), 200);

        if (state.speedCharIndex >= state.speedChars.length) {
            // Add more chars
            const pool = getCharPool($('speed-difficulty').value);
            state.speedChars = state.speedChars.concat(pickRandom(pool, 30));
        }
        renderSpeedText();
    } else {
        state.wrong++;
        input.classList.add('wrong', 'shake');
        setTimeout(() => input.classList.remove('wrong', 'shake'), 300);
    }

    clearInput('speed-input');
    $('speed-cangjie-display').textContent = '';
    updateStatsDisplay();
}

function endSpeedTest() {
    state.speedActive = false;
    $('speed-input').disabled = true;
    if (state.timerInterval) clearInterval(state.timerInterval);

    const minutes = state.speedTimeLimit / 60;
    const cpm = Math.round(state.correct / minutes);
    const total = state.correct + state.wrong;
    const accuracy = total > 0 ? Math.round(state.correct / total * 100) : 0;

    $('speed-results').innerHTML = `
        <p>測試結束！</p>
        <p class="result-highlight">${cpm} 字/分鐘</p>
        <p>正確：${state.correct} 字 ｜ 錯誤：${state.wrong} 次</p>
        <p>準確率：${accuracy}%</p>
    `;
}

// =============================================
// Blind Typing
// =============================================

function initBlindMode() {
    resetStats();
    generateBlindChars();
}

function generateBlindChars() {
    const difficulty = $('blind-difficulty').value;
    const pool = getCharPool(difficulty);
    state.blindChars = pickRandom(pool, 10);
    state.blindCharIndex = 0;
    state.blindInputLength = 0;
    showBlindChar();
    $('blind-feedback').textContent = '';
    $('blind-feedback').className = 'feedback';
    updateBlindDots();
    focusBlindInput();
}

function showBlindChar() {
    if (state.blindCharIndex >= state.blindChars.length) {
        $('blind-char').textContent = '✓';
        $('blind-feedback').textContent = '本組完成！';
        $('blind-feedback').className = 'feedback correct';
        return;
    }
    const char = state.blindChars[state.blindCharIndex];
    $('blind-char').textContent = char;
    $('blind-char').classList.add('pop');
    setTimeout(() => $('blind-char').classList.remove('pop'), 300);
}

function updateBlindDots() {
    const container = $('blind-dots');
    container.innerHTML = '';
    for (let i = 0; i < state.blindInputLength; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        container.appendChild(dot);
    }
}

function focusBlindInput() {
    const input = $('blind-input');
    input.value = '';
    input.style.position = 'absolute';
    input.style.opacity = '0';
    input.style.pointerEvents = 'auto';
    input.focus();
}

function handleBlindInput(e) {
    const input = $('blind-input');
    const value = input.value.toLowerCase().replace(/[^a-z]/g, '');
    input.value = value;
    state.blindInputLength = value.length;
    updateBlindDots();

    if (e.key === 'Enter' || e.type === 'vk-enter') {
        checkBlindAnswer(value);
    }
}

function checkBlindAnswer(value) {
    if (!value || state.blindCharIndex >= state.blindChars.length) return;

    const char = state.blindChars[state.blindCharIndex];
    const codes = CANGJIE3_DATA[char];
    const feedback = $('blind-feedback');

    if (codes && codes.includes(value)) {
        state.correct++;
        feedback.textContent = '正確！ ' + char + ' = ' + codeToRadicals(value) + ' (' + value.toUpperCase() + ')';
        feedback.className = 'feedback correct';
        state.blindCharIndex++;
        state.blindInputLength = 0;
        setTimeout(() => {
            showBlindChar();
            updateBlindDots();
            focusBlindInput();
        }, 500);
    } else {
        state.wrong++;
        const correctDisplay = codes ? codes.map(c => codeToRadicals(c) + '(' + c.toUpperCase() + ')').join('/') : '?';
        feedback.textContent = '錯誤！答案：' + correctDisplay;
        feedback.className = 'feedback wrong';
        state.blindInputLength = 0;
        $('blind-input').value = '';
        updateBlindDots();
    }
    updateStatsDisplay();
}

// =============================================
// Radical Table
// =============================================

function renderRadicalTable() {
    const container = $('radical-table');
    if (container.children.length > 0) return; // already rendered

    RADICAL_GROUPS.forEach(group => {
        const groupEl = document.createElement('div');
        groupEl.className = 'radical-group';

        const title = document.createElement('div');
        title.className = 'radical-group-title';
        title.textContent = group.name;
        groupEl.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'radical-grid';

        group.radicals.forEach(r => {
            const cell = document.createElement('div');
            cell.className = 'radical-cell';
            cell.innerHTML = `
                <div class="radical-key">${r.key}</div>
                <div class="radical-char">${r.char}</div>
                <div class="radical-aux">${r.aux}</div>
            `;
            grid.appendChild(cell);
        });

        groupEl.appendChild(grid);
        container.appendChild(groupEl);
    });

    // Render keyboard map
    renderKeyboardMap();
}

function renderKeyboardMap() {
    const container = $('keyboard-map');
    if (container.children.length > 0) return;

    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    rows.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'kb-row';
        row.forEach(key => {
            const keyEl = document.createElement('div');
            keyEl.className = 'kb-key';
            keyEl.innerHTML = `<span class="kb-eng">${key}</span><span class="kb-cj">${CANGJIE_KEY_MAP[key.toLowerCase()] || ''}</span>`;
            rowEl.appendChild(keyEl);
        });
        container.appendChild(rowEl);
    });
}

// =============================================
// Virtual Keyboard
// =============================================

function initVirtualKeyboard() {
    // Detect mobile
    state.isMobile = window.innerWidth <= 640 || 'ontouchstart' in window;

    const vk = $('virtual-keyboard');
    if (state.isMobile) {
        vk.classList.add('show');
    }

    // Handle virtual key presses
    vk.addEventListener('click', (e) => {
        const keyBtn = e.target.closest('.vk-key');
        if (!keyBtn) return;

        const key = keyBtn.dataset.key;
        handleVirtualKey(key);
    });

    // Prevent virtual keyboard from stealing focus
    vk.addEventListener('touchstart', (e) => {
        e.preventDefault();
    });

    // Re-check on resize
    window.addEventListener('resize', () => {
        state.isMobile = window.innerWidth <= 640;
        vk.classList.toggle('show', state.isMobile);
    });
}

function getActiveInput() {
    switch (state.mode) {
        case 'single': return $('cangjie-input');
        case 'phrase': return $('phrase-input');
        case 'speed': return $('speed-input');
        case 'blind': return $('blind-input');
        default: return null;
    }
}

function handleVirtualKey(key) {
    const input = getActiveInput();
    if (!input) return;

    if (key === 'backspace') {
        input.value = input.value.slice(0, -1);
        // Trigger input display update
        const event = new Event('input');
        input.dispatchEvent(event);
        // Update displays
        updateDisplayForMode(input.value);
    } else if (key === 'enter') {
        const event = { key: 'Enter', type: 'vk-enter' };
        switch (state.mode) {
            case 'single': handleSingleInput(event); break;
            case 'phrase': handlePhraseInput(event); break;
            case 'speed': handleSpeedInput(event); break;
            case 'blind': handleBlindInput(event); break;
        }
    } else if (key === 'space') {
        // Space could act as enter in some modes
        const event = { key: 'Enter', type: 'vk-enter' };
        switch (state.mode) {
            case 'single': handleSingleInput(event); break;
            case 'phrase': handlePhraseInput(event); break;
            case 'speed': handleSpeedInput(event); break;
            case 'blind': handleBlindInput(event); break;
        }
    } else if (/^[a-z]$/.test(key)) {
        input.value += key;
        updateDisplayForMode(input.value);
    }

    // Keep focus on input
    input.focus();
}

function updateDisplayForMode(value) {
    const cleanValue = value.toLowerCase().replace(/[^a-z]/g, '');
    switch (state.mode) {
        case 'single':
            $('cangjie-display').textContent = codeToRadicals(cleanValue);
            break;
        case 'phrase':
            $('phrase-cangjie-display').textContent = codeToRadicals(cleanValue);
            break;
        case 'speed':
            $('speed-cangjie-display').textContent = codeToRadicals(cleanValue);
            break;
        case 'blind':
            state.blindInputLength = cleanValue.length;
            updateBlindDots();
            break;
    }
}

// =============================================
// Input Helpers
// =============================================

function clearInput(id) {
    const input = $(id);
    input.value = '';
}

function focusInput(id) {
    setTimeout(() => {
        const input = $(id);
        if (input && !input.disabled) {
            input.focus();
            // On mobile, prevent native keyboard
            if (state.isMobile) {
                input.setAttribute('readonly', 'readonly');
                setTimeout(() => input.removeAttribute('readonly'), 50);
            }
        }
    }, 100);
}

// =============================================
// Event Listeners
// =============================================

function init() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    // Single mode
    $('cangjie-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSingleInput(e);
    });
    $('cangjie-input').addEventListener('input', (e) => handleSingleInput(e));
    $('btn-new-set').addEventListener('click', generateNewSet);
    $('btn-hint').addEventListener('click', showHint);
    $('btn-answer').addEventListener('click', showAnswer);
    $('btn-skip').addEventListener('click', skipChar);
    $('difficulty-select').addEventListener('change', generateNewSet);

    // Phrase mode
    $('phrase-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handlePhraseInput(e);
    });
    $('phrase-input').addEventListener('input', (e) => handlePhraseInput(e));
    $('btn-new-phrase').addEventListener('click', loadNewPhrase);
    $('phrase-category').addEventListener('change', loadNewPhrase);

    // Speed mode
    $('speed-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSpeedInput(e);
    });
    $('speed-input').addEventListener('input', (e) => handleSpeedInput(e));
    $('btn-start-speed').addEventListener('click', startSpeedTest);

    // Blind mode
    $('blind-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleBlindInput(e);
    });
    $('blind-input').addEventListener('input', (e) => handleBlindInput(e));
    $('btn-new-blind').addEventListener('click', generateBlindChars);

    // Click on blind input area to focus
    $('blind-input-display').addEventListener('click', focusBlindInput);

    // Virtual keyboard
    initVirtualKeyboard();

    // Keyboard shortcut for desktop
    document.addEventListener('keydown', (e) => {
        // Tab to switch modes
        if (e.key === 'Tab' && !e.ctrlKey && !e.metaKey) {
            // Don't override default tab in inputs
        }
    });

    // Start with single mode
    switchMode('single');
}

// Start app
document.addEventListener('DOMContentLoaded', init);
