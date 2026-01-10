const tokushima_mock_d5_aurora = {
    id: "tokushima_mock_d5_aurora",
    title: "徳島県模試 大問5 [オーロラの歴史と科学]",
    category: "中学3年",
    target: "受験生",
    number: "オリジナル入試問題2",
    genre: "対話文",
    badges: ["中3 理科", "対話文", "資料読解", "徳島県模試", "オリジナル入試問題"],
    source: "富山県2025年 (改)",
    summary: {
        "japanese": "カナダからの留学生ライラとタエがオーロラについて話している。タエは北海道のライブ配信で見た赤いオーロラと、ライラのプレゼンの緑のオーロラの違いに疑問を持つ。ライラは、日本では地平線が低い部分（緑）を隠すため、高い部分（赤）しか見えないと説明する。さらにライラは日本の古い歴史書のオーロラ記録を紹介し、1370年には11月にも観測されたことや、1600年以前は京都中心だがそれ以降は江戸や加賀でも記録があることを話す。",
        "notes": [
            "Q1: 科学的理由の推論（地平線による遮蔽）。図解的な思考が必要。",
            "Q2: 表からの情報検索（1370年のもう一つの月）。会話の文脈（1370年）をヒントにする。",
            "Q3: 内容一致。17世紀＝1600年代、江戸＝Edoの読み取りなど、複合的な情報の統合が求められる。"
        ]
    },
    content: `Tae and Lyla are talking about the Northern Lights (Aurora). Lyla is an exchange student from Canada.

Tae: Hello, Lyla. Your presentation about Canada was very interesting. Especially, the pictures of the Northern Lights were amazing.

Lyla: Thank you, Tae. The Northern Lights are one of the most popular tourist attractions in Canada.

Tae: Actually, I watched a live stream of the Northern Lights from Hokkaido last May. But I found one interesting thing. The lights I saw were red, but the lights in your presentation were green. Do you know why?

Lyla: Yes, I looked into it. The lower part of the Northern Lights is green and the higher part is red. In Japan, we can only see the higher part because the [  A  ] hides the lower part.

Tae: I see. That makes sense.

Lyla: I also found a list of records of the Northern Lights in old Japanese history books. Please look at this table.

[IMAGE:/assets/images/tokushima_mock_d5_aurora_table.png|100%]

Tae: Wow, there are two records in 1150. And look at 1370. In that year, the Northern Lights were seen in October and [  B  ].

Lyla: That's right. Also, all the records before 1600 were in Kyoto, but there are some records in other places after 1600.

Tae: That is very interesting!`,
    questions: [
        {
            id: "q1",
            type: "fill-in-blank",
            text: "本文中の [  A  ] に入れるのに最も適する語を、次のア～エから1つ選びなさい。",
            options: [
                "sky",
                "cloud",
                "horizon",
                "ocean"
            ],
            answerLabel: "ウ",
            relatedParagraphs: [
                4
            ]
        },
        {
            id: "q2",
            type: "fill-in-blank",
            text: "表を参考にして、本文中の [  B  ] に適する英語を、月の名前で書きなさい。",
            options: [],
            answerLabel: "November",
            relatedParagraphs: [
                7,
                8
            ]
        },
        {
            id: "q3",
            type: "choice",
            text: "本文の内容と合うものを、次のア～ウから1つ選びなさい。",
            options: [
                "Tae saw the green Northern Lights in a live stream from Hokkaido.",
                "In Japan, people can see the lower part of the Northern Lights clearly.",
                "According to the table, the Northern Lights were observed in Edo in the 17th century."
            ],
            answerLabel: "ウ",
            relatedParagraphs: [
                7
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "タエとライラはオーロラについて話しています。",
            "ライラはカナダからの留学生です。"
        ],
        "1": [
            "タエ：こんにちは、ライラ。",
            "カナダについてのプレゼンテーションはとても興味深かったです。",
            "特にオーロラの写真は素晴らしかったです。"
        ],
        "2": [
            "ライラ：ありがとう、タエ。",
            "オーロラはカナダで最も人気のある観光資源の一つです。"
        ],
        "3": [
            "タエ：実は、去年の5月に北海道からのオーロラのライブ配信を見ました。",
            "でも、一つ面白いことに気づきました。",
            "私が見た光は赤かったけれど、あなたのプレゼンの光は緑でした。",
            "なぜだか分かりますか？"
        ],
        "4": [
            "ライラ：はい、調べてみました。",
            "オーロラの低い部分は緑色で、高い部分は赤色なんです。",
            "日本では、[ 地平線 ] が低い部分を隠してしまうため、高い部分しか見ることができません。"
        ],
        "5": [
            "タエ：なるほど。",
            "理屈が通りますね。"
        ],
        "6": [
            "ライラ：また、日本の古い歴史書にあるオーロラの記録リストも見つけました。",
            "この表を見てください。"
        ],
        "7": [
            "（表：日本におけるオーロラの記録）"
        ],
        "8": [
            "タエ：わあ、1150年には2つの記録がありますね。",
            "それから1370年を見てください。",
            "その年、オーロラは10月と[ 11月 ]に見られました。"
        ],
        "9": [
            "ライラ：その通りです。",
            "また、1600年以前の記録はすべて京都でしたが、1600年以降は他の場所での記録もあります。"
        ],
        "10": [
            "タエ：それはとても興味深いですね！"
        ]
    },
    explanations: {
        "q1": {
            "correct": "horizon",
            "beginner": {
                "summary": "科学的な理由を考える問題です。",
                "detail": "「日本では高い部分（赤）しか見えない」理由として、「低い部分（緑）」が何かに隠されているからです。地理的に離れている場合、地球の丸みにより「地平線(horizon)」が視界を遮ります。元画像の注釈にもヒントがあります。",
                "keywords": [
                    "hide (隠す)",
                    "lower part (低い部分)",
                    "higher part (高い部分)",
                    "horizon (地平線)",
                    "make sense (なるほど/道理にかなう)",
                    "because (～なので)",
                    "look into ~ (～を調べる)",
                    "only (～だけ)",
                    "actually (実は/実際は)"
                ]
            },
            "advanced": {
                "summary": "論理的帰結の推論",
                "detail": "元テキストの論理「horizon hides the lower part」を正確に把握する問題です。対話文における Lyla の説明（Lower is green, higher is red）と Tae の疑問（Saw red, but Lyla's were green）を結びつける地理的・科学的要因として horizon を導き出す論理的思考力が問われます。",
                "keywords": [
                    "logical consequence (論理的帰結)",
                    "inference (推論)",
                    "scientific reason (科学的理由)",
                    "exchange student (留学生)",
                    "presentation (プレゼンテーション)",
                    "attraction (アトラクション/見どころ)",
                    "stream (配信)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "The lower part / of the Northern Lights / is green / and the higher part / is red.",
                        "translation": "低い部分は / オーロラの / 緑色で / そして高い部分は / 赤色です。"
                    }
                ]
            }
        },
        "q2": {
            "correct": "November",
            "beginner": {
                "summary": "表から情報を読み取る問題です。",
                "detail": "対話文の \"Look at 1370.\" に注目し、表の中の「1370年」の行を探します。10月(Oct.)の次の行に \"1370年 11月\" とあるので、英語で November と書きます。",
                "keywords": [
                    "table (表)",
                    "record (記録)",
                    "history books (歴史書)",
                    "old (古い)",
                    "seen (seeの過去分詞：見られる)",
                    "also (また)",
                    "that year (その年)",
                    "October (10月)",
                    "November (11月)"
                ]
            },
            "advanced": {
                "summary": "データ検索と形式変換",
                "detail": "徳島県の大問5では、対話文の流れ（1370年の話）に沿って図表から特定のデータを検索する問題が必ず出題されます。略称（Nov.）ではなく正式名称（November）で、かつ文頭や特定の位置に合わせた正しい綴りで書く力が求められます。1150年に2つの記録があるという情報など、周辺データとの混同を防ぐ注意深いスキャニングが必要です。",
                "keywords": [
                    "data search (データ検索)",
                    "retrieval (検索/取り出し)",
                    "abbreviation (略称)",
                    "spelling (綴り)",
                    "locate (特定する)",
                    "context (文脈)",
                    "especially (特に)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "In that year, / the Northern Lights / were seen / in October and November.",
                        "translation": "その年 / オーロラは / 見られました / 10月と11月に。"
                    }
                ]
            }
        },
        "q3": {
            "correct": "According to the table, the Northern Lights were observed in Edo in the 17th century.",
            "beginner": {
                "summary": "内容一致問題です。",
                "detail": "ア: タエが見たのは「赤色」なので誤り。イ: 日本では低い部分は見えないので誤り。ウ: 表を見ると1653年にEdoでの記録があります。1653年は17世紀(17th century)なので正解です。",
                "keywords": [
                    "observed (観測された/見られた)",
                    "century (世紀)",
                    "clearly (はっきりと)",
                    "according to ~ (～によると)",
                    "observed (観測された = seen)",
                    "found (気づいた/見つけた)",
                    "popular (人気のある)",
                    "tourist (観光客)",
                    "picture (写真)"
                ]
            },
            "advanced": {
                "summary": "複合的な情報の統合と言い換え",
                "detail": "1653年 = 17世紀(17th century) という世紀表現への変換と、表の中の「場所（Edo）」を同時に照合させる複合的な問題です。徳島県入試では、表の数値を抽象化（「半分以上」「数回」など）や、別形式（「世紀」や「〇〇年前」など）への言い換えが多用されるため、選択肢の細部まで正確に吟味する練習が必要です。",
                "keywords": [
                    "integration (統合)",
                    "transformation (変換)",
                    "paraphrase (言い換え)",
                    "observe (観測する)",
                    "verify (検証する)",
                    "detail (詳細)",
                    "other places (他の場所)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "All the records / before 1600 / were in Kyoto, / but there are some records / in other places / after 1600.",
                        "translation": "全ての記録は / 1600年以前の / 京都にありましたが / いくつかの記録があります / 他の場所に / 1600年以降は。"
                    }
                ]
            }
        }
    },
    authorIntent: "【出典・改変】\n富山県2025年入試（予想・再現）の資料を基にしています。\n\n【徳島県入試再現のポイント】\n1. **対話と資料の融合 (大問5形式):** 元の問題は場面1と場面2に分かれていましたが、徳島県の大問5の傾向に合わせ、一つの連続した対話文に統合しました。\n2. **図表読解問題:** Q2のように、対話の文脈（1370年の話）を頼りに、表から具体的な情報（November）を検索させる問題は徳島県で頻出です。\n3. **言い換えの選択肢:** Q3では、単に表を見るだけでなく「1653年→17世紀」という知識の変換を求めることで、難易度を徳島県の標準レベルに調整しました。\n\n【学習アドバイス】\n資料問題では、対話文に出てくる数字や年号をヒントに、図表の見るべき場所を素早く特定する練習をしましょう。"
};

export default tokushima_mock_d5_aurora;
