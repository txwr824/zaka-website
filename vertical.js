function textFor(key, values = {}) {
  return window.ZakaI18n?.t(key, values) ?? key;
}

function localizedValue(value) {
  return window.ZakaI18n?.localize(value) ?? value ?? "";
}

function eventTitle(event) {
  return event.titleKey ? textFor(event.titleKey) : localizedValue(event.title);
}

function coverLabel(label) {
  return textFor(`covers.${label}`);
}

const releases = [
  ["keyaki", "2016-04-06", "サイレントマジョリティー", ["サイレントマジョリティー", "手を繋いで帰ろうか", "山手線", "渋谷川", "乗り遅れたバス", "キミガイナイ"]],
  ["keyaki", "2016-08-10", "世界には愛しかない", ["世界には愛しかない", "語るなら未来を...", "渋谷からPARCOが消えた日", "また会ってください", "ボブディランは返さない", "ひらがなけやき"]],
  ["keyaki", "2016-11-30", "二人セゾン", ["二人セゾン", "大人は信じてくれない", "制服と太陽", "誰よりも高く跳べ!", "僕たちの戦争", "夕陽1/3"]],
  ["keyaki", "2017-04-05", "不協和音", ["不協和音", "W-KEYAKIZAKAの詩", "微笑みが悲しい", "チューニング", "割れたスマホ", "僕たちは付き合っている", "エキセントリック"]],
  ["keyaki", "2017-10-25", "風に吹かれても", ["風に吹かれても", "それでも歩いてる", "結局、じゃあねしか言えない", "NO WAR in the future", "避雷針", "波打ち際を走らないか?", "再生する細胞"]],
  ["keyaki", "2018-03-07", "ガラスを割れ!", ["ガラスを割れ!", "もう森へ帰ろうか?", "夜明けの孤独", "イマニミテイロ", "ゼンマイ仕掛けの夢", "バスルームトラベル", "半分の記憶"]],
  ["keyaki", "2018-08-15", "アンビバレント", ["アンビバレント", "Student Dance", "I'm out", "ハッピーオーラ", "302号室", "音楽室に片想い", "日が昇るまで"]],
  ["keyaki", "2019-02-27", "黒い羊", ["黒い羊", "君に話しておきたいこと", "Nobody", "抱きしめてやる", "ヒールの高さ", "ごめんね クリスマス", "否定した未来"]],
  ["keyaki", "2020-08-21", "誰がその鐘を鳴らすのか?", ["誰がその鐘を鳴らすのか?"], "digital"],
  ["sakura", "2020-12-09", "Nobody's fault", ["Nobody's fault", "なぜ 恋をして来なかったんだろう?", "半信半疑", "Plastic regret", "最終の地下鉄に乗って", "Buddies", "ブルームーンキス"]],
  ["sakura", "2021-04-14", "BAN", ["BAN", "偶然の答え", "それが愛なのね", "君と僕と洗濯物", "Microscope", "思ったよりも寂しくない", "櫻坂の詩"]],
  ["sakura", "2021-10-13", "流れ弾", ["流れ弾", "Dead end", "ソニア", "ジャマイカビール", "On my way", "無言の宇宙", "美しきNervous"]],
  ["sakura", "2022-04-06", "五月雨よ", ["五月雨よ", "僕のジレンマ", "I'm in", "断絶", "制服の人魚", "車間距離", "恋が絶滅する日"]],
  ["sakura", "2023-02-15", "桜月", ["桜月", "Cool", "無念", "もしかしたら真実", "魂のLiar", "夏の近道", "その日まで"]],
  ["sakura", "2023-06-28", "Start over!", ["Start over!", "静寂の暴力", "風の音", "コンビナート", "Anthem time", "一瞬の馬", "ドローン旋回中"]],
  ["sakura", "2023-10-18", "承認欲求", ["承認欲求", "マモリビト", "確信的クロワッサン", "僕たちの La vie en rose", "Don't cut in line!", "マンホールの蓋の上", "隙間風よ"]],
  ["sakura", "2024-02-21", "何歳の頃に戻りたいのか?", ["何歳の頃に戻りたいのか?", "何度 LOVE SONGの歌詞を読み返しただろう", "油を注せ!", "真夏に何か起きるのかしら", "心の影絵", "恋は向いてない", "泣かせて Hold me tight!"]],
  ["sakura", "2024-06-26", "自業自得", ["自業自得", "引きこもる時間はない", "愛し合いなさい", "イザベルについて", "縁起担ぎ", "標識", "もう一曲 欲しいのかい?"]],
  ["sakura", "2024-10-23", "I want tomorrow to come", ["I want tomorrow to come", "本質的なこと", "僕は僕を好きになれない", "今さら Suddenly", "嵐の前、世界の終わり", "19歳のガレット", "TOKYO SNOW"]],
  ["sakura", "2025-02-19", "UDAGAWA GENERATION", ["UDAGAWA GENERATION", "Nightmare症候群", "Nothing special", "紋白蝶が確か飛んでた", "行かないで", "ULTRAVIOLET", "やるしかないじゃん"]],
  ["sakura", "2025-06-25", "Make or Break", ["Make or Break", "港区パセリ", "死んだふり", "恋愛無双", "真夏の大統領", "君のことを想いながら", "ノンアルコール"]],
  ["sakura", "2025-10-29", "Unhappy birthday構文", ["Unhappy birthday構文", "Alter ego", "木枯らしは泣かない", "青空が見えるまで", "I will be", "Buddies (English Version)", "夜空で一番輝いてる星の名前を僕は知らない"]],
  ["sakura", "2026-03-11", "The growing up train", ["The growing up train", "光源", "ドライフルーツ", "キスが苦い", "くらげらしく", "Sunny side up", "僕は向いてない"]],
  ["sakura", "2026-06-10", "Lonesome rabbit / What's “KAZOKU”?", ["Lonesome rabbit", "What's “KAZOKU”?", "コインランドリー", "We got your back", "狼たちよ", "各駅停車", "恵まれ過ぎて"], undefined, true],
].map(([era, date, title, tracks, format, limitedCover], index) => ({ type: "release", era, date, title, tracks, format, limitedCover, id: `release-${index}` }));

