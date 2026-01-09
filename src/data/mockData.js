const koalaProblem = {
    id: "p1",
    title: "Koalas in Australia",
    genre: "自然科学",
    badges: ["生物", "環境"],
    questionCount: 6,
    source: "出典：学力テスト中3生2025年12月",
    content: `Hello, everyone. My name is Sam. I am from Australia. I came to Japan three months ago, but since then many people have asked me about koalas. So, I would like to talk about them today.

When you think of koalas, you imagine a koala eating leaves alone on a tree, don't you? That is not wrong during the daytime. Koalas are often seen to be alone, or just the two of them, a mother and her baby, when the baby is small. Also, koalas spend a lot of time on a tree called a *eucalyptus. However, koalas are *semi-nocturnal and become more active from the evening into the night or early morning. They live in this way because they don't lose as much water or energy in their bodies during the cool nights as they do during the hot days. They stay *still on a tree for 18 to 20 hours in a day, and sleep for more than 14 hours out of those hours. When they want to move, they communicate with other koalas and look for a new tree for their home.

Koalas depend on eucalyptus leaves for most of their food. There are more than 600 kinds of eucalyptus trees in Australia, and koalas use about 120 kinds of them for food or as a home. They especially like to eat the young leaves of 20 kinds among those 120. *Adult koalas eat about 600 to 800 *grams of eucalyptus leaves in a day. Koalas are very *sensitive animals. They are weak to changes in the environment, and their food is special. So people need to take care of them very carefully in places like zoos. Eucalyptus leaves have *poison in them, and the large nose of the koala is helpful to know the type of eucalyptus leaves and the *amount of poison in them. Koalas drink little water, and they get water from eucalyptus leaves because 55% of the eucalyptus leaf is water. There isn't much *nutrition in them, and other wild animals don't eat them very much. That is good for koalas.

Today, koalas live only in the east of Australia. They once lived in other parts of Australia, too, until about 100 years ago. But many of them were hunted by humans in many places. As a result, they survived in only about 50% of their *former homes. Many trees in forests were cut down to make buildings in cities, and koalas lost more places to live. Later, cars and pets like dogs hurt or killed them when they came down from the trees. I hear about 4,000 koalas lose their lives every year in that way. *Furthermore, Australia has been affected by climate change since around 1990. Because of *droughts and forest fires, a lot of forests have been lost, and koalas' homes and food have also disappeared. Koalas were listed as an *endangered species in 2016. In September 2019, Australia lost about 170,000 km² of forests, about half of the land area of Japan, because of a large forest fire. About 60,000 koalas died, and many koalas were injured. Today, some people say there are only 30,000 to 50,000 koalas in Australia, and other people say there are 100,000 to 500,000. The *exact number is not known, but one study shows that the number has decreased by about 30% during these 20 years.

Protecting koalas means protecting other animals, forests, the environment, and humans, too. Today, in Australia, koalas are protected by law. Some groups *plant trees for them and take care of them. It is important for us to support such groups, drive our cars carefully on the roads near forests, and watch our pets carefully when we are in forests.`,
    footnotes: [
        "eucalyptus 「ユーカリ」",
        "semi-nocturnal 「半夜行性の」",
        "still 「じっとして」",
        "Adult 「大人の」",
        "gram(s) 「グラム」",
        "sensitive 「敏感な」",
        "poison 「毒」",
        "amount 「量」",
        "nutrition 「栄養」",
        "former 「以前の」",
        "Furthermore 「さらに」",
        "drought(s) 「干ばつ」",
        "endangered species 「絶滅危惧種」",
        "exact 「正確な」",
        "plant 「植える」"
    ],
    questions: [
        {
            id: "q1",
            number: 1,
            text: "コアラが夕方から早朝にかけての時間帯により活動的になる理由として最も適当なものを次から1つ選び，記号で答えなさい。",
            options: [
                "ア 昼間は木の上で眠る必要があるため。",
                "イ 涼しい時間帯に動くことで水分やエネルギーの消費を抑えるため。",
                "ウ 昼間に活発に活動する外敵から身を守るため。",
                "エ ユーカリの葉がおいしくなる時間帯に食事をとるため。"
            ],
            answer: 1, // イ (Index 1)
            relatedParagraphs: [1]
        },
        {
            id: "q2",
            number: 2,
            text: "本文の内容に合うように次の質問に英語で答えるとき，(　　)に入る最も適当な語をそれぞれ1語ずつ答えなさい。\n<質問> What kind of eucalyptus leaves do koalas especially like eating?\n<答え> They like eating the ( ① ) leaves of ( ② ) kinds.",
            options: [],
            answerLabel: "① young, ② twenty (or 20)",
            type: "fill-in-blank",
            relatedParagraphs: [2]
        },
        {
            id: "q3",
            number: 3,
            text: "コアラの住む場所についての説明として最も適当なものを次から1つ選び，記号で答えなさい。",
            options: [
                "ア Koalas lived only in the east of Australia until about 100 years ago.",
                "イ Koalas lived in some parts of Australia before, but today, they live only in the east of the country.",
                "ウ Koalas live in only 50% of Australia's land area today.",
                "エ Koalas live in the east of Australia, and the number of their homes has been increasing."
            ],
            answer: 1, // イ (Index 1)
            relatedParagraphs: [3]
        },
        {
            id: "q4",
            number: 4,
            text: "コアラの個体数が減っている原因として本文の内容と合っていないものを次から1つ選び，記号で答えなさい。",
            options: [
                "ア 木から降りた際に，車にひかれて命を奪われるから。",
                "イ イヌなどの人間のペットにより傷つけられるから。",
                "ウ 自然災害がコアラが住むための森の数を減らしているから。",
                "エ 人々が森に移り住んできて，コアラの住む場所を奪っているから。"
            ],
            answer: 3, // エ (Index 3)
            relatedParagraphs: [3]
        },
        {
            id: "q5",
            number: 5,
            text: "次は，サムのスピーチを聞いたクラスメートがサムにあてたメッセージの一部です。本文の内容に合うように，(　　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。\nThank you for the great speech, Sam. I learned many interesting things about koalas from your speech. I was surprised to know their large ( ① ) helps them know a lot about eucalyptus leaves. Also, I was sad to hear many koalas were ( ② ) by people before. I understand that there is a law to protect koalas in your country.",
            options: [],
            answerLabel: "① nose, ② hunted",
            type: "fill-in-blank",
            relatedParagraphs: [2, 3, 4]
        },
        {
            id: "q6",
            number: 6,
            text: "本文の内容と合っているものを次から1つ選び，記号で答えなさい。",
            options: [
                "ア Koalas are not affected by changes in the environment as much as other animals.",
                "イ Koalas often fight against other animals for eucalyptus leaves.",
                "ウ Sam thinks that more and more koalas should be protected at zoos.",
                "エ When we drive a car near forests in Australia, we should drive carefully."
            ],
            answer: 3, // エ (Index 3)
            relatedParagraphs: [4]
        }
    ],
    explanations: {
        q1: {
            correct: "イ",
            common: {
                slashReading: [
                    {
                        text: "They live in this way / because they don't lose / as much water or energy / in their bodies / during the cool nights / as they do / during the hot days.",
                        translation: "彼らはこのように生活しています / なぜなら彼らは失わないからです / 同じくらいの水分やエネルギーを / 体内で / 涼しい夜の間に / 彼らがする（失う）のと同じくらい / 暑い日中に",
                        freeTranslation: "暑い日中に失うのと同じほど、涼しい夜の間には体内の水分やエネルギーを消費しないですむので、彼らはこのような生活をしているのです。"
                    }
                ]
            },
            beginner: {
                summary: "夜の涼しい時間に動けば、体の水やエネルギーを使わなくて済むからです。",
                detail: "第2段落に、「暑い昼間よりも、涼しい夜の方が、体の水分やエネルギーを失わなくて済む」と書いてあります。だから、コアラは夜に活動するのです。",
                keywords: ["active (活動的な)", "energy (エネルギー)", "cool (涼しい)", "during (〜の間)", "lose (失う)"]
            },
            advanced: {
                summary: "夜間の活動は、昼間に比べて体内水分およびエネルギーの損失を抑制できるため。",
                detail: "第2段落の第5文「They live in this way because they don't lose as much water or energy...」が根拠。比較級と同等比較(as much ... as)を用いた構文で、昼夜の代謝コストの差を論じている。",
                keywords: ["semi-nocturnal (半夜行性の)", "early morning (早朝)"]
            }
        },
        q2: {
            correct: "① young, ② twenty",
            common: {
                slashReading: [
                    {
                        text: "They especially like to eat / the young leaves / of 20 kinds / among those 120.",
                        translation: "彼らは特に食べるのが好きです / 若い葉を / 20種類の / その120種類の中で",
                        freeTranslation: "彼らはその120種類の中でも、特に20種類の若い葉を好んで食べます。"
                    }
                ]
            },
            beginner: {
                summary: "本文に書いてある具体的な数字と種類を探しましょう。",
                detail: "第3段落の真ん中あたりを見てください。「young leaves（若い葉）」と「20 kinds（20種類）」という言葉があります。",
                keywords: ["especially (特に)", "kind (種類)", "among (〜の中で)", "young (若い)"]
            },
            advanced: {
                summary: "Specific details extraction. 第3段落の該当数値を特定する。",
                detail: "第3段落第3文の記述に合致する語を補充する。前置詞amongの用法（〜の中で）にも注意。",
                keywords: ["especially (特に)", "among (～の中で)"]
            }
        },
        q3: {
            correct: "イ",
            common: {
                slashReading: [
                    {
                        text: "Today, / koalas live only / in the east of Australia. / They once lived / in other parts of Australia, too, / until about 100 years ago.",
                        translation: "今日、 / コアラは～のみに住んでいます / オーストラリアの東部 / 彼らはかつて住んでいました / オーストラリアの他の地域にも、 / 約100年前まで",
                        freeTranslation: "今日、コアラはオーストラリアの東部にのみ生息しています。約100年前までは、オーストラリアの他の地域にも生息していました。"
                    }
                ]
            },
            beginner: {
                summary: "今は東オーストラリアにしかいませんが、昔は他の場所にもいました。",
                detail: "第4段落の最初に「今は東の方にしかいない」と書いてあります。でもその次の文で「100年前までは他の場所にもいた」と言っています。",
                keywords: ["east (東)", "part (部分・地域)", "once (かつて)", "until (〜まで)"]
            },
            advanced: {
                summary: "現在の生息域と過去の分布の対比。",
                detail: "第4段落冒頭の記述と一致する。選択肢イは「過去は一部、現在は東部のみ」という対比を正しく表している。",
                keywords: ["part (地域)", "survive (生き残る)"]
            }
        },
        q4: {
            correct: "エ",
            common: {
                slashReading: [
                    {
                        text: "Many trees in forests / were cut down / to make buildings / in cities, / and koalas lost / more places to live.",
                        translation: "森の中の多くの木々が / 切り倒されました / 建物を建てるために / 都市で / そしてコアラは失いました / 生きるためのより多くの場所を",
                        freeTranslation: "都市に建物を建設するために森の多くの木が切り倒され、コアラは生息地をさらに失いました。"
                    }
                ]
            },
            beginner: {
                summary: "「人が森に引っ越してきた」とは書いてありません。",
                detail: "本文には「都市にビルを作るために木が切られた」と書いてありますが、「人が森に住むようになった」とは書いてありません。",
                keywords: ["cut down (切り倒す)", "lose (失う)", "building (建物)"]
            },
            advanced: {
                summary: "本文記述との不一致を選択する。",
                detail: "都市開発（make buildings in cities）による森林伐採が原因であり、人間の森林への直接的な居住（migration）が原因とは述べられていない。",
                keywords: ["former homes (以前の住処)", "cut down (切り倒される)"]
            }
        },
        q5: {
            correct: "① nose, ② hunted",
            common: {
                slashReading: [
                    {
                        text: "the large nose of the koala / is helpful to know / the type of eucalyptus leaves / and the amount of poison / in them.",
                        translation: "コアラの大きな鼻は / 知るのに役立ちます / ユーカリの葉の種類を / そして毒の量を / それらの中にある",
                        freeTranslation: "コアラの大きな鼻は、ユーカリの葉の種類や、そこに含まれる毒の量を見分けるのに役立ちます。"
                    },
                    {
                        text: "But many of them / were hunted by humans / in many places.",
                        translation: "しかし彼らの多くは / 人間によって狩られました / 多くの場所で",
                        freeTranslation: "しかし、多くの場所で彼らの多くが人間に乱獲されました。"
                    }
                ]
            },
            beginner: {
                summary: "①鼻で毒がわかる、②人間が狩りをした。",
                detail: "①「鼻(nose)が役立つ」という部分、②「人間によって狩られた(hunted)」という部分を探しましょう。",
                keywords: ["nose (鼻)", "helpful (役に立つ)", "hunt (狩る)", "poison (毒)"]
            },
            advanced: {
                summary: "①感覚器官の機能、②人為的減少要因。",
                detail: "①文脈から毒を検知する器官（nose）を特定。②受動態の動作主（humans）に対応する動詞（hunted）を特定する。",
                keywords: ["poison (毒)", "helpful (役立つ)", "survived (生き延びた)"]
            }
        },
        q6: {
            correct: "エ",
            common: {
                slashReading: [
                    {
                        text: "It is important for us / to support such groups, / drive our cars carefully / on the roads near forests, / and watch our pets carefully / when we are in forests.",
                        translation: "私たちにとって重要です / そのようなグループを支援することは、 / 車を注意深く運転し / 森の近くの道路で、 / そしてペットを注意深く見守ることが / 私たちが森にいる時",
                        freeTranslation: "そのような団体を支援し、森の近くの道路では車を慎重に運転し、森にいるときはペットを注意深く見守ることが私たちにとって重要です。"
                    }
                ]
            },
            beginner: {
                summary: "森の近くでは気をつけよう、ということです。",
                detail: "最後の段落の最後に、「森の近くの道路では車を慎重に運転することが大切」と書いてあります。",
                keywords: ["important (重要な)", "support (支える)", "carefully (注意深く)", "road (道路)"]
            },
            advanced: {
                summary: "保護のための具体的な行動指針。",
                detail: "最終文の提言内容（drive our cars carefully...）と合致する選択肢を選ぶ。",
                keywords: ["protect (保護する)", "environment (環境)", "law (法律)"]
            }
        }
    },
    sentenceTranslations: {
        0: [
            "みなさん、こんにちは。",
            "私の名前はサムです。",
            "オーストラリア出身です。",
            "私は3ヶ月前に日本に来ましたが、それ以来多くの人が私にコアラについて質問してきます。",
            "そこで今日はコアラについてお話ししたいと思います。"
        ],
        1: [
            "コアラと聞くと、木の上で独りで葉を食べているコアラを想像しますよね？",
            "それは日中においては間違いではありません。",
            "赤ちゃんが小さいうちは、コアラは単独で、あるいは母親と赤ちゃんの2頭だけでいるのをよく見かけます。",
            "また、コアラはユーカリと呼ばれる木の上で多くの時間を過ごします。",
            "しかし、コアラは半夜行性で、夕方から夜、早朝にかけて活動的になります。",
            "彼らがこのように生活しているのは、暑い日中よりも涼しい夜間の方が、体内の水分やエネルギーを失わなくて済むからです。",
            "彼らは1日のうち18〜20時間は木の上でじっとしていて、そのうち14時間以上は眠っています。",
            "移動したいときは、他のコアラとコミュニケーションを取り、新しい住処となる木を探します。"
        ],
        2: [
            "コアラは食事のほとんどをユーカリの葉に頼っています。",
            "オーストラリアには600種類以上のユーカリの木がありますが、コアラがそのうち餌や住処として利用するのは約120種類です。",
            "彼らはその120種類の中でも、特に20種類の若い葉を好んで食べます。",
            "大人のコアラは1日に約600〜800グラムのユーカリの葉を食べます。",
            "コアラはとても敏感な動物です。",
            "環境の変化に弱く、食べ物も特別です。",
            "だから、動物園のような場所では、人々は彼らを注意深く世話する必要があります。",
            "ユーカリの葉には毒が含まれており、コアラの大きな鼻は、ユーカリの葉の種類やそこに含まれる毒の量を見分けるのに役立ちます。",
            "コアラは水をほとんど飲みませんが、ユーカリの葉の55%は水分であるため、そこから水分を摂取します。",
            "それらにはあまり栄養がなく、他の野生動物はあまり食べません。",
            "それはコアラにとっては好都合です。"
        ],
        3: [
            "今日、コアラはオーストラリアの東部にのみ生息しています。",
            "約100年前までは、オーストラリアの他の地域にも生息していました。",
            "しかし、多くの場所で彼らの多くが人間に乱獲されました。",
            "その結果、彼らは以前の生息地の約50%でしか生き残れませんでした。",
            "都市に建物を建設するために森の多くの木が切り倒され、コアラは生息地をさらに失いました。",
            "その後、木から降りてきたコアラが、車や犬などのペットに傷つけられたり殺されたりするようになりました。",
            "毎年約4,000頭のコアラがそのようにして命を落としていると聞いています。",
            "さらに、オーストラリアは1990年頃から気候変動の影響を受けています。",
            "干ばつや森林火災により多くの森が失われ、コアラの住処や食べ物も消えてしまいました。",
            "コアラは2016年に絶滅危惧種に指定されました。",
            "2019年9月には、大規模な森林火災により、日本の国土面積の約半分にあたる約17万平方キロメートルの森林が失われました。",
            "約6万頭のコアラが死亡し、多くのコアラが負傷しました。",
            "今日、オーストラリアにはコアラが3万〜5万頭しかいないと言う人もいれば、10万〜50万頭いると言う人もいます。",
            "正確な数はわかっていませんが、ある調査によると、この20年間でその数は約30%減少したとのことです。"
        ],
        4: [
            "コアラを守ることは、他の動物、森、環境、そして人間を守ることでもあります。",
            "今日、オーストラリアではコアラは法律で守られています。",
            "いくつかの団体が彼らのために木を植え、世話をしています。",
            "そのような団体を支援し、森の近くの道路では車を慎重に運転し、森にいるときはペットを注意深く見守ることが、私たちにとって重要なのです。"
        ]
    }
};

