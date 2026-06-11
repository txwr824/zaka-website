function textFor(key, values = {}) {
  return window.ZakaI18n?.t(key, values) ?? key;
}

function localizedValue(value) {
  return window.ZakaI18n?.localize(value) ?? value ?? "";
}

const activeSecondGeneration = [
  ["遠藤 光莉", "Endo Hikari", "2期生"],
  ["大園 玲", "Ozono Rei", "2期生"],
  ["大沼 晶保", "Onuma Akiho", "2期生"],
  ["幸阪 茉里乃", "Kousaka Marino", "2期生"],
  ["田村 保乃", "Tamura Hono", "2期生"],
  ["藤吉 夏鈴", "Fujiyoshi Karin", "2期生"],
  ["増本 綺良", "Masumoto Kira", "2期生"],
  ["松田 里奈", "Matsuda Rina", "2期生"],
  ["森田 ひかる", "Morita Hikaru", "2期生"],
  ["守屋 麗奈", "Moriya Rena", "2期生"],
  ["山﨑 天", "Yamasaki Ten", "2期生"],
];

const activeThirdGeneration = [
  ["石森 璃花", "Ishimori Rika", "3期生"],
  ["遠藤 理子", "Endo Riko", "3期生"],
  ["小田倉 麗奈", "Odakura Reina", "3期生"],
  ["小島 凪紗", "Kojima Nagisa", "3期生"],
  ["谷口 愛季", "Taniguchi Airi", "3期生"],
  ["中嶋 優月", "Nakashima Yuzuki", "3期生"],
  ["的野 美青", "Matono Mio", "3期生"],
  ["向井 純葉", "Mukai Itoha", "3期生"],
  ["村井 優", "Murai Yu", "3期生"],
  ["村山 美羽", "Murayama Miu", "3期生"],
  ["山下 瞳月", "Yamashita Shizuki", "3期生"],
];

const activeFourthGeneration = [
  ["浅井 恋乃未", "Asai Konomi", "4期生"],
  ["稲熊 ひな", "Inaguma Hina", "4期生"],
  ["勝又 春", "Katsumata Haru", "4期生"],
  ["佐藤 愛桜", "Sato Neo", "4期生"],
  ["中川 智尋", "Nakagawa Chihiro", "4期生"],
  ["松本 和子", "Matsumoto Wako", "4期生"],
  ["目黒 陽色", "Meguro Hiiro", "4期生"],
  ["山川 宇衣", "Yamakawa Ui", "4期生"],
  ["山田 桃実", "Yamada Momomi", "4期生"],
];

const formerMembers = [
  ["武元 唯衣", "Takemoto Yui", "2期生"],
  ["井上 梨名", "Inoue Rina", "2期生"],
  ["小池 美波", "Koike Minami", "1期生"],
  ["上村 莉菜", "Uemura Rina", "1期生"],
  ["齋藤 冬優花", "Saito Fuyuka", "1期生"],
  ["小林 由依", "Kobayashi Yui", "1期生"],
  ["土生 瑞穂", "Habu Mizuho", "1期生"],
  ["関 有美子", "Seki Yumiko", "2期生"],
  ["菅井 友香", "Sugai Yuuka", "1期生"],
  ["尾関 梨香", "Ozeki Rika", "1期生"],
  ["原田 葵", "Harada Aoi", "1期生"],
  ["渡邉 理佐", "Watanabe Risa", "1期生"],
  ["守屋 茜", "Moriya Akane", "1期生"],
  ["渡辺 梨加", "Watanabe Rika", "1期生"],
  ["松平 璃子", "Matsudaira Riko", "2期生"],
  ["佐藤 詩織", "Sato Shiori", "1期生"],
  ["石森 虹花", "Ishimori Nijika", "1期生"],
  ["長沢 菜々香", "Nagasawa Nanako", "1期生"],
  ["平手 友梨奈", "Hirate Yurina", "1期生"],
  ["織田 奈那", "Oda Nana", "1期生"],
  ["鈴本 美愉", "Suzumoto Miyu", "1期生"],
  ["長濱 ねる", "Nagahama Neru", "1期生"],
  ["米谷 奈々未", "Yonetani Nanami", "1期生"],
  ["志田 愛佳", "Shida Manaka", "1期生"],
  ["今泉 佑唯", "Imaizumi Yui", "1期生"],
].map((item, index) => {
  const [name, romaji = "", generation = "1期生"] = Array.isArray(item) ? item : [item, "", "1期生"];
  return { name, romaji, generation, id: `former-${index}` };
});

function toMember([name, romaji, generation], index, prefix = "member") {
  return { name, romaji, generation, id: `${prefix}-${index}` };
}

const activeSecondMembers = activeSecondGeneration.map((item, index) => toMember(item, index, "active-2"));
const activeThirdMembers = activeThirdGeneration.map((item, index) => toMember(item, index, "active-3"));
const activeFourthMembers = activeFourthGeneration.map((item, index) => toMember(item, index, "active-4"));
const activeMembers = [...activeSecondMembers, ...activeThirdMembers, ...activeFourthMembers];

const memberByName = [...activeMembers, ...formerMembers].reduce((map, member) => {
  map.set(member.name.replaceAll(" ", ""), member);
  return map;
}, new Map());