const albums = [
  ["2017-07-19", "真っ白なものは汚したくなる"],
  ["2020-10-07", "永遠より長い一瞬 - あの頃、確かに存在した私たち -"],
  ["2022-08-03", "As you know?"],
  ["2025-04-30", "Addiction"],
].map(([date, title], index) => ({ type: "album", date, title, id: `album-${index}` }));

const liveEvents = [
  ["2016-03-17", "2016-03-17", "デビューカウントダウンライブ"],
  ["2016-12-24", "2016-12-25", "初ワンマンライブ 有明コロシアム"],
  ["2017-04-06", "2017-04-06", "欅坂46 1st YEAR ANNIVERSARY LIVE"],
  ["2017-07-22", "2017-07-23", "欅共和国2017"],
  ["2017-08-02", "2017-08-30", "全国ツアー2017 真っ白なものは汚したくなる"],
  ["2018-01-30", "2018-02-01", "liveEvents.budokan"],
  ["2018-04-06", "2018-04-08", "欅坂46 2nd YEAR ANNIVERSARY LIVE"],
  ["2018-07-20", "2018-07-22", "欅共和国2018 富士急ハイランド・コニファーフォレスト"],
  ["2018-08-11", "2018-09-05", "夏の全国アリーナツアー2018"],
  ["2019-04-06", "2019-05-09", "欅坂46 3rd YEAR ANNIVERSARY LIVE"],
  ["2019-07-05", "2019-07-07", "欅共和国2019 富士急ハイランド・コニファーフォレスト"],
  ["2019-08-16", "2019-09-19", "欅坂46 夏の全国アリーナツアー2019"],
  ["2020-07-16", "2020-07-16", "KEYAKIZAKA46 Live Online, but with YOU!"],
  ["2020-10-12", "2020-10-13", "欅坂46 THE LAST LIVE"],
  ["2021-09-11", "2021-10-31", "櫻坂46 1st TOUR 2021"],
  ["2021-12-09", "2021-12-10", "櫻坂46 1st YEAR ANNIVERSARY LIVE"],
  ["2022-05-21", "2022-05-22", "櫻坂46 RISA WATANABE GRADUATION CONCERT"],
  ["2022-09-29", "2022-11-09", "櫻坂46 2nd TOUR 2022 As you know?"],
  ["2023-04-12", "2023-06-01", "櫻坂46 3rd TOUR 2023"],
  ["2023-11-25", "2023-11-26", "櫻坂46 3rd YEAR ANNIVERSARY LIVE"],
  ["2024-01-31", "2024-02-01", "櫻坂46 小林由依 卒業コンサート"],
  ["2024-03-02", "2024-06-16", "櫻坂46 4th ARENA TOUR 2024"],
  ["2024-11-23", "2024-11-24", "櫻坂46 4th YEAR ANNIVERSARY LIVE"],
  ["2025-04-26", "2025-08-24", "櫻坂46 5th TOUR 2025 Addiction"],
  ["2026-04-11", "2026-04-12", "liveEvents.stadium"],
].map(([date, end, title, titleKey], index) => ({
  type: "live",
  date,
  end,
  ...(title?.startsWith("liveEvents.") ? { titleKey: title } : { title }),
  ...(titleKey ? { titleKey } : {}),
  id: `live-${index}`,
}));

