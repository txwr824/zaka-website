(() => {
  const storageKey = "zaka-language";
  const languageOrder = ["zh", "ja", "en"];
  const languageMeta = {
    zh: { short: "中", name: "中文", htmlLang: "zh-CN" },
    ja: { short: "日", name: "日本語", htmlLang: "ja" },
    en: { short: "EN", name: "English", htmlLang: "en" },
  };

  const messages = {
    zh: {
      language: {
        switchTitle: "切换语言",
        switchLabel: "切换语言，当前为{language}",
      },
      titles: {
        home: "櫻坂46 Members",
        timelineHorizontal: "欅坂46 / 櫻坂46 横版时间轴",
        timelineVertical: "欅坂46 / 櫻坂46 竖版时间轴",
      },
      common: {
        home: "首页",
        horizontal: "横版",
        vertical: "竖版",
        notEntered: "未录入",
        none: "无",
        closeCover: "关闭封面预览",
      },
      home: {
        loading: "载入中",
        shell: "櫻坂46 首页",
        memberStage: "成员照片卡",
        memberGrid: "成员照片卡",
        arrangement: "排列方式",
        activeArrangement: "现役",
        generationArrangement: "期别",
        emptyCard: "预留卡片",
        timelineEntry: "访问时间轴",
      },
      member: {
        closeProfile: "关闭成员资料",
        birthday: "生日",
        birthplace: "出生地",
        centers: "C位曲",
        officialPhoto: "公式照",
      },
      timeline: {
        nav: "页面导航",
        jumpKeyaki: "跳到欅坂46部分",
        jumpSakura: "跳到櫻坂46部分",
        title: "从欅坂46到櫻坂46",
        dateRange: "2015 - present",
        intro: "按现实日期比例排列：上方是单曲与封面位，下方是收录曲、加入、毕业和改名等成员事件。",
        shell: "欅坂46与櫻坂46时间轴",
        verticalShell: "竖版时间轴",
        zoom: "时间轴缩放",
        zoomOut: "缩小",
        zoomIn: "放大",
        zoomRange: "缩放比例",
        sources: "资料来源",
        sourcesBefore: "发行日与版本：欅坂46、櫻坂46 官方 Discography。成员加入、毕业与人数变迁：",
        wikiEntry: "维基百科「櫻坂46」条目",
        sourcesAfter:
          "。收录曲：维基百科单曲条目为主，最新单曲辅以官方新闻与音乐新闻页面核对。大型演出日期参考官方新闻、官方演出页面与维基百科演唱会相关条目。",
        backHome: "返回首页",
        switchVertical: "切换到竖版",
        switchHorizontal: "切换到横版",
        covers: "封面版本",
        albumCovers: "专辑封面版本",
      },
      covers: {
        regular: "通常盤",
        limited: "限定盤",
        digital: "Digital",
      },
      generations: {
        g1: "一期生",
        g2: "二期生",
        g3: "三期生",
        g4: "四期生",
      },
      places: {
        hyogo: "兵库县",
        kanagawa: "神奈川县",
        kagoshima: "鹿儿岛县",
        shizuoka: "静冈县",
        mie: "三重县",
        shiga: "滋贺县",
        osaka: "大阪府",
        miyazaki: "宫崎县",
        fukuoka: "福冈县",
        tokyo: "东京都",
        gunma: "群马县",
        saitama: "埼玉县",
        nagano: "长野县",
        yamaguchi: "山口县",
        hiroshima: "广岛县",
        kyoto: "京都府",
        aichi: "爱知县",
        saga: "佐贺县",
        nagasaki: "长崎县",
        miyagi: "宫城县",
        okayama: "冈山县",
        chiba: "千叶县",
        ibaraki: "茨城县",
        yamagata: "山形县",
        niigata: "新潟县",
      },
      liveEvents: {
        budokan: "武道馆之变：因平手友梨奈受伤，けやき坂46 代替欅坂46出演日本武道馆3Days",
        stadium: "櫻坂46 5th YEAR ANNIVERSARY LIVE MUFGスタジアム（国立竞技场）",
      },
      memberEvents: {
        m20150821:
          "欅坂46 一期生22名合格：石森虹花、今泉佑唯、上村莉菜、尾関梨香、織田奈那、小池美波、小林由依、齋藤冬優花、佐藤詩織、志田愛佳、菅井友香、鈴本美愉、長沢菜々香、土生瑞穂、原田葵、原田まゆ、平手友梨奈、守屋茜、米谷奈々未、渡辺梨加、渡邉理佐、鈴木泉帆（欅坂46：22人）。",
        m20151001: "鈴木泉帆活动开始前辞退（欅坂46：21人）。",
        m20151111: "原田まゆ活动辞退（欅坂46：20人）。",
        m20160508:
          "けやき坂46 一期生加入：井口眞緒、潮紗理菜、柿崎芽実、影山優佳、加藤史帆、齊藤京子、佐々木久美、佐々木美玲、高瀬愛奈、高本彩花、東村芽依（けやき坂46：11人）。",
        m20160627: "長濱ねる兼任欅坂46（欅坂46：21人）。",
        m20170815:
          "けやき坂46 二期生加入：金村美玖、河田陽菜、小坂菜緒、富田鈴花、丹生明里、濱岸ひより、松田好花、宮田愛萌、渡邉美穂（けやき坂46：20人）。",
        m20181104: "今泉佑唯毕业（欅坂46：20人）。",
        m20181116: "志田愛佳毕业（欅坂46：19人）。",
        m20181210:
          "欅坂46 二期生加入：井上梨名、関有美子、武元唯衣、田村保乃、藤吉夏鈴、松田里奈、松平璃子、森田ひかる、山﨑天（欅坂46：28人）。",
        m20181222: "米谷奈々未毕业（欅坂46：27人）。",
        m20190211: "けやき坂46 改名为日向坂46；从欅坂46分离。",
        m20190730: "長濱ねる毕业（欅坂46：26人）。",
        m20200123: "平手友梨奈脱退；織田奈那、鈴本美愉毕业（欅坂46：23人）。",
        m20200331:
          "新二期生加入：遠藤光莉、大園玲、大沼晶保、幸阪茉里乃、増本綺良、守屋麗奈；長沢菜々香毕业（欅坂46：28人）。",
        m20200930: "石森虹花毕业（欅坂46：27人）。",
        m20201013: "佐藤詩織毕业；欅坂46としての活動終了（欅坂46：26人）。",
        m20201014: "欅坂46 改名为櫻坂46（櫻坂46：26人）。",
        m20210314: "松平璃子毕业（櫻坂46：25人）。",
        m20211219: "守屋茜、渡辺梨加毕业（櫻坂46：23人）。",
        m20220522: "渡邉理佐毕业（櫻坂46：22人）。",
        m20220611: "原田葵毕业（櫻坂46：21人）。",
        m20220911: "尾関梨香毕业（櫻坂46：20人）。",
        m20221109: "菅井友香毕业（櫻坂46：19人）。",
        m20230106:
          "櫻坂46 三期生加入：石森璃花、遠藤理子、小田倉麗奈、小島凪紗、谷口愛季、中嶋優月、的野美青、向井純葉、村井優、村山美羽、山下瞳月（櫻坂46：30人）。",
        m20230430: "関有美子毕业（櫻坂46：29人）。",
        m20231125: "土生瑞穂毕业（櫻坂46：28人）。",
        m20240201: "小林由依毕业（櫻坂46：27人）。",
        m20250113: "齋藤冬優花毕业（櫻坂46：26人）。",
        m20250216: "上村莉菜毕业（櫻坂46：25人）。",
        m20250320: "小池美波毕业（櫻坂46：24人）。",
        m20250416:
          "櫻坂46 四期生加入：浅井恋乃未、稲熊ひな、勝又春、佐藤愛桜、中川智尋、松本和子、目黒陽色、山川宇衣、山田桃実（櫻坂46：33人）。",
        m20260228: "井上梨名毕业（櫻坂46：32人）。",
        m20260513: "武元唯衣毕业（櫻坂46：31人）。",
      },
    },
    ja: {
      language: {
        switchTitle: "言語を切り替え",
        switchLabel: "言語を切り替えます。現在は{language}です",
      },
      titles: {
        home: "櫻坂46 Members",
        timelineHorizontal: "欅坂46 / 櫻坂46 横版タイムライン",
        timelineVertical: "欅坂46 / 櫻坂46 縦版タイムライン",
      },
      common: {
        home: "ホーム",
        horizontal: "横版",
        vertical: "縦版",
        notEntered: "未入力",
        none: "なし",
        closeCover: "ジャケットプレビューを閉じる",
      },
      home: {
        loading: "読み込み中",
        shell: "櫻坂46 ホーム",
        memberStage: "メンバー写真カード",
        memberGrid: "メンバー写真カード",
        arrangement: "並び替え",
        activeArrangement: "現役",
        generationArrangement: "期別",
        emptyCard: "空きカード",
        timelineEntry: "タイムラインへ",
      },
      member: {
        closeProfile: "メンバー情報を閉じる",
        birthday: "誕生日",
        birthplace: "出身地",
        centers: "センター曲",
        officialPhoto: "公式写真",
      },
      timeline: {
        nav: "ページナビゲーション",
        jumpKeyaki: "欅坂46へ移動",
        jumpSakura: "櫻坂46へ移動",
        title: "欅坂46から櫻坂46へ",
        dateRange: "2015 - present",
        intro: "実際の日付比率で配置：上段はシングルとジャケット、下段は収録曲・加入・卒業・改名などのメンバーイベント。",
        shell: "欅坂46と櫻坂46のタイムライン",
        verticalShell: "縦版タイムライン",
        zoom: "タイムラインの拡大縮小",
        zoomOut: "縮小",
        zoomIn: "拡大",
        zoomRange: "ズーム倍率",
        sources: "出典",
        sourcesBefore: "発売日と形態：欅坂46・櫻坂46 公式 Discography。メンバー加入・卒業・人数推移：",
        wikiEntry: "Wikipedia「櫻坂46」",
        sourcesAfter:
          "。収録曲は主にWikipediaのシングル記事を参照し、最新シングルは公式ニュースと音楽ニュースで確認。大型ライブの日程は公式ニュース、公式ライブページ、Wikipediaのライブ関連記事を参照。",
        backHome: "ホームへ戻る",
        switchVertical: "縦版へ切り替え",
        switchHorizontal: "横版へ切り替え",
        covers: "ジャケット形態",
        albumCovers: "アルバムジャケット形態",
      },
      covers: {
        regular: "通常盤",
        limited: "限定盤",
        digital: "Digital",
      },
      generations: {
        g1: "1期生",
        g2: "2期生",
        g3: "3期生",
        g4: "4期生",
      },
      places: {
        hyogo: "兵庫県",
        kanagawa: "神奈川県",
        kagoshima: "鹿児島県",
        shizuoka: "静岡県",
        mie: "三重県",
        shiga: "滋賀県",
        osaka: "大阪府",
        miyazaki: "宮崎県",
        fukuoka: "福岡県",
        tokyo: "東京都",
        gunma: "群馬県",
        saitama: "埼玉県",
        nagano: "長野県",
        yamaguchi: "山口県",
        hiroshima: "広島県",
        kyoto: "京都府",
        aichi: "愛知県",
        saga: "佐賀県",
        nagasaki: "長崎県",
        miyagi: "宮城県",
        okayama: "岡山県",
        chiba: "千葉県",
        ibaraki: "茨城県",
        yamagata: "山形県",
        niigata: "新潟県",
      },
      liveEvents: {
        budokan: "武道館の変：平手友梨奈の負傷により、けやき坂46が欅坂46に代わって日本武道館3Daysに出演",
        stadium: "櫻坂46 5th YEAR ANNIVERSARY LIVE MUFGスタジアム（国立競技場）",
      },
      memberEvents: {
        m20150821:
          "欅坂46 一期生22名が合格：石森虹花、今泉佑唯、上村莉菜、尾関梨香、織田奈那、小池美波、小林由依、齋藤冬優花、佐藤詩織、志田愛佳、菅井友香、鈴本美愉、長沢菜々香、土生瑞穂、原田葵、原田まゆ、平手友梨奈、守屋茜、米谷奈々未、渡辺梨加、渡邉理佐、鈴木泉帆（欅坂46：22人）。",
        m20151001: "鈴木泉帆が活動開始前に辞退（欅坂46：21人）。",
        m20151111: "原田まゆが活動辞退（欅坂46：20人）。",
        m20160508:
          "けやき坂46 一期生が加入：井口眞緒、潮紗理菜、柿崎芽実、影山優佳、加藤史帆、齊藤京子、佐々木久美、佐々木美玲、高瀬愛奈、高本彩花、東村芽依（けやき坂46：11人）。",
        m20160627: "長濱ねるが欅坂46を兼任（欅坂46：21人）。",
        m20170815:
          "けやき坂46 二期生が加入：金村美玖、河田陽菜、小坂菜緒、富田鈴花、丹生明里、濱岸ひより、松田好花、宮田愛萌、渡邉美穂（けやき坂46：20人）。",
        m20181104: "今泉佑唯が卒業（欅坂46：20人）。",
        m20181116: "志田愛佳が卒業（欅坂46：19人）。",
        m20181210:
          "欅坂46 二期生が加入：井上梨名、関有美子、武元唯衣、田村保乃、藤吉夏鈴、松田里奈、松平璃子、森田ひかる、山﨑天（欅坂46：28人）。",
        m20181222: "米谷奈々未が卒業（欅坂46：27人）。",
        m20190211: "けやき坂46が日向坂46へ改名し、欅坂46から分離。",
        m20190730: "長濱ねるが卒業（欅坂46：26人）。",
        m20200123: "平手友梨奈が脱退；織田奈那、鈴本美愉が卒業（欅坂46：23人）。",
        m20200331:
          "新二期生が加入：遠藤光莉、大園玲、大沼晶保、幸阪茉里乃、増本綺良、守屋麗奈；長沢菜々香が卒業（欅坂46：28人）。",
        m20200930: "石森虹花が卒業（欅坂46：27人）。",
        m20201013: "佐藤詩織が卒業；欅坂46としての活動を終了（欅坂46：26人）。",
        m20201014: "欅坂46が櫻坂46へ改名（櫻坂46：26人）。",
        m20210314: "松平璃子が卒業（櫻坂46：25人）。",
        m20211219: "守屋茜、渡辺梨加が卒業（櫻坂46：23人）。",
        m20220522: "渡邉理佐が卒業（櫻坂46：22人）。",
        m20220611: "原田葵が卒業（櫻坂46：21人）。",
        m20220911: "尾関梨香が卒業（櫻坂46：20人）。",
        m20221109: "菅井友香が卒業（櫻坂46：19人）。",
        m20230106:
          "櫻坂46 三期生が加入：石森璃花、遠藤理子、小田倉麗奈、小島凪紗、谷口愛季、中嶋優月、的野美青、向井純葉、村井優、村山美羽、山下瞳月（櫻坂46：30人）。",
        m20230430: "関有美子が卒業（櫻坂46：29人）。",
        m20231125: "土生瑞穂が卒業（櫻坂46：28人）。",
        m20240201: "小林由依が卒業（櫻坂46：27人）。",
        m20250113: "齋藤冬優花が卒業（櫻坂46：26人）。",
        m20250216: "上村莉菜が卒業（櫻坂46：25人）。",
        m20250320: "小池美波が卒業（櫻坂46：24人）。",
        m20250416:
          "櫻坂46 四期生が加入：浅井恋乃未、稲熊ひな、勝又春、佐藤愛桜、中川智尋、松本和子、目黒陽色、山川宇衣、山田桃実（櫻坂46：33人）。",
        m20260228: "井上梨名が卒業（櫻坂46：32人）。",
        m20260513: "武元唯衣が卒業（櫻坂46：31人）。",
      },
    },
    en: {
      language: {
        switchTitle: "Switch language",
        switchLabel: "Switch language. Current language is {language}",
      },
      titles: {
        home: "Sakurazaka46 Members",
        timelineHorizontal: "Keyakizaka46 / Sakurazaka46 Horizontal Timeline",
        timelineVertical: "Keyakizaka46 / Sakurazaka46 Vertical Timeline",
      },
      common: {
        home: "Home",
        horizontal: "Horizontal",
        vertical: "Vertical",
        notEntered: "Not entered",
        none: "None",
        closeCover: "Close cover preview",
      },
      home: {
        loading: "Loading",
        shell: "Sakurazaka46 home",
        memberStage: "Member photo cards",
        memberGrid: "Member photo cards",
        arrangement: "Arrangement",
        activeArrangement: "Active",
        generationArrangement: "Generation",
        emptyCard: "Empty card",
        timelineEntry: "Open timeline",
      },
      member: {
        closeProfile: "Close member profile",
        birthday: "Birthday",
        birthplace: "Birthplace",
        centers: "Center songs",
        officialPhoto: "official photo",
      },
      timeline: {
        nav: "Page navigation",
        jumpKeyaki: "Jump to Keyakizaka46",
        jumpSakura: "Jump to Sakurazaka46",
        title: "From Keyakizaka46 to Sakurazaka46",
        dateRange: "2015 - present",
        intro:
          "Laid out in real date proportions: singles and covers sit above the axis; tracks, joins, graduations, renaming, and other member events sit below.",
        shell: "Keyakizaka46 and Sakurazaka46 timeline",
        verticalShell: "Vertical timeline",
        zoom: "Timeline zoom",
        zoomOut: "Zoom out",
        zoomIn: "Zoom in",
        zoomRange: "Zoom level",
        sources: "Sources",
        sourcesBefore: "Release dates and editions: official Keyakizaka46 and Sakurazaka46 Discography. Member joins, graduations, and headcount changes: ",
        wikiEntry: "Wikipedia Sakurazaka46 entry",
        sourcesAfter:
          ". Track lists mainly reference Wikipedia single entries, with newer singles checked against official news and music news pages. Major live dates reference official news, official live pages, and Wikipedia live-related entries.",
        backHome: "Back home",
        switchVertical: "Switch to vertical",
        switchHorizontal: "Switch to horizontal",
        covers: "Cover editions",
        albumCovers: "Album cover editions",
      },
      covers: {
        regular: "Regular",
        limited: "Limited",
        digital: "Digital",
      },
      generations: {
        g1: "1st generation",
        g2: "2nd generation",
        g3: "3rd generation",
        g4: "4th generation",
      },
      places: {
        hyogo: "Hyogo",
        kanagawa: "Kanagawa",
        kagoshima: "Kagoshima",
        shizuoka: "Shizuoka",
        mie: "Mie",
        shiga: "Shiga",
        osaka: "Osaka",
        miyazaki: "Miyazaki",
        fukuoka: "Fukuoka",
        tokyo: "Tokyo",
        gunma: "Gunma",
        saitama: "Saitama",
        nagano: "Nagano",
        yamaguchi: "Yamaguchi",
        hiroshima: "Hiroshima",
        kyoto: "Kyoto",
        aichi: "Aichi",
        saga: "Saga",
        nagasaki: "Nagasaki",
        miyagi: "Miyagi",
        okayama: "Okayama",
        chiba: "Chiba",
        ibaraki: "Ibaraki",
        yamagata: "Yamagata",
        niigata: "Niigata",
      },
      liveEvents: {
        budokan:
          "Budokan change: after Hirate Yurina's injury, Hiragana Keyakizaka46 performed the Nippon Budokan 3 Days in place of Keyakizaka46",
        stadium: "Sakurazaka46 5th YEAR ANNIVERSARY LIVE, MUFG Stadium (Japan National Stadium)",
      },
      memberEvents: {
        m20150821:
          "Keyakizaka46 1st generation, 22 members, passed the audition: Ishimori Nijika, Imaizumi Yui, Uemura Rina, Ozeki Rika, Oda Nana, Koike Minami, Kobayashi Yui, Saito Fuyuka, Sato Shiori, Shida Manaka, Sugai Yuuka, Suzumoto Miyu, Nagasawa Nanako, Habu Mizuho, Harada Aoi, Harada Mayu, Hirate Yurina, Moriya Akane, Yonetani Nanami, Watanabe Rika, Watanabe Risa, Suzuki Mizuho (Keyakizaka46: 22 members).",
        m20151001: "Suzuki Mizuho withdrew before activities began (Keyakizaka46: 21 members).",
        m20151111: "Harada Mayu withdrew from activities (Keyakizaka46: 20 members).",
        m20160508:
          "Hiragana Keyakizaka46 1st generation joined: Iguchi Mao, Ushio Sarina, Kakizaki Memi, Kageyama Yuuka, Kato Shiho, Saito Kyoko, Sasaki Kumi, Sasaki Mirei, Takase Mana, Takamoto Ayaka, Higashimura Mei (Hiragana Keyakizaka46: 11 members).",
        m20160627: "Nagahama Neru became a concurrent Keyakizaka46 member (Keyakizaka46: 21 members).",
        m20170815:
          "Hiragana Keyakizaka46 2nd generation joined: Kanemura Miku, Kawata Hina, Kosaka Nao, Tomita Suzuka, Nibu Akari, Hamagishi Hiyori, Matsuda Konoka, Miyata Manamo, Watanabe Miho (Hiragana Keyakizaka46: 20 members).",
        m20181104: "Imaizumi Yui graduated (Keyakizaka46: 20 members).",
        m20181116: "Shida Manaka graduated (Keyakizaka46: 19 members).",
        m20181210:
          "Keyakizaka46 2nd generation joined: Inoue Rina, Seki Yumiko, Takemoto Yui, Tamura Hono, Fujiyoshi Karin, Matsuda Rina, Matsudaira Riko, Morita Hikaru, Yamasaki Ten (Keyakizaka46: 28 members).",
        m20181222: "Yonetani Nanami graduated (Keyakizaka46: 27 members).",
        m20190211: "Hiragana Keyakizaka46 renamed to Hinatazaka46 and separated from Keyakizaka46.",
        m20190730: "Nagahama Neru graduated (Keyakizaka46: 26 members).",
        m20200123: "Hirate Yurina left the group; Oda Nana and Suzumoto Miyu graduated (Keyakizaka46: 23 members).",
        m20200331:
          "New 2nd generation joined: Endo Hikari, Ozono Rei, Onuma Akiho, Kousaka Marino, Masumoto Kira, Moriya Rena; Nagasawa Nanako graduated (Keyakizaka46: 28 members).",
        m20200930: "Ishimori Nijika graduated (Keyakizaka46: 27 members).",
        m20201013: "Sato Shiori graduated; Keyakizaka46 ended activities under that name (Keyakizaka46: 26 members).",
        m20201014: "Keyakizaka46 renamed to Sakurazaka46 (Sakurazaka46: 26 members).",
        m20210314: "Matsudaira Riko graduated (Sakurazaka46: 25 members).",
        m20211219: "Moriya Akane and Watanabe Rika graduated (Sakurazaka46: 23 members).",
        m20220522: "Watanabe Risa graduated (Sakurazaka46: 22 members).",
        m20220611: "Harada Aoi graduated (Sakurazaka46: 21 members).",
        m20220911: "Ozeki Rika graduated (Sakurazaka46: 20 members).",
        m20221109: "Sugai Yuuka graduated (Sakurazaka46: 19 members).",
        m20230106:
          "Sakurazaka46 3rd generation joined: Ishimori Rika, Endo Riko, Odakura Reina, Kojima Nagisa, Taniguchi Airi, Nakashima Yuzuki, Matono Mio, Mukai Itoha, Murai Yu, Murayama Miu, Yamashita Shizuki (Sakurazaka46: 30 members).",
        m20230430: "Seki Yumiko graduated (Sakurazaka46: 29 members).",
        m20231125: "Habu Mizuho graduated (Sakurazaka46: 28 members).",
        m20240201: "Kobayashi Yui graduated (Sakurazaka46: 27 members).",
        m20250113: "Saito Fuyuka graduated (Sakurazaka46: 26 members).",
        m20250216: "Uemura Rina graduated (Sakurazaka46: 25 members).",
        m20250320: "Koike Minami graduated (Sakurazaka46: 24 members).",
        m20250416:
          "Sakurazaka46 4th generation joined: Asai Konomi, Inaguma Hina, Katsumata Haru, Sato Neo, Nakagawa Chihiro, Matsumoto Wako, Meguro Hiiro, Yamakawa Ui, Yamada Momomi (Sakurazaka46: 33 members).",
        m20260228: "Inoue Rina graduated (Sakurazaka46: 32 members).",
        m20260513: "Takemoto Yui graduated (Sakurazaka46: 31 members).",
      },
    },
  };

  function getStoredLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return "";
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage errors so the switch still works for the current page.
    }
  }

  function getLanguage() {
    const stored = getStoredLanguage();
    return languageOrder.includes(stored) ? stored : "zh";
  }

  function getMessageValue(language, key) {
    return key.split(".").reduce((value, part) => {
      if (!value || typeof value !== "object") return undefined;
      return value[part];
    }, messages[language]);
  }

  function interpolate(text, values = {}) {
    return String(text).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  }

  function t(key, values = {}) {
    const language = getLanguage();
    const text = getMessageValue(language, key) ?? getMessageValue("zh", key) ?? key;
    return interpolate(text, values);
  }

  function localize(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[getLanguage()] ?? value.zh ?? "";
    }
    return value ?? "";
  }

  function applyStaticTranslations(root = document) {
    document.documentElement.lang = languageMeta[getLanguage()].htmlLang;

    if (document.body?.dataset.pageTitle) {
      document.title = t(document.body.dataset.pageTitle);
    }

    root.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });

    root.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.title = t(element.dataset.i18nTitle);
    });

    root.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = t(element.dataset.i18nAlt);
    });

    updateLanguageSwitch();
  }

  function updateLanguageSwitch() {
    const button = document.querySelector("#languageSwitch");
    if (!button) return;

    const currentLanguage = getLanguage();
    const meta = languageMeta[currentLanguage];
    button.textContent = meta.short;
    button.title = t("language.switchTitle");
    button.setAttribute("aria-label", t("language.switchLabel", { language: meta.name }));
  }

  function setLanguage(language) {
    if (!languageOrder.includes(language)) return;

    const previousLanguage = getLanguage();
    storeLanguage(language);
    applyStaticTranslations();

    if (previousLanguage !== language) {
      window.dispatchEvent(new CustomEvent("zaka:languagechange", { detail: { language } }));
    }
  }

  function switchToNextLanguage() {
    const index = languageOrder.indexOf(getLanguage());
    setLanguage(languageOrder[(index + 1) % languageOrder.length]);
  }

  function setupLanguageSwitch() {
    const button = document.querySelector("#languageSwitch");
    if (!button || button.dataset.languageSwitchBound === "true") return;

    button.dataset.languageSwitchBound = "true";
    button.addEventListener("click", switchToNextLanguage);
    updateLanguageSwitch();
  }

  function boot() {
    applyStaticTranslations();
    setupLanguageSwitch();
  }

  window.ZakaI18n = {
    applyStaticTranslations,
    getLanguage,
    localize,
    setLanguage,
    switchToNextLanguage,
    t,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