const loader = document.querySelector("#loader");
const home = document.querySelector("#home");
const stage = document.querySelector(".member-stage");
const fallingLayer = document.createElement("div");
const keyakiStage = document.querySelector('[data-loader-stage="keyaki"]');
const sakuraStage = document.querySelector('[data-loader-stage="sakura"]');
const keyakiLogo = document.querySelector(".keyaki-logo");
const grid = document.querySelector("#memberGrid");
const template = document.querySelector("#memberCardTemplate");
const arrangementButtons = document.querySelectorAll("[data-arrangement]");
const memberModal = document.querySelector("#memberModal");
const memberModalClose = document.querySelector(".member-modal-close");
const memberModalPhotoFrame = document.querySelector(".member-modal-photo-frame");
const memberModalPhoto = document.querySelector("#memberModalPhoto");
const memberModalGeneration = document.querySelector("#memberModalGeneration");
const memberModalName = document.querySelector("#memberModalName");
const memberModalRomaji = document.querySelector("#memberModalRomaji");
const memberModalBirthday = document.querySelector("#memberModalBirthday");
const memberModalBirthplace = document.querySelector("#memberModalBirthplace");
const memberModalCenters = document.querySelector("#memberModalCenters");
const loaderStorageKey = "zaka-home-loader-seen";
let currentArrangement = "center";
let currentProfileMember = null;
fallingLayer.className = "falling-layer";
fallingLayer.setAttribute("aria-hidden", "true");
document.body.appendChild(fallingLayer);

const layout = {
  columns: 17,
  rows: 7,
  activeColumns: 11,
  activeRows: 3,
  activeColumnStart: 3,
  activeRowStart: 2,
  mobileColumns: 7,
  mobileRows: 7,
  mobileActiveColumns: 3,
  mobileActiveRows: 5,
  panStrengthX: 0.92,
  panStrengthY: 0.75,
};

const cardImageExtensions = ["png", "jpg", "jpeg", "webp"];
const resolvedImagePaths = new Map();

const birthplaceByName = new Map(
  [
    ["井上梨名", "hyogo"],
    ["遠藤光莉", "kanagawa"],
    ["大園玲", "kagoshima"],
    ["大沼晶保", "shizuoka"],
    ["幸阪茉里乃", "mie"],
    ["武元唯衣", "shiga"],
    ["田村保乃", "osaka"],
    ["藤吉夏鈴", "osaka"],
    ["増本綺良", "hyogo"],
    ["松田里奈", "miyazaki"],
    ["森田ひかる", "fukuoka"],
    ["守屋麗奈", "tokyo"],
    ["山﨑天", "osaka"],
    ["石森璃花", "gunma"],
    ["遠藤理子", "saitama"],
    ["小田倉麗奈", "tokyo"],
    ["小島凪紗", "nagano"],
    ["谷口愛季", "yamaguchi"],
    ["中嶋優月", "fukuoka"],
    ["的野美青", "fukuoka"],
    ["向井純葉", "hiroshima"],
    ["村井優", "tokyo"],
    ["村山美羽", "tokyo"],
    ["山下瞳月", "kyoto"],
    ["浅井恋乃未", "saitama"],
    ["稲熊ひな", "aichi"],
    ["勝又春", "kyoto"],
    ["佐藤愛桜", "saga"],
    ["中川智尋", "nagasaki"],
    ["松本和子", "chiba"],
    ["目黒陽色", "saitama"],
    ["山川宇衣", "miyagi"],
    ["山田桃実", "okayama"],
  ].map(([name, birthplace]) => [name, birthplace]),
);

[
  ["武元唯衣", "shiga"],
  ["井上梨名", "hyogo"],
  ["小池美波", "hyogo"],
  ["上村莉菜", "chiba"],
  ["齋藤冬優花", "tokyo"],
  ["小林由依", "saitama"],
  ["土生瑞穂", "tokyo"],
  ["関有美子", "fukuoka"],
  ["菅井友香", "tokyo"],
  ["尾関梨香", "kanagawa"],
  ["原田葵", "tokyo"],
  ["渡邉理佐", "ibaraki"],
  ["守屋茜", "miyagi"],
  ["渡辺梨加", "ibaraki"],
  ["松平璃子", "tokyo"],
  ["佐藤詩織", "tokyo"],
  ["石森虹花", "miyagi"],
  ["長沢菜々香", "yamagata"],
  ["平手友梨奈", "aichi"],
  ["織田奈那", "shizuoka"],
  ["鈴本美愉", "aichi"],
  ["長濱ねる", "nagasaki"],
  ["米谷奈々未", "osaka"],
  ["志田愛佳", "niigata"],
  ["今泉佑唯", "kanagawa"],
].forEach(([name, birthplace]) => birthplaceByName.set(name, birthplace));

function getYouTubeSearchUrl(title, group = "櫻坂46") {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${group} ${title} Music Video`)}`;
}

function youtubeWatchUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

