function textFor(key, values = {}) {
  return window.ZakaI18n?.t(key, values) ?? key;
}

function localizedValue(value) {
  return window.ZakaI18n?.localize(value) ?? value ?? "";
}

function eventTitle(event) {
  return event.titleKey ? textFor(event.titleKey) : localizedValue(event.title);
}

function memberEventText(event) {
  return event.textKey ? textFor(event.textKey) : localizedValue(event.text);
}

function coverLabel(label) {
  return textFor(`covers.${label}`);
}

const releases = [
  {
    era: "keyaki",
    date: "2016-04-06",
    title: "サイレントマジョリティー",
    tracks: ["サイレントマジョリティー", "手を繋いで帰ろうか", "山手線", "渋谷川", "乗り遅れたバス", "キミガイナイ"],
  },
  {
    era: "keyaki",
    date: "2016-08-10",
    title: "世界には愛しかない",
    tracks: ["世界には愛しかない", "語るなら未来を...", "渋谷からPARCOが消えた日", "また会ってください", "ボブディランは返さない", "ひらがなけやき"],
  },
  {
    era: "keyaki",
    date: "2016-11-30",
    title: "二人セゾン",
    tracks: ["二人セゾン", "大人は信じてくれない", "制服と太陽", "誰よりも高く跳べ!", "僕たちの戦争", "夕陽1/3"],
  },
  {
    era: "keyaki",
    date: "2017-04-05",
    title: "不協和音",
    tracks: ["不協和音", "W-KEYAKIZAKAの詩", "微笑みが悲しい", "チューニング", "割れたスマホ", "僕たちは付き合っている", "エキセントリック"],
  },
  {
    era: "keyaki",
    date: "2017-10-25",
    title: "風に吹かれても",
    tracks: ["風に吹かれても", "それでも歩いてる", "結局、じゃあねしか言えない", "NO WAR in the future", "避雷針", "波打ち際を走らないか?", "再生する細胞"],
  },
  {
    era: "keyaki",
    date: "2018-03-07",
    title: "ガラスを割れ!",
    tracks: ["ガラスを割れ!", "もう森へ帰ろうか?", "夜明けの孤独", "イマニミテイロ", "ゼンマイ仕掛けの夢", "バスルームトラベル", "半分の記憶"],
  },
  {
    era: "keyaki",
    date: "2018-08-15",
    title: "アンビバレント",
    tracks: ["アンビバレント", "Student Dance", "I'm out", "ハッピーオーラ", "302号室", "音楽室に片想い", "日が昇るまで"],
  },
  {
    era: "keyaki",
    date: "2019-02-27",
    title: "黒い羊",
    tracks: ["黒い羊", "君に話しておきたいこと", "Nobody", "抱きしめてやる", "ヒールの高さ", "ごめんね クリスマス", "否定した未来"],
  },
  {
    era: "keyaki",
    date: "2020-08-21",
    title: "誰がその鐘を鳴らすのか?",
    format: "digital",
    tracks: ["誰がその鐘を鳴らすのか?"],
  },
  {
    era: "sakura",
    date: "2020-12-09",
    title: "Nobody's fault",
    tracks: ["Nobody's fault", "なぜ 恋をして来なかったんだろう?", "半信半疑", "Plastic regret", "最終の地下鉄に乗って", "Buddies", "ブルームーンキス"],
  },
  {
    era: "sakura",
    date: "2021-04-14",
    title: "BAN",
    tracks: ["BAN", "偶然の答え", "それが愛なのね", "君と僕と洗濯物", "Microscope", "思ったよりも寂しくない", "櫻坂の詩"],
  },
  {
    era: "sakura",
    date: "2021-10-13",
    title: "流れ弾",
    tracks: ["流れ弾", "Dead end", "ソニア", "ジャマイカビール", "On my way", "無言の宇宙", "美しきNervous"],
  },
  {
    era: "sakura",
    date: "2022-04-06",
    title: "五月雨よ",
    tracks: ["五月雨よ", "僕のジレンマ", "I'm in", "断絶", "制服の人魚", "車間距離", "恋が絶滅する日"],
  },
  {
    era: "sakura",
    date: "2023-02-15",
    title: "桜月",
    tracks: ["桜月", "Cool", "無念", "もしかしたら真実", "魂のLiar", "夏の近道", "その日まで"],
  },
  {
    era: "sakura",
    date: "2023-06-28",
    title: "Start over!",
    tracks: ["Start over!", "静寂の暴力", "風の音", "コンビナート", "Anthem time", "一瞬の馬", "ドローン旋回中"],
  },
  {
    era: "sakura",
    date: "2023-10-18",
    title: "承認欲求",
    tracks: ["承認欲求", "マモリビト", "確信的クロワッサン", "僕たちの La vie en rose", "Don't cut in line!", "マンホールの蓋の上", "隙間風よ"],
  },
  {
    era: "sakura",
    date: "2024-02-21",
    title: "何歳の頃に戻りたいのか?",
    tracks: ["何歳の頃に戻りたいのか?", "何度 LOVE SONGの歌詞を読み返しただろう", "油を注せ!", "真夏に何か起きるのかしら", "心の影絵", "恋は向いてない", "泣かせて Hold me tight!"],
  },
  {
    era: "sakura",
    date: "2024-06-26",
    title: "自業自得",
    tracks: ["自業自得", "引きこもる時間はない", "愛し合いなさい", "イザベルについて", "縁起担ぎ", "標識", "もう一曲 欲しいのかい?"],
  },
  {
    era: "sakura",
    date: "2024-10-23",
    title: "I want tomorrow to come",
    tracks: ["I want tomorrow to come", "本質的なこと", "僕は僕を好きになれない", "今さら Suddenly", "嵐の前、世界の終わり", "19歳のガレット", "TOKYO SNOW"],
  },
  {
    era: "sakura",
    date: "2025-02-19",
    title: "UDAGAWA GENERATION",
    tracks: ["UDAGAWA GENERATION", "Nightmare症候群", "Nothing special", "紋白蝶が確か飛んでた", "行かないで", "ULTRAVIOLET", "やるしかないじゃん"],
  },
  {
    era: "sakura",
    date: "2025-06-25",
    title: "Make or Break",
    tracks: ["Make or Break", "港区パセリ", "死んだふり", "恋愛無双", "真夏の大統領", "君のことを想いながら", "ノンアルコール"],
  },
  {
    era: "sakura",
    date: "2025-10-29",
    title: "Unhappy birthday構文",
    tracks: ["Unhappy birthday構文", "Alter ego", "木枯らしは泣かない", "青空が見えるまで", "I will be", "Buddies (English Version)", "夜空で一番輝いてる星の名前を僕は知らない"],
  },
  {
    era: "sakura",
    date: "2026-03-11",
    title: "The growing up train",
    tracks: ["The growing up train", "光源", "ドライフルーツ", "キスが苦い", "くらげらしく", "Sunny side up", "僕は向いてない"],
  },
  {
    era: "sakura",
    date: "2026-06-10",
    title: "Lonesome rabbit / What's “KAZOKU”?",
    tracks: ["Lonesome rabbit", "What's “KAZOKU”?", "コインランドリー", "We got your back", "狼たちよ", "各駅停車", "恵まれ過ぎて"],
    limitedCover: true,
  },
];

