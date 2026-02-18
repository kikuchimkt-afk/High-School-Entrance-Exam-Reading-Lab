// Updated: 2026-02-19 - 42 problems registered
import tokushima_2026_mock_q7_cleaning from './tokushima_2026_mock_q7_cleaning.js';
import tokushima_mock_d5_aurora from './tokushima_mock_d5_aurora.js';
import tokushima_mock_2025_yamaguchi_remix from './tokushima_mock_2025_yamaguchi_remix.js';
import tokushima_mock_d5_paper_recycling from './tokushima_mock_d5_paper_recycling.js';
import tokushima_mock_story_yuta_canada from './tokushima_mock_story_yuta_canada.js';
import tokushima_mock_q7_mie_2024 from './tokushima_mock_q7_mie_2024.js';
import kisogaku_tokushima_2025_c3_3_4 from './kisogaku_tokushima_2025_c3_3_4.js';
import kisogaku_tokushima_2025_c3_3_5 from './kisogaku_tokushima_2025_c3_3_5.js';
import kisogaku_tokushima_2025_c3_3_6 from './kisogaku_tokushima_2025_c3_3_6.js';
import kisogaku_tokushima_2025_c3_3_7 from './kisogaku_tokushima_2025_c3_3_7.js';
import kisogaku_tokushima_2025_c3_2_4 from './kisogaku_tokushima_2025_c3_2_4.js';
import kisogaku_tokushima_2025_c3_2_5 from './kisogaku_tokushima_2025_c3_2_5.js';
import kisogaku_tokushima_2025_c3_2_6 from './kisogaku_tokushima_2025_c3_2_6.js';
import kisogaku_tokushima_2025_c3_2_7 from './kisogaku_tokushima_2025_c3_2_7.js';
import kisogaku_tokushima_2025_c3_1_4 from './kisogaku_tokushima_2025_c3_1_4.js';
import kisogaku_tokushima_2025_c3_1_5 from './kisogaku_tokushima_2025_c3_1_5.js';