const memberEvents = [
  ["2015-08-21", "memberEvents.m20150821"],
  ["2015-10-01", "memberEvents.m20151001"],
  ["2015-11-11", "memberEvents.m20151111"],
  ["2016-05-08", "memberEvents.m20160508"],
  ["2016-06-27", "memberEvents.m20160627"],
  ["2017-08-15", "memberEvents.m20170815"],
  ["2018-11-04", "memberEvents.m20181104"],
  ["2018-11-16", "memberEvents.m20181116"],
  ["2018-12-10", "memberEvents.m20181210"],
  ["2018-12-22", "memberEvents.m20181222"],
  ["2019-02-11", "memberEvents.m20190211"],
  ["2019-07-30", "memberEvents.m20190730"],
  ["2020-01-23", "memberEvents.m20200123"],
  ["2020-03-31", "memberEvents.m20200331"],
  ["2020-09-30", "memberEvents.m20200930"],
  ["2020-10-13", "memberEvents.m20201013"],
  ["2020-10-14", "memberEvents.m20201014", "era"],
  ["2021-03-14", "memberEvents.m20210314"],
  ["2021-12-19", "memberEvents.m20211219"],
  ["2022-05-22", "memberEvents.m20220522"],
  ["2022-06-11", "memberEvents.m20220611"],
  ["2022-09-11", "memberEvents.m20220911"],
  ["2022-11-09", "memberEvents.m20221109"],
  ["2023-01-06", "memberEvents.m20230106"],
  ["2023-04-30", "memberEvents.m20230430"],
  ["2023-11-25", "memberEvents.m20231125"],
  ["2024-02-01", "memberEvents.m20240201"],
  ["2025-01-13", "memberEvents.m20250113"],
  ["2025-02-16", "memberEvents.m20250216"],
  ["2025-03-20", "memberEvents.m20250320"],
  ["2025-04-16", "memberEvents.m20250416"],
  ["2026-02-28", "memberEvents.m20260228"],
  ["2026-05-13", "memberEvents.m20260513"],
].map(([date, titleKey, kind = "member"], index) => ({ type: "member", date, titleKey, kind, id: `member-${index}` }));

const timeline = document.querySelector("#verticalTimeline");
const template = document.querySelector("#eventTemplate");
const modal = document.querySelector("#coverModal");
const modalImage = document.querySelector("#coverModalImage");
const modalClose = document.querySelector(".cover-modal-close");
const bgCurrent = document.querySelector(".page-bg-current");
const bgNext = document.querySelector(".page-bg-next");

const startDate = new Date("2015-08-01T00:00:00");
const endDate = new Date("2026-07-01T00:00:00");
const dayMs = 24 * 60 * 60 * 1000;
const pixelsPerDay = 2.7;
const edgePadding = 140;
const backgroundFrames = Array.from(
  { length: 10 },
  (_, index) => `assets/backgrounds/vertical/frame-${String(index).padStart(2, "0")}.png`,
);
let currentBackgroundIndex = -1;
let backgroundTransitionTimer;

function compactDate(date) {
  return date.replaceAll("-", "");
}

function formatDate(date) {
  return date.replaceAll("-", ".");
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
  const totalDays = (endDate - startDate) / dayMs;
  const viewportTopY = window.scrollY + 92;
  const elapsedDays = totalDays - (viewportTopY - edgePadding) / pixelsPerDay;
  setBackgroundFrame(elapsedDays / totalDays);
}

function yForDate(date) {
  const totalDays = (endDate - startDate) / dayMs;
  const days = (new Date(`${date}T00:00:00`) - startDate) / dayMs;
  return edgePadding + (totalDays - days) * pixelsPerDay;
}