const releaseItems = releases.map((item, index) => ({
  ...item,
  id: `release-${index}`,
}));

const memberEvents = [
  { date: "2015-08-21", kind: "member", textKey: "memberEvents.m20150821" },
  { date: "2015-10-01", kind: "member", textKey: "memberEvents.m20151001" },
  { date: "2015-11-11", kind: "member", textKey: "memberEvents.m20151111" },
  { date: "2016-05-08", kind: "member", textKey: "memberEvents.m20160508" },
  { date: "2016-06-27", kind: "member", textKey: "memberEvents.m20160627" },
  { date: "2017-08-15", kind: "member", textKey: "memberEvents.m20170815" },
  { date: "2018-11-04", kind: "member", textKey: "memberEvents.m20181104" },
  { date: "2018-11-16", kind: "member", textKey: "memberEvents.m20181116" },
  { date: "2018-12-10", kind: "member", textKey: "memberEvents.m20181210" },
  { date: "2018-12-22", kind: "member", textKey: "memberEvents.m20181222" },
  { date: "2019-02-11", kind: "member", textKey: "memberEvents.m20190211" },
  { date: "2019-07-30", kind: "member", textKey: "memberEvents.m20190730" },
  { date: "2020-01-23", kind: "member", textKey: "memberEvents.m20200123" },
  { date: "2020-03-31", kind: "member", textKey: "memberEvents.m20200331" },
  { date: "2020-09-30", kind: "member", textKey: "memberEvents.m20200930" },
  { date: "2020-10-13", kind: "member", textKey: "memberEvents.m20201013" },
  { date: "2020-10-14", kind: "era", textKey: "memberEvents.m20201014" },
  { date: "2021-03-14", kind: "member", textKey: "memberEvents.m20210314" },
  { date: "2021-12-19", kind: "member", textKey: "memberEvents.m20211219" },
  { date: "2022-05-22", kind: "member", textKey: "memberEvents.m20220522" },
  { date: "2022-06-11", kind: "member", textKey: "memberEvents.m20220611" },
  { date: "2022-09-11", kind: "member", textKey: "memberEvents.m20220911" },
  { date: "2022-11-09", kind: "member", textKey: "memberEvents.m20221109" },
  { date: "2023-01-06", kind: "member", textKey: "memberEvents.m20230106" },
  { date: "2023-04-30", kind: "member", textKey: "memberEvents.m20230430" },
  { date: "2023-11-25", kind: "member", textKey: "memberEvents.m20231125" },
  { date: "2024-02-01", kind: "member", textKey: "memberEvents.m20240201" },
  { date: "2025-01-13", kind: "member", textKey: "memberEvents.m20250113" },
  { date: "2025-02-16", kind: "member", textKey: "memberEvents.m20250216" },
  { date: "2025-03-20", kind: "member", textKey: "memberEvents.m20250320" },
  { date: "2025-04-16", kind: "member", textKey: "memberEvents.m20250416" },
  { date: "2026-02-28", kind: "member", textKey: "memberEvents.m20260228" },
  { date: "2026-05-13", kind: "member", textKey: "memberEvents.m20260513" },
];