const mvLinksByTitle = new Map(
  [
    ["サイレントマジョリティー", "DeGkiItB9d8"],
    ["世界には愛しかない", "uxRi5CuOJx8"],
    ["二人セゾン", "mNpPQXMgtmw"],
    ["不協和音", "gfzuzDrVRVM"],
    ["風に吹かれても", "jsJh1B2jpIs"],
    ["ガラスを割れ！", "A2k6ZO6B0A8"],
    ["アンビバレント", "YIt3XpvYc6Q"],
    ["黒い羊", "D2QEluvPRiE"],
    ["Nobody's fault", "fagRTasDcKo"],
    ["なぜ 恋をして来なかったんだろう?", "S4gEJIyLHlM"],
    ["Buddies", "yT5S7Cy5cCE"],
    ["BAN", "fPZ37t3nvco"],
    ["偶然の答え", "_ZCf_iLMwn0"],
    ["思ったよりも寂しくない", "D0W44Z3D3wo"],
    ["流れ弾", "drCopBcrxRM"],
    ["Dead end", "FEfJB32wvsk"],
    ["無言の宇宙", "7GZGTse6dUs"],
    ["五月雨よ", "3boaeE3dwMs"],
    ["僕のジレンマ", "ZBk4V-uqcXs"],
    ["桜月", "zKLgrxHDgls"],
    ["Cool", "XEKPn3WbksE"],
    ["ドローン旋回中", "rNwzfyr07SM"],
    ["車間距離", "MKXSWXlSOB0"],
    ["摩擦係数", "D8piCp9XMKA"],
    ["その日まで", "F2lWsUJotmc"],
    ["夏の近道", "nV1DHIWSdEo"],
    ["Start over!", "YJRFD1AdaUE"],
    ["静寂の暴力", "uhbvX4GUrpE"],
    ["承認欲求", "x_BjvhMW9TE"],
    ["マモリビト", "I8JZbNTl5rM"],
    ["隙間風よ", "5Z4emyH-fME"],
    ["何歳の頃に戻りたいのか？", "7xx66mR_HeE"],
    ["何度 LOVE SONGの歌詞を読み返しただろう", "tltXZSiAAdQ"],
    ["自業自得", "Rs-Y9MtHsoo"],
    ["愛し合いなさい", "MAP3cnAexxM"],
    ["本質的なこと", "iZhbx2mcmug"],
    ["引きこもる時間はない", "KYvq8-xY1Gg"],
    ["I want tomorrow to come", "07JLD3d1-W0"],
    ["UDAGAWA GENERATION", "qP52sh7PzYA"],
    ["Nightmare症候群", "Grx5AhU14QU"],
    ["Nothing special", "WdUBD5slEnc"],
    ["Addiction", "ReuFa_D1Vok"],
    ["The growing up train", "Rk54JNn7Qw4"],
    ["光源", "7pusekGNE-o"],
    ["ドライフルーツ", "iCjPelKCm7w"],
    ["コインランドリー", "ae6N-FcsJmQ"],
    ["Lonesome rabbit", "4HfAH746QJo"],
    ["Unhappy birthday構文", "hBfDlIN0WtI"],
    ["Make or Break", "nTxTTZ0QLrI"],
    ["死んだふり", "WNH_ReRMt5k"],
    ["Alter ego", "gQ7l_hav-bA"],
  ].map(([title, videoId]) => [title, youtubeWatchUrl(videoId)]),
);

const mvTitleAliases = new Map([
  ["Nobody’s fault", "Nobody's fault"],
  ["なぜ 恋をして来なかったんだろう？", "なぜ 恋をして来なかったんだろう?"],
  ["Start over！", "Start over!"],
]);

function centerSong(title, group = "櫻坂46", hasMv = false) {
  const linkTitle = mvTitleAliases.get(title) || title;
  return {
    title,
    ...(hasMv ? { url: mvLinksByTitle.get(linkTitle) || getYouTubeSearchUrl(title, group) } : {}),
  };
}

function centerSongList(titles, group = "櫻坂46") {
  return titles.map((item) => {
    if (Array.isArray(item)) return centerSong(item[0], item[2] || group, item[1]);
    return centerSong(item, group);
  });
}