function scrollToDate(date) {
  const target = yForDate(date) - window.innerHeight / 2;
  window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
}

function openModal(src, alt) {
  modalImage.src = src;
  modalImage.alt = alt;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function loadCover(slot, src, alt) {
  const image = new Image();
  image.src = src;
  image.alt = alt;
  image.addEventListener("click", () => openModal(image.currentSrc || image.src, alt));
  image.onload = () => {
    slot.textContent = "";
    slot.appendChild(image);
  };
}

function attachLivePreview(dot, event) {
  const src = `assets/covers/${compactDate(event.date)}-live.jpg`;
  dot.classList.add("is-clickable");
  dot.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openModal(src, eventTitle(event));
  });
}

function attachEraPreview(dot, event) {
  const src = `assets/covers/${compactDate(event.date)}-era.jpg`;
  dot.classList.add("is-clickable");
  dot.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openModal(src, eventTitle(event));
  });
}

function attachMemberPreview(dot, event) {
  const src = `assets/covers/${compactDate(event.date)}-member.jpg`;
  dot.classList.add("is-clickable");
  dot.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    openModal(src, eventTitle(event));
  });
}

function ensureCoverGrid(container) {
  let grid = container.querySelector(".cover-grid");
  if (!grid) {
    grid = document.createElement("div");
    grid.className = "cover-grid";
    container.appendChild(grid);
  }
  return grid;
}

function addCover(container, label, src, alt) {
  const grid = ensureCoverGrid(container);
  const slot = document.createElement("div");
  slot.className = "cover-slot";
  slot.textContent = label;
  grid.appendChild(slot);
  loadCover(slot, src, alt);
}

function renderReleaseCovers(event, covers) {
  const prefix = `assets/covers/single-${compactDate(event.date)}`;
  if (event.format === "digital") {
    addCover(covers, coverLabel("digital"), `${prefix}-digital.jpg`, `${event.title} digital`);
    return;
  }
  const coverTypes = ["type-a", "type-d", "type-b", "regular", "type-c"];
  if (event.limitedCover) coverTypes.push("limited");
  coverTypes.forEach((suffix) => {
    if (suffix === "type-d" && Number(event.id.replace("release-", "")) < 3) return;
    addCover(covers, suffix.replace("type-", "Type-").replace("regular", coverLabel("regular")).replace("limited", coverLabel("limited")), `${prefix}-${suffix}.jpg`, `${event.title} ${suffix}`);
  });
}

function renderAlbumCovers(event, covers) {
  const prefix = `assets/covers/album-${compactDate(event.date)}`;
  ["type-a", "type-b", "regular"].forEach((suffix) => {
    addCover(covers, suffix.replace("type-", "Type-").replace("regular", coverLabel("regular")), `${prefix}-${suffix}.jpg`, `${event.title} ${suffix}`);
  });
}

function renderEvent(event) {
  const fragment = template.content.cloneNode(true);
  const row = fragment.querySelector(".event-row");
  const info = row.querySelector(".event-info");
  const covers = row.querySelector(".event-covers");
  row.style.top = `${yForDate(event.date)}px`;
  row.dataset.date = event.date;
  row.dataset.type = event.type === "member" && event.kind === "era" ? "era" : event.type === "release" ? event.era : event.type;
  row.classList.add(`is-${event.type === "release" ? event.era : event.type}`);
  if (event.type === "live") attachLivePreview(row.querySelector(".event-dot"), event);
  if (event.type === "live" && event.end && event.end !== event.date) {
    const segment = document.createElement("span");
    const startY = yForDate(event.date);
    const endY = yForDate(event.end);
    segment.className = "live-segment";
    segment.style.top = `${Math.min(startY, endY) - startY + 13}px`;
    segment.style.height = `${Math.max(20, Math.abs(startY - endY))}px`;
    row.appendChild(segment);
  }
  if (event.type === "member" && event.kind === "era") {
    row.classList.add("is-era");
    attachEraPreview(row.querySelector(".event-dot"), event);
  } else if (event.type === "member") {
    attachMemberPreview(row.querySelector(".event-dot"), event);
  }

  const date = document.createElement("time");
  date.className = "event-date";
  date.dateTime = event.date;
  date.textContent = event.type === "live" && event.end !== event.date ? `${formatDate(event.date)} - ${formatDate(event.end)}` : formatDate(event.date);

  const title = document.createElement("h2");
  title.className = "event-title";
  title.textContent = eventTitle(event);
  info.appendChild(title);
  info.appendChild(date);

  if (event.type === "release") {
    const list = document.createElement("ol");
    list.className = "track-list tracks-side";
    event.tracks.forEach((track) => {
      const item = document.createElement("li");
      item.textContent = track;
      list.appendChild(item);
    });
    renderReleaseCovers(event, covers);
    covers.appendChild(list);
  } else if (event.type === "album") {
    renderAlbumCovers(event, covers);
  } else {
    title.classList.add("event-title");
  }

  timeline.appendChild(row);
}