const memberItems = memberEvents.map((item, index) => ({
  ...item,
  id: `member-${index}`,
}));

const liveEvents = [
  { start: "2016-03-17", end: "2016-03-17", title: "デビューカウントダウンライブ" },
  { start: "2016-12-24", end: "2016-12-25", title: "初ワンマンライブ 有明コロシアム" },
  { start: "2017-04-06", end: "2017-04-06", title: "欅坂46 1st YEAR ANNIVERSARY LIVE" },
  { start: "2017-07-22", end: "2017-07-23", title: "欅共和国2017 富士急ハイランド・コニファーフォレスト" },
  { start: "2017-08-02", end: "2017-08-30", title: "全国ツアー2017 真っ白なものは汚したくなる" },
  { start: "2018-01-30", end: "2018-02-01", titleKey: "liveEvents.budokan" },
  { start: "2018-04-06", end: "2018-04-08", title: "欅坂46 2nd YEAR ANNIVERSARY LIVE" },
  { start: "2018-07-20", end: "2018-07-22", title: "欅共和国2018 富士急ハイランド・コニファーフォレスト" },
  { start: "2018-08-11", end: "2018-09-05", title: "夏の全国アリーナツアー2018" },
  { start: "2019-04-06", end: "2019-05-09", title: "欅坂46 3rd YEAR ANNIVERSARY LIVE" },
  { start: "2019-07-05", end: "2019-07-07", title: "欅共和国2019 富士急ハイランド・コニファーフォレスト" },
  { start: "2019-08-16", end: "2019-09-19", title: "欅坂46 夏の全国アリーナツアー2019" },
  { start: "2020-07-16", end: "2020-07-16", title: "KEYAKIZAKA46 Live Online, but with YOU!" },
  { start: "2020-10-12", end: "2020-10-13", title: "欅坂46 THE LAST LIVE" },
  { start: "2021-09-11", end: "2021-10-31", title: "櫻坂46 1st TOUR 2021" },
  { start: "2021-12-09", end: "2021-12-10", title: "櫻坂46 1st YEAR ANNIVERSARY LIVE" },
  { start: "2022-05-21", end: "2022-05-22", title: "櫻坂46 RISA WATANABE GRADUATION CONCERT" },
  { start: "2022-09-29", end: "2022-11-09", title: "櫻坂46 2nd TOUR 2022 As you know?" },
  { start: "2023-04-12", end: "2023-06-01", title: "櫻坂46 3rd TOUR 2023" },
  { start: "2023-11-25", end: "2023-11-26", title: "櫻坂46 3rd YEAR ANNIVERSARY LIVE" },
  { start: "2024-01-31", end: "2024-02-01", title: "櫻坂46 小林由依 卒業コンサート" },
  { start: "2024-03-02", end: "2024-06-16", title: "櫻坂46 4th ARENA TOUR 2024 新・櫻前線 -Go on back?-" },
  { start: "2024-11-23", end: "2024-11-24", title: "櫻坂46 4th YEAR ANNIVERSARY LIVE" },
  { start: "2025-04-26", end: "2025-08-24", title: "櫻坂46 5th TOUR 2025 Addiction" },
  { start: "2026-04-11", end: "2026-04-12", titleKey: "liveEvents.stadium" },
];

