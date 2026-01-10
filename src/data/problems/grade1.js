const winterVacationProblem = {
    id: "p4",
    title: "Alice and Kenta's Winter Vacation",
    category: "中学1年",
    target: "中1",
    number: "中1-問題1",
    genre: "対話",
    source: "学力テスト 中1生 2025年度 12月",
    badges: [
        "中1 一般動詞",
        "中1 疑問詞",
        "中1 want to",
        "学力テスト",
        "文化",
        "対話"
    ],
    content: `Alice: What is your plan for the winter *vacation, Kenta?

Kenta: Every year, I go to Ibaraki with my family during the winter vacation.

Alice: That's nice. What do you do there?

Kenta: Every year, on December 30, we visit my uncle and my aunt in the morning. We visit some places around their house together before lunch. This year, I *want to go to *Kairakuen. It's a large park, and we can see a big old tree there. It's about eight hundred years old!

Alice: Wow. I want to see it someday.

Kenta: And in the afternoon, we make *mochi. And on *New Year's Eve, we always visit my *grandparents.

Alice: Great.

Kenta: In Japan, many people visit their grandparents on New Year's Eve or on *New Year's Day. Alice, what do people in Brazil do on those days?

Alice: Many people go to the beach.

Kenta: The beach?

Alice: Yes. In Brazil, it's very hot in December. People enjoy swimming in the sea, and we see beautiful fireworks on the beach at night on New Year's Eve.

Kenta: Oh, I see. It's summer in Brazil in December.

Alice: <u>①That</u> is right. And in Brazil, many people wear white clothes on New Year's Eve and on New Year's Day.

Kenta: <u>②That</u>'s interesting!

Alice: And people also have a *party at home on those days. My grandparents live with my uncle and my aunt in Brazil. They have a party together on New Year's Day. At the party, they sing songs and dance together. My aunt is a good dancer.

Kenta: Nice.

Alice: And I often talk with them *on a video call. On New Year's Day, I enjoy the party on a video call.

Kenta: That's great.

Alice: And in Brazil, people eat a chicken *tart on New Year's Day. It's a small pie, and chicken and tomatoes are in it. My grandmother cooks it for the party every year. I want to cook it with my mother during this winter vacation.

Kenta: Good.`,
    footnotes: [
        "vacation 休暇，休み",
        "want to ～ ～したい",
        "New Year's Eve 大みそか",
        "grandparents 祖父母",
        "New Year's Day 元日",
        "party パーティー",
        "on a video call ビデオ通話で",
        "tart タルト"
    ],
    questions: [
        {
            id: "p4_q1",
            text: "下線部①が指す具体的な内容として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "アリスが冬休みにブラジルに行くということ。",
                "アリスが冬休みに祖父母を訪ねるということ。",
                "ブラジルでは、冬に海で泳ぐということ。",
                "ブラジルでは、12月は夏だということ。"
            ],
            answerLabel: "エ",
            type: "choice",
            relatedParagraphs: [
                11,
                12
            ]
        },
        {
            id: "p4_q2",
            text: `下線部②が指す具体的な内容を次の形で表すとき、（　）に入る最も適当な漢字１字を答えなさい。

ブラジルでは、大みそかと元日に多くの人が（　）色の服を着ること。`,
            options: [],
            answerLabel: "白",
            type: "fill-in-blank",
            relatedParagraphs: [
                12
            ]
        },
        {
            id: "p4_q3",
            text: "次は、健太が年末に行うことです。本文の内容に合うようにア～エを健太が行う順に並べかえ、その順序を記号で答えなさい。",
            options: [
                "祖父母を訪ねる",
                "もちを作る",
                "おじとおばを訪ねる",
                "おじとおばの家の周辺のいくつかの場所を訪れる"
            ],
            answerLabel: "ウ → エ → イ → ア",
            type: "sort",
            relatedParagraphs: [
                3,
                5
            ]
        },
        {
            id: "p4_q4",
            text: `次の文が本文の内容に合うように、（　）に入る最も適当なものをあとから１つ選び、記号で答えなさい。

The big old tree in Kairakuen is about ( ) years old.`,
            options: [
                "700",
                "800",
                "7,000",
                "8,000"
            ],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p4_q5",
            text: `本文の内容に合うように次の質問に英語で答えるとき、（　）に入る最も適当な１語を答えなさい。

<質問> Who is a good dancer in Alice's family?
<答え> Alice's ( ) is.`,
            options: [],
            answerLabel: "aunt",
            type: "fill-in-blank",
            relatedParagraphs: [
                14
            ]
        },
        {
            id: "p4_q6",
            text: `次は、この対話のあとに健太が書いた【メモの一部】です。本文の内容に合うように、（　）に入る組み合わせとして最も適当なものを右から１つ選び、記号で答えなさい。

【メモの一部】
ブラジルの人の年末年始の過ごし方
・( ① )に行き、大みそかの夜にはそこで花火を見る。
・( ② )でパーティーをする。`,
            options: [
                "① 祖父母の家　② 自宅",
                "① 祖父母の家　② 浜辺",
                "① 浜辺　② 自宅",
                "① 浜辺　② 浜辺"
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                10,
                14
            ]
        },
        {
            id: "p4_q7_1",
            text: `次の文が、本文の内容と合っていれば○、合っていなければ×を選びなさい。

① 健太は毎年、冬休みにひとりで茨城を訪れます。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "×",
            type: "choice",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p4_q7_2",
            text: `次の文が、本文の内容と合っていれば○、合っていなければ×を選びなさい。

② アリスの祖父母とおじとおばは、ブラジルでいっしょに住んでいます。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                14
            ]
        },
        {
            id: "p4_q7_3",
            text: `次の文が、本文の内容と合っていれば○、合っていなければ×を選びなさい。

③ アリスはこの冬休みの間に、お母さんといっしょにチキンタルトを作りたいと思っています。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                18
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "アリス: ケンタ、冬休みの計画は何ですか？"
        ],
        "1": [
            "ケンタ: 毎年、冬休みの間は家族と一緒に茨城に行きます。"
        ],
        "2": [
            "アリス: それはいいですね。",
            "そこで何をするのですか？"
        ],
        "3": [
            "ケンタ: 毎年、12月30日の午前中に、おじとおばを訪ねます。",
            "昼食の前に、一緒に彼らの家の周りのいくつかの場所を訪れます。",
            "今年は、偕楽園に行きたいです。",
            "そこは大きな公園で、そこで大きな古い木を見ることができます。",
            "それは約800歳です！"
        ],
        "4": [
            "アリス: わあ。",
            "私はいつかそれを見てみたいです。"
        ],
        "5": [
            "ケンタ: そして午後には、もちを作ります。",
            "そして大みそかには、いつも祖父母を訪ねます。"
        ],
        "6": [
            "アリス: すばらしいですね。"
        ],
        "7": [
            "ケンタ: 日本では、多くの人が大みそかや元日に祖父母を訪ねます。",
            "アリス、ブラジルの人々はそれらの日に何をしますか？"
        ],
        "8": [
            "アリス: 多くの人がビーチに行きます。"
        ],
        "9": [
            "ケンタ: ビーチですか？"
        ],
        "10": [
            "アリス: はい。",
            "ブラジルでは、12月はとても暑いです。",
            "人々は海で泳ぐことを楽しみ、私たちは大みそかの夜にビーチできれいな花火を見ます。"
        ],
        "11": [
            "ケンタ: ああ、なるほど。",
            "ブラジルでは12月は夏なんですね。"
        ],
        "12": [
            "アリス: その通りです。",
            "そしてブラジルでは、多くの人が大みそかと元日に白い服を着ます。"
        ],
        "13": [
            "ケンタ: それは面白いですね！"
        ],
        "14": [
            "アリス: そして人々はそれらの日に自宅でパーティーもします。",
            "私の祖父母はブラジルでおじとおばと一緒に住んでいます。",
            "彼らは元日に一緒にパーティーをします。",
            "パーティーでは、彼らは一緒に歌を歌ったり踊ったりします。",
            "私のおばはダンスが上手です。"
        ],
        "15": [
            "ケンタ: いいですね。"
        ],
        "16": [
            "アリス: そして私はよくビデオ通話で彼らと話します。",
            "元日には、ビデオ通話でパーティーを楽しみます。"
        ],
        "17": [
            "ケンタ: それはすばらしいですね。"
        ],
        "18": [
            "アリス: そしてブラジルでは、人々は元日にチキンタルトを食べます。",
            "それは小さなパイで、その中に鶏肉とトマトが入っています。",
            "私の祖母は毎年パーティーのためにそれを作ります。",
            "私はこの冬休みの間に母と一緒にそれを作りたいです。"
        ],
        "19": [
            "ケンタ: いいですね。"
        ]
    },
    explanations: {
        p4_q1: {
            correct: "エ",
            beginner: {
                summary: "指示語「That」は直前の文の内容を指します。",
                detail: `Kentaが直前に言った <ref target="11-1">It's summer in Brazil in December.</ref>（ブラジルでは12月は夏なんですね）に対して、Aliceが「その通りです」と答えています。したがって、Thatは「ブラジルでは12月は夏であること」を指します。`,
                keywords: [
                    "plan (計画)",
                    "winter (冬)",
                    "visit (訪れる)",
                    "large (大きい)",
                    "old (古い)",
                    "beach (浜辺)",
                    "summer (夏)",
                    "right (正しい)",
                    "wear (着る)",
                    "clothes (服)",
                    "interesting (面白い)",
                    "sing (歌う)"
                ]
            },
            advanced: {
                summary: "指示代名詞thatが指す内容を文脈から特定します。",
                detail: `会話の流れを確認します。Aliceが「ブラジルでは12月は暑く、泳いだり花火を見たりする」と述べ、それに対してKentaが「なるほど、12月は夏なんだね」と要約しました。AliceはそのKentaの発言を肯定して <ref target="12-0">That is right.</ref> と言っています。`,
                keywords: [
                    "fireworks (花火)",
                    "swimming (泳ぐこと)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "It's summer in Brazil / in December.",
                        translation: "ブラジルでは夏です / 12月は。"
                    },
                    {
                        text: "That is right.",
                        "translation": "その通りです。"
                    }
                ]
            }
        },
        p4_q2: {
            correct: "白",
            beginner: {
                summary: "直後の文に答えがあります。",
                detail: `下線部②の直前の文 <ref target="12-1">...many people wear white clothes...</ref>（多くの人が白い服を着ます）の内容を、Kentaが「それは面白い」と言っています。white は「白」という意味です。`,
                keywords: [
                    "white (白)",
                    "clothes (服)",
                    "interesting (面白い)",
                    "together (一緒に)"
                ]
            },
            advanced: {
                summary: "文脈から指示内容を把握し、語彙の意味を答える問題です。",
                detail: `Aliceの発言 <ref target="12-1">many people wear white clothes</ref> を受けたKentaの反応です。「白い服を着る」という文化的な習慣に対して興味を示しています。`,
                keywords: [
                    "party (パーティー)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "many people wear / white clothes / on New Year's Eve.",
                        translation: "多くの人が着ます / 白い服を / 大みそかに。"
                    }
                ]
            }
        },
        p4_q3: {
            correct: "ウ → エ → イ → ア",
            beginner: {
                summary: "時を表す言葉に注目して並べ替えます。",
                detail: `Kentaの予定を確認しましょう。
1. <ref target="3-0">on December 30 ... in the morning</ref>：おじとおばを訪ねる（ウ）
2. <ref target="3-1">before lunch</ref>：家の周りの場所を訪れる（エ）
3. <ref target="5-0">in the afternoon</ref>：もちを作る（イ）
4. <ref target="5-1">on New Year's Eve</ref>（大みそか）：祖父母を訪ねる（ア）`,
                keywords: [
                    "morning (朝)",
                    "lunch (昼食)",
                    "afternoon (午後)",
                    "make (作る)"
                ]
            },
            advanced: {
                summary: "時系列を示す表現（morning, before lunch, afternoon, New Year's Eve）を追います。",
                detail: `同じ12月30日の中での出来事（午前、昼食前、午後）と、その後の大みそかの出来事を区別して並べ替えます。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        "text": "Every year, / on December 30, / we visit my uncle and my aunt / in the morning.",
                        "translation": "毎年、 / 12月30日に、 / 私たちはおじとおばを訪ねます / 午前中に。"
                    }
                ]
            }
        },
        p4_q4: {
            correct: "イ",
            beginner: {
                summary: "数字の英語表現を聞き取る・読み取る問題です。",
                detail: `偕楽園の木についての記述 <ref target="3-4">It's about eight hundred years old!</ref> を見つけましょう。eight hundred は 800 です。`,
                keywords: [
                    "hundred (百)",
                    "thousand (千)"
                ]
            },
            advanced: {
                summary: "数詞の理解を問う問題です。",
                detail: `eight hundred = 8 × 100 = 800。ちなみに、thousandは1,000です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        "text": "It's about / eight hundred years old!",
                        "translation": "それはおよそ / 800歳です！"
                    }
                ]
            }
        },
        p4_q5: {
            correct: "aunt",
            beginner: {
                summary: "「誰がダンスが上手か」を探します。",
                detail: `Aliceの家族についての記述で <ref target="14-4">My aunt is a good dancer.</ref>（私のおばはダンスが上手です）とあります。答えは aunt です。`,
                keywords: [
                    "aunt (おば)",
                    "dancer (ダンサー)",
                    "good (上手な)"
                ]
            },
            advanced: {
                "summary": "Whoで始まる疑問文に対する答えを本文から抜き出します。",
                "detail": `質問は "Who is a good dancer...?" です。本文の "My aunt is a good dancer." から、主語の aunt を答えます。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        "text": "At the party, / they sing songs / and dance together.",
                        "translation": "パーティーでは、 / 彼らは歌を歌い / そして一緒に踊ります。"
                    }
                ]
            }
        },
        p4_q6: {
            correct: "ウ",
            beginner: {
                summary: "ブラジルの年末の過ごし方を確認します。",
                detail: `①花火を見る場所：<ref target="10-2">we see beautiful fireworks on the beach</ref> → 浜辺 (beach)
②パーティーをする場所：<ref target="14-0">people also have a party at home</ref> → 自宅 (home)`,
                keywords: [
                    "fireworks (花火)",
                    "beach (浜辺)",
                    "home (家、自宅)"
                ]
            },
            advanced: {
                summary: "特定の活動（花火、パーティー）に関連する場所の情報を検索します。",
                detail: `「花火」は beach、「パーティー」は home と結びついています。祖父母の家でパーティーをするのはAliceの家族の例であり、一般的な文脈（people also have...）では home と述べられています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "People enjoy swimming / in the sea,",
                        "translation": "人々は泳ぐことを楽しみます / 海で、"
                    },
                    {
                        text: "and we see beautiful fireworks / on the beach.",
                        "translation": "そして私たちは美しい花火を見ます / 浜辺で。"
                    }
                ]
            }
        },
        p4_q7_1: {
            correct: "×",
            beginner: {
                summary: "「ひとりで」行くかどうかがポイントです。",
                detail: `本文の冒頭で <ref target="1-0">I go to Ibaraki with my family</ref>（私は家族と一緒に茨城に行きます）と言っています。「ひとりで」ではありません。`,
                keywords: [
                    "with (～と一緒に)",
                    "family (家族)"
                ]
            },
            advanced: {
                summary: "詳細情報の真偽判定です。",
                detail: `with my family（家族と）とあるので、alone（一人で）ではありません。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Every year, / I go to Ibaraki / with my family.",
                        translation: "毎年、 / 私は茨城に行きます / 家族と一緒に。"
                    }
                ]
            }
        },
        p4_q7_2: {
            correct: "○",
            beginner: {
                summary: "誰と一緒に住んでいるかを確認します。",
                "detail": `Aliceは <ref target="14-1">My grandparents live with my uncle and my aunt in Brazil.</ref>（私の祖父母は、おじとおばと一緒に住んでいます）と言っています。内容は合っています。`,
                keywords: [
                    "live (住む)",
                    "uncle (おじ)"
                ]
            },
            advanced: {
                "summary": "家族の居住状況に関する記述を確認します。",
                "detail": `live with...（～と一緒に住んでいる）という表現が使われています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "My grandparents live / with my uncle and my aunt / in Brazil.",
                        translation: "私の祖父母は住んでいます / おじとおばと一緒に / ブラジルで。"
                    }
                ]
            }
        },
        p4_q7_3: {
            correct: "○",
            beginner: {
                summary: "Aliceが冬休みにしたいことを確認します。",
                detail: `最後のAliceのセリフ <ref target="18-3">I want to cook it with my mother during this winter vacation.</ref>（私はこの冬休みに母と一緒にそれを作りたいです）と一致します。「それ」はチキンタルトのことです。`,
                keywords: [
                    "cook (料理する)",
                    "during (～の間)"
                ]
            },
            advanced: {
                summary: "願望を表す want to の文を確認します。",
                detail: `cook it (chicken tart) with my mother という記述と一致します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I want to cook it / with my mother / during this winter vacation.",
                        translation: "私はそれを作りたいです / 母と一緒に / この冬休みの間に。"
                    }
                ]
            }
        }
    }
};