const centerSongsByName = new Map(
  [
    [
      "平手友梨奈",
      [
        ["サイレントマジョリティー", true],
        ["山手線", true],
        ["世界には愛しかない", true],
        ["語るなら未来を…", true],
        ["渋谷からPARCOが消えた日", true],
        ["二人セゾン", true],
        ["大人は信じてくれない", true],
        ["制服と太陽", true],
        ["不協和音", true],
        ["エキセントリック", true],
        ["月曜日の朝、スカートを切られた", true],
        "自分の棺",
        "君をもう探さない",
        ["風に吹かれても", true],
        ["避雷針", true],
        ["ガラスを割れ！", true],
        ["もう森へ帰ろうか？", true],
        "夜明けの孤独",
        ["アンビバレント", true],
        ["Student Dance", true],
        ["黒い羊", true],
        "Nobody",
        ["角を曲がる", true],
      ],
      "欅坂46",
    ],
    ["長濱ねる", ["乗り遅れたバス", "また会ってください", "100年待てば", "バスルームトラベル", "否定した未来"], "欅坂46"],
    [
      "今泉佑唯",
      [["渋谷川", true], "ボブディランは返さない", ["チューニング", true], ["ゼンマイ仕掛けの夢", true], "夏の花は向日葵だけじゃない", "再生する細胞", "日が昇るまで"],
      "欅坂46",
    ],
    ["菅井友香", ["手を繋いで帰ろうか", "砂塵", ["その日まで", true, "櫻坂46"]], "欅坂46"],
    [
      "森田ひかる",
      [
        ["Nobody’s fault", true],
        "最終の地下鉄に乗って",
        "ブルームーンキス",
        ["BAN", true],
        "君と僕と洗濯物",
        ["Dead end", true],
        ["車間距離", true],
        ["摩擦係数", true],
        ["承認欲求", true],
        "マンホールの蓋の上",
        ["UDAGAWA GENERATION", true],
        "やるしかないじゃん",
        ["Lonesome rabbit", true],
        ["What’s “KAZOKU”?", true],
        "恵まれ過ぎて",
      ],
    ],
    [
      "山﨑天",
      [
        "半信半疑",
        ["Buddies", true],
        "それが愛なのね",
        ["思ったよりも寂しくない", true],
        ["五月雨よ", true],
        "恋が絶滅する日",
        ["摩擦係数", true],
        "条件反射で泣けて来る",
        ["何歳の頃に戻りたいのか？", true],
        "泣かせて Hold me tight！",
        "僕たちの La vie en rose",
        ["Addiction", true],
      ],
    ],
    [
      "藤吉夏鈴",
      [
        ["なぜ 恋をして来なかったんだろう？", true],
        "Plastic regret",
        ["偶然の答え", true],
        "Microscope",
        ["Start over！", true],
        "一瞬の馬",
        ["Addiction", true],
        ["The growing up train", true],
        "キスが苦い",
      ],
    ],
    ["田村保乃", [["流れ弾", true], "美しきNervous", "断絶", "ずっと 春だったらなあ", ["ドローン旋回中", true]]],
    ["守屋麗奈", [["桜月", true], "もしかしたら真実", "魂のLiar"]],
    ["渡邉理佐", [["無言の宇宙", true], ["僕のジレンマ", true]]],
    ["大園玲", [["Cool", true], "青空が見えるまで"]],
    ["小池美波", ["ソニア", "風の音", "行かないで"]],
    [
      "小林由依",
      [["渋谷川", true], "ボブディランは返さない", ["チューニング", true], ["ゼンマイ仕掛けの夢", true], "ジャマイカビール", ["隙間風よ", true, "櫻坂46"], ["君がサヨナラ言えたって・・・", true, "櫻坂46"]],
      "欅坂46",
    ],
    ["土生瑞穂", ["I’m in"]],
    ["松田里奈", ["無念", "縁起担ぎ", "ピッカーン！", ["紋白蝶が確か飛んでた", true]]],
    ["武元唯衣", [["油を注せ！", true]]],
    ["井上梨名", ["確信的クロワッサン"]],
    ["山下瞳月", [["静寂の暴力", true], ["自業自得", true], "もう一曲 欲しいのかい？", ["I want tomorrow to come", true], "TOKYO SNOW"]],
    ["谷口愛季", [["夏の近道", true], ["木枯らしは泣かない", true], "I will be"]],
    ["村井優", [["僕は僕を好きになれない", true], "19歳のガレット", ["Unhappy birthday構文", true], "夜空で一番輝いてる星の名前を僕は知らない"]],
    ["石森璃花", [["愛し合いなさい", true], ["港区パセリ", true], "縁起担ぎ", "君のことを想いながら"]],
    ["中嶋優月", ["Anthem time", ["Nothing special", true], "ULTRAVIOLET"]],
    ["村山美羽", [["何度 LOVE SONGの歌詞を読み返しただろう", true], ["ドライフルーツ", true]]],
    ["的野美青", [["Nightmare症候群", true], ["Make or Break", true], "ノンアルコール"]],
    ["遠藤理子", [["本質的なこと", true], ["コインランドリー", true]]],
    ["向井純葉", [["引きこもる時間はない", true]]],
    ["小島凪紗", [["マモリビト", true]]],
    ["小田倉麗奈", ["恋愛無双"]],
    ["山川宇衣", [["Alter ego", true]]],
    ["山田桃実", [["死んだふり", true]]],
    ["佐藤愛桜", [["We got your back", true]]],
    ["浅井恋乃未", [["光源", true]]],
    ["増本綺良", ["コンビナート"]],
  ].map(([name, songs, group]) => [name, centerSongList(songs, group)]),
);

const birthdayByName = new Map(
  [
    ["遠藤光莉", "1999-04-17"],
    ["大園玲", "2000-04-18"],
    ["大沼晶保", "1999-10-12"],
    ["幸阪茉里乃", "2002-12-19"],
    ["田村保乃", "1998-10-21"],
    ["藤吉夏鈴", "2001-08-29"],
    ["増本綺良", "2002-01-12"],
    ["松田里奈", "1999-10-13"],
    ["森田ひかる", "2001-07-10"],
    ["守屋麗奈", "2000-01-02"],
    ["山﨑天", "2005-09-28"],
    ["石森璃花", "2002-01-13"],
    ["遠藤理子", "2006-01-09"],
    ["小田倉麗奈", "2004-07-25"],
    ["小島凪紗", "2005-07-07"],
    ["谷口愛季", "2005-04-12"],
    ["中嶋優月", "2003-02-17"],
    ["的野美青", "2006-11-08"],
    ["向井純葉", "2006-05-09"],
    ["村井優", "2004-08-18"],
    ["村山美羽", "2005-02-15"],
    ["山下瞳月", "2005-01-22"],
    ["浅井恋乃未", "2004-12-22"],
    ["稲熊ひな", "2006-03-09"],
    ["勝又春", "2004-01-24"],
    ["佐藤愛桜", "2006-12-01"],
    ["中川智尋", "2007-09-16"],
    ["松本和子", "2005-02-06"],
    ["目黒陽色", "2006-01-24"],
    ["山川宇衣", "2005-09-19"],
    ["山田桃実", "2008-07-20"],
    ["武元唯衣", "2002-03-23"],
    ["井上梨名", "2001-01-29"],
    ["小池美波", "1998-11-14"],
    ["上村莉菜", "1997-01-04"],
    ["齋藤冬優花", "1998-02-15"],
    ["小林由依", "1999-10-23"],
    ["土生瑞穂", "1997-07-07"],
    ["関有美子", "1998-06-29"],
    ["菅井友香", "1995-11-29"],
    ["尾関梨香", "1997-10-07"],
    ["原田葵", "2000-05-07"],
    ["渡邉理佐", "1998-07-27"],
    ["守屋茜", "1997-11-12"],
    ["渡辺梨加", "1995-05-16"],
    ["松平璃子", "1998-05-05"],
    ["佐藤詩織", "1996-11-16"],
    ["石森虹花", "1997-05-07"],
    ["長沢菜々香", "1997-04-23"],
    ["平手友梨奈", "2001-06-25"],
    ["織田奈那", "1998-06-04"],
    ["鈴本美愉", "1997-12-05"],
    ["長濱ねる", "1998-09-04"],
    ["米谷奈々未", "2000-02-24"],
    ["志田愛佳", "1998-11-23"],
    ["今泉佑唯", "1998-09-30"],
  ],
);