const liveItems = liveEvents.map((item, index) => ({
  ...item,
  id: `live-${index}`,
  date: item.start,
}));

const albums = [
  { date: "2017-07-19", title: "真っ白なものは汚したくなる" },
  { date: "2020-10-07", title: "永遠より長い一瞬 - あの頃、確かに存在した私たち -" },
  { date: "2022-08-03", title: "As you know?" },
  { date: "2025-04-30", title: "Addiction" },
];

const albumItems = albums.map((item, index) => ({
  ...item,
  id: `album-${index}`,
}));

const timeline = document.querySelector("#timeline");
const track = document.querySelector("#timelineTrack");
const yearTicks = document.querySelector("#yearTicks");
const dotLayer = document.querySelector("#dotLayer");
const liveBarLayer = document.querySelector("#liveBarLayer");
const liveLayer = document.querySelector("#liveLayer");
const releaseLayer = document.querySelector("#releaseLayer");
const songLayer = document.querySelector("#songLayer");
const memberLayer = document.querySelector("#memberLayer");
const releaseTemplate = document.querySelector("#releaseTemplate");
const songTemplate = document.querySelector("#songTemplate");
const memberTemplate = document.querySelector("#memberTemplate");
const liveTemplate = document.querySelector("#liveTemplate");
const albumTemplate = document.querySelector("#albumTemplate");
const albumCoverTemplate = document.querySelector("#albumCoverTemplate");
const liveBarTemplate = document.querySelector("#liveBarTemplate");
const dotTemplate = document.querySelector("#dotTemplate");
const coverModal = document.querySelector("#coverModal");
const coverModalImage = document.querySelector("#coverModalImage");
const coverModalClose = document.querySelector(".cover-modal-close");
const zoomRange = document.querySelector("#zoomRange");
const zoomValue = document.querySelector("#zoomValue");
const bgCurrent = document.querySelector(".page-bg-current");
const bgNext = document.querySelector(".page-bg-next");

const startDate = new Date("2015-08-01T00:00:00");
const endDate = new Date("2026-07-01T00:00:00");
const dayMs = 24 * 60 * 60 * 1000;
const basePixelsPerDay = 2.35;
const edgePadding = 260;
const backgroundFrames = Array.from(
  { length: 10 },
  (_, index) => `assets/backgrounds/horizontal/frame-${String(index).padStart(2, "0")}.png`,
);
let currentBackgroundIndex = -1;
let backgroundTransitionTimer;

function daysSinceStart(date) {
  return (new Date(`${date}T00:00:00`) - startDate) / dayMs;
}

function xForDate(date, zoom = Number(zoomRange.value)) {
  return edgePadding + daysSinceStart(date) * basePixelsPerDay * zoom;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setBackgroundFrame(progress) {
  const index = Math.min(backgroundFrames.length - 1, Math.floor(clamp(progress, 0, 0.999999) * backgroundFrames.length));
  if (index === currentBackgroundIndex) return;

  const image = `url("${backgroundFrames[index]}")`;
  if (currentBackgroundIndex === -1) {
    bgCurrent.style.backgroundImage = image;
    currentBackgroundIndex = index;
    return;
  }

  clearTimeout(backgroundTransitionTimer);
  currentBackgroundIndex = index;
  bgNext.style.transition = "none";
  bgNext.style.opacity = 0;
  bgNext.style.backgroundImage = image;

  requestAnimationFrame(() => {
    bgNext.style.transition = "opacity 260ms ease";
    bgNext.style.opacity = 1;
  });

  backgroundTransitionTimer = setTimeout(() => {
    bgCurrent.style.backgroundImage = image;
    bgNext.style.transition = "none";
    bgNext.style.opacity = 0;
    requestAnimationFrame(() => {
      bgNext.style.transition = "opacity 260ms ease";
    });
  }, 270);
}

function updateBackground() {
  const zoom = Number(zoomRange.value);
  const totalDays = (endDate - startDate) / dayMs;
  const rightEdgeDays = (timeline.scrollLeft + timeline.clientWidth - edgePadding) / (basePixelsPerDay * zoom);
  setBackgroundFrame(rightEdgeDays / totalDays);
}

function formatDate(date) {
  return date.replaceAll("-", ".");
}

function compactDate(date) {
  return date.replaceAll("-", "");
}

function loadCover(slot, src, alt) {
  const image = new Image();
  image.src = src;
  image.alt = alt;
  image.addEventListener("pointerdown", (event) => event.stopPropagation());
  image.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCoverModal(image.currentSrc || image.src, alt);
  });
  image.onload = () => {
    slot.textContent = "";
    slot.appendChild(image);
  };
}

