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
            answer: 1,
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
            answer: 1,
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
            answer: 3,
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
            answer: 3,
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
        target: "中3",
        questionCount: 6,
        source: "学力テスト 中３生 ２０２５年１２月"
    },
    {
        id: "p2",
        number: "大問2",
        title: "Wedding Registry",
        genre: "会話文",
        badges: ["文化", "異文化理解"],
        target: "中3",
        questionCount: 5,
        source: "学力テスト 中３生 ２０２５年１２月",
        instruction: "次の高校生の花(Hana)とALTのグリーン先生(Mr. Green)との対話文を読んで，あとの問いに答えなさい。",
        content: `Hana:       Hello, Mr. Green. <u>①I have something to ask you.</u> Do you have time?
Mr. Green:  Sure. What is it?
Hana:       My brother is going to *get married next month. I want to give him a gift, but I can't think of anything good for him. Do you remember what you got as *wedding gifts? What kind of gift did you like?
Mr. Green:  Happy wedding to your brother! Both my wife and I drink coffee every morning, so my wife and I were happy to get *matching coffee cups. Our favorite artist's picture is printed on the cups. We got married more than 10 years ago, and we still use them.
Hana:       They are nice presents, but my brother doesn't drink coffee. So I'm afraid they won't be a good gift for him.
Mr. Green:  (    ②    )
Hana:       I wanted to surprise him with a nice gift, but maybe you're right. I should ask him directly.
Mr. Green:  Don't be so *disappointed. It's not a bad idea to ask someone what he or she wants before giving a gift to them. Actually, my wife and I got those cups by using our <u>③wedding registry</u>.
Hana:       Wedding registry? What is that?
Mr. Green:  In my country, the U.S., we often make a list of things we want before receiving gifts on days like birthdays or weddings. This list is called a gift registry. We choose a store, look for the things we want there, make a gift registry, and leave it to the store. The name of the store or the *link to the online shop for the gift registry is written on the wedding *invitation, for example. Friends and family members go to the store or check the online shop, see your gift registry, and choose the gift they want to get for you.
Hana:       Wow, that's very interesting.
Mr. Green:  A gift registry for a wedding is called a wedding registry, and the one for a couple who will soon have a baby is called a baby registry. In the U.K., a wedding registry is called a wedding list.
Hana:       I see. In that way, people are able to give a gift the person really wants, right?
Mr. Green:  That's right. The gifts bought by others are *removed from the list, so people don't have to worry about buying the same gift.
Hana:       That's convenient. It's a different culture from ours. We usually give money to the couple at a wedding.
Mr. Green:  You don't always have to buy the things on the registry. In my country, some people choose to give a gift card. Also, some people want to give a gift they select. Thinking of a gift for someone special and giving it to him or her is really a lot of fun. Receiving a gift that someone has thought and selected for you is also a lot of fun.
Hana:       I'll think about what to give to my brother again. If I can't decide, I'll ask him what he really wants. Thank you very much, Mr. Green.`,
        footnotes: [
            "get married 結婚する",
            "wedding 結婚(式)",
            "matching おそろいの",
            "disappointed がっかりして",
            "link リンク",
            "invitation 招待状",
            "remove ～を削除する"
        ],
        questions: [
            {
                id: "p2_q1",
                number: "(1)",
                text: "次の文が，下線部①のように花が言った理由を表す文になるように，(　　)に入る最も適当な語句を本文中から連続した3語で抜き出して答えなさい。\n\nShe wanted to ask Mr. Green (　　　　　) to her brother for his wedding.",
                options: [],
                answerLabel: "what to give",
                answerType: "fill-in"
            },
            {
                id: "p2_q2",
                number: "(2)",
                text: "(　②　)に入る最も適当なものを次から1つ選び，記号で答えなさい。",
                options: [
                    "ア What does your brother like to drink?",
                    "イ What do you want to give him?",
                    "ウ How about surprising him with a nice present?",
                    "エ How about asking him what he wants?"
                ],
                answer: 3,
                answerLabel: "エ",
                answerType: "choice"
            },
            {
                id: "p2_q3_1",
                number: "(3)①",
                text: "下線部③wedding registryについて，次の各問いに答えなさい。\n\n① wedding registryを利用する際の流れとなるように次のア～エを並べかえ，その順序を記号で答えなさい。\n\nア After making a wedding registry, the couple leave it to the store.\nイ The friends and family members go to the store or check the online shop, see the registry, and choose the gift for the couple.\nウ The couple choose a store and look for the things they want.\nエ The couple write the name of the store or the link to the online shop on their wedding invitation.",
                options: [],
                answerLabel: "ウ → ア → エ → イ",
                answerType: "ordering"
            },
            {
                id: "p2_q3_2",
                number: "(3)②",
                text: "② wedding registryの利点として最も適当なものを次から1つ選び，記号で答えなさい。",
                options: [
                    "ア A couple won't receive the same gift from different people.",
                    "イ People can surprise a couple with a nice gift they selected by themselves.",
                    "ウ A couple can buy the things they need for their new life at their favorite store.",
                    "エ People don't have to give a gift to a couple for their wedding."
                ],
                answer: 0,
                answerLabel: "ア",
                answerType: "choice"
            },
            {
                id: "p2_q4",
                number: "(4)",
                text: "本文の内容に合うように次の質問に英語で答えるとき，(　　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。\n\n〈質問〉How will Hana decide a gift for her brother?\n〈答え〉She will think about it for some more time before asking him (　　　) he really (　　　) directly.",
                options: [],
                answerLabel: "what / wants",
                answerType: "fill-in"
            },
            {
                id: "p2_q5",
                number: "(5)",
                text: "次の文が本文の内容に合っていれば〇で，合っていなければ×で答えなさい。\n\n① Mr. Green and his wife bought matching coffee cups when they got married.\n② Mr. Green thinks receiving a gift chosen from a gift registry is better than receiving a gift someone selects for him.\n③ In Mr. Green's country, some people give a gift card as a gift instead of using a gift registry.",
                options: [],
                answerLabel: "① × ② × ③ 〇",
                answerType: "true-false"
            }
        ],
        sentenceTranslations: {
            0: ["こんにちは、グリーン先生。", "①お聞きしたいことがあるんです。", "お時間ありますか？"],
            1: ["もちろん。", "何ですか？"],
            2: ["兄が来月結婚するんです。", "プレゼントを贈りたいのですが、いいものが思いつきません。", "先生は結婚祝いに何をもらったか覚えていますか？", "どんなプレゼントが嬉しかったですか？"],
            3: ["お兄さん、ご結婚おめでとうございます！", "妻も私も毎朝コーヒーを飲むので、おそろいのコーヒーカップをもらって嬉しかったですよ。", "私たちのお気に入りのアーティストの絵がカップにプリントされているんです。", "10年以上前に結婚しましたが、今でもそれを使っています。"],
            4: ["素敵なプレゼントですね。", "でも兄はコーヒーを飲まないんです。", "だから、兄にはいいプレゼントにならないと思います。"],
            5: ["(　②　)"],
            6: ["素敵なプレゼントで驚かせたかったけど、先生の言う通りかもしれません。", "直接聞いてみるべきですね。"],
            7: ["そんなにがっかりしないで。", "プレゼントを贈る前に何が欲しいか聞くのは悪いことじゃありませんよ。", "実は、妻と私はあのカップを③ウェディング・レジストリを使ってもらったんです。"],
            8: ["ウェディング・レジストリ？", "それは何ですか？"],
            9: ["私の国アメリカでは、誕生日や結婚式のような日にプレゼントをもらう前に、欲しいもののリストを作ることがよくあります。", "このリストはギフト・レジストリと呼ばれます。", "店を選び、欲しいものを探し、ギフト・レジストリを作って、店に預けます。", "店の名前やオンラインショップへのリンクは、例えば結婚式の招待状に書かれています。", "友人や家族はその店に行くかオンラインショップを見て、ギフト・レジストリを確認し、贈りたいギフトを選びます。"],
            10: ["へえ、とても興味深いですね。"],
            11: ["結婚式用のギフト・レジストリはウェディング・レジストリと呼ばれ、もうすぐ赤ちゃんが生まれる夫婦のためのものはベビー・レジストリと呼ばれます。", "イギリスでは、ウェディング・レジストリはウェディング・リストと呼ばれています。"],
            12: ["なるほど。", "その方法なら、相手が本当に欲しいプレゼントを贈れますよね？"],
            13: ["その通りです。", "他の人が買ったギフトはリストから削除されるので、同じギフトを買う心配もありません。"],
            14: ["便利ですね。", "私たちの文化とは違います。", "日本では普通、結婚式ではお金を渡しますから。"],
            15: ["必ずしもレジストリのものを買う必要はありません。", "私の国でも、ギフトカードを贈る人もいます。", "また、自分で選んだギフトを贈りたい人もいます。", "特別な誰かのためにギフトを考えて贈るのは本当に楽しいことです。", "誰かが自分のために考えて選んでくれたギフトをもらうのも、とても楽しいものです。"],
            16: ["兄に何をあげるか、もう一度考えてみます。", "決められなかったら、本当に何が欲しいか聞いてみます。", "ありがとうございました、グリーン先生。"]
        },
        explanations: {
            "p2_q1": {
                correct: "what to give",
                common: {
                    slashReading: [
                        {
                            text: "She wanted to ask Mr. Green / what to give / to her brother / for his wedding.",
                            translation: "彼女はグリーン先生に聞きたかった / 何を贈るべきか / 兄に / 結婚祝いとして",
                            freeTranslation: "彼女は結婚祝いとして兄に何を贈るべきかグリーン先生に聞きたかった。"
                        }
                    ]
                },
                beginner: {
                    summary: "花が先生に聞きたかったのは「何をあげるか」です。",
                    detail: "下線部①で花は「お聞きしたいことがある」と言っています。その後の会話で、花は「兄に何を贈ればいいかわからない」と相談しています。「何を～すべきか」は〈what to + 動詞〉で表すので、what to give が正解です。",
                    keywords: ["what to ～ (何を～すべきか)", "give (あげる・贈る)", "ask (尋ねる)"]
                },
                advanced: {
                    summary: "〈疑問詞 + to不定詞〉の名詞的用法を問う問題。",
                    detail: "空所には「何を贈るべきか」という意味の語句が入る。〈what to + 動詞の原形〉は名詞句として機能し、ask の目的語となる。本文中の関連表現「I can't think of anything good for him」から、gift に関する相談であることが確認できる。",
                    keywords: ["疑問詞 + to不定詞", "名詞的用法"]
                }
            },
            "p2_q2": {
                correct: "エ",
                common: {
                    slashReading: [
                        {
                            text: "How about asking him / what he wants?",
                            translation: "彼に聞いてみてはどうですか / 何が欲しいか",
                            freeTranslation: "彼に何が欲しいか聞いてみてはどうですか？"
                        }
                    ]
                },
                beginner: {
                    summary: "空所の後で花が「直接聞くべき」と言っているのがヒントです。",
                    detail: "空所②の後、花は「先生の言う通りかもしれません。直接聞いてみるべきですね」と言っています。ということは、グリーン先生は「聞いてみたら？」と提案したはず。エ「本人に何が欲しいか聞いてみては？」が正解です。",
                    keywords: ["How about ～ing? (～してはどう？)", "directly (直接)", "maybe you're right (先生の言う通りかも)"]
                },
                advanced: {
                    summary: "空所前後の文脈から適切な発話を推測する問題。",
                    detail: "【空所前】花：コーヒーカップは兄には不向き\n【空所後】花：「先生の言う通り、直接聞くべき」\n→ グリーン先生は「直接聞く」ことを提案したと推測できる。\nエ「How about asking him what he wants?」が文脈に合致。",
                    keywords: ["文脈推測", "How about ～ing?"]
                }
            },
            "p2_q3_1": {
                correct: "ウ → ア → エ → イ",
                common: {
                    slashReading: [
                        {
                            text: "We choose a store, / look for the things we want there, / make a gift registry, / and leave it to the store.",
                            translation: "店を選び、 / そこで欲しいものを探し、 / ギフトレジストリを作り、 / 店に預ける",
                            freeTranslation: "店を選んで欲しいものを探し、ギフトレジストリを作って店に預けます。"
                        }
                    ]
                },
                beginner: {
                    summary: "本文の説明の順番通りに並べればOKです。",
                    detail: "グリーン先生の説明を順番に見ていきましょう：\n1. 店を選んで欲しいものを探す → ウ\n2. リストを作って店に預ける → ア\n3. 店の名前を招待状に書く → エ\n4. 友人・家族がリストを見てギフトを選ぶ → イ",
                    keywords: ["choose (選ぶ)", "leave it to (預ける)", "invitation (招待状)"]
                },
                advanced: {
                    summary: "本文の手順説明を選択肢と照合する問題。",
                    detail: "本文の該当箇所：\n「We choose a store, look for the things we want there, make a gift registry, and leave it to the store. The name of the store...is written on the invitation...Friends and family members go to the store...and choose the gift...」\nこの流れに沿って ウ→ア→エ→イ となる。",
                    keywords: ["手順の把握", "論理的順序"]
                }
            },
            "p2_q3_2": {
                correct: "ア",
                common: {
                    slashReading: [
                        {
                            text: "The gifts bought by others / are removed from the list, / so people don't have to worry / about buying the same gift.",
                            translation: "他の人に買われたギフトは / リストから削除される、 / だから人々は心配しなくていい / 同じギフトを買うことを",
                            freeTranslation: "他の人が買ったギフトはリストから削除されるので、同じギフトを買ってしまう心配がありません。"
                        }
                    ]
                },
                beginner: {
                    summary: "「同じプレゼントが重ならない」のが利点です。",
                    detail: "本文でグリーン先生は「買われたギフトはリストから消えるから、同じものを買う心配がない」と説明しています。これと同じ意味のア「夫婦は別々の人から同じギフトをもらわない」が正解です。",
                    keywords: ["remove (削除する)", "worry about (心配する)", "the same (同じ)"]
                },
                advanced: {
                    summary: "本文中の利点説明と選択肢を照合する問題。",
                    detail: "該当箇所：「The gifts bought by others are removed from the list, so people don't have to worry about buying the same gift.」\n→ ア「A couple won't receive the same gift from different people.」は本文の言い換え。\nイ・ウ・エは本文に根拠がない。",
                    keywords: ["言い換え表現の把握", "受動態"]
                }
            },
            "p2_q4": {
                correct: "what / wants",
                common: {
                    slashReading: [
                        {
                            text: "I'll ask him / what he really wants.",
                            translation: "彼に聞いてみます / 本当に何が欲しいかを",
                            freeTranslation: "彼が本当に何が欲しいか聞いてみます。"
                        }
                    ]
                },
                beginner: {
                    summary: "本文の最後をよく読んで、同じ言葉を探しましょう。",
                    detail: "花は最後に「If I can't decide, I'll ask him what he really wants.」と言っています。質問文の空所と照らし合わせると、what と wants が入ります。",
                    keywords: ["what (何を)", "want (欲しい)", "decide (決める)"]
                },
                advanced: {
                    summary: "本文末尾からの語句抜き出し問題。",
                    detail: "設問の構造：「She will...before asking him (　) he really (　) directly.」\n本文末尾：「I'll ask him what he really wants.」\n→ what と wants を抜き出す。間接疑問文の構造理解が必要。",
                    keywords: ["間接疑問文", "語句の抜き出し"]
                }
            },
            "p2_q5": {
                correct: "① × ② × ③ ○",
                common: {
                    slashReading: [
                        {
                            text: "my wife and I / were happy to get / matching coffee cups.",
                            translation: "妻と私は / もらって嬉しかった / おそろいのコーヒーカップを",
                            freeTranslation: "妻と私はおそろいのコーヒーカップをもらって嬉しかったです。"
                        },
                        {
                            text: "Receiving a gift / that someone has thought and selected for you / is also a lot of fun.",
                            translation: "ギフトを受け取ることは / 誰かがあなたのために考えて選んでくれた / これもまた大変楽しい",
                            freeTranslation: "誰かが自分のために考えて選んでくれたギフトをもらうのも、とても楽しいものです。"
                        }
                    ]
                },
                beginner: {
                    summary: "①は「買った」ではなく「もらった」です。②は「どちらが良い」とは言っていません。③は本文通りです。",
                    detail: "① 本文では「were happy to get（もらって嬉しかった）」なので、「bought（買った）」は間違い → ×\n② 本文では「どちらも楽しい」と言っているだけで、どちらが良いとは言っていない → ×\n③ 本文に「some people choose to give a gift card」とあり一致 → ○",
                    keywords: ["get (もらう)", "buy (買う)", "also (～もまた)"]
                },
                advanced: {
                    summary: "内容一致問題。各選択肢を本文と照合。",
                    detail: "① bought → 本文は「get」（受け取る）。× \n② better than → 本文は「also a lot of fun」で両方楽しいと述べているのみ。優劣の比較なし。×\n③ 本文第16段落「some people choose to give a gift card」と一致。○",
                    keywords: ["内容一致", "本文との照合"]
                }
            }
        }
    },
    {
        id: "p3",
        title: "Universal Design",
        genre: "社会・生活",
        badges: ["デザイン", "福祉"],
        target: "中3",
        number: "大問2",
        questionCount: 5,
        source: "学力テスト 中３生 ２０２４年１２月",
        content: `Mr. Hill: Hello, Ren. What are you doing?
Ren: Hello, Mr. Hill. I want to open this envelope and check inside, but I don't have scissors.
Mr. Hill: Then, you can use mine. Here you are.
Ren: Thank you. Well, actually, I'm *left-handed, so I'm afraid I can't use your scissors well.
Mr. Hill: Don't worry. My scissors are made with universal design, so I'm sure you can use them without any problems.
Ren: That's great! Well, I've heard the words "universal design" before, but I'm not sure about the meaning of the words.
Mr. Hill: Universal design is the design of products that can be used by the largest number of people *regardless of age, culture, *physical size, *disability, or any other *differences.
Ren: I see. How did it start?
Mr. Hill: <u>①Ronald Mace, an American *architect, created the idea and the words in the 1980s.</u> Mace got a serious health problem when he was nine, and he spent his life in an *electric wheelchair after that. From his own experience, he was interested in making things that everyone could use freely without any problems.
Ren: That's wonderful. Well, Mr. Hill, I've also heard the word "barrier-free" before. I think universal design and barrier-free have almost the same meaning. Are there any differences between them?
Mr. Hill: Yes. When you say something is barrier-free, it means that elderly people and people with disabilities can use it easily. On the other hand, universal design is an idea about designs that are useful for as many people as possible, not just for elderly people and people with disabilities. Can you find any examples of universal design near here?
Ren looks around and finds signs of the restroom.
[IMAGE: /images/pictogram.png]
Ren: How about those signs of the restroom over there? They are called pictograms. They tell us messages with pictures instead of *texts, and they are helpful to people who can't read very well because of eye problems. And, especially in Japan, they are helpful not only for such people but also for others such as people from <u>②(a      )</u>. They can understand pictograms easily regardless of language differences.
Mr. Hill: You're right. I'll tell you about another example. It's *playing cards with universal design. Each card has a number on all the four corners. Usually, a playing card has a number on the upper left and the lower right. People spread cards just like they spread a fan in their hands, and right-handed people can see the numbers on the upper left of the cards. However, when left-handed people spread the cards in the same way, they see no numbers on the upper right.
Ren: I've had such an experience before, too!
Mr. Hill: Then, try to use <u>③the playing cards with universal design</u>. Both right-handed people and left-handed people can see the numbers on the cards when they spread them in their hands.
Ren: That sounds great. They are really nice and helpful.
Mr. Hill: We can see various products made with universal design in our daily lives. Please try to look for them. I hope you will learn to see things from a *viewpoint of other people through universal design.`,
        footnotes: [
            "left/right-handed 左/右利きの",
            "regardless of ~ ～にかかわらず",
            "physical size 体格",
            "disability (身体などの)障害",
            "difference 違い",
            "architect 建築家",
            "electric 電動の",
            "text 文字",
            "playing card トランプのカード",
            "viewpoint 立場"
        ],
        questions: [
            {
                id: "p3_q1",
                number: "(1)",
                text: "次の文が，下線部①の人物について説明した文になるように，(　　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。\n\nHe was interested in (　　　) things that everyone could use freely without any problems from his own experience. He wasn't able to move freely because of his serious (　　　) problem.",
                options: [],
                answerLabel: "making / health",
                answerType: "fill-in"
            },
            {
                id: "p3_q2_1",
                number: "(2)①",
                text: "バリアフリー(barrier-free)とユニバーサルデザインについて，次の各問いに答えなさい。\n\n① 次は，バリアフリーとユニバーサルデザインの違いについて蓮がまとめた【メモ】です。(　　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。\n\n【メモ】\n・ Barrier-free means ...\n　products that are easily used by (　ⓐ　) people and people with disabilities.\n・ Universal design means ...\n　an idea about design that is useful for as (　ⓑ　) people as possible regardless of age, disability, and so on.",
                options: [],
                answerLabel: "ⓐ elderly / ⓑ many",
                answerType: "fill-in"
            },
            {
                id: "p3_q2_2",
                number: "(2)②",
                text: "② 次のア～エは，それぞれバリアフリーまたはユニバーサルデザインどちらかの具体例です。本文の内容にしたがって，ユニバーサルデザインの具体例をすべて選び，記号で答えなさい。",
                options: [
                    "ア 公園のスロープ：足腰が弱い人のほかに，自転車に乗っている人なども使用する。",
                    "イ 幅の広い改札口：車いすを使う人，ベビーカーを押している人などさまざまな人が利用する。",
                    "ウ 車いす用の階段昇降機：車いすを使う人が階段を上り下りするために設計されている。",
                    "エ 自動ドア：身体が不自由な人や荷物を運んでいる人など，多くの人に利用されている。"
                ],
                answerLabel: "ア, イ, エ",
                answerType: "multi-choice"
            },
            {
                id: "p3_q3",
                number: "(3)",
                text: "下線部②の(　　)に入る最も適当な1語を答えなさい。ただし，(　　)内に示された文字で始まる語とします。解答は単語のつづりをすべて書きなさい。",
                options: [],
                answerLabel: "abroad",
                answerType: "fill-in"
            },
            {
                id: "p3_q4",
                number: "(4)",
                text: "下線部③を表すイラストとして最も適当なものを次から1つ選び，記号で答えなさい。",
                imageUrl: "/images/universal_design_cards.png",
                options: [],
                answer: 2,
                answerLabel: "ウ",
                answerType: "choice"
            },
            {
                id: "p3_q5",
                number: "(5)",
                text: "本文の内容と合っているものを次から1つ選び，記号で答えなさい。",
                options: [
                    "ア Ren couldn't use Mr. Hill's scissors because they were for right-handed people.",
                    "イ Ren knew a lot about universal design and barrier-free before he talked with Mr. Hill.",
                    "ウ Ren and Mr. Hill talked about pictograms as an example of something barrier-free.",
                    "エ Mr. Hill wants Ren to try to understand viewpoints of other people through universal design."
                ],
                answer: 3,
                answerLabel: "エ",
                answerType: "choice"
            }
        ],
        sentenceTranslations: {
            0: ["こんにちは、レン。", "何をしているんだい？"],
            1: ["こんにちは、ヒル先生。", "この封筒を開けて中を確認したいのですが、ハサミを持っていません。"],
            2: ["それなら、私のを使っていいよ。", "はい、どうぞ。"],
            3: ["ありがとうございます。", "実は、僕は左利きなので、先生のハサミをうまく使えるか心配です。"],
            4: ["心配しないで。", "私のハサミはユニバーサルデザインで作られているから、何の問題もなく使えるはずだよ。"],
            5: ["それはすごいですね！", "ところで、「ユニバーサルデザイン」という言葉は聞いたことがありますが、どういう意味なのかよくわかりません。"],
            6: ["ユニバーサルデザインとは、年齢、文化、体格、障害、その他の違いにかかわらず、できるだけ多くの人が使える製品のデザインのことだよ。"],
            7: ["なるほど。", "どうやって始まったんですか？"],
            8: ["アメリカの建築家ロナルド・メイスが、1980年代にその考えと言葉を作ったんだ。", "メイスは9歳の時に深刻な健康問題を抱え、その後はずっと電動車椅子で生活していた。", "彼自身の経験から、誰もが問題なく自由に使えるものを作ることに興味を持ったんだ。"],
            9: ["それは素晴らしいですね。", "ところで、ヒル先生、「バリアフリー」という言葉も聞いたことがあります。", "ユニバーサルデザインとバリアフリーはほとんど同じ意味だと思います。", "それらの間に違いはあるんですか？"],
            10: ["あるよ。", "何かがバリアフリーだと言うとき、それは高齢者や障害のある人々が簡単に使えることを意味する。", "一方、ユニバーサルデザインは、高齢者や障害のある人々だけでなく、できるだけ多くの人にとって役立つデザインについての考え方なんだ。", "この近くでユニバーサルデザインの例を見つけられるかい？"],
            11: ["レンは周りを見渡し、トイレの標識を見つける。"],
            13: ["あそこのトイレの標識はどうですか？", "あれはピクトグラムと呼ばれているね。", "文字の代わりに絵でメッセージを伝えていて、目の問題で文字がよく読めない人々の役に立つんだ。", "そして、特に日本では、そういう人々だけでなく、外国から来た人々のような他の人たちにも役立つんだ。", "言語の違いにかかわらず、簡単にピクトグラムを理解できるからね。"],
            14: ["その通りだね。", "もう一つの例について教えてあげよう。", "それはユニバーサルデザインのトランプだよ。", "それぞれのカードの四隅すべてに数字があるんだ。", "普通、トランプは左上と右下に数字があるよね。", "人々は手の中で扇のようにカードを広げるけど、右利きの人はカードの左上の数字が見える。", "でも、左利きの人が同じようにカードを広げると、右上の数字が見えないんだ。"],
            15: ["僕も以前そんな経験をしたことがあります！"],
            16: ["それなら、ユニバーサルデザインのトランプを使ってみて。", "右利きの人も左利きの人も、手の中で広げたときにカードの数字が見えるよ。"],
            17: ["それはいいですね。", "本当に素敵で役に立ちます。"],
            18: ["私たちの日常生活の中で、ユニバーサルデザインで作られた様々な製品を見ることができるよ。", "ぜひ探してみて。", "ユニバーサルデザインを通して、他の人々の視点から物事を見ることを学んでほしいと願っているよ。"]
        },
        explanations: {
            "p3_q1": {
                correct: "making / health",
                beginner: {
                    summary: "①「作ることに興味があった」、②「深刻な健康上の問題」",
                    detail: "Thinking Point 1: 「～することに興味がある」は be interested in ~ing。make を making に変える。<ref target=\"8-2\">(本文参照)</ref>\nThinking Point 2: 「深刻な健康問題」は serious health problem。本文の <ref target=\"8-1\">Mace got a serious health problem</ref> を参照。",
                    keywords: ["interested in (～に興味がある)", "health problem (健康上の問題)"]
                },
                advanced: {
                    summary: "文脈適合語の抜き出し。前置詞の後ろは動名詞、形容詞の後ろは名詞。",
                    detail: "1つ目の空所は in の目的語となる動名詞 making が入る。<ref target=\"8-2\">make things (ものを作る)</ref> という表現。\n2つ目の空所は serious (形容詞) に続く名詞 health が入る。<ref target=\"8-1\">serious health problem</ref> で「深刻な健康問題」。",
                    keywords: ["preposition (前置詞)", "gerund (動名詞)", "collocation (コロケーション)"]
                }
            },
            "p3_q2_1": {
                correct: "ⓐ elderly / ⓑ many",
                beginner: {
                    summary: "ⓐ「お年寄り」、ⓑ「たくさんの」",
                    detail: "Thinking Point 1: バリアフリーは「お年寄りや障害者」のため。<ref target=\"10-1\">elderly people</ref>。\nThinking Point 2: ユニバーサルデザインは「できるだけ多くの人」のため。<ref target=\"10-2\">as many people as possible</ref>。",
                    keywords: ["elderly (年配の)", "as many as possible (できるだけ多くの)"]
                },
                advanced: {
                    summary: "バリアフリーとユニバーサルデザインの定義の違いを問う問題。",
                    detail: "本文第3段落の定義を参照。\nBarrier-free: <ref target=\"10-1\">elderly people and people with disabilities</ref>\nUniversal design: <ref target=\"10-2\">as many people as possible</ref>\n対比構造を理解していれば容易に抜き出せる。",
                    keywords: ["definition (定義)", "comparison (比較)"]
                }
            },
            "p3_q2_2": {
                correct: "ア, イ, エ",
                beginner: {
                    summary: "みんなが使えるものがユニバーサルデザイン。",
                    detail: "ア（スロープ）、イ（広い改札）、エ（自動ドア）は、車椅子の人だけでなく、ベビーカーや大きな荷物を持つ人など、誰もが使いやすいもの。\nウ（階段昇降機）は車椅子の人専用の設備なのでバリアフリー。",
                    keywords: ["slope (スロープ)", "automatic door (自動ドア)"]
                },
                advanced: {
                    summary: "具体例の判別。特定の人専用か、不特定多数向けか。",
                    detail: "ユニバーサルデザインの核心は「専用（exclusive）」ではなく「包括的（inclusive）」。\nウの昇降機は車椅子利用者という特定の対象のために後付けされることが多く、バリアフリーの性質が強い。\n他はすべての利用者が恩恵を受ける設計。",
                    keywords: ["inclusivity (包括性)", "exclusive design (排他的デザイン)"]
                }
            },
            "p3_q3": {
                correct: "abroad",
                beginner: {
                    summary: "「外国から来た人々」。a で始まることば。",
                    detail: "Thinking Point: 本文の最後に「<ref target=\"13-4\">言葉の違いにかかわらず</ref>」とあるので、日本語がわからない人＝外国人のこと。\npeople from abroad で「海外から来た人々」。",
                    keywords: ["abroad (海外へ)", "language difference (言語の違い)"]
                },
                advanced: {
                    summary: "文脈からの語彙推測。",
                    detail: "people from (a...) という文脈と、直後の language differences というヒントから、外国人を指すと推測できる。\npeople from another country だと文字数・語数が合わない。abroad (副詞だが前置詞fromの目的語になれる) が正解。",
                    keywords: ["context clue (文脈の手がかり)"]
                }
            },
            "p3_q4": {
                correct: "ウ",
                beginner: {
                    summary: "四隅に数字があるトランプを選ぶ。",
                    detail: "Thinking Point: 本文に「<ref target=\"14-3\">ユニバーサルデザインのトランプは4つの角すべてに数字がある</ref>」と書いてある。\nウの絵は、カードの4つの角に数字とマークが見える。",
                    keywords: ["four corners (四隅)", "playing cards (トランプ)"]
                },
                advanced: {
                    summary: "英文記述と図像の照合。",
                    detail: "<ref target=\"14-3\">Each card has a number on all the four corners.</ref> という記述に合致するイラストを選ぶ。\n通常のトランプ（左上と右下のみ）は左手で扇状に広げると数字が見えなくなる（左上・右下が隠れるため）。四隅にあればどちらの手で広げても数字が見える。",
                    keywords: ["visual comprehension (視覚的理解)"]
                }
            },
            "p3_q5": {
                correct: "エ",
                beginner: {
                    summary: "Mr. Hillの最後のセリフの内容。",
                    detail: "Thinking Point: Mr. Hillは最後に「<ref target=\"18-2\">ユニバーサルデザインを通して、他の人の視点から物事を見ることを学んでほしい</ref>」と言っている。\nアは「使えなかった」が間違い（実は使える）。",
                    keywords: ["viewpoint (視点)", "main message (主なメッセージ)"]
                },
                advanced: {
                    summary: "内容一致問題。各選択肢の検証。",
                    detail: "ア: Renは「使えないだろう」と思ったが、実際はユニバーサルデザインなので使用可能。\nイ: RenはMr. Hillと話すまであまりよく知らなかった。\nウ: ピクトグラムはユニバーサルデザインの例として挙げられている。\nエ: 本文最終文 <ref target=\"18-2\">I hope you will learn to see things from a viewpoint of other people...</ref> と一致。",
                    keywords: ["reading comprehension (読解)", "elimination (消去法)"]
                }
            }
        }
    }
];

export const mockProblem = koalaProblem;