function getCurrentLayout() {
  if (window.matchMedia("(max-width: 720px)").matches) {
    return {
      columns: layout.mobileColumns,
      rows: layout.mobileRows,
      activeColumns: layout.mobileActiveColumns,
      activeRows: layout.mobileActiveRows,
      activeColumnStart: 2,
      activeRowStart: 1,
    };
  }

  return layout;
}

function createCard(item, className = "") {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".member-card");
  const photoSlot = fragment.querySelector(".photo-slot");
  card.dataset.memberId = item?.id || "empty";
  if (item?.generation) card.dataset.generation = item.generation;
  card.setAttribute("aria-label", item?.name || textFor("home.emptyCard"));
  if (className) card.classList.add(...className.split(" ").filter(Boolean));
  if (item) {
    loadMemberCardImage(item, (cardPath) => {
      card.classList.add("has-card-image");
      photoSlot.style.setProperty("--card-image", `url("${cardPath}")`);
    });
    card.addEventListener("click", () => openMemberProfile(item));
  }
  return card;
}

function createTimelineEntry(card) {
  card.classList.add("timeline-entry");
  card.setAttribute("aria-label", textFor("home.timelineEntry"));
  card.addEventListener("click", () => {
    window.location.href = "./timeline.html";
  });

  const keyakiMark = document.createElement("img");
  keyakiMark.className = "timeline-logo timeline-keyaki";
  keyakiMark.src = "https://upload.wikimedia.org/wikipedia/commons/f/f8/Keyakizaka46_logo.svg";
  keyakiMark.alt = "";

  const sakuraMark = document.createElement("img");
  sakuraMark.className = "timeline-logo timeline-sakura";
  sakuraMark.src = "./assets/brand/sakurazaka-logo.png";
  sakuraMark.alt = "";

  card.append(keyakiMark, sakuraMark);
}

function compactMemberName(member) {
  return member.name.replaceAll(" ", "");
}

function getGenerationNumber(member) {
  return Number.parseInt(member.generation, 10);
}

function getMemberImageSlug(member) {
  return member.romaji.toLowerCase().replaceAll(" ", "_");
}

function getMemberCardBasePath(member) {
  if (!member?.romaji) return "";
  const cardKey = `${getGenerationNumber(member)}${getMemberImageSlug(member)}`;
  return `./assets/cards/${cardKey}`;
}

function resolveImagePath(basePath, extensions, onResolved) {
  if (!basePath) return;

  const cacheKey = `${basePath}:${extensions.join(",")}`;
  if (resolvedImagePaths.has(cacheKey)) {
    const cachedPath = resolvedImagePaths.get(cacheKey);
    if (cachedPath) onResolved(cachedPath);
    return;
  }

  let extensionIndex = 0;
  const tryNextExtension = () => {
    if (extensionIndex >= extensions.length) {
      resolvedImagePaths.set(cacheKey, "");
      return;
    }

    const imagePath = `${basePath}.${extensions[extensionIndex]}`;
    extensionIndex += 1;

    const image = new Image();
    image.onload = () => {
      resolvedImagePaths.set(cacheKey, imagePath);
      onResolved(imagePath);
    };
    image.onerror = tryNextExtension;
    image.src = imagePath;
  };

  tryNextExtension();
}

function loadMemberCardImage(member, onResolved) {
  resolveImagePath(getMemberCardBasePath(member), cardImageExtensions, onResolved);
}

function getMemberPhotoPath(member) {
  if (!member.romaji) return "";
  const generationNumber = getGenerationNumber(member);
  const folder = generationNumber === 1 ? "Omember" : `${generationNumber}Omember`;
  const slug = getMemberImageSlug(member);
  return `./${folder}/${slug}.jpg`;
}

function getGenerationLabel(generation) {
  const generationNumber = Number.parseInt(generation, 10);
  if (!generationNumber) return localizedValue(generation);

  const key = `generations.g${generationNumber}`;
  const label = textFor(key);
  return label === key ? generation : label;
}

function getBirthplaceLabel(placeKey) {
  if (!placeKey) return textFor("common.notEntered");

  const key = `places.${placeKey}`;
  const label = textFor(key);
  return label === key ? placeKey : label;
}

function getMemberProfile(member) {
  const key = compactMemberName(member);

  return {
    ...member,
    generationLabel: getGenerationLabel(member.generation),
    birthday: birthdayByName.get(key) || textFor("common.notEntered"),
    birthplace: getBirthplaceLabel(birthplaceByName.get(key)),
    centerSongs: centerSongsByName.get(key) || [],
    photo: getMemberPhotoPath(member),
  };
}