function staggerDots() {
  const priority = {
    live: 0,
    keyaki: 1,
    sakura: 1,
    album: 2,
    era: 3,
    member: 4,
  };
  const gap = 18;
  const rows = [...timeline.querySelectorAll(".event-row")]
    .map((row) => {
      if (!row.dataset.originalTop) row.dataset.originalTop = row.style.top;
      row.style.top = row.dataset.originalTop;
      row.querySelector(".event-dot").style.top = "5px";
      return {
        row,
        y: parseFloat(row.dataset.originalTop || "0"),
        height: Math.ceil(
          Math.max(
            34,
            row.querySelector(".event-info")?.getBoundingClientRect().height || 0,
            row.querySelector(".event-covers")?.getBoundingClientRect().height || 0,
          ),
        ),
      };
    })
    .sort((a, b) => {
      if (a.y !== b.y) return a.y - b.y;
      return (priority[a.row.dataset.type] ?? 9) - (priority[b.row.dataset.type] ?? 9);
    });
  const clusters = [];

  rows.forEach((item) => {
    const current = clusters[clusters.length - 1];
    const itemBottom = item.y + item.height;
    if (!current || item.y > current.originalBottom + gap) {
      clusters.push({
        items: [item],
        originalTop: item.y,
        originalBottom: itemBottom,
      });
    } else {
      current.items.push(item);
      current.originalBottom = Math.max(current.originalBottom, itemBottom);
    }
  });

  const plans = clusters.map((cluster) => {
    const totalHeight = cluster.items.reduce((sum, item) => sum + item.height, 0) + gap * (cluster.items.length - 1);
    const center = (cluster.originalTop + cluster.originalBottom) / 2;
    return {
      ...cluster,
      top: cluster.items.length < 2 ? cluster.items[0].y : Math.max(edgePadding * 0.55, center - totalHeight / 2),
      totalHeight,
    };
  });

  let previousBottom = 0;
  let timelineBottom = 0;
  plans.forEach((plan) => {
    const start = Math.max(plan.top, previousBottom + gap);
    let cursor = start;
    plan.items.forEach((item) => {
      item.row.style.top = `${cursor}px`;
      item.row.querySelector(".event-dot").style.top = "5px";
      cursor += item.height + gap;
    });
    previousBottom = cursor - gap;
    timelineBottom = Math.max(timelineBottom, previousBottom);
  });

  timeline.style.height = `${Math.ceil(Math.max(parseFloat(timeline.style.height || "0"), timelineBottom + edgePadding * 0.7))}px`;
}

function render({ preserveScroll = false } = {}) {
  const previousScrollY = window.scrollY;
  const events = [...releases, ...albums, ...liveEvents, ...memberEvents].sort(
    (a, b) => new Date(`${a.date}T00:00:00`) - new Date(`${b.date}T00:00:00`),
  );
  const height = edgePadding * 2 + ((endDate - startDate) / dayMs) * pixelsPerDay;
  timeline.innerHTML = "";
  timeline.style.height = `${height}px`;
  events.forEach(renderEvent);
  requestAnimationFrame(() => {
    staggerDots();
    window.scrollTo({ top: preserveScroll ? previousScrollY : document.body.scrollHeight, behavior: "instant" });
    updateBackground();
  });
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.classList.remove("is-open");
});
modalClose.addEventListener("click", () => modal.classList.remove("is-open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.classList.remove("is-open");
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    scrollToDate(button.dataset.jump === "sakura" ? "2020-10-14" : "2015-08-21");
  });
});

render();
window.addEventListener("scroll", updateBackground, { passive: true });
window.addEventListener("resize", () => {
  staggerDots();
  updateBackground();
});
window.addEventListener("zaka:languagechange", () => {
  render({ preserveScroll: true });
});