function openCoverModal(src, alt) {
  coverModalImage.src = src;
  coverModalImage.alt = alt;
  coverModal.classList.add("is-open");
  coverModal.setAttribute("aria-hidden", "false");
}

function closeCoverModal() {
  coverModal.classList.remove("is-open");
  coverModal.setAttribute("aria-hidden", "true");
  coverModalImage.removeAttribute("src");
}

function attachLivePreview(target, event) {
  const src = `assets/covers/${compactDate(event.start)}-live.jpg`;
  target.classList.add("is-clickable");
  target.addEventListener("pointerdown", (pointerEvent) => pointerEvent.stopPropagation());
  target.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openCoverModal(src, eventTitle(event));
  });
}

function attachEraPreview(target, event) {
  const src = `assets/covers/${compactDate(event.date)}-era.jpg`;
  target.classList.add("is-clickable");
  target.addEventListener("pointerdown", (pointerEvent) => pointerEvent.stopPropagation());
  target.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openCoverModal(src, memberEventText(event));
  });
}

function attachMemberPreview(target, event) {
  const src = `assets/covers/${compactDate(event.date)}-member.jpg`;
  target.classList.add("is-clickable");
  target.addEventListener("pointerdown", (pointerEvent) => pointerEvent.stopPropagation());
  target.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openCoverModal(src, memberEventText(event));
  });
}

function createRelease(release) {
  const fragment = releaseTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".release-card");
  card.querySelector(".covers")?.setAttribute("aria-label", textFor("timeline.covers"));
  card.querySelectorAll("[data-cover-label]").forEach((slot) => {
    slot.textContent = coverLabel(slot.dataset.coverLabel);
  });
  card.dataset.eventId = release.id;
  card.dataset.era = release.era;
  card.dataset.date = release.date;
  card.style.left = `${xForDate(release.date)}px`;
  const prefix = `assets/covers/single-${compactDate(release.date)}`;
  if (release.format === "digital") {
    card.querySelectorAll(".cover-slot").forEach((slot) => slot.classList.add("empty"));
    const slot = card.querySelector(".type-c");
    slot.classList.remove("empty");
    slot.textContent = coverLabel("digital");
    loadCover(slot, `${prefix}-digital.jpg`, `${release.title} digital`);
    return card;
  }

  const coverTypes = [
    ["type-a", "type-a"],
    ["type-b", "type-b"],
    ["type-c", "type-c"],
    ["type-d", "type-d"],
    ["regular", "regular"],
    ["limited", "limited"],
  ];
  coverTypes.forEach(([className, suffix]) => {
    const slot = card.querySelector(`.${className}`);
    const releaseIndex = Number(release.id.replace("release-", ""));
    if (suffix === "type-d" && releaseIndex < 3) {
      if (slot) slot.classList.add("empty");
      return;
    }
    if (suffix === "limited" && !release.limitedCover) {
      if (slot) slot.classList.add("empty");
      return;
    }
    if (suffix === "limited" && slot) {
      slot.classList.remove("empty");
      slot.removeAttribute("aria-hidden");
      slot.textContent = coverLabel("limited");
    }
    if (slot) loadCover(slot, `${prefix}-${suffix}.jpg`, `${release.title} ${suffix}`);
  });

  return card;
}

function createSongBlock(release) {
  const fragment = songTemplate.content.cloneNode(true);
  const block = fragment.querySelector(".song-block");
  block.dataset.eventId = release.id;
  block.dataset.era = release.era;
  block.dataset.date = release.date;
  block.dataset.type = "release";
  block.style.left = `${xForDate(release.date)}px`;
  block.style.top = "370px";
  const date = block.querySelector(".event-date");
  date.dateTime = release.date;
  date.textContent = formatDate(release.date);
  block.querySelector("h2").textContent = release.title;
  block.querySelector("h2").title = release.title;

  const list = block.querySelector(".tracks");
  release.tracks.forEach((trackName) => {
    const li = document.createElement("li");
    li.textContent = trackName;
    li.title = trackName;
    list.appendChild(li);
  });

  return block;
}

function renderMemberText(container, event) {
  container.innerHTML = "";

  const text = memberEventText(event);
  const separator = text.includes("：") ? "：" : ":";
  const separatorIndex = text.indexOf(separator);
  const lead = separatorIndex >= 0 ? text.slice(0, separatorIndex) : text;
  const names = separatorIndex >= 0 ? text.slice(separatorIndex + separator.length) : "";
  if (!names) {
    container.textContent = text;
    container.title = text;
    return;
  }

  const label = document.createElement("span");
  label.textContent = `${lead}${separator}`;
  container.appendChild(label);

  const nameList = document.createElement("span");
  nameList.className = "member-names";
  names
    .replace(/[。.]$/, "")
    .split(separator === "：" ? "、" : ", ")
    .forEach((name) => {
      const item = document.createElement("span");
      item.className = "member-name";
      item.textContent = name;
      nameList.appendChild(item);
    });
  container.appendChild(nameList);
  container.title = text;
}