function renderCenterSongs(songs) {
  memberModalCenters.innerHTML = "";

  if (!songs.length) {
    memberModalCenters.textContent = textFor("common.none");
    return;
  }

  songs.forEach((song) => {
    const node = document.createElement(song.url ? "a" : "span");
    node.className = "center-song";
    node.textContent = song.title;
    if (song.url) {
      node.href = song.url;
      node.target = "_blank";
      node.rel = "noreferrer";
    }
    memberModalCenters.appendChild(node);
  });
}

function renderMemberPhoto(profile) {
  if (!profile.photo) {
    memberModalPhotoFrame.classList.add("is-empty");
    memberModalPhoto.removeAttribute("src");
    memberModalPhoto.alt = "";
    return;
  }

  memberModalPhotoFrame.classList.remove("is-empty");
  memberModalPhoto.hidden = false;
  memberModalPhoto.src = profile.photo;
  memberModalPhoto.alt = `${profile.name} ${textFor("member.officialPhoto")}`;
}

function renderMemberProfile(member) {
  const profile = getMemberProfile(member);

  renderMemberPhoto(profile);
  memberModalGeneration.textContent = profile.generationLabel || "";
  memberModalName.textContent = profile.name;
  memberModalRomaji.textContent = profile.romaji || textFor("common.notEntered");
  memberModalBirthday.textContent = profile.birthday;
  memberModalBirthplace.textContent = profile.birthplace;
  renderCenterSongs(profile.centerSongs);
}

function openMemberProfile(member) {
  currentProfileMember = member;
  renderMemberProfile(member);
  memberModal.classList.add("is-open");
  memberModal.setAttribute("aria-hidden", "false");
}

function closeMemberProfile() {
  currentProfileMember = null;
  memberModal.classList.remove("is-open");
  memberModal.setAttribute("aria-hidden", "true");
}

memberModalPhoto.addEventListener("error", () => {
  memberModalPhotoFrame.classList.add("is-empty");
  memberModalPhoto.hidden = true;
  memberModalPhoto.removeAttribute("src");
  memberModalPhoto.alt = "";
});

function coordinateKey(row, column) {
  return `${row}:${column}`;
}

function isActiveArea(row, column, currentLayout) {
  return (
    row >= currentLayout.activeRowStart &&
    row < currentLayout.activeRowStart + currentLayout.activeRows &&
    column >= currentLayout.activeColumnStart &&
    column < currentLayout.activeColumnStart + currentLayout.activeColumns
  );
}

function getTimelinePosition(currentLayout) {
  return {
    column: currentLayout.activeColumnStart + Math.floor(currentLayout.activeColumns / 2),
    row: currentLayout.activeRowStart + Math.floor(currentLayout.activeRows / 2),
  };
}

function memberByCompactName(name) {
  return memberByName.get(name.replaceAll(" ", ""));
}

function uniqueMembers(list) {
  const seen = new Set();
  return list.filter((member) => {
    if (!member || seen.has(member.id)) return false;
    seen.add(member.id);
    return true;
  });
}

function swapMembersByName(members, firstName, secondName) {
  const firstIndex = members.findIndex((member) => compactMemberName(member) === firstName);
  const secondIndex = members.findIndex((member) => compactMemberName(member) === secondName);
  if (firstIndex !== -1 && secondIndex !== -1) {
    [members[firstIndex], members[secondIndex]] = [members[secondIndex], members[firstIndex]];
  }
}

function getCenterMemberOrder() {
  const requestedCore = [
    "森田ひかる",
    "山﨑天",
    "藤吉夏鈴",
    "田村保乃",
    "守屋麗奈",
    "大園玲",
    "松田里奈",
    "山下瞳月",
    "的野美青",
    "村井優",
    "谷口愛季",
    "村山美羽",
  ].map(memberByCompactName);

  const orderedMembers = uniqueMembers([
    ...requestedCore,
    ...activeSecondMembers,
    ...activeThirdMembers,
    ...activeFourthMembers,
    formerMembers[0],
  ]);

  swapMembersByName(orderedMembers, "遠藤光莉", "向井純葉");
  swapMembersByName(orderedMembers, "目黒陽色", "松本和子");
  swapMembersByName(orderedMembers, "中嶋優月", "幸阪茉里乃");

  return orderedMembers;
}

function getGenerationMemberOrder() {
  const members = [...activeMembers, ...formerMembers];
  return [1, 2, 3, 4].flatMap((generationNumber) =>
    members.filter((member) => getGenerationNumber(member) === generationNumber),
  );
}

function getGenerationMemberGroups() {
  const members = [...activeMembers, ...formerMembers];
  return [1, 2, 3, 4].map((generationNumber) =>
    members.filter((member) => getGenerationNumber(member) === generationNumber),
  );
}