const tedsSchoolLifeProblem = {
    id: "p7",
    title: "Ted's School Life in Japan",
    category: "中学1年",
    target: "中1",
    number: "中1-問題2",
    genre: "対話",
    source: "学力テスト 中1生 2025年度 11月",
    badges: [
        "中1 一般動詞",
        "中1 疑問詞",
        "中1 代名詞",
        "中1 時間・時刻",
        "学力テスト",
        "生活",
        "対話"
    ],
    content: `Riku: I walk to school every day. Do you walk to school, too?

Ted: To this school, yes, I do. How about you, Mami?

Mami: Well, I come to school by bike on sunny days, and I walk to school on rainy days.

Ted: Is your house *far from this school, Mami?

Mami: Yes. On sunny days, I *leave home at eight and *get to school at eight fifteen. But on rainy days, I leave home at seven thirty and get to school at eight twenty.

Ted: That's tough! In America, many students live far from their schools. They go to school by bus or in their parents' car.

Riku: Do you go to school by bus in America?

Ted: Yes. In America, we have <u>a school bus</u>. It's a yellow bus, and only students can use it. We can *get on and get off the bus *in front of our house.

Mami: That's nice!

Ted: And my sisters go to school in my mother's car. I have two sisters. They are elementary school students.

Mami: I see.

Ted: In Japan, I live with my *host family. Their house is near this school.

Riku: Ted, do you come to school *alone?

Ted: Yes. How about you, Riku?

Riku: Well, I walk from Kita Station to school alone.

Ted: From Kita Station?

Riku: Yes. I have two brothers, and I leave home with them. We walk to Kita Station together. They are *high school students, and they *take a train at Kita Station. So, I walk from Kita Station to school alone.

Ted: I see. My host family's house is near Kita Station, Riku. Let's walk from Kita Station to school together.

Riku: That's nice. Let's meet at Kita Station at eight from tomorrow morning.

Ted: OK! I'm so happy.`,
    footnotes: [
        "far from ～ ～から遠く離れて",
        "leave ～を出発する",
        "get to ～ ～に着く",
        "get on and get off ～ ～に乗り降りする",
        "in front of ～ ～の前で",
        "host ホームステイ先の",
        "alone ひとりで",
        "high school 高校",
        "take a train 電車に乗る"
    ],
    questions: [
        {
            id: "p7_q1",
            text: `テッドの日本とアメリカでの通学方法を表したものとして最も適当なものを次から１つ選び、記号で答えなさい。

![イラスト](/images/teds_school_life_q1.png)`,
            options: [],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                1,
                7
            ]
        },
        {
            id: "p7_q2",
            text: `次の文が本文の内容に合うように、（　）に入る最も適当な算用数字を答えなさい。

真美の家から学校まで歩いて（　）分かかります。`,
            options: [],
            answerLabel: "50",
            type: "fill-in-blank",
            relatedParagraphs: [
                4
            ]
        },
        {
            id: "p7_q3",
            text: "下線部 a school bus について、本文でテッドが説明していないものを次から１つ選び、記号で答えなさい。",
            options: [
                "乗り降りできる場所",
                "色",
                "運賃",
                "利用できる人"
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                7
            ]
        },
        {
            id: "p7_q4",
            text: `テッドと陸の兄弟姉妹構成とその通学方法についてまとめた次の表を完成させるとき、（ ⓐ ）～（ ⓓ ）に入る最も適当なものをあとからそれぞれ１つずつ選び、記号で答えなさい。

![表](/images/teds_school_life_q4.png)`,
            options: [],
            answerLabel: "ⓐ エ, ⓑ キ, ⓒ イ, ⓓ カ",
            type: "fill-in-blank",
            relatedParagraphs: [
                9,
                16
            ]
        },
        {
            id: "p7_q5_1",
            text: `次の文が、本文の内容と合っていれば○で、合っていなければ×で答えなさい。

① 真美は晴れの日には自転車で学校へ行きます。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                2,
                4
            ]
        },
        {
            id: "p7_q5_2",
            text: `次の文が、本文の内容と合っていれば○で、合っていなければ×で答えなさい。

② テッドと陸と真美の通っている中学校は、テッドのホームステイ先の家から遠く離れています。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "×",
            type: "choice",
            relatedParagraphs: [
                11
            ]
        },
        {
            id: "p7_q5_3",
            text: `次の文が、本文の内容と合っていれば○で、合っていなければ×で答えなさい。

③ テッドと陸は、この対話が交わされた日の翌朝から、北駅(Kita Station)で待ち合わせて学校までいっしょに行く約束をしました。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                18,
                19
            ]
        }
    ],
    "sentenceTranslations": {
        "0": [
            "リク: 僕は毎日歩いて学校へ行きます。",
            "あなたも歩いて学校へ行きますか？"
        ],
        "1": [
            "テッド: この学校へは、はい、そうです。",
            "あなたはどうですか、マミ？"
        ],
        "2": [
            "マミ: ええと、私は晴れの日には自転車で学校に来て、雨の日には歩いて学校へ行きます。"
        ],
        "3": [
            "テッド: あなたの家はこの学校から遠いですか、マミ？"
        ],
        "4": [
            "マミ: はい。",
            "晴れの日には、私は8時に家を出て、8時15分に学校に着きます。",
            "でも雨の日には、私は7時30分に家を出て、8時20分に学校に着きます。"
        ],
        "5": [
            "テッド: それは大変ですね！",
            "アメリカでは、多くの生徒が学校から遠くに住んでいます。",
            "彼らはバスか両親の車で学校に行きます。"
        ],
        "6": [
            "リク: アメリカではあなたはバスで学校に行きますか？"
        ],
        "7": [
            "テッド: はい。",
            "アメリカでは、私たちはスクールバスがあります。",
            "それは黄色いバスで、生徒だけがそれを使うことができます。",
            "私たちは家の前でバスに乗ったり降りたりできます。"
        ],
        "8": [
            "マミ: それはいいですね！"
        ],
        "9": [
            "テッド: そして私の姉妹たちは母の車で学校に行きます。",
            "私には2人の姉妹がいます。",
            "彼女たちは小学生です。"
        ],
        "10": [
            "マミ: なるほど。"
        ],
        "11": [
            "テッド: 日本では、私はホストファミリーと一緒に住んでいます。",
            "彼らの家はこの学校の近くです。"
        ],
        "12": [
            "リク: テッド、あなたは一人で学校に来ますか？"
        ],
        "13": [
            "テッド: はい。",
            "あなたはどうですか、リク？"
        ],
        "14": [
            "リク: ええと、私は北駅から学校まで一人で歩きます。"
        ],
        "15": [
            "テッド: 北駅から？"
        ],
        "16": [
            "リク: はい。",
            "私には2人の兄弟がいて、彼らと一緒に家を出ます。",
            "私たちは一緒に北駅まで歩きます。",
            "彼らは高校生で、北駅で電車に乗ります。",
            "だから、私は北駅から学校まで一人で歩きます。"
        ],
        "17": [
            "テッド: なるほど。",
            "私のホストファミリーの家は北駅の近くです、リク。",
            "北駅から学校まで一緒に歩きましょう。"
        ],
        "18": [
            "リク: それはいいですね。",
            "明日の朝から8時に北駅で会いましょう。"
        ],
        "19": [
            "テッド: OK！",
            "私はとても嬉しいです。"
        ]
    },
    explanations: {
        p7_q1: {
            correct: "イ",
            beginner: {
                summary: "テッドの日本とアメリカでの通学方法を確認します。",
                detail: `日本での通学：<ref target="1-0">To this school, yes, I do.</ref>（歩いて行きます）。
アメリカでの通学：<ref target="7-0">In America, we have a school bus.</ref>（スクールバスがあります）。
「日本＝徒歩」「アメリカ＝バス」の組み合わせを選びます。`,
                keywords: [
                    "walk (歩く)",
                    "school bus (スクールバス)",
                    "Japan (日本)",
                    "America (アメリカ)"
                ]
            },
            advanced: {
                summary: "対話の文脈から情報を抽出する問題です。",
                detail: `Rikuの質問 "Do you walk to school, too?" に対するTedの答え "To this school, yes, I do." から、日本では徒歩通学だとわかります。また、アメリカについて "In America, we have a school bus." と述べています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I walk to school / every day.",
                        translation: "私は歩いて学校へ行きます / 毎日。"
                    },
                    {
                        text: "In America, / we have a school bus.",
                        translation: "アメリカでは、 / 私たちはスクールバスがあります（利用します）。"
                    }
                ]
            }
        },
        p7_q2: {
            correct: "50",
            beginner: {
                summary: "「歩いて」行く日（雨の日）の時間を計算します。",
                detail: `マミは「雨の日には歩いて行く」と言っています。<ref target="4-2">on rainy days, I leave home at seven thirty and get to school at eight twenty.</ref>
7時30分に出発し、8時20分に到着するので、所要時間は50分です。`,
                keywords: [
                    "rainy (雨の)",
                    "leave (出発する)",
                    "get to (着く)",
                    "thirty (30)",
                    "twenty (20)"
                ]
            },
            advanced: {
                "summary": "時刻の計算問題です。",
                "detail": `sunny days（自転車）とrainy days（徒歩）の記述を混同しないように注意します。徒歩（on rainy days）の場合は、seven thirty (7:30) から eight twenty (8:20) までの時間なので、50 minutes です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I leave home / at seven thirty / and get to school / at eight twenty.",
                        translation: "私は家を出発します / 7時30分に / そして学校に着きます / 8時20分に。"
                    }
                ]
            }
        },
        p7_q3: {
            correct: "ウ",
            beginner: {
                summary: "書かれていない情報を選びます。",
                detail: `ア：<ref target="7-2">in front of our house</ref>（場所）
イ：<ref target="7-1">yellow bus</ref>（色）
エ：<ref target="7-1">only students can use it</ref>（利用できる人）
ウの「運賃（お金）」については説明していません。`,
                keywords: [
                    "yellow (黄色い)",
                    "student (生徒)",
                    "use (使う)",
                    "house (家)"
                ]
            },
            advanced: {
                summary: "詳細情報の照合問題です（Not問題）。",
                "detail": `color (yellow), users (only students), boarding location (in front of our house) は言及されていますが、fare (cost) については言及されていません。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "It's a yellow bus, / and only students / can use it.",
                        translation: "それは黄色いバスです、 / そして生徒だけが / それを使うことができます。"
                    }
                ]
            }
        },
        p7_q4: {
            correct: "ⓐ エ, ⓑ キ, ⓒ イ, ⓓ カ",
            beginner: {
                summary: "兄弟姉妹の構成と通学方法を整理します。",
                "detail": `テッド：<ref target="9-1">I have two sisters. They are elementary school students.</ref> → 妹が2人（エ）。<ref target="9-0">go to school in my mother's car.</ref> → 親の車（キ）。
リク：<ref target="16-1">I have two brothers... They are high school students</ref> → 兄が2人（イ）。<ref target="16-2">walk to Kita Station... take a train</ref> → 徒歩と電車（カ）。`,
                keywords: [
                    "sister (姉妹)",
                    "elementary school (小学校)",
                    "brother (兄弟)",
                    "high school (高校)",
                    "train (電車)"
                ]
            },
            advanced: {
                summary: "情報を分類して表を完成させます。",
                detail: `Elementary school students（小学生）は自分より年下なので「妹」、High school students（高校生）は年上なので「兄」と判断します。交通手段も正確に抜き出します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "They are high school students, / and they take a train / at Kita Station.",
                        translation: "彼らは高校生です、 / そして彼らは電車に乗ります / 北駅で。"
                    }
                ]
            }
        },
        p7_q5_1: {
            correct: "○",
            beginner: {
                summary: "マミの通学方法を確認します。",
                detail: `<ref target="2-0">I come to school by bike on sunny days</ref>（晴れの日には自転車で学校に来ます）と言っています。合っています。`,
                keywords: [
                    "bike (自転車)",
                    "sunny (晴れの)"
                ]
            },
            advanced: {
                summary: "真偽判定問題です。",
                detail: `by bike = 自転車で。sunny days = 晴れの日。記述と一致します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I come to school / by bike / on sunny days.",
                        translation: "私は学校に来ます / 自転車で / 晴れの日に。"
                    }
                ]
            }
        },
        p7_q5_2: {
            correct: "×",
            beginner: {
                summary: "テッドの家の場所を確認します。",
                detail: `<ref target="11-1">Their house is near this school.</ref>（彼らの家はこの学校の近くです）と言っています。「遠く離れて」は間違いです。`,
                keywords: [
                    "near (近くに)",
                    "this (この)"
                ]
            },
            advanced: {
                summary: "真偽判定問題です。",
                detail: `本文の near（近い）と、選択肢の far from（遠い）が対立しています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Their house is / near this school.",
                        translation: "彼らの家は～です / この学校の近く。"
                    }
                ]
            }
        },
        p7_q5_3: {
            correct: "○",
            beginner: {
                summary: "最後の約束を確認します。",
                detail: `リクが <ref target="18-1">Let's meet at Kita Station at eight from tomorrow morning.</ref>（明日の朝から8時に北駅で会いましょう）と提案し、テッドが OK と言っています。`,
                keywords: [
                    "meet (会う)",
                    "tomorrow (明日)"
                ]
            },
            advanced: {
                summary: "真偽判定問題です。",
                detail: `meet (待ち合わせる), at Kita Station (場所), tomorrow morning (日時)。全ての条件が本文と一致します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Let's meet / at Kita Station / at eight / from tomorrow morning.",
                        translation: "会いましょう / 北駅で / 8時に / 明日の朝から。"
                    }
                ]
            }
        }
    }
}

export const ayaAndBobProblem = {
    id: "p10",
    title: "Aya and Bob's Conversation",
    category: "中学1年",
    target: "中1",
    number: "中1-問題3",
    genre: "対話",
    source: "学力テスト 中1生 2024年度 1月",
    badges: [
        "中1 一般動詞",
        "中1 三人称単数現在",
        "中1 疑問詞",
        "中1 時間・時刻",
        "学力テスト",
        "生活",
        "対話"
    ],
    content: `Bob: Hi, Aya. What do you have in your hand?

Aya: Hello, Bob. I have the school *newspaper. I'm *a member of the newspaper club. We write about a student at this school every month. Look. This boy plays the piano very well. ![Newspaper](/images/aya_bob_school_newspaper.png)

Bob: Oh, it is <u>①Shigeru</u>.

Aya: Yes. Do you know Shigeru?

Bob: Of course. He is my *host brother. I live with him. He practices the piano at home after dinner every day. He practices it in the music club on Tuesdays and Fridays, too.

Aya: Oh, I see.

Bob: I don't play the piano, but I listen to his piano performance after dinner every day.

Aya: <u>②That</u>'s nice. Well, Shigeru has a sister, right?

Bob: Yes. Shigeru's sister's name is Rina. Rina is eight years old. She likes basketball, and she plays basketball very well.

Aya: I know Rina. Rina and my sister are good friends. My sister is also eight years old, and she plays basketball, too. Her name is Moe. Rina and Moe are on the Midori Basketball Team. They practice basketball at Midori Gym on Saturdays.

Bob: Oh, your sister and Rina play basketball together.

Aya: Yes. Rina sometimes comes to our house and talks about her family. Her mother is a nurse, and her father is a *baker, right?

Bob: Yes. They are very busy. My host mother usually comes home at 5 p.m., and she cooks dinner. She works on Saturdays, too, and she comes home at 10 p.m. So my host father cooks dinner on Saturdays. Rina and I help him.

Aya: That's great.

Bob: My host father gets up at 5 a.m. and *leaves home at 6 a.m. He usually comes home at 9 p.m. He is *off work on Tuesdays and Saturdays. On Tuesdays, Rina and I watch basketball games *on TV with him. On Saturdays, Shigeru and I usually go to a park with him.

Aya: Sounds nice. You really enjoy your life in Japan with your host family.

Bob: Yes!`,
    footnotes: [
        "newspaper 新聞",
        "a member of ～ ～の一員",
        "host ホームステイ先の",
        "baker パン職人",
        "leave ～を出発する",
        "off work 仕事が休みで",
        "on TV テレビで"
    ],
    questions: [
        {
            id: "p10_q1",
            number: 1,
            text: "下線部①の人物の説明として本文の内容と合っているものを次からすべて選び、記号で答えなさい。",
            options: [
                "新聞部の一員である。",
                "彩とボブが通っている学校の生徒である。",
                "ピアノをとてもじょうずにひく。",
                "ボブといっしょに住んでいる。",
                "バスケットボールが好きである。"
            ],
            answerLabel: "イ, ウ, エ",
            type: "choice",
            relatedParagraphs: [
                1,
                4
            ]
        },
        {
            id: "p10_q2",
            number: 2,
            text: "下線部②が指す具体的な内容として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "茂(Shigeru)が火曜日と金曜日に、音楽部でピアノを練習すること。",
                "茂とボブが火曜日と金曜日に、音楽部でいっしょにピアノを練習すること。",
                "ボブが毎日夕食後に、家で茂にピアノを教えてもらうこと。",
                "ボブが毎日夕食後に、家で茂のピアノの演奏を聞くこと。"
            ],
            answerLabel: "エ",
            type: "choice",
            relatedParagraphs: [
                7
            ]
        },
        {
            id: "p10_q3",
            number: 3,
            text: `本文の内容に合うように次の質問に英語で答えるとき、（　）に入る最も適当な語をそれぞれ１語ずつ答えなさい。ただし、数字も英語でつづりなさい。

① <質問> Does Shigeru's mother work on Saturdays?
　 <答え> ( ), she ( ).

② <質問> How old is Moe?
　 <答え> She is ( ) years old.`,
            options: [],
            answerLabel: "① Yes / does ② eight",
            type: "fill-in-blank",
            relatedParagraphs: [
                13,
                10
            ]
        },
        {
            id: "p10_q4",
            number: 4,
            text: "本文の内容と合っているものを次から１つ選び、記号で答えなさい。",
            options: [
                "彩の所属している新聞部では毎週、学校の先生や生徒についての記事を学校新聞にのせます。",
                "茂の妹と彩の妹は仲のよい友だちですが、彩は茂の妹に会ったことはありません。",
                "茂の妹と彩の妹は同じバスケットボールチームに所属しています。",
                "ボブのホームステイ先のお父さんはふだん、午後10時に帰宅します。"
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                10
            ]
        },
        {
            id: "p10_q5",
            number: 5,
            text: `次は、ボブがホームステイ先の家族の土曜日の過ごし方についてまとめたものです。本文の内容に合うように、（　）に入る最も適当なものをあとのア～オからそれぞれ１つずつ選び、記号で答えなさい。

![options|1.2](/images/aya_bob_q5_options.png)`,
            options: [],
            answerLabel: "① エ　② イ　③ ウ",
            type: "choice",
            relatedParagraphs: [
                10,
                13,
                15
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "ボブ: やあ、彩。",
            "あなたは手に何を持っていますか？"
        ],
        "1": [
            "彩: こんにちは、ボブ。",
            "私は学校新聞を持っています。",
            "私は新聞部の一員です。",
            "私たちは毎月、この学校の生徒について（記事を）書きます。",
            "見て。",
            "この男の子はとても上手にピアノを弾きます。"
        ],
        "2": [
            "ボブ: ああ、それは<u>①茂（Shigeru）</u>だ。"
        ],
        "3": [
            "彩: はい。",
            "あなたは茂を知っていますか？"
        ],
        "4": [
            "ボブ: もちろんです。",
            "彼は私のホストブラザーです。",
            "私は彼と一緒に住んでいます。",
            "彼は毎日夕食後に家でピアノを練習します。",
            "彼は火曜日と金曜日には音楽部でもそれを練習します。"
        ],
        "5": [
            "彩: ああ、なるほど。"
        ],
        "6": [
            "ボブ: 私はピアノを弾きませんが、毎日夕食後に彼のピアノ演奏を聴きます。"
        ],
        "7": [
            "彩: <u>②それ</u>はいいですね。",
            "ところで、茂には妹がいますよね？"
        ],
        "8": [
            "ボブ: はい。",
            "茂の妹の名前は里奈（Rina）です。",
            "里奈は8歳です。",
            "彼女はバスケットボールが好きで、とても上手にバスケットボールをします。"
        ],
        "9": [
            "彩: 私は里奈を知っています。",
            "里奈と私の妹は良い友達です。",
            "私の妹も8歳で、彼女もバスケットボールをします。",
            "彼女の名前は萌（Moe）です。",
            "里奈と萌は緑バスケットボールチームに入っています。",
            "彼らは土曜日に緑体育館でバスケットボールを練習します。"
        ],
        "10": [
            "ボブ: ああ、あなたの妹と里奈は一緒にバスケットボールをするんですね。"
        ],
        "11": [
            "彩: はい。",
            "里奈は時々私たちの家に来て、彼女の家族について話します。",
            "彼女のお母さんは看護師で、お父さんはパン職人ですよね？"
        ],
        "12": [
            "ボブ: はい。",
            "彼らはとても忙しいです。",
            "私のホストマザーはたいてい午後5時に帰宅し、夕食を作ります。",
            "彼女は土曜日も働いていて、午後10時に帰宅します。だから土曜日はホストファザーが夕食を作ります。",
            "里奈と私は彼を手伝います。"
        ],
        "13": [
            "彩: それはすばらしいですね。"
        ],
        "14": [
            "ボブ: 私のホストファザーは午前5時に起き、午前6時に家を出ます。彼はたいてい午後9時に帰宅します。彼は火曜日と土曜日は仕事が休みです。",
            "火曜日には、里奈と私は彼と一緒にテレビでバスケットボールの試合を見ます。",
            "土曜日には、茂と私はたいてい彼と一緒に公園に行きます。"
        ],
        "15": [
            "彩: いいですね。",
            "あなたはホストファミリーとの日本での生活を本当に楽しんでいますね。"
        ],
        "16": [
            "ボブ: はい！"
        ]
    },
    explanations: {
        p10_q1: {
            correct: "イ, ウ, エ",
            beginner: {
                summary: "茂（Shigeru）に関する情報を集めます。",
                detail: `ア：新聞部なのは彩(Aya)です（×）。
イ：彩が「この学校の生徒について書く」と言っているので、記事になっている茂は同じ学校の生徒です（○）。
ウ：彩が「とても上手にピアノを弾く」と言っています（○）。
エ：ボブが「彼は私のホストブラザーで、一緒に住んでいる」と言っています（○）。
オ：バスケが好きなのは里奈(Rina)と萌(Moe)です（×）。`,
                keywords: [
                    "member (一員)",
                    "write (書く)",
                    "live with (～と一緒に住む)",
                    "practice (練習する)"
                ]
            },
            advanced: {
                summary: "情報の照合問題です。",
                detail: `本文の複数の箇所から情報を統合します。<ref target="1-3">write about a student at this school</ref> からイ、<ref target="1-5">plays the piano very well</ref> からウ、<ref target="4-1">host brother. I live with him</ref> からエが導き出せます。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "He practices the piano / at home / after dinner / every day.",
                        translation: "彼はピアノを練習します / 家で / 夕食後に / 毎日。"
                    }
                ]
            }
        },
        p10_q2: {
            correct: "エ",
            beginner: {
                summary: "直前のボブの発言内容を確認します。",
                detail: `彩の "That's nice." は、ボブの <ref target="6-0">I listen to his piano performance after dinner every day.</ref>（毎日夕食後に彼のピアノ演奏を聴く）という発言に対する反応です。`,
                keywords: [
                    "listen to (～を聴く)",
                    "performance (演奏)",
                    "every day (毎日)"
                ]
            },
            advanced: {
                summary: "指示語Thatが指す内容を特定します。",
                detail: `会話の流れとして、Bobが自分の習慣（ピアノを聴くこと）を話し、それに対してAyaが感想を述べています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I don't play the piano, / but I listen to his piano performance / after dinner every day.",
                        translation: "私はピアノを弾きませんが、 / 私は彼のピアノ演奏を聴きます / 夕食後に毎日。"
                    }
                ]
            }
        },
        p10_q3: {
            correct: "① Yes / does ② eight",
            beginner: {
                summary: "本文から答えを探して英語で書きます。",
                detail: `① 茂の母（ホストマザー）は土曜に働くか？ → <ref target="12-3">She works on Saturdays, too</ref> とあるので、Yes, she does.
② 萌(Moe)は何歳か？ → <ref target="9-2">My sister is also eight years old... Her name is Moe.</ref> とあるので、eight (8) 歳。`,
                keywords: [
                    "work (働く)",
                    "Saturday (土曜日)",
                    "eight (8)"
                ]
            },
            advanced: {
                summary: "Q&A形式の記述問題です。",
                detail: `① 一般動詞の疑問文 Does...? に対する肯定の答えです。② 数詞をスペルアウト（eight）する必要があります。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "She works on Saturdays, too, / and she comes home / at 10 p.m.",
                        translation: "彼女は土曜日も働きます、 / そして彼女は帰宅します / 午後10時に。"
                    }
                ]
            }
        },
        p10_q4: {
            correct: "ウ",
            beginner: {
                summary: "本文の内容と合うものを選びます。",
                detail: `ア：「毎週」ではなく <ref target="1-3">every month</ref>（毎月）です。
イ：「会ったことはない」とは書かれておらず、<ref target="9-0">I know Rina.</ref>（里奈を知っている）と言っています。
ウ：<ref target="9-4">Rina and Moe are on the Midori Basketball Team.</ref>（里奈と萌は緑バスケットボールチームに入っています）と一致します。
エ：お父さんは <ref target="14-0">usually comes home at 9 p.m.</ref>（たいてい午後9時に帰宅）です。午後10時に帰るのはお母さんです。`,
                keywords: [
                    "team (チーム)",
                    "usually (たいてい)"
                ]
            },
            advanced: {
                summary: "詳細情報の真偽判定です。",
                detail: `ウの記述は本文の第10段落（Ayaのセリフ）と完全に一致します。エは主語（Father/Mother）の取り違えを誘うひっかけです。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Rina and Moe are / on the Midori Basketball Team.",
                        "translation": "里奈と萌は～に所属しています / 緑バスケットボールチームに。"
                    }
                ]
            }
        },
        p10_q5: {
            correct: "① エ　② イ　③ ウ",
            beginner: {
                summary: "土曜日の予定を整理します。",
                detail: `① ホストファザーと茂と私（ボブ）の土曜日：<ref target="14-2">On Saturdays, Shigeru and I usually go to a park with him.</ref> → go to a park (エ)
② ホストファザーと里奈と私（ボブ）の土曜日：<ref target="12-4">my host father cooks dinner on Saturdays. Rina and I help him.</ref> → cooks dinner (イ)
③ 里奈の土曜日：<ref target="9-5">They practice basketball at Midori Gym on Saturdays.</ref> → practices basketball (ウ)`,
                keywords: [
                    "park (公園)",
                    "cook (料理する)",
                    "help (手伝う)"
                ]
            },
            advanced: {
                summary: "情報の抽出と整理を行う問題です。",
                detail: `「誰と」「何をするか」の組み合わせを正確に読み取ります。①は第15段落、②は第13段落、③は第10段落に根拠があります。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        "text": "On Saturdays, / Shigeru and I usually go to a park / with him.",
                        "translation": "土曜日には、 / 茂と私はたいてい公園に行きます / 彼（お父さん）と一緒に。"
                    }
                ]
            }
        }
    }
};

export const grade1Problems = [winterVacationProblem, tedsSchoolLifeProblem, ayaAndBobProblem];