function createMemberEvent(event) {
  const fragment = memberTemplate.content.cloneNode(true);
  const node = fragment.querySelector(".member-event");
  node.dataset.eventId = event.id;
  node.dataset.date = event.date;
  node.dataset.type = "member";
  node.classList.toggle("is-era", event.kind === "era");
  node.style.left = `${xForDate(event.date)}px`;
  node.style.top = "370px";

  const date = node.querySelector(".event-date");
  date.dateTime = event.date;
  date.textContent = formatDate(event.date);
  renderMemberText(node.querySelector("p"), event);

  return node;
}

function createAlbumEvent(album) {
  const fragment = albumTemplate.content.cloneNode(true);
  const node = fragment.querySelector(".album-event");
  node.dataset.eventId = album.id;
  node.dataset.date = album.date;
  node.dataset.type = "album";
  node.style.left = `${xForDate(album.date)}px`;
  node.style.top = "370px";

  const date = node.querySelector(".event-date");
  date.dateTime = album.date;
  date.textContent = formatDate(album.date);
  node.querySelector("h2").textContent = album.title;
  node.querySelector("h2").title = album.title;

  return node;
}

function createAlbumCover(album) {
  const fragment = albumCoverTemplate.content.cloneNode(true);
  const node = fragment.querySelector(".album-cover-card");
  node.querySelector(".album-covers")?.setAttribute("aria-label", textFor("timeline.albumCovers"));
  node.querySelectorAll("[data-cover-label]").forEach((slot) => {
    slot.textContent = coverLabel(slot.dataset.coverLabel);
  });
  node.dataset.eventId = album.id;
  node.dataset.date = album.date;
  node.style.left = `${xForDate(album.date)}px`;
  const prefix = `assets/covers/album-${compactDate(album.date)}`;
  ["type-a", "type-b", "regular"].forEach((suffix, index) => {
    const slot = node.querySelectorAll(".cover-slot")[index];
    if (slot) loadCover(slot, `${prefix}-${suffix}.jpg`, `${album.title} ${suffix}`);
  });
  return node;
}

function createLiveEvent(event) {
  const fragment = liveTemplate.content.cloneNode(true);
  const node = fragment.querySelector(".live-event");
  const start = xForDate(event.start);
  node.dataset.eventId = event.id;
  node.dataset.date = event.start;
  node.dataset.type = "live";
  node.style.left = `${start}px`;
  node.style.top = "392px";
  const date = node.querySelector(".event-date");
  date.dateTime = event.start;
  date.textContent = event.start === event.end ? formatDate(event.start) : `${formatDate(event.start)} - ${formatDate(event.end)}`;
  node.querySelector("p").textContent = eventTitle(event);
  node.querySelector("p").title = `${formatDate(event.start)} - ${formatDate(event.end)} ${eventTitle(event)}`;

  return node;
}

function createLiveSpan(event) {
  const durationDays = daysSinceStart(event.end) - daysSinceStart(event.start) + 1;
  if (durationDays <= 3) return null;

  const fragment = liveBarTemplate.content.cloneNode(true);
  const span = fragment.querySelector(".live-span");
  const start = xForDate(event.start);
  const end = xForDate(event.end);
  const width = Math.max(14, end - start);
  span.dataset.eventId = event.id;
  span.style.left = `${start}px`;
  span.style.setProperty("--bar-width", `${width}px`);
  return span;
}

function createDot(eventId, date, kind, event = null) {
  const fragment = dotTemplate.content.cloneNode(true);
  const dot = fragment.querySelector(".event-dot");
  dot.dataset.eventId = eventId;
  dot.dataset.kind = kind;
  dot.dataset.date = date;
  dot.style.left = `${xForDate(date) - 8}px`;
  if (kind === "live" && event) attachLivePreview(dot, event);
  if (kind === "era" && event) attachEraPreview(dot, event);
  if (kind === "member" && event) attachMemberPreview(dot, event);
  return dot;
}