function getCenterCoordinates(currentLayout) {
  const { row: centerRow, column: centerColumn } = getTimelinePosition(currentLayout);
  const seedOffsets = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 2],
    [-1, 0],
    [-1, -1],
    [-1, -2],
    [0, -2],
    [1, -2],
  ];
  const coordinates = [];
  const used = new Set([coordinateKey(centerRow, centerColumn)]);

  seedOffsets.forEach(([rowOffset, columnOffset]) => {
    const row = centerRow + rowOffset;
    const column = centerColumn + columnOffset;
    const key = coordinateKey(row, column);
    if (isActiveArea(row, column, currentLayout) && !used.has(key)) {
      coordinates.push({ row, column });
      used.add(key);
    }
  });

  const activeCoordinates = [];
  for (let row = currentLayout.activeRowStart; row < currentLayout.activeRowStart + currentLayout.activeRows; row += 1) {
    for (let column = currentLayout.activeColumnStart; column < currentLayout.activeColumnStart + currentLayout.activeColumns; column += 1) {
      const key = coordinateKey(row, column);
      if (!used.has(key)) activeCoordinates.push({ row, column });
    }
  }

  activeCoordinates
    .sort((a, b) => {
      const distanceA = Math.hypot(a.column - centerColumn, a.row - centerRow);
      const distanceB = Math.hypot(b.column - centerColumn, b.row - centerRow);
      if (distanceA !== distanceB) return distanceA - distanceB;
      if (a.row !== b.row) return a.row - b.row;
      return a.column - b.column;
    })
    .forEach((coordinate) => coordinates.push(coordinate));

  return coordinates;
}

function getOuterFormerCoordinates(currentLayout) {
  const top = currentLayout.activeRowStart;
  const bottom = currentLayout.activeRowStart + currentLayout.activeRows - 1;
  const left = currentLayout.activeColumnStart;
  const right = currentLayout.activeColumnStart + currentLayout.activeColumns - 1;
  const outerTop = Math.max(0, top - 1);
  const outerBottom = Math.min(currentLayout.rows - 1, bottom + 1);
  const outerLeft = Math.max(0, left - 1);
  const outerRight = Math.min(currentLayout.columns - 1, right + 1);
  const coordinates = [];
  const used = new Set();
  const addCoordinate = (row, column) => {
    const key = coordinateKey(row, column);
    if (!used.has(key) && !isActiveArea(row, column, currentLayout)) {
      coordinates.push({ row, column });
      used.add(key);
    }
  };

  for (let row = bottom; row >= outerTop; row -= 1) addCoordinate(row, outerRight);
  for (let column = right; column >= outerLeft; column -= 1) addCoordinate(outerTop, column);
  for (let row = top; row <= outerBottom; row += 1) addCoordinate(row, outerLeft);
  for (let column = outerLeft + 1; column <= outerRight; column += 1) addCoordinate(outerBottom, column);

  return coordinates;
}

function assignCenterArrangement(currentLayout) {
  const assignments = new Map();
  const orderedMembers = getCenterMemberOrder();
  const outerMembers = formerMembers.slice(1);

  getCenterCoordinates(currentLayout).forEach(({ row, column }, index) => {
    assignments.set(coordinateKey(row, column), orderedMembers[index]);
  });

  getOuterFormerCoordinates(currentLayout).forEach(({ row, column }, index) => {
    assignments.set(coordinateKey(row, column), outerMembers[index]);
  });

  return assignments;
}

function assignGenerationArrangement(currentLayout) {
  const assignments = new Map();
  const generationGroups = getGenerationMemberGroups();
  const { row: centerRow, column: centerColumn } = getTimelinePosition(currentLayout);
  const generationRowOffset = 1;
  const generationColumnInset = currentLayout.columns >= 11 ? 2 : 1;
  const firstColumn = generationColumnInset;
  const lastColumn = currentLayout.columns - generationColumnInset - 1;
  let row = generationRowOffset;
  let column = firstColumn;

  generationGroups.forEach((members) => {
    members.forEach((member) => {
      while (row < currentLayout.rows) {
        if (column > lastColumn) {
          row += 1;
          column = firstColumn;
          continue;
        }

        if (row === centerRow && column === centerColumn) {
          column += 1;
          continue;
        }

        assignments.set(coordinateKey(row, column), member);
        column += 1;
        return;
      }
    });

    if (column !== firstColumn) {
      row += 1;
      column = firstColumn;
    }
  });

  return assignments;
}

function renderMembers() {
  const currentLayout = getCurrentLayout();
  const { row: centerRow, column: centerColumn } = getTimelinePosition(currentLayout);
  const assignments = currentArrangement === "generation" ? assignGenerationArrangement(currentLayout) : assignCenterArrangement(currentLayout);

  grid.innerHTML = "";

  for (let row = 0; row < currentLayout.rows; row += 1) {
    for (let column = 0; column < currentLayout.columns; column += 1) {
      const isTimelineEntry = row === centerRow && column === centerColumn;
      const item = assignments.get(coordinateKey(row, column));
      const cardItem = isTimelineEntry ? null : item;
      const cardClassNames = [
        isTimelineEntry ? "" : item ? (item.id.startsWith("former") ? "is-former" : "is-active-member") : "is-empty",
        isActiveArea(row, column, currentLayout) ? "is-home-area" : "",
      ];
      const card = createCard(cardItem, cardClassNames.filter(Boolean).join(" "));

      if (isTimelineEntry) createTimelineEntry(card);

      grid.appendChild(card);
    }
  }
}

function updateCardPan(clientX, clientY) {
  const bounds = stage.getBoundingClientRect();
  const normalizedX = ((clientX - bounds.left) / bounds.width - 0.5) * 2;
  const normalizedY = ((clientY - bounds.top) / bounds.height - 0.5) * 2;
  const currentLayout = getCurrentLayout();
  const cellWidth = window.innerWidth / currentLayout.activeColumns;
  const cellHeight = window.innerHeight / currentLayout.activeRows;
  const maxPanX = ((currentLayout.columns - currentLayout.activeColumns) / 2) * cellWidth;
  const maxPanY = ((currentLayout.rows - currentLayout.activeRows) / 2) * cellHeight;

  grid.style.setProperty("--pan-x", `${-normalizedX * maxPanX * layout.panStrengthX}px`);
  grid.style.setProperty("--pan-y", `${-normalizedY * maxPanY * layout.panStrengthY}px`);
}