const weddingRegistryProblem = {
    id: "p2",
    title: "Wedding Registry",
    category: "中学3年",
    target: "中3",
    number: "中3-問顁E",
    genre: "対話",
    source: "学力テスチE中3 2025年度 12朁E,
    badges: ["中3 刁E���E後置修飾", "中3 関係代名詁E, "中2 受動慁E, "学力テスチE, "斁E��", "対話"],
    content: `Hana: Hello, Mr. Green. <u>①I have something to ask you.</u> Do you have time?

Mr. Green: Sure. What is it?

Hana: My brother is going to *get married next month. I want to give him a gift, but I can't think of anything good for him. Do you remember what you got as *wedding gifts? What kind of gift did you like?

Mr. Green: Happy wedding to your brother! Both my wife and I drink coffee every morning, so my wife and I were happy to get *matching coffee cups. Our favorite artist's picture is printed on the cups. We got married more than 10 years ago, and we still use them.

Hana: They are nice presents, but my brother doesn't drink coffee. So I'm afraid they won't be a good gift for him.

Mr. Green: ( [ ② ] )

Hana: I wanted to surprise him with a nice gift, but maybe you're right. I should ask him directly.

Mr. Green: Don't be so *disappointed. It's not a bad idea to ask someone what he or she wants before giving a gift to them. Actually, my wife and I got those cups by using our <u>③wedding registry</u>.

Hana: Wedding registry? What is that?

Mr. Green: In my country, the U.S., we often make a list of things we want before receiving gifts on days like birthdays or weddings. This list is called a gift registry. We choose a store, look for the things we want there, make a gift registry, and leave it to the store. The name of the store or the *link to the online shop for the gift registry is written on the wedding *invitation, for example. Friends and family members go to the store or check the online shop, see your gift registry, and choose the gift they want to get for you.

Hana: Wow, that's very interesting.

Mr. Green: A gift registry for a wedding is called a wedding registry, and the one for a couple who will soon have a baby is called a baby registry. In the U.K., a wedding registry is called a wedding list.

Hana: I see. In that way, people are able to give a gift the person really wants, right?

Mr. Green: That's right. The gifts bought by others are *removed from the list, so people don't have to worry about buying the same gift.

Hana: That's convenient. It's a different culture from ours. We usually give money to the couple at a wedding.

Mr. Green: You don't always have to buy the things on the registry. In my country, some people choose to give a gift card. Also, some people want to give a gift they select. Thinking of a gift for someone special and giving it to him or her is really a lot of fun. Receiving a gift that someone has thought and selected for you is also a lot of fun.

Hana: I'll think about what to give to my brother again. If I can't decide, I'll ask him what he really wants. Thank you very much, Mr. Green.`,
    footnotes: [
        "get married 結婚すめE,
        "wedding 結婁E弁E",
        "matching おそろいの",
        "disappointed がっかりして",
        "link リンク",
        "invitation 招征E��",
        "remove �E�を削除する"
    ],
    questions: [
        {
            id: "p2_q1",
            type: "fill-in-blank",
            text: `次の斁E���E�下線部①のように花が言った理由を表す文になるよぁE���E�E　)に入る最も適当な語句を本斁E��から連続しぁE語で抜き出して答えなさい、E
She wanted to ask Mr. Green (　) to her brother for his wedding.`,
            options: [],
            answerLabel: "what to give",
            relatedParagraphs: [
                2,
                16
            ]
        },
        {
            id: "p2_q2",
            type: "choice",
            text: "( [ ② ] )に入る最も適当なも�Eを次から1つ選び�E�記号で答えなさい、E,
            options: [
                "What does your brother like to drink?",
                "What do you want to give him?",
                "How about surprising him with a nice gift?",
                "How about asking him what he wants?"
            ],
            answerLabel: "エ",
            relatedParagraphs: [
                5,
                6
            ]
        },
        {
            id: "p2_q3",
            type: "sort",
            text: `下線部③wedding registryにつぁE���E�次の問いに答えなさい、E
① wedding registryを利用する際�E流れとなるよぁE��次のア�E�工を並べかえ�E�その頁E��を記号で答えなさい。`,
            options: [
                "After making a wedding registry, the couple leave it to the store.",
                "The friends and family members go to the store or check the online shop, see the registry, and choose the gift for the couple.",
                "The couple choose a store and look for the things they want.",
                "The couple write the name of the store or the link to the online shop on their wedding invitation."
            ],
            answerLabel: "ウ ↁEア ↁEエ ↁEイ",
            relatedParagraphs: [
                9
            ]
        },
        {
            id: "p2_q4",
            type: "choice",
            text: `下線部③wedding registryにつぁE���E�次の問いに答えなさい、E
② wedding registryの利点として最も適当なも�Eを次から1つ選び�E�記号で答えなさい。`,
            options: [
                "A couple won't receive the same gift from different people.",
                "People can surprise a couple with a nice gift they selected by themselves.",
                "A couple can buy the things they need for their new life at their favorite store.",
                "People don't have to give a gift to a couple for their wedding."
            ],
            answerLabel: "ア",
            relatedParagraphs: [
                13
            ]
        },
        {
            id: "p2_q5",
            type: "fill-in-blank",
            text: `本斁E�E冁E��に合うように次の質問に英語で答えるとき！E　)に入る最も適当な語をそれぞれ本斁E��から1語ずつ抜き出して答えなさい、E
<質啁E How will Hana decide a gift for her brother?
<答え> She will think about it for some more time before asking him (　) he really (　) directly.`,
            options: [],
            answerLabel: "what / wants",
            relatedParagraphs: [
                16
            ]
        },
        {
            id: "p2_q6",
            type: "true-false",
            text: `次の斁E��本斁E�E冁E��に合ってぁE��ば○で�E�合ってぁE��ければ×で答えなさい、E
① Mr. Green and his wife bought matching coffee cups when they got married.
② Mr. Green thinks receiving a gift chosen from a gift registry is better than receiving a gift someone selects for him.
③ In Mr. Green's country, some people give a gift card as a gift instead of using a gift registry.`,
            options: [],
            answerLabel: "ÁE/ ÁE/ ◁E,
            relatedParagraphs: [
                3,
                15
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "こんにちは、グリーン先生、E,
            "あなたにお尋�EしたぁE��とがあります、E,
            "お時間ありますか、E
        ],
        "1": [
            "もちろん、E,
            "何ですか、E
        ],
        "2": [
            "私�E允E��来月結婚する予定なんです、E,
            "彼に贈り物をあげたぁE�Eですが、彼に良ぁE��のが何も思いつかなぁE��です、E,
            "あなた�E結婚祝いとして何をもらったか覚えてぁE��すか、E,
            "どのような贈り物が良かったですか、E
        ],
        "3": [
            "お�Eさん、結婚おめでとぁE��E,
            "私�E妻と私�E二人とも毎朝コーヒ�Eを飲むので、おそろぁE�Eコーヒ�EカチE�Eをもらって嬉しかったです、E,
            "私たちのお気に入り�E芸術家の絵がそのカチE�Eに印刷されてぁE��す、E,
            "私たちは10年以上前に結婚しましたが、今でもそれらを使ってぁE��す、E
        ],
        "4": [
            "それら�E素敵なプレゼントですが、私�E允E�Eコーヒ�Eを飲みません、E,
            "です�Eで、残念ながらそれら�E彼にとって良ぁE��り物にはならなぁE��思います、E
        ],
        "5": [
            "( [ ② ] )"
        ],
        "6": [
            "私�E素敵な贈り物で彼を驚かせたかった�Eですが、たぶんあなた�E言ぁE��りかもしれません、E,
            "彼に直接尋�Eるべきです�E、E
        ],
        "7": [
            "そんなにがっかりしなぁE��、E,
            "贈り物をあげる前に、何が欲しいか誰かに尋�Eることは悪ぁE��E��ではありません、E,
            "実�Eところ、私�E妻と私�EウェチE��ングレジストリ�E�結婚祝いリスト）を使ってそれら�EカチE�Eを手に入れました、E
        ],
        "8": [
            "ウェチE��ングレジストリ�E�E,
            "それは何ですか、E
        ],
        "9": [
            "私�E国であるアメリカでは、誕生日めE��婚式�Eような日に贈り物を受け取る前に、私たちが欲しいも�Eのリストを作ることがよくあります、E,
            "こ�Eリスト�Eギフトレジストリと呼ばれます、E,
            "私たちはお店を選び、そこで欲しいも�Eを探し、ギフトレジストリを作�Eし、それをお店に預けます、E,
            "お店�E名前めE��フトレジストリのオンラインショチE�Eへのリンクが、例えば結婚式�E招征E��に書かれます、E,
            "友人めE��族�Eお店に行くかオンラインショチE�Eを確認し、あなた�Eギフトレジストリを見て、あなたにあげたい贈り物を選びます、E
        ],
        "10": [
            "わあ、それ�Eとても�E味深ぁE��す�E、E
        ],
        "11": [
            "結婚式�EためのギフトレジストリはウェチE��ングレジストリと呼ばれ、もぁE��ぐ赤ちめE��が生まれるカチE�Eルのためのも�Eはベビーレジストリと呼ばれます、E,
            "イギリスでは、ウェチE��ングレジストリはウェチE��ングリストと呼ばれます、E
        ],
        "12": [
            "なるほど、E,
            "そ�E方法なら、人、E�Eそ�E人が本当に欲しい贈り物をあげることができますよね、E
        ],
        "13": [
            "そ�E通りです、E,
            "他�E人に買われた贈り物はリストから削除される�Eで、人、E�E同じ贈り物を買ぁE��E�Eをする忁E��がありません、E
        ],
        "14": [
            "それは便利です�E、E,
            "私たちのも�Eとは異なる文化です、E,
            "私たちは普段、結婚式ではカチE�Eルにお��を渡します、E
        ],
        "15": [
            "ぁE��もレジストリにあるも�Eを買わなければならなぁE��けではありません、E,
            "私�E国では、ギフトカードをあげることを選ぶ人もいます、E,
            "また、�E刁E��選んだ贈り物をあげたぁE��思う人もいます、E,
            "特別な誰か�Eために贈り物を老E��、それを彼めE��女にあげることは本当にとっても楽しいことです、E,
            "誰かがあなた�Eことを老E��て選んでくれた贈り物を受け取ることもまた、とても楽しいことです、E
        ],
        "16": [
            "私�E允E��何をあげるかもう一度老E��てみます、E,
            "もし決められなかったら、彼が本当に欲しいも�Eは何か彼に尋�Eてみます、E,
            "グリーン先生、ありがとぁE��ざいました、E
        ]
    },
    explanations: {
        p2_q1: {
            correct: "what to give",
            beginner: {
                summary: "「何をあげるべきか」とぁE��意味の表現を探しましょぁE��E,
                detail: `花�E�Eana�E��E允E��の結婚祝いに悩んでぁE��す。最後�E段落<ref target="16-0">I'll think about what to give to my brother again.</ref>�E��Eに何をあげるかもう一度老E��てみます）とぁE��斁E��、答えとなる表現が含まれてぁE��す。「what �E�Eto不定詞」で「何を�E�すべきか」とぁE��意味になります。`,
                keywords: [
                    "get married (結婚すめE",
                    "wedding (結婚弁E",
                    "gift (贈り物)",
                    "think of (思いつぁE",
                    "matching (おそろいの)",
                    "disappointed (がっかりして)",
                    "invitation (招征E��)",
                    "remove (削除する)",
                    "decision (決宁E",
                    "surprise (驚かせる)",
                    "directly (直接)",
                    "registry (登録簿)"
                ]
            },
            advanced: {
                summary: "疑問詞＋to不定詞�E構造を用ぁE��名詞句を抜き�Eします、E,
                detail: `問題文の空所は "She wanted to ask Mr. Green ( ) ..." となっており、Eask" の目皁E��になる名詞句が忁E��です。文脈として「�Eに何をあげるべきか」とぁE��冁E��が�Eります。本斁E��後�E <ref target="16-0">what to give</ref> がそのまま当てはまります、Ewhat to do"�E�何をすべきか�E�、Ehow to do"�E�どのようにすべきか�E�などの疑問詞＋to不定詞�E用法を確認しておきましょぁE��`,
                keywords: [
                    "infinitive (不定詁E",
                    "interrogative (疑問詁E",
                    "phrase (句)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'll think about / what to give / to my brother again.",
                        translation: "私�E老E��まぁE/ 何をあげるべきかにつぁE�� / 允E��もう一度、E
                    }
                ]
            }
        },
        p2_q2: {
            correct: "エ",
            beginner: {
                summary: "前後�E会話の流れから、グリーン先生の提案を推測します、E,
                detail: `空所の直前で花は「コーヒ�EカチE�Eは允E��は合わなぁE��と言ってぁE��す。直後�E花のセリチE<ref target="6-1">I should ask him directly.</ref>�E�彼に直接尋�Eるべきです�E�E�が最大のヒントです。花が「そぁE��べきだ」と納得してぁE��ことから、グリーン先生は「彼が何を欲しいか尋�EてみたらどぁE��」と提案したと老E��られます。`,
                keywords: [
                    "directly (直接)",
                    "surprise (驚かせる)",
                    "ask (尋�EめE",
                    "present (プレゼンチE"
                ]
            },
            advanced: {
                summary: "斁E��琁E��により、相手�E次の発言を導き出します、E,
                detail: `空所の後で花は "maybe you're right"�E�たぶんあなた�E言ぁE��りだ�E�と同意し、Eask him directly" と結論付けてぁE��す。したがって、E��択肢エ "How about asking him what he wants?"�E�彼が何を欲しいか尋�EてみてはどぁE��すか�E�が論理皁E��適合します、EHow about -ing?" は提案を表す重要な表現です。`,
                keywords: [
                    "suggestion (提桁E",
                    "context (斁E��)",
                    "indirect question (間接疑問斁E"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "How about asking him / what he wants?",
                        translation: "彼に尋�EてみてはどぁE��すか / 彼が何を欲しいかを、E
                    }
                ]
            }
        },
        p2_q3: {
            correct: "ウ ↁEア ↁEエ ↁEイ",
            beginner: {
                summary: "「ウェチE��ングレジストリ」�E使ぁE��の説明頁E��を整琁E��ましょぁE��E,
                detail: `本斁E�E第9段落に手頁E��書かれてぁE��す、E
        1. <ref target="9-2">We choose a store, look for the things we want...</ref>�E�店を選び、欲しいも�Eを探す）�E **ウ**
        2. <ref target="9-2">...and leave it to the store.</ref>�E�それをお店に預ける）�E **ア**
        3. <ref target="9-3">The name... is written on the wedding invitation...</ref>�E�店�E名前などが招征E��に書かれる）�E **エ**
        4. <ref target="9-4">Friends... choose the gift they want to get for you.</ref>�E�友人がギフトを選ぶ�E��E **イ**
        こ�E頁E��になります。`,
                keywords: [
                    "choose (選ぶ)",
                    "leave (預けめE残す)",
                    "invitation (招征E��)",
                    "check (確認すめE"
                ]
            },
            advanced: {
                summary: "時系列を示す動詞と斁E��造に着目して並べ替えます、E,
                detail: `プロセスの説明文です、Eref target="9-2">choose a store ... make a gift registry</ref> (ウ) が最初で、次に <ref target="9-2">leave it to the store</ref> (ア) が続きます。その後、ゲストに知らせるために <ref target="9-3">written on the wedding invitation</ref> (エ) され、最後にゲストが <ref target="9-4">go to the store ... and choose</ref> (イ) します。`,
                keywords: [
                    "chronological order (時系刁E",
                    "process (過稁E",
                    "procedure (手頁E"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "We choose a store, / look for the things we want there, / make a gift registry, / and leave it to the store.",
                        translation: "私たちは店を選び、E/ そこで欲しいも�Eを探し、E/ ギフトレジストリを作り、E/ それを店に預けます、E
                    }
                ]
            }
        },
        p2_q4: {
            correct: "ア",
            beginner: {
                summary: "レジストリを使ぁE��「同じ�Eレゼントが被らなぁE��とぁE��利点があります、E,
                detail: `第13段落のグリーン先生のセリチE<ref target="13-1">The gifts bought by others are removed from the list, so people don't have to worry about buying the same gift.</ref>�E�他�E人に買われたギフトはリストから削除される�Eで、同じギフトを買ぁE��E�Eをしなくて済�E�E�と一致するのは、E��択肢ア「カチE�Eルは異なる人、E��ら同じ贈り物を受け取ることがなぁE��です。`,
                keywords: [
                    "remove (取り除ぁE",
                    "worry about (�E�につぁE��忁E�Eする)",
                    "same (同じ)",
                    "convenient (便利な)"
                ]
            },
            advanced: {
                summary: "受動態と結果を表す接続詞soの因果関係を琁E��します、E,
                detail: `該当箁E��は <ref target="13-1">The gifts ... are removed ..., so people don't have to worry ...</ref> です、Egifts bought by others" は過去刁E���E後置修飾。リストから消える！Eemoved�E�とぁE��シスチE��上�E特徴が、E��褁E��避ける�E�Eon't have to worry about buying the same gift�E�とぁE��メリチE��に繋がってぁE��す。`,
                keywords: [
                    "benefit (利点)",
                    "duplicate (重褁E",
                    "causality (因果関俁E"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "The gifts bought by others / are removed from the list, / so people don't have to worry / about buying the same gift.",
                        translation: "他�E人に買われた贈り物は / リストから削除されまぁE/ だから人、E�E忁E�Eする忁E��がありません / 同じ贈り物を買ぁE��とにつぁE��、E
                    }
                ]
            }
        },
        p2_q5: {
            correct: "what / wants",
            beginner: {
                summary: "最後�E段落から、花がこれからどぁE��るかを抜き�Eします、E,
                detail: `最後�E段落で花は <ref target="16-1">If I can't decide, I'll ask him **what** he really **wants**.</ref>�E�もし決められなかったら、彼が本当に**佁E*ぁE*欲しい**か彼に尋�Eます）と言ってぁE��す。質問文の空所に合わせて、Ewhat" と "wants" を抜き�Eします。`,
                keywords: [
                    "decide (決める)",
                    "really (本当に)",
                    "directly (直接)"
                ]
            },
            advanced: {
                summary: "間接疑問斁E�E構造を把握し、E��刁E��単語を補�Eします、E,
                detail: `英斁E��造 "ask him [what he really wants]" です、Eask" + O + O�E�間接疑問斁E���E第4斁E��を作ってぁE��す。本斁E�E <ref target="16-1">I'll ask him what he really wants.</ref> と対応してぁE��す。`,
                keywords: [
                    "extraction (抜き出ぁE",
                    "clause (節)",
                    "SVOO (第4斁E��)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'll ask him / what he really wants.",
                        translation: "私�E彼に尋�EるつもりでぁE/ 彼が本当に何を欲しいかを、E
                    }
                ]
            }
        },
        p2_q6: {
            correct: "ÁE/ ÁE/ ◁E,
            beginner: {
                summary: "本斁E�E事実関係を一つずつ確認しましょぁE��E,
                detail: `①グリーン先生はカチE�Eを「買った」�Eではなく、Eref target="3-1">happy to get matching coffee cups</ref>�E�もらって嬉しかった）と言ってぁE��ので**ÁE*、E
        ②グリーン先生は第15段落で <ref target="15-4">Receiving a gift that someone has thought and selected for you is also a lot of fun.</ref>�E�誰かが選んでくれた贈り物をもらうのもまた楽しい�E�と言っており、レジストリの方が良ぁE��は言ってぁE��ぁE�Eで**ÁE*、E
        ③第15段落で <ref target="15-1">In my country, some people choose to give a gift card.</ref>�E�ギフトカードをあげる人もいる）と言ってぁE��ので**◁E*。`,
                keywords: [
                    "bought (買っぁE- buyの過去形)",
                    "instead of (�E��E代わりに)",
                    "select (選ぶ)",
                    "gift card (啁E��券)"
                ]
            },
            advanced: {
                summary: "詳細な惁E��の照合と、話老E�E忁E��琁E��が求められます、E,
                detail: `① "bought" ではなぁE"got" (received)。受動�E "got those cups by using..." とあるが、�E刁E��ちで買ったわけではなぁE��リストを作っただけ）、E
        ② "better than" とぁE��比輁E�E本斁E��なぁE��両方とめE"lot of fun" と述べており、優劣をつけてぁE��ぁE��E
        ③ <ref target="15-1">some people choose to give a gift card</ref> と明確に記述がある。`,
                keywords: [
                    "comparison (比輁E",
                    "fact-checking (事実確誁E",
                    "infer (推測する)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "In my country, / some people choose / to give a gift card.",
                        translation: "私�E国では、E/ 選ぶ人もいまぁE/ ギフトカードをあげることを、E
                    }
                ]
            }
        }
    }
};