function staggerDots() {
  const priority = {
    live: 0,
    "keyaki-release": 1,
    "sakura-release": 1,
    album: 2,
    era: 3,
    member: 4,
  };
  const dotsByDate = [...dotLayer.querySelectorAll(".event-dot")].reduce((groups, dot) => {
    const date = dot.dataset.date;
    if (!groups.has(date)) groups.set(date, []);
    groups.get(date).push(dot);
    return groups;
  }, new Map());

  dotsByDate.forEach((dots) => {
    if (dots.length < 2) return;
    dots
      .sort((a, b) => (priority[a.dataset.kind] ?? 9) - (priority[b.dataset.kind] ?? 9))
      .forEach((dot, index) => {
        const baseLeft = xForDate(dot.dataset.date) - 8;
        dot.style.left = `${baseLeft + index * 18}px`;
      });
  });
}

function renderYearTicks() {
  yearTicks.innerHTML = "";
  for (let year = 2016; year <= 2026; year += 1) {
    const tick = document.createElement("div");
    tick.className = "year-tick";
    tick.style.left = `${xForDate(`${year}-01-01`)}px`;
    const label = document.createElement("span");
    label.textContent = year;
    tick.appendChild(label);
    yearTicks.appendChild(tick);
  }
}

function layoutInfoBlocks() {
  const bottomPriority = { release: 0, album: 1, member: 2 };
  const topBase = 282;
  const bottomBase = 366;
  const rowGap = 58;
  const topRowGap = 72;
  const collisionGap = 18;
  const placeBlocks = (blocks, baseTop, direction, initialLanes = []) => {
    const lanes = initialLanes.map((lane) => [...lane]);
    blocks.forEach((block) => {
      const left = parseFloat(block.style.left || "0");
      const width = block.offsetWidth;
      const right = left + width;
      let laneIndex = lanes.findIndex((lane) => lane.every((item) => right + collisionGap <= item.left || left >= item.right + collisionGap));
      if (laneIndex === -1) {
        laneIndex = lanes.length;
        lanes.push([]);
      }

      const gap = direction < 0 ? topRowGap : rowGap;
      block.style.top = `${baseTop + direction * laneIndex * gap}px`;
      lanes[laneIndex].push({ left, right });
    });
    return lanes.length;
  };

  const sortBlocks = (selector, priority) => [...track.querySelectorAll(selector)].sort((a, b) => {
    const dateDiff = new Date(`${a.dataset.date}T00:00:00`) - new Date(`${b.dataset.date}T00:00:00`);
    if (dateDiff !== 0) return dateDiff;
    return priority[a.dataset.type] - priority[b.dataset.type];
  });

  const topLanes = placeBlocks(sortBlocks(".live-event", { live: 0 }), topBase, -1);
  const bottomLanes = [];
  sortBlocks(".song-block", { release: 0 }).forEach((block) => {
    const left = parseFloat(block.style.left || "0");
    block.style.top = `${bottomBase}px`;
    const right = left + block.offsetWidth;
    if (!bottomLanes[0]) bottomLanes[0] = [];
    bottomLanes[0].push({ left, right });
  });
  const laneCount = placeBlocks(sortBlocks(".album-event, .member-event", bottomPriority), bottomBase, 1, bottomLanes);

  layoutReleaseCovers();

  track.style.minHeight = `${Math.max(640, bottomBase + laneCount * rowGap + 160, 390 + topLanes * topRowGap)}px`;
}

function layoutReleaseCovers() {
  const coverBlocks = [...track.querySelectorAll(".release-card, .album-cover-card")].sort(
    (a, b) => new Date(`${a.dataset.date}T00:00:00`) - new Date(`${b.dataset.date}T00:00:00`),
  );
  const lanes = [];
  const baseTop = 62;
  const laneGap = 48;
  const collisionGap = 12;

  coverBlocks.forEach((block) => {
    const left = parseFloat(block.style.left || "0");
    const width = block.classList.contains("album-cover-card") ? 200 : 136;
    const right = left + width;
    let laneIndex = lanes.findIndex((lane) => lane.every((item) => right + collisionGap <= item.left || left >= item.right + collisionGap));
    if (laneIndex === -1) {
      laneIndex = lanes.length;
      lanes.push([]);
    }
    block.style.top = `${baseTop - laneIndex * laneGap}px`;
    lanes[laneIndex].push({ left, right });
  });
}