export const mockProblems = [
    {
        ...koalaProblem,
        id: "p1",
        number: "問題1",
        title: "Koalas in Australia",
        genre: "自然科学",
        badges: ["生物", "環境"],
        target: "中3", // Target audience
        questionCount: 6,
        source: "出典：学力テスト中3生2025年12月"
    },
    {
        id: "p2",
        number: "問題2",
        title: "Plant Communication",
        genre: "自然科学",
        badges: ["植物", "科学"],
        target: "受験生",
        questionCount: 4,
        source: "出典：公立高校入試予想問題",
        content: "Placeholder content for Plant Communication...",
        questions: []
    },
    {
        id: "p3",
        number: "問題3",
        title: "The Mystery of the Flannan Isles",
        genre: "歴史 / ミステリー",
        badges: ["歴史", "ミステリー"],
        target: "中2",
        questionCount: 3,
        source: "出典：英語の友 2月号",
        content: "Placeholder content for Flannan Isles...",
        questions: []
    },
    {
        id: "p4",
        number: "問題4",
        title: "The Science of Empathy",
        genre: "心理学 / 科学",
        badges: ["心理学", "科学"],
        target: "受験生",
        questionCount: 4,
        source: "出典：全国高校入試問題正解",
        content: "Placeholder...",
        questions: []
    },
    // Adding a JH1 problem for completeness
    {
        id: "p5",
        number: "問題5",
        title: "My School Life",
        genre: "学校生活",
        badges: ["生活"],
        target: "中1",
        questionCount: 3,
        source: "出典：教科書Sunshine 1",
        content: "Placeholder...",
        questions: []
    }
];

export const mockProblem = koalaProblem;