const newYearsResolutionProblem = {
    id: "p5",
    title: "New Year's Resolutions",
    category: "中学3年",
    target: "中3",
    number: "中3-問顁E",
    genre: "対話",
    source: "学力テスチE中3甁E2025年度 11朁E,
    badges: [
        "中3 現在完亁E��",
        "中3 動名詁E,
        "中2 不定詁E,
        "中2 比輁E,
        "学力テスチE,
        "生活",
        "対話"
    ],
    content: `Ms. Smith: What's wrong, Atsushi? You don't look well.

Atsushi: Hello, Ms. Smith. Actually, I'll have a *meeting of the English club next week, and <u>①I don't want to join it</u>.

Ms. Smith: Oh, I heard about the meeting from Yuka, one of the members. You gave a presentation about your New Year's resolutions at the beginning of this year in the club, right? And each of you is going to speak on the topic, "How have I *achieved my New Year's resolutions?"

Atsushi: That's right. It's a kind of tradition of the English club in this school. Every year, the first-year students share their New Year's resolutions in January. And they talk about the results at the end of November when they are in the second grade. I usually don't make New Year's resolutions, but I made one for the club this year. However, I haven't achieved it *at all, so I don't have anything to talk about at the meeting.

Ms. Smith: I see. What was your resolution?

Atsushi: It was "*memorizing 100 English words every month." I couldn't do it even for the first month. Yuka says that she has achieved all her three resolutions. She's amazing.

Ms. Smith: But, Atsushi, you still have one more month this year!

Atsushi: That's true. So, I think I just have to say, "I'll work hard for *at least one month." Do you make New Year's resolutions every year, Ms. Smith?

Ms. Smith: Yes. My resolution this year was to go to a gym every weekend for my health. I still go there four or five times in a month.

Atsushi: How can you continue doing it?

Ms. Smith: It was difficult for me to achieve my New Year's resolutions until a few years ago, so I asked people around me for some advice. One good piece of advice was "creating the environment." For example, what will you do if there are your favorite comic books on your desk on the day before an important test?

Atsushi: I'm sure I'll read them because I have a weak *will.

Ms. Smith: According to one study, our environment may affect us more than our will. If you want to study for the test, it is important to create the environment for that first. You shouldn't keep the comic books in *sight.

Atsushi: I understand. Did you get any other good advice?

Ms. Smith: Yes. <u>②This one is even better for you, I believe</u>. It's OK to have a big future dream, but you should make smaller *goals first, and then create small *steps to achieve each goal. Thinking only about the big dream is not very good. I'm afraid your New Year's resolution was very big and that made achieving it *impossible for you, Atsushi.

Atsushi: Oh, I see. So "( ③ )" was a better resolution for me.

Ms. Smith: That's right.

Atsushi: May I share these pieces of advice with other members in the meeting next week?

Ms. Smith: Sure, of course.`,
    footnotes: [
        "meeting ミ�EチE��ング",
        "achieve �E�を達�Eする",
        "at all [否定文で] 全然(�E�なぁE",
        "memorize �E�を覚えめE,
        "at least 少なくとめE,
        "will 意忁E,
        "sight 視界",
        "goal 目樁E,
        "step 段階，スチE��チE,
        "impossible 不可能な"
    ],
    questions: [
        {
            id: "p5_q1",
            text: "下線部①のように厚司が言った理由として最も適当なも�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "人前で話すことが得意ではなぁE��ら、E,
                "部活動に対する興味を失ってしまったから、E,
                "話すことが何もなぁE��ら、E,
                "長ぁE��、E��活動に参加できてぁE��ぁE��ら、E
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p5_q2",
            text: "スミス先生の新年の目標につぁE��本斁E�E冁E��と合ってぁE��も�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "She usually doesn't make any New Year's resolutions.",
                "Her New Year's resolution this year was to go to a gym every weekend.",
                "She made a New Year's resolution but didn't achieve it this year.",
                "Her New Year's resolutions this year were decided by her friends."
            ],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                8
            ]
        },
        {
            id: "p5_q3",
            text: `次の斁E��、下線部②のようにスミス先生が言った理由を表す文になるよぁE��、E��　�E�に入る最も適当な語をそれぞれ�E�語ずつ答えなさい、E

She thought Atsushi's New Year's resolution was (　) (　) for him to (　).`,
            options: [],
            answerLabel: "(侁E too big / achieve",
            type: "fill-in-blank",
            relatedParagraphs: [
                14
            ]
        },
        {
            id: "p5_q4",
            text: "�E�　③　�E�に入る最も適当なも�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "memorizing three English words every day",
                "becoming a better English speaker",
                "memorizing 1,000 English words every year",
                "watching a movie only in English when I can"
            ],
            answerLabel: "ア",
            type: "choice",
            relatedParagraphs: [
                14,
                15
            ]
        },
        {
            id: "p5_q5",
            text: "本斁E�E冁E��と合ってぁE��も�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "Everyone in the English club in Atsushi's school shares their New Year's resolutions every year.",
                "Ms. Smith doesn't think Atsushi can do anything about his resolution for this year.",
                "According to a study, the environment may influence people more than their will.",
                "According to research, a goal should be big if we really want to achieve it."
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                3,
                12
            ]
        },
        {
            id: "p5_q6",
            text: `次は、対話の翌週に厚司が英語部のミ�EチE��ングで行ったスピ�Eチ�E一部です。本斁E�E冁E��に合うように、E��　�E�に入る最も適当な語をそれぞれ本斁E��から�E�語ずつ抜き出して答えなさい、E

My New Year's resolution was to memorize 100 English words every ( ① ). I couldn't achieve it, but I'll try hard at least for one month. Last week, I talked with Ms. Smith, and she told me how to achieve New Year's resolutions. I'd like to share her good advice with you today. First, ( ② ) the environment is important. Next, we should make smaller goals, and then make small steps to achieve each goal.`,
            options: [],
            answerLabel: "① month ② creating",
            type: "fill-in-blank",
            relatedParagraphs: [
                5,
                10
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "スミス先生: どぁE��た�E、厚司�E�E,
            "顔色が良くなぁE��よ、E
        ],
        "1": [
            "厚司: こんにちは、スミス先生、E,
            "実�E、来週英語部のミ�EチE��ングがある�Eですが、Eu>①私�Eそれに参加したくなぁE�EでぁE/u>、E
        ],
        "2": [
            "スミス先生: あら、そのミ�EチE��ングのことは部員の一人のユカから聞いたわ、E,
            "あなた�E今年の初めに部活で新年の抱負につぁE��プレゼンチE�Eションをした�Eよ�E�E�E,
            "そして、あなたたちのそれぞれが「新年の抱負をどのように達�Eしたか」とぁE��チE�EマにつぁE��話すことになってぁE��のよ�E�E�E
        ],
        "3": [
            "厚司: そ�E通りです、E,
            "それはこ�E学校の英語部の一種の伝統なんです、E,
            "毎年、E年生�E1月に新年の抱負を発表します、E,
            "そして彼らが2年生になったとき�E11月�E終わりに、その結果につぁE��話します、E,
            "私�E普段、新年の抱負を立てませんが、今年は部活のために1つ立てました、E,
            "しかし、私�Eそれを�E然達�EしてぁE��ぁE�Eで、ミーチE��ングで話すことが何もなぁE�Eです、E
        ],
        "4": [
            "スミス先生: なるほど、E,
            "あなた�E抱負は何だった�E�E�E
        ],
        "5": [
            "厚司: それは「毎月100個�E英単語を覚えること」でした、E,
            "私�E最初�E1ヶ月でさえ、それができませんでした、E,
            "ユカは、彼女の3つの抱負すべてを達成したと言ってぁE��す、E,
            "彼女はすごぁE��す、E
        ],
        "6": [
            "スミス先生: でも、厚司、今年はまだあと1ヶ月あるわよ！E
        ],
        "7": [
            "厚司: そ�E通りです�E、E,
            "だから、私�Eただ「少なくとめEヶ月間は一生�E命頑張ります」と言ぁE��かなぁE��思います、E,
            "スミス先生は毎年新年の抱負を立てますか�E�E
        ],
        "8": [
            "スミス先生: ええ、E,
            "私�E今年の抱負は、健康のために毎週末ジムに行くことでした、E,
            "私�E今でも月に4、E回�Eそこへ行ってぁE��す、E
        ],
        "9": [
            "厚司: どぁE��ってそれをし続けることができるのですか�E�E
        ],
        "10": [
            "スミス先生: 数年前までは、私も新年の抱負を達成する�Eが難しかった�Eで、周り�E人にアドバイスを求めた�E、E,
            "良ぁE��ドバイスの1つは「環墁E��作ること」だったわ、E,
            "例えば、もし重要なチE��ト�E前日に、机の上にあなた�Eお気に入り�E漫画本があったらどぁE��る！E
        ],
        "11": [
            "厚司: 私�E意志が弱ぁE�Eで、きっとそれを読んでしまぁE��しょぁE��E
        ],
        "12": [
            "スミス先生: ある研究によると、私たちの環墁E�E私たちの意志よりも私たちに影響を与えるかもしれなぁE��ぁE��、E,
            "もしあなたがチE��ト�Eために勉強したぁE��ら、まず�Eそ�Eための環墁E��作ることが大刁E��、E,
            "漫画本を視界に置ぁE��おくべきではなぁE��、E
        ],
        "13": [
            "厚司: 刁E��りました、E,
            "他に何か良ぁE��ドバイスをもらいましたか！E
        ],
        "14": [
            "スミス先生: ええ、E,
            "<u>②こちら�E方があなたにはもっと良ぁE��思うめE/u>、E,
            "大きな封E��の夢を持つのは良ぁE��とだけど、まず�Eもっと小さな目標を立てて、それから各目標を達�Eするための小さなスチE��プを作るべきよ、E,
            "大きな夢のことばかり老E��る�Eはあまり良くなぁE��、E,
            "あなた�E新年の抱負はとても大きくて、それがあなたにとって達�Eを不可能にしてしまった�EではなぁE��と思うわ、厚司、E
        ],
        "15": [
            "厚司: ああ、なるほど、E,
            "つまり、E ③ )」�E方が私にとってより良ぁE��負だったとぁE��ことです�E、E
        ],
        "16": [
            "スミス先生: そ�E通りよ、E
        ],
        "17": [
            "厚司: 来週のミ�EチE��ングで、他�Eメンバ�Eにこれら�Eアドバイスを�E有してもいぁE��すか�E�E
        ],
        "18": [
            "スミス先生: ええ、もちろんだわ、E
        ]
    },
    explanations: {
        p5_q1: {
            correct: "ウ",
            beginner: {
                summary: "厚司がミーチE��ングに参加したくなぁE��由を答えます、E,
                detail: `下線部の後で厚司は、新年の抱負を�E然達�EしてぁE��ぁE��述べ、Eref target="3-5">so I don't have anything to talk about at the meeting.</ref>�E�だからミ�EチE��ングで話すことが何もなぁE��と言ってぁE��す。`,
                keywords: [
                    "meeting (ミ�EチE��ング)",
                    "join (参加する)",
                    "resolution (抱負、決愁E",
                    "achieve (達�Eする)",
                    "at all (全く～なぁE"
                ]
            },
            advanced: {
                summary: "因果関係を表す接続詞soに注目します、E,
                detail: `厚司は目標未達�E�E�Eaven't achieved it at all�E��E結果として、Eref target="3-5">I don't have anything to talk about</ref>�E�話すことが何もなぁE��と結論付けてぁE��す。`,
                keywords: [
                    "tradition (伝統)",
                    "result (結果)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "However, / I haven't achieved it at all, / so I don't have anything / to talk about at the meeting.",
                        translation: "しかし、E/ 私�Eそれを�Eく達成してぁE��せん / だから私�E何もありません / ミ�EチE��ングで話すべきことが、E
                    }
                ]
            }
        },
        p5_q2: {
            correct: "イ",
            beginner: {
                summary: "スミス先生の今年の目標につぁE��の発言を探します、E,
                detail: `スミス先生は <ref target="8-1">My resolution this year was to go to a gym every weekend for my health.</ref>�E�私�E今年の抱負は、健康のために毎週末ジムに行くことでした�E�と言ってぁE��す。`,
                keywords: [
                    "gym (ジム)",
                    "weekend (週末)",
                    "health (健康)"
                ]
            },
            advanced: {
                summary: "冁E��一致問題です、E,
                detail: `選択肢イの冁E��は本斁E�E記述と完�Eに一致します。選択肢ウにつぁE��は、Eref target="8-2">I still go there four or five times in a month.</ref> とあり、継続してぁE���E�達成できてぁE���E�ため不適です。`,
                keywords: [
                    "continue (続けめE"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "My resolution this year was / to go to a gym every weekend / for my health.",
                        translation: "私�E今年の抱負は�E�でした / 毎週末ジムに行くこと / 健康のために、E
                    }
                ]
            }
        },
        p5_q3: {
            correct: "(侁E too big / achieve",
            beginner: {
                summary: "「～すぎて…できなぁE��とぁE��表現を使ぁE��す、E,
                detail: `スミス先生は厚司の目標につぁE�� <ref target="14-4">your New Year's resolution was very big and that made achieving it impossible for you</ref>�E�目標がとても大きくて、それが達�Eを不可能にした�E�と言ってぁE��す。これを「too + 形容詁E+ to + 動詞�E原形」（～すぎて…できなぁE���E構文で言ぁE��えます。「彼が達成するには大きすぎた」となるよぁE��、E too ) ( big ) for him to ( achieve ) とします。`,
                keywords: [
                    "impossible (不可能な)",
                    "achieve (達�Eする)"
                ]
            },
            advanced: {
                summary: "too...to構文を用ぁE��書き換え問題です、E,
                detail: `允E�E斁E��ある "very big" と "impossible"�E�不可能�E�とぁE��要素を、否定�E意味を含む "too...to..." 構文�E�あまりに…なので�E�できなぁE��で表現します。意味上�E主誁Efor him もヒントになります。`,
                keywords: [
                    "impossible (不可能な)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'm afraid your New Year's resolution / was very big / and that made achieving it impossible / for you.",
                        translation: "あなた�E新年の抱負は�E�残念ながら�E�E/ とても大きかったでぁE/ そしてそ�Eことが達成することを不可能にしました / あなたにとって、E
                    }
                ]
            }
        },
        p5_q4: {
            correct: "ア",
            beginner: {
                summary: "「小さな目標」に当てはまるものを選びます、E,
                detail: `スミス先生のアドバイス <ref target="14-2">you should make smaller goals first</ref>�E�まず�Eもっと小さな目標を立てるべき）に従い、�Eの目標「月100語」よりハードルが低いも�Eを選びます。「毎日3単語」なら月90語程度で、少し簡単になります。`,
                keywords: [
                    "advice (アドバイス)",
                    "small (小さぁE"
                ]
            },
            advanced: {
                summary: "斁E��琁E��と計算を含む問題です、E,
                detail: `允E�E目標�E「月100単語」。選択肢ア「毎日3単語」�E 3ÁE0=90単誁E朁Eなので、若干少なくなり、かつ日、E�E小さなスチE��プ！Ereate small steps�E�になってぁE��す。選択肢ウ「年1000単語」�E月換算で紁E3単語ですが、スパンが長く「小さなスチE��プ」�E趣旨から外れる可能性がありますし、アの方が「毎日」とぁE��具体的な行動�E�Eteps�E�に近いです。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "you should make smaller goals first, / and then create small steps / to achieve each goal.",
                        translation: "あなた�Eまずより小さな目標を立てるべきです、E/ そしてそれから小さな段階を作るべきでぁE/ 吁E��標を達�Eするために、E
                    }
                ]
            }
        },
        p5_q5: {
            correct: "ウ",
            beginner: {
                summary: "環墁E��意志につぁE��の記述を探します、E,
                detail: `スミス先生は <ref target="12-0">According to one study, our environment may affect us more than our will.</ref>�E�ある研究によると、環墁E�E意志よりも私たちに影響を与えるかもしれなぁE��と言ってぁE��す。これ�E選択肢ウの冁E��と一致します。`,
                keywords: [
                    "study (研究)",
                    "environment (環墁E",
                    "affect (影響する)",
                    "will (意忁E"
                ]
            },
            advanced: {
                summary: "本斁E�E詳細冁E��の一致問題です、E,
                detail: `アは「�E学年」ではなく、E年生」�E話。イはMs. Smithは、Eヶ月でも頑張る」とぁE��厚司を肯定的に捉えアドバイスしてぁE��ので不適。エは「大きな目標を持つべき」ではなく「小さな目標から」と言ってぁE��ので送E��す。`,
                keywords: [
                    "influence (影響を与えめE"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "According to one study, / our environment may affect us / more than our will.",
                        translation: "ある研究によると、E/ 私たちの環墁E�E私たちに影響を与えるかもしれません / 私たちの意志以上に、E
                    }
                ]
            }
        },
        p5_q6: {
            correct: "① month ② creating",
            beginner: {
                summary: "本斁E�E表現をそのまま使って要紁E��完�Eさせます、E,
                detail: `① 厚司の允E�E目標�E <ref target="5-0">memorizing 100 English words every month</ref> でした、E
② アドバイスの一つは <ref target="10-1">creating the environment</ref> でした。`,
                keywords: [
                    "important (重要な)",
                    "share (共有すめE"
                ]
            },
            advanced: {
                summary: "要紁E��の空所補�Eです、E,
                detail: `①は頻度を表ぁEevery month。②は動名詁Ecreating が�Eります。文法的には主語になる部刁E��ので動名詞が適刁E��す。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "My New Year's resolution was / to memorize 100 English words / every month.",
                        translation: "私�E新年の抱負は�E�でした / 100個�E英単語を覚えること / 毎月、E
                    }
                ]
            }
        }
    }
};