function render() {
  dotLayer.innerHTML = "";
  liveBarLayer.innerHTML = "";
  liveLayer.innerHTML = "";
  releaseLayer.innerHTML = "";
  songLayer.innerHTML = "";
  memberLayer.innerHTML = "";
  renderYearTicks();

  liveItems.forEach((event) => {
    const span = createLiveSpan(event);
    if (span) liveBarLayer.appendChild(span);
    dotLayer.appendChild(createDot(event.id, event.start, "live", event));
    liveLayer.appendChild(createLiveEvent(event));
  });

  releaseItems.forEach((release) => {
    dotLayer.appendChild(createDot(release.id, release.date, `${release.era}-release`));
    releaseLayer.appendChild(createRelease(release));
    songLayer.appendChild(createSongBlock(release));
  });

  albumItems.forEach((album) => {
    dotLayer.appendChild(createDot(album.id, album.date, "album"));
    songLayer.appendChild(createAlbumCover(album));
    songLayer.appendChild(createAlbumEvent(album));
  });

  memberItems.forEach((event) => {
    dotLayer.appendChild(createDot(event.id, event.date, event.kind === "era" ? "era" : "member", event));
    memberLayer.appendChild(createMemberEvent(event));
  });
  staggerDots();

  layoutInfoBlocks();
}

function resizeTrack() {
  const zoom = Number(zoomRange.value);
  const width = edgePadding * 2 + ((endDate - startDate) / dayMs) * basePixelsPerDay * zoom;
  track.style.width = `${Math.max(width, timeline.clientWidth + 120)}px`;
}

function setZoom(value) {
  const previousZoom = Number(zoomRange.value);
  const nextZoom = Math.min(5, Math.max(0.15, Number(value)));
  const viewportCenterDate = (timeline.scrollLeft + timeline.clientWidth / 2 - edgePadding) / (basePixelsPerDay * previousZoom);

  zoomRange.value = nextZoom.toFixed(2);
  zoomValue.textContent = `${Math.round(nextZoom * 100)}%`;
  resizeTrack();
  render();

  timeline.scrollLeft = edgePadding + viewportCenterDate * basePixelsPerDay * nextZoom - timeline.clientWidth / 2;
  updateBackground();
}

function jumpToEra(era) {
  const date = era === "keyaki" ? "2015-08-21" : "2020-10-14";
  const targetLeft = xForDate(date);
  timeline.scrollTo({ left: Math.max(0, targetLeft - 80), behavior: "smooth" });
}

let dragStartX = 0;
let dragStartScrollLeft = 0;
let isDraggingTimeline = false;

timeline.addEventListener("pointerdown", (event) => {
  if (coverModal.classList.contains("is-open")) return;
  if (event.button !== 0) return;
  isDraggingTimeline = true;
  dragStartX = event.clientX;
  dragStartScrollLeft = timeline.scrollLeft;
  timeline.classList.add("is-dragging");
  timeline.setPointerCapture(event.pointerId);
});

timeline.addEventListener("pointermove", (event) => {
  if (!isDraggingTimeline) return;
  const distance = event.clientX - dragStartX;
  timeline.scrollLeft = dragStartScrollLeft - distance;
  updateBackground();
});

function stopTimelineDrag(event) {
  if (!isDraggingTimeline) return;
  isDraggingTimeline = false;
  timeline.classList.remove("is-dragging");
  if (timeline.hasPointerCapture(event.pointerId)) {
    timeline.releasePointerCapture(event.pointerId);
  }
}

timeline.addEventListener("pointerup", stopTimelineDrag);
timeline.addEventListener("pointercancel", stopTimelineDrag);

render();
resizeTrack();
setZoom(5);
updateBackground();

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => jumpToEra(button.dataset.jump));
});

document.querySelectorAll("[data-zoom-step]").forEach((button) => {
  button.addEventListener("click", () => {
    setZoom(Number(zoomRange.value) + Number(button.dataset.zoomStep));
  });
});

coverModal.addEventListener("click", (event) => {
  if (event.target === coverModal) closeCoverModal();
});

coverModalClose.addEventListener("click", closeCoverModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && coverModal.classList.contains("is-open")) {
    closeCoverModal();
  }
});

zoomRange.addEventListener("input", (event) => setZoom(event.target.value));

timeline.addEventListener("scroll", updateBackground, { passive: true });

timeline.addEventListener(
  "wheel",
  (event) => {
    if (coverModal.classList.contains("is-open")) return;
    event.preventDefault();
    setZoom(Number(zoomRange.value) + (event.deltaY > 0 ? -0.08 : 0.08));
  },
  { passive: false },
);

window.addEventListener("resize", () => {
  resizeTrack();
  layoutInfoBlocks();
  updateBackground();
});

window.addEventListener("zaka:languagechange", () => {
  const currentScrollLeft = timeline.scrollLeft;
  render();
  resizeTrack();
  timeline.scrollLeft = currentScrollLeft;
  updateBackground();
});