function resetCardPan() {
  grid.style.setProperty("--pan-x", "0px");
  grid.style.setProperty("--pan-y", "0px");
}

function attachCardSearch() {
  stage.addEventListener("pointermove", (event) => updateCardPan(event.clientX, event.clientY));
  stage.addEventListener("pointerleave", resetCardPan);
  window.addEventListener("resize", () => {
    renderMembers();
    resetCardPan();
  });
}

function attachArrangementSwitch() {
  arrangementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentArrangement = button.dataset.arrangement;
      arrangementButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      renderMembers();
      resetCardPan();
    });
  });
}

function attachMemberModal() {
  memberModalClose.addEventListener("click", closeMemberProfile);
  memberModal.addEventListener("click", (event) => {
    if (event.target === memberModal) closeMemberProfile();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && memberModal.classList.contains("is-open")) {
      closeMemberProfile();
    }
  });
}

function hasSeenLoader() {
  try {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isReload =
      navigationEntry?.type === "reload" ||
      performance.navigation?.type === performance.navigation?.TYPE_RELOAD;

    if (isReload) return false;
    return sessionStorage.getItem(loaderStorageKey) === "true";
  } catch (error) {
    return true;
  }
}

function markLoaderSeen() {
  try {
    sessionStorage.setItem(loaderStorageKey, "true");
  } catch (error) {
    document.documentElement.classList.add("loader-seen");
  }
}

function triggerCardLightSweep() {
  grid.classList.remove("is-light-sweeping");
  void grid.offsetWidth;
  grid.classList.add("is-light-sweeping");
}

function startCardLightCycle(initialDelay = 1400) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  window.setTimeout(triggerCardLightSweep, initialDelay);
  window.setInterval(triggerCardLightSweep, 5000);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createFallingPiece(type) {
  const piece = document.createElement("span");
  const duration = randomBetween(11.5, 16);
  const startX = randomBetween(8, 92);
  const initialX = randomBetween(14, 34) * (Math.random() > 0.5 ? 1 : -1);
  const driftX = randomBetween(-84, 84);
  const startRotation = randomBetween(-90, 90);
  const midRotation = startRotation + randomBetween(22, 76) * (initialX > 0 ? 1 : -1);
  const endRotation = startRotation + randomBetween(160, 420) * (Math.random() > 0.5 ? 1 : -1);

  piece.className = `falling-piece is-${type}`;
  piece.style.setProperty("--start-x", `${startX}vw`);
  piece.style.setProperty("--initial-x", `${initialX}px`);
  piece.style.setProperty("--drift-x", `${driftX}px`);
  piece.style.setProperty("--start-rotation", `${startRotation}deg`);
  piece.style.setProperty("--mid-rotation", `${midRotation}deg`);
  piece.style.setProperty("--end-rotation", `${endRotation}deg`);
  piece.style.setProperty("--fall-duration", `${duration}s`);
  piece.style.setProperty("--piece-opacity", type === "leaf" ? "0.62" : "0.68");
  piece.style.setProperty("--piece-w", type === "leaf" ? `${randomBetween(12, 17)}px` : `${randomBetween(9, 13)}px`);
  piece.style.setProperty("--piece-h", type === "leaf" ? `${randomBetween(20, 28)}px` : `${randomBetween(14, 20)}px`);
  piece.addEventListener("animationend", () => piece.remove());
  fallingLayer.appendChild(piece);
}

function releaseFallingPieces() {
  const shouldDropLeaf = Math.random() < 0.34;
  const count = shouldDropLeaf ? 1 : Math.floor(randomBetween(2, 4));
  const type = shouldDropLeaf ? "leaf" : "petal";

  for (let index = 0; index < count; index += 1) {
    window.setTimeout(() => createFallingPiece(type), index * randomBetween(260, 620));
  }
}

function scheduleFallingPieces() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  window.setTimeout(() => {
    releaseFallingPieces();
    scheduleFallingPieces();
  }, randomBetween(10000, 15000));
}

function startLoaderSequence() {
  if (hasSeenLoader()) {
    document.documentElement.classList.add("loader-seen");
    loader.classList.add("is-hidden");
    home.classList.add("is-ready");
    startCardLightCycle(900);
    scheduleFallingPieces();
    return;
  }

  window.setTimeout(() => {
    keyakiStage.classList.remove("is-active");
    sakuraStage.classList.add("is-active");
  }, 1650);

  window.setTimeout(() => {
    markLoaderSeen();
    document.documentElement.classList.add("loader-seen");
    loader.classList.add("is-hidden");
    home.classList.add("is-ready");
    startCardLightCycle();
    scheduleFallingPieces();
  }, 3450);
}

renderMembers();
attachCardSearch();
attachArrangementSwitch();
attachMemberModal();
window.addEventListener("zaka:languagechange", () => {
  renderMembers();
  if (currentProfileMember) renderMemberProfile(currentProfileMember);
});
grid.addEventListener("animationend", (event) => {
  if (event.animationName === "card-light-sweep") {
    grid.classList.remove("is-light-sweeping");
  }
});
keyakiLogo.addEventListener("error", () => keyakiStage.classList.add("use-text-logo"));
startLoaderSequence();