const rinsSpeechProblem = {
    id: "p8",
    title: "Rin's Speech on AI Suitcase",
    category: "中学3年",
    target: "中3",
    number: "中3-問顁E",
    genre: "スピ�EチE,
    source: "学力テスチE中3甁E2024年度 1朁E,
    badges: [
        "中3 関係代名詁E,
        "中3 刁E���E後置修飾",
        "中3 間接疑問斁E,
        "学力テスチE,
        "チE��ノロジー",
        "社会問顁E
    ],
    content: `During the winter vacation, I visited my grandmother in Fukuoka. When I arrived at her house, she welcomed me with her dog, Leon. My grandmother can't see things well, and Leon helps her as her *guide dog. One day, she said she and Leon were going to a supermarket, and I went with them to see <u>①how Leon helped my grandmother</u>. On the way to the supermarket, he guided her with his own *signals. For example, when they came to corners or steps, he told her that by stopping just before them. And when they got to the supermarket, she said "door" to him. Leon looked for a *nearby door, took her there, and stopped in front of it to tell her where the *entrance to the supermarket was. He was amazing.

I got interested in other ways to help *visually impaired people move around, and found a website that introduces a unique technology, <u>②AI Suitcase</u>. It's a kind of an AI robot that looks just like a travel *suitcase. It helps people with eye problems move safely. A user tells it his or her *destination, and it moves to guide the user. The user follows it with the *handle in their hand. AI Suitcase is able to recognize *obstacles, people, and steps on the way. And the user hears the voice guide from AI Suitcase through a *wearable speaker on their neck. For example, when AI Suitcase finds an obstacle on the way, it says, "There is an obstacle in front of you." When they have to wait in line, it leads them to the line and says, "We'll get in a line. Please stop and wait here." AI Suitcase has already been tested by many people, and I could read opinions from the test users on the website. One says, "( ③ ) However, I have to make a *reservation to use the service, so I can't go out freely when I want to. I hope AI Suitcase will help me enjoy going out more." <u>④Another</u> says, "We, visually impaired people, must use a guide dog or a white *cane when we go out, but I don't like to be recognized as a visually impaired person on the street. When I walk around a city with AI Suitcase, I just look like a person with a suitcase. I like that."

AI Suitcase, however, still has some problems that have to be solved. Sometimes recognizing the colors of a traffic light is difficult for AI Suitcase when the *sunlight is too strong or the traffic light is too far, for example. It may take a long time before AI Suitcase can be used in our society, but I hope visually impaired people will be able to go out more freely than now with it.`,
    footnotes: [
        "guide dog 盲導犬",
        "signal 合図",
        "nearby 近くの",
        "entrance 入り口",
        "visually impaired 視覚障害があめE,
        "suitcase スーチE��ース",
        "destination 目皁E��",
        "handle 取っ扁E,
        "obstacle 障害物",
        "wearable 身につけることができる",
        "reservation 予紁E,
        "cane 杁E,
        "sunlight 日允E
    ],
    questions: [
        {
            id: "p8_q1",
            text: `次は、下線部①につぁE��凛がまとめた【メモ】です。本斁E�E冁E��に合うように、E��　�E�に入る最も適当な語をそれぞれ�E�語ずつ答えなさい、E

【メモ、E
How Leon helped my grandmother
・When Leon found corners or ( ① ) on the road, he stopped in front of them.
・After ( ② ) the word "door," Leon led her to a nearby door and stopped there.`,
            options: [],
            answerLabel: "① steps ② hearing",
            type: "fill-in-blank",
            relatedParagraphs: [
                0
            ]
        },
        {
            id: "p8_q2",
            text: `下線部②「AIスーチE��ース」を使ってぁE��とき�E様子を表すイラストとして最も適当なも�Eを次から�E�つ選び、記号で答えなさい、E

![イラスト：AIスーチE��ース](/images/rins_speech_q2.png)`,
            options: [],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p8_q3",
            text: `�E�　③　�E�に次のA�E�Cの�E�つの斁E��入れるとき、A�E�Cを並べる頁E��として最も適当なも�Eをあとから�E�つ選び、記号で答えなさい、E

A I enjoy going out thanks to these people.
B When I go out, I usually use a service that sends someone to help me.
C He or she comes to my house and helps me move around safely.`,
            options: [
                "A - B - C",
                "A - C - B",
                "B - A - C",
                "B - C - A",
                "C - A - B",
                "C - B - A"
            ],
            answerLabel: "ウ",
            type: "sort",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p8_q4",
            text: "下線部④の人が述べたAIスーチE��ースを使った感想として最も適当なも�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "盲導犬めE��ぁE��と比べて、AIスーチE��ースは使用時に視覚障害老E��して認識されにくいとぁE��点が気に入ってぁE��、E,
                "AIスーチE��ースは移動を補助してくれる人を派遣してくれるサービスにとって代わるも�Eになると思う、E,
                "AIスーチE��ースと白ぁE��を併用することで、視覚障害老E��して認識してもらぁE��つ、安�Eに移動することができる、E,
                "AIスーチE��ースを使用してぁE��ば、視覚障害老E�E障害物めE��ぁE��ぁE��人を視覚で認識できるのでありがたぁE��E
            ],
            answerLabel: "ア",
            type: "choice",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p8_q5",
            text: `次の斁E��、AIスーチE��ースが抱えてぁE��課題�E一例を表す文になるよぁE��、E��　�E�に入る最も適当な語をそれぞれ本斁E��から�E�語ずつ抜き出して答えなさい、E

Sometimes AI Suitcase can't ( ) the ( ) of a traffic light when the sunlight is too strong or the traffic light is too ( ) away.`,
            options: [],
            answerLabel: "recognize / colors / far",
            type: "fill-in-blank",
            relatedParagraphs: [
                2
            ]
        },
        {
            id: "p8_q6",
            text: "本斁E�E冁E��と合ってぁE��も�Eを次から�E�つ選び、記号で答えなさい、E,
            options: [
                "Rin got interested in guide dogs after she researched about AI Suitcase.",
                "Rin hopes visually impaired people can enjoy going out more freely with AI Suitcase.",
                "There is a service that sends people with AI Suitcase to one's home through a reservation.",
                "Rin believes AI Suitcase can be used in the society soon."
            ],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                2
            ]
        }
    ],
    "sentenceTranslations": {
        "0": [
            "冬休みの間、私�E福岡の祖母を訪ねました、E,
            "彼女の家に到着すると、彼女は愛犬のレオンと一緒に出迎えてくれました、E,
            "私�E祖母�E目があまりよく見えませんが、レオンは盲導犬として彼女を助けてぁE��す、E,
            "ある日、彼女がレオンと一緒にスーパ�Eに行くと言った�Eで、私�E<u>①レオンがどのように祖母を助けるぁE/u>を見るために彼らと一緒に行きました、E,
            "スーパ�Eへ行く途中、彼は独自の合図で彼女を誘導しました、E,
            "例えば、角や段差に来たとき、彼はそれら�Eすぐ手前で止まることで彼女にそ�Eことを伝えました、E,
            "そしてスーパ�Eに着くと、彼女は彼に「ドア」と言ぁE��した、E,
            "レオンは近くのドアを探して彼女をそこへ連れて行き、スーパ�Eの入り口がどこにあるかを彼女に教えるためにそ�E前で止まりました、E,
            "彼はすごかったです、E
        ],
        "1": [
            "私�E視覚障害がある人、E��動き回るのを助ける他�E方法に興味を持ち、ユニ�Eクな技術、Eu>②AIスーチE��ース</u>を紹介してぁE��ウェブサイトを見つけました、E,
            "それはまるで旁E��用スーチE��ースのように見える一種のAIロボットです、E,
            "それは目の不�E由な人、E��安�Eに移動する�Eを助けます、E,
            "利用老E��目皁E��を告げると、それ�E利用老E��誘導するために動きます、E,
            "利用老E�E手にある取っ手を持ってそ�E後をつぁE��ぁE��ます、E,
            "AIスーチE��ースは途中の障害物、人、段差を認識することができます、E,
            "そして利用老E�E首にかけたウェアラブルスピ�Eカーを通してAIスーチE��ースからの音声ガイドを聞きます、E,
            "例えば、AIスーチE��ースが途中で障害物を見つけると、「あなた�E前に障害物があります」と言ぁE��す、E,
            "列に並ばなければならなぁE��き�E、彼らを列へと誘導し、「�Eに並びます、E,
            "ここで止まって征E��てください」と言ぁE��す、E,
            "AIスーチE��ースはすでに多くの人、E��よってチE��トされており、私�EウェブサイトでチE��トユーザーからの意見を読むことができました、E,
            "ある人は言ぁE��す、、E ③ ) しかしながら、私�Eそ�Eサービスを利用するために予紁E��しなければならなぁE�Eで、行きたいときに自由に外�Eすることができません、E,
            "私�EAIスーチE��ースが、私が外�Eをもっと楽し�E助けになることを望んでぁE��す。、E,
            "<u>④別の人</u>は言ぁE��す、「私たち視覚障害老E�E、外�Eするときに盲導犬めE��ぁE��を使わなければなりませんが、私�E通りで視覚障害老E��して認識されるのが好きではありません、E,
            "私がAIスーチE��ースと一緒に街を歩くとき、私�EただスーチE��ースを持った人のように見えます、E,
            "私�Eそれが気に入ってぁE��す。、E
        ],
        "2": [
            "しかし、AIスーチE��ースにはまだ解決されなければならなぁE��くつか�E問題があります、E,
            "例えば、日光が強すぎたり信号機が遠すぎたりすると、AIスーチE��ースにとって信号機�E色を認識する�Eが難しいことがあります、E,
            "AIスーチE��ースが私たちの社会で使われるよぁE��なるまでには長ぁE��間がかかるかもしれませんが、私�E視覚障害がある人、E��それと一緒にもっと自由に外�Eできるようになることを望んでぁE��す、E
        ]
    },
    explanations: {
        p8_q1: {
            correct: "① steps ② hearing",
            beginner: {
                summary: "レオンの行動につぁE��の詳細を埋める問題です、E,
                detail: `①本斁E�E <ref target="0-5">when they came to corners or steps</ref>�E�角や段差に来たとき）とぁE��記述から、cornersに対応する�Eは steps です、E
②本斁E�E <ref target="0-6">she said "door" to him.</ref>�E�彼女は彼に「ドア」と言った）とぁE��記述から、レオンの立場で見ると「ドアとぁE��言葉を聞いた後」となる�Eで、hear を動名詞にして hearing とします。`,
                keywords: [
                    "corner (见E",
                    "step (段差)",
                    "hear (聞く)"
                ]
            },
            advanced: {
                summary: "英斁E�E言ぁE��えと語形変化を問ぁE��題です、E,
                detail: `①は名詞�E並列構造�E�E or B�E�を見抜きます。②は前置詁EAfter の後ろなので動名詞！Eing�E�が忁E��です。本斁E�E能動�Eの斁E��Ehe said...�E�ですが、メモはLeonの行動�E�Efter hearing...�E�として表現されてぁE��す。`,
                keywords: [
                    "nearby (近くの)",
                    "lead (導く)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "For example, / when they came to corners or steps, / he told her that / by stopping just before them.",
                        translation: "例えば、E/ 彼らが角や段差に来たとき、E/ 彼は彼女にそ�Eことを伝えました / それら�Eすぐ手前で止まることによって、E
                    }
                ]
            }
        },
        p8_q2: {
            correct: "イ",
            beginner: {
                summary: "AIスーチE��ースを使ってぁE��人の特徴を探します、E,
                detail: `本斁E�� <ref target="1-4">The user follows it with the handle in their hand.</ref>�E�利用老E�E取っ手を持ってつぁE��ぁE���E�およ�E <ref target="1-6">through a wearable speaker on their neck</ref>�E�首�E上�Eウェアラブルスピ�Eカーを通して�E�とあります。これら2点�E�スーチE��ースの取っ手を持つ、E��にスピ�Eカー�E�を満たすイラスト�Eイです。`,
                keywords: [
                    "handle (取っ扁E",
                    "wearable speaker (身につけられるスピ�Eカー)",
                    "neck (馁E"
                ]
            },
            advanced: {
                summary: "本斁E�E描�Eと視覚情報を�E合する問題です、E,
                detail: `wearable speaker on their neck が決定的な手がかりです。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "The user follows it / with the handle / in their hand.",
                        translation: "利用老E�EそれにつぁE��ぁE��まぁE/ 取っ手を持って / 手�E中に、E
                    },
                    {
                        text: "And the user hears the voice guide / from AI Suitcase / through a wearable speaker / on their neck.",
                        translation: "そして利用老E�E音声ガイドを聞きまぁE/ AIスーチE��ースからの / ウェアラブルスピ�Eカーを通して / 首にある、E
                    }
                ]
            }
        },
        p8_q3: {
            correct: "ウ",
            beginner: {
                summary: "話の流れに合うように斁E��並べ替えます、E,
                detail: `斁E��は、あるテストユーザーの意見で、既存�Eサービス�E��Eルパ�Eさんなど�E�につぁE��の話から始まります、E
1. (B) 外�E時�E人を派遣してくれるサービスを使ぁE��導�E�E�E
2. (C) そ�E人が家に来て助けてくれる（�E体的冁E���E�E
3. (A) そ�E人たちのおかげで外�Eを楽しめる（感謝�E感想�E�E
そ�E後に本斁E�E However�E�しかし予紁E��忁E��で不便…�E�と続きます。`,
                keywords: [
                    "service (サービス)",
                    "send (送る)",
                    "safely (安�Eに)",
                    "thanks to (�E��Eおかげで)"
                ]
            },
            advanced: {
                summary: "論理皁E��開�E�導�E→説明�E評価→送E���E�を読み解きます、E,
                detail: `Bで話題！Eervice�E�を提示し、Cでそ�E代名詞！Ee or she�E�を受けて冁E��を詳述し、Aでそ�E評価�E�Enjoy�E�を述べます。直後�E However�E�しかし予紁E��忁E��で自由がなぁE��とぁE��不満点との対比構造を作るためにも、直前�EAのような肯定的な冁E��が来ると自然です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "When I go out, / I usually use a service / that sends someone to help me.",
                        translation: "私�EたいてぁE��ービスを使ぁE��ぁE/ 私を助ける誰かを派遣してくれる、E
                    }
                ]
            }
        },
        p8_q4: {
            correct: "ア",
            beginner: {
                summary: "もう一人の利用老E�E意見を読み取ります、E,
                detail: `下線部④の後�E発言を確認します、Eref target="1-11">I don't like to be recognized as a visually impaired person on the street.</ref>�E�通りで視覚障害老E��して認識されるのが好きではなぁE��、Eref target="1-11">I just look like a person with a suitcase. I like that.</ref>�E�ただのスーチE��ースを持った人のように見える。それが気に入ってぁE���E�と言ってぁE��す。これ�E選択肢アの冁E��と一致します。`,
                keywords: [
                    "recognize (認識すめE",
                    "visually impaired person (視覚障害老E",
                    "look like (�E��Eように見えめE"
                ]
            },
            advanced: {
                summary: "意見�E要点を把握する問題です、E,
                detail: `guide dog or white cane との比輁E��おいて、visually impaired person として認識されずに済�E�E�Eust look like a person with a suitcase�E�ことをメリチE��として挙げてぁE��す。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I don't like to be recognized / as a visually impaired person / on the street.",
                        translation: "私�E認識されるのが好きではありません / 視覚障害老E��して / 通りで、E
                    }
                ]
            }
        },
        p8_q5: {
            correct: "recognize / colors / far",
            beginner: {
                summary: "課題につぁE��書かれた部刁E��ら単語を抜き出します、E,
                detail: `最終段落を見ます、Eref target="2-1">Sometimes recognizing the colors of a traffic light is difficult... traffic light is too far</ref> とあります、E
問題文�E�can't ( recognize ) the ( colors ) ... is too ( far ) away.
本斁E�E recognizing は助動詁Ecan't の後ろなので原形 recognize に戻します。`,
                keywords: [
                    "traffic light (信号橁E",
                    "difficult (難しい)",
                    "strong (強ぁE"
                ]
            },
            advanced: {
                summary: "英斁E�E構造転換と語形変化�E�動名詞�E原形�E�を伴ぁE��き�Eし問題です、E,
                detail: `本斁E��Sometimes [recognizing the colors...] is difficult.�E�動名詞句が主語！E
問題文�E�Sometimes AI Suitcase can't [recognize the colors...].�E�主語＋動詞！E
意味皁E��対応する語を選び、can't の直後なので recognize に形を整えます。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Sometimes / recognizing the colors of a traffic light / is difficult for AI Suitcase",
                        translation: "時、E/ 信号機�E色を認識することは / AIスーチE��ースにとって難しいでぁE
                    }
                ]
            }
        },
        p8_q6: {
            correct: "イ",
            beginner: {
                summary: "本斁E�E体�E結論や筁E��E�E願いを選びます、E,
                detail: `最後�E斁E<ref target="2-2">I hope visually impaired people will be able to go out more freely than now with it.</ref>�E�私�E視覚障害老E��これと一緒にもっと自由に外�Eできるようになることを望んでぁE��す）が、E��択肢イの冁E��と一致します。`,
                keywords: [
                    "hope (望�E)",
                    "freely (自由に)",
                    "society (社企E"
                ]
            },
            advanced: {
                summary: "冁E��一致問題です、E,
                detail: `ア�E�AIスーチE��ースの後に盲導犬に興味を持ったわけではなぁE��頁E��送E��、E
ウ�E�AIスーチE��ースを持った人を派遣するのではなく、AIスーチE��ース自体がロボット、E
エ�E�すぐに�E�Eoon�E�使えるとは言っておらず、It may take a long time�E�長ぁE��間がかかるかもしれなぁE��と言ってぁE��。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I hope / visually impaired people will be able to go out / more freely than now / with it.",
                        translation: "私�E望みまぁE/ 視覚障害がある人、E��外�EできるようになることめE/ 今よりもっと自由に / それ�E�EIスーチE��ース�E�と一緒に、E
                    }
                ]
            }
        }
    }
};

export const grade3Problems = [weddingRegistryProblem, newYearsResolutionProblem, rinsSpeechProblem, tokushima_mock_d5_aurora, tokushima_mock_2025_yamaguchi_remix, tokushima_2026_mock_q7_cleaning, tokushima_mock_d5_paper_recycling, tokushima_mock_story_yuta_canada, tokushima_mock_q7_mie_2024, kisogaku_tokushima_2025_c3_3_4, kisogaku_tokushima_2025_c3_3_5, kisogaku_tokushima_2025_c3_3_6, kisogaku_tokushima_2025_c3_3_7, kisogaku_tokushima_2025_c3_2_4, kisogaku_tokushima_2025_c3_2_5, kisogaku_tokushima_2025_c3_2_6, kisogaku_tokushima_2025_c3_2_7, kisogaku_tokushima_2025_c3_1_4, kisogaku_tokushima_2025_c3_1_5];
