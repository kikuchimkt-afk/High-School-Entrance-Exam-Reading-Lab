
const weddingRegistryProblem = {
    id: "p2",
    title: "Wedding Registry",
    category: "中学3年",
    target: "中3",
    number: "中3-問題1",
    genre: "対話",
    source: "学力テスト 中3 2025年度 12月",
    badges: ["中3 分詞の後置修飾", "中3 関係代名詞", "中2 受動態", "学力テスト", "文化", "対話"],
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
            type: "fill-in-blank",
            text: `次の文が，下線部①のように花が言った理由を表す文になるように，(　)に入る最も適当な語句を本文中から連続した3語で抜き出して答えなさい。
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
            text: "( [ ② ] )に入る最も適当なものを次から1つ選び，記号で答えなさい。",
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
            text: `下線部③wedding registryについて，次の問いに答えなさい。
① wedding registryを利用する際の流れとなるように次のア～工を並べかえ，その順序を記号で答えなさい。`,
            options: [
                "After making a wedding registry, the couple leave it to the store.",
                "The friends and family members go to the store or check the online shop, see the registry, and choose the gift for the couple.",
                "The couple choose a store and look for the things they want.",
                "The couple write the name of the store or the link to the online shop on their wedding invitation."
            ],
            answerLabel: "ウ → ア → エ → イ",
            relatedParagraphs: [
                9
            ]
        },
        {
            id: "p2_q4",
            type: "choice",
            text: `下線部③wedding registryについて，次の問いに答えなさい。
② wedding registryの利点として最も適当なものを次から1つ選び，記号で答えなさい。`,
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
            text: `本文の内容に合うように次の質問に英語で答えるとき，(　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。
<質問> How will Hana decide a gift for her brother?
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
            text: `次の文が本文の内容に合っていれば○で，合っていなければ×で答えなさい。
① Mr. Green and his wife bought matching coffee cups when they got married.
② Mr. Green thinks receiving a gift chosen from a gift registry is better than receiving a gift someone selects for him.
③ In Mr. Green's country, some people give a gift card as a gift instead of using a gift registry.`,
            options: [],
            answerLabel: "× / × / ○",
            relatedParagraphs: [
                3,
                15
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "こんにちは、グリーン先生。",
            "あなたにお尋ねしたいことがあります。",
            "お時間ありますか。"
        ],
        "1": [
            "もちろん。",
            "何ですか。"
        ],
        "2": [
            "私の兄が来月結婚する予定なんです。",
            "彼に贈り物をあげたいのですが、彼に良いものが何も思いつかないんです。",
            "あなたは結婚祝いとして何をもらったか覚えていますか。",
            "どのような贈り物が良かったですか。"
        ],
        "3": [
            "お兄さん、結婚おめでとう！",
            "私の妻と私は二人とも毎朝コーヒーを飲むので、おそろいのコーヒーカップをもらって嬉しかったです。",
            "私たちのお気に入りの芸術家の絵がそのカップに印刷されています。",
            "私たちは10年以上前に結婚しましたが、今でもそれらを使っています。"
        ],
        "4": [
            "それらは素敵なプレゼントですが、私の兄はコーヒーを飲みません。",
            "ですので、残念ながらそれらは彼にとって良い贈り物にはならないと思います。"
        ],
        "5": [
            "( [ ② ] )"
        ],
        "6": [
            "私は素敵な贈り物で彼を驚かせたかったのですが、たぶんあなたの言う通りかもしれません。",
            "彼に直接尋ねるべきですね。"
        ],
        "7": [
            "そんなにがっかりしないで。",
            "贈り物をあげる前に、何が欲しいか誰かに尋ねることは悪い考えではありません。",
            "実のところ、私の妻と私はウェディングレジストリ（結婚祝いリスト）を使ってそれらのカップを手に入れました。"
        ],
        "8": [
            "ウェディングレジストリ？",
            "それは何ですか。"
        ],
        "9": [
            "私の国であるアメリカでは、誕生日や結婚式のような日に贈り物を受け取る前に、私たちが欲しいもののリストを作ることがよくあります。",
            "このリストはギフトレジストリと呼ばれます。",
            "私たちはお店を選び、そこで欲しいものを探し、ギフトレジストリを作成し、それをお店に預けます。",
            "お店の名前やギフトレジストリのオンラインショップへのリンクが、例えば結婚式の招待状に書かれます。",
            "友人や家族はお店に行くかオンラインショップを確認し、あなたのギフトレジストリを見て、あなたにあげたい贈り物を選びます。"
        ],
        "10": [
            "わあ、それはとても興味深いですね。"
        ],
        "11": [
            "結婚式のためのギフトレジストリはウェディングレジストリと呼ばれ、もうすぐ赤ちゃんが生まれるカップルのためのものはベビーレジストリと呼ばれます。",
            "イギリスでは、ウェディングレジストリはウェディングリストと呼ばれます。"
        ],
        "12": [
            "なるほど。",
            "その方法なら、人々はその人が本当に欲しい贈り物をあげることができますよね。"
        ],
        "13": [
            "その通りです。",
            "他の人に買われた贈り物はリストから削除されるので、人々は同じ贈り物を買う心配をする必要がありません。"
        ],
        "14": [
            "それは便利ですね。",
            "私たちのものとは異なる文化です。",
            "私たちは普段、結婚式ではカップルにお金を渡します。"
        ],
        "15": [
            "いつもレジストリにあるものを買わなければならないわけではありません。",
            "私の国では、ギフトカードをあげることを選ぶ人もいます。",
            "また、自分が選んだ贈り物をあげたいと思う人もいます。",
            "特別な誰かのために贈り物を考え、それを彼や彼女にあげることは本当にとっても楽しいことです。",
            "誰かがあなたのことを考えて選んでくれた贈り物を受け取ることもまた、とても楽しいことです。"
        ],
        "16": [
            "私は兄に何をあげるかもう一度考えてみます。",
            "もし決められなかったら、彼が本当に欲しいものは何か彼に尋ねてみます。",
            "グリーン先生、ありがとうございました。"
        ]
    },
    explanations: {
        p2_q1: {
            correct: "what to give",
            beginner: {
                summary: "「何をあげるべきか」という意味の表現を探しましょう。",
                detail: `花（Hana）は兄への結婚祝いに悩んでいます。最後の段落<ref target="16-0">I'll think about what to give to my brother again.</ref>（兄に何をあげるかもう一度考えてみます）という文に、答えとなる表現が含まれています。「what ＋ to不定詞」で「何を～すべきか」という意味になります。`,
                keywords: [
                    "get married (結婚する)",
                    "wedding (結婚式)",
                    "gift (贈り物)",
                    "think of (思いつく)",
                    "matching (おそろいの)",
                    "disappointed (がっかりして)",
                    "invitation (招待状)",
                    "remove (削除する)",
                    "decision (決定)",
                    "surprise (驚かせる)",
                    "directly (直接)",
                    "registry (登録簿)"
                ]
            },
            advanced: {
                summary: "疑問詞＋to不定詞の構造を用いた名詞句を抜き出します。",
                detail: `問題文の空所は "She wanted to ask Mr. Green ( ) ..." となっており、"ask" の目的語になる名詞句が必要です。文脈として「兄に何をあげるべきか」という内容が入ります。本文最後の <ref target="16-0">what to give</ref> がそのまま当てはまります。"what to do"（何をすべきか）、"how to do"（どのようにすべきか）などの疑問詞＋to不定詞の用法を確認しておきましょう。`,
                keywords: [
                    "infinitive (不定詞)",
                    "interrogative (疑問詞)",
                    "phrase (句)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'll think about / what to give / to my brother again.",
                        translation: "私は考えます / 何をあげるべきかについて / 兄にもう一度。"
                    }
                ]
            }
        },
        p2_q2: {
            correct: "エ",
            beginner: {
                summary: "前後の会話の流れから、グリーン先生の提案を推測します。",
                detail: `空所の直前で花は「コーヒーカップは兄には合わない」と言っています。直後の花のセリフ <ref target="6-1">I should ask him directly.</ref>（彼に直接尋ねるべきですね）が最大のヒントです。花が「そうすべきだ」と納得していることから、グリーン先生は「彼が何を欲しいか尋ねてみたらどう？」と提案したと考えられます。`,
                keywords: [
                    "directly (直接)",
                    "surprise (驚かせる)",
                    "ask (尋ねる)",
                    "present (プレゼント)"
                ]
            },
            advanced: {
                summary: "文脈理解により、相手の次の発言を導き出します。",
                detail: `空所の後で花は "maybe you're right"（たぶんあなたの言う通りだ）と同意し、"ask him directly" と結論付けています。したがって、選択肢エ "How about asking him what he wants?"（彼が何を欲しいか尋ねてみてはどうですか）が論理的に適合します。"How about -ing?" は提案を表す重要な表現です。`,
                keywords: [
                    "suggestion (提案)",
                    "context (文脈)",
                    "indirect question (間接疑問文)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "How about asking him / what he wants?",
                        translation: "彼に尋ねてみてはどうですか / 彼が何を欲しいかを。"
                    }
                ]
            }
        },
        p2_q3: {
            correct: "ウ → ア → エ → イ",
            beginner: {
                summary: "「ウェディングレジストリ」の使い方の説明順序を整理しましょう。",
                detail: `本文の第9段落に手順が書かれています。
        1. <ref target="9-2">We choose a store, look for the things we want...</ref>（店を選び、欲しいものを探す）→ **ウ**
        2. <ref target="9-2">...and leave it to the store.</ref>（それをお店に預ける）→ **ア**
        3. <ref target="9-3">The name... is written on the wedding invitation...</ref>（店の名前などが招待状に書かれる）→ **エ**
        4. <ref target="9-4">Friends... choose the gift they want to get for you.</ref>（友人がギフトを選ぶ）→ **イ**
        この順序になります。`,
                keywords: [
                    "choose (選ぶ)",
                    "leave (預ける/残す)",
                    "invitation (招待状)",
                    "check (確認する)"
                ]
            },
            advanced: {
                summary: "時系列を示す動詞と文構造に着目して並べ替えます。",
                detail: `プロセスの説明文です。<ref target="9-2">choose a store ... make a gift registry</ref> (ウ) が最初で、次に <ref target="9-2">leave it to the store</ref> (ア) が続きます。その後、ゲストに知らせるために <ref target="9-3">written on the wedding invitation</ref> (エ) され、最後にゲストが <ref target="9-4">go to the store ... and choose</ref> (イ) します。`,
                keywords: [
                    "chronological order (時系列)",
                    "process (過程)",
                    "procedure (手順)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "We choose a store, / look for the things we want there, / make a gift registry, / and leave it to the store.",
                        translation: "私たちは店を選び、 / そこで欲しいものを探し、 / ギフトレジストリを作り、 / それを店に預けます。"
                    }
                ]
            }
        },
        p2_q4: {
            correct: "ア",
            beginner: {
                summary: "レジストリを使うと「同じプレゼントが被らない」という利点があります。",
                detail: `第13段落のグリーン先生のセリフ <ref target="13-1">The gifts bought by others are removed from the list, so people don't have to worry about buying the same gift.</ref>（他の人に買われたギフトはリストから削除されるので、同じギフトを買う心配をしなくて済む）と一致するのは、選択肢ア「カップルは異なる人々から同じ贈り物を受け取ることがない」です。`,
                keywords: [
                    "remove (取り除く)",
                    "worry about (～について心配する)",
                    "same (同じ)",
                    "convenient (便利な)"
                ]
            },
            advanced: {
                summary: "受動態と結果を表す接続詞soの因果関係を理解します。",
                detail: `該当箇所は <ref target="13-1">The gifts ... are removed ..., so people don't have to worry ...</ref> です。"gifts bought by others" は過去分詞の後置修飾。リストから消える（removed）というシステム上の特徴が、重複を避ける（don't have to worry about buying the same gift）というメリットに繋がっています。`,
                keywords: [
                    "benefit (利点)",
                    "duplicate (重複)",
                    "causality (因果関係)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "The gifts bought by others / are removed from the list, / so people don't have to worry / about buying the same gift.",
                        translation: "他の人に買われた贈り物は / リストから削除されます / だから人々は心配する必要がありません / 同じ贈り物を買うことについて。"
                    }
                ]
            }
        },
        p2_q5: {
            correct: "what / wants",
            beginner: {
                summary: "最後の段落から、花がこれからどうするかを抜き出します。",
                detail: `最後の段落で花は <ref target="16-1">If I can't decide, I'll ask him **what** he really **wants**.</ref>（もし決められなかったら、彼が本当に**何**が**欲しい**か彼に尋ねます）と言っています。質問文の空所に合わせて、"what" と "wants" を抜き出します。`,
                keywords: [
                    "decide (決める)",
                    "really (本当に)",
                    "directly (直接)"
                ]
            },
            advanced: {
                summary: "間接疑問文の構造を把握し、適切な単語を補充します。",
                detail: `英文構造 "ask him [what he really wants]" です。"ask" + O + O（間接疑問文）の第4文型を作っています。本文の <ref target="16-1">I'll ask him what he really wants.</ref> と対応しています。`,
                keywords: [
                    "extraction (抜き出し)",
                    "clause (節)",
                    "SVOO (第4文型)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'll ask him / what he really wants.",
                        translation: "私は彼に尋ねるつもりです / 彼が本当に何を欲しいかを。"
                    }
                ]
            }
        },
        p2_q6: {
            correct: "× / × / ○",
            beginner: {
                summary: "本文の事実関係を一つずつ確認しましょう。",
                detail: `①グリーン先生はカップを「買った」のではなく、<ref target="3-1">happy to get matching coffee cups</ref>（もらって嬉しかった）と言っているので**×**。
        ②グリーン先生は第15段落で <ref target="15-4">Receiving a gift that someone has thought and selected for you is also a lot of fun.</ref>（誰かが選んでくれた贈り物をもらうのもまた楽しい）と言っており、レジストリの方が良いとは言っていないので**×**。
        ③第15段落で <ref target="15-1">In my country, some people choose to give a gift card.</ref>（ギフトカードをあげる人もいる）と言っているので**○**。`,
                keywords: [
                    "bought (買った - buyの過去形)",
                    "instead of (～の代わりに)",
                    "select (選ぶ)",
                    "gift card (商品券)"
                ]
            },
            advanced: {
                summary: "詳細な情報の照合と、話者の心情理解が求められます。",
                detail: `① "bought" ではなく "got" (received)。受動態 "got those cups by using..." とあるが、自分たちで買ったわけではない（リストを作っただけ）。
        ② "better than" という比較は本文にない。両方とも "lot of fun" と述べており、優劣をつけていない。
        ③ <ref target="15-1">some people choose to give a gift card</ref> と明確に記述がある。`,
                keywords: [
                    "comparison (比較)",
                    "fact-checking (事実確認)",
                    "infer (推測する)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "In my country, / some people choose / to give a gift card.",
                        translation: "私の国では、 / 選ぶ人もいます / ギフトカードをあげることを。"
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
    number: "中3-問題2",
    genre: "対話",
    source: "学力テスト 中3生 2025年度 11月",
    badges: [
        "中3 現在完了形",
        "中3 動名詞",
        "中2 不定詞",
        "中2 比較",
        "学力テスト",
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
        "meeting ミーティング",
        "achieve ～を達成する",
        "at all [否定文で] 全然(～ない)",
        "memorize ～を覚える",
        "at least 少なくとも",
        "will 意志",
        "sight 視界",
        "goal 目標",
        "step 段階，ステップ",
        "impossible 不可能な"
    ],
    questions: [
        {
            id: "p5_q1",
            text: "下線部①のように厚司が言った理由として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "人前で話すことが得意ではないから。",
                "部活動に対する興味を失ってしまったから。",
                "話すことが何もないから。",
                "長い間、部活動に参加できていないから。"
            ],
            answerLabel: "ウ",
            type: "choice",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p5_q2",
            text: "スミス先生の新年の目標について本文の内容と合っているものを次から１つ選び、記号で答えなさい。",
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
            text: `次の文が、下線部②のようにスミス先生が言った理由を表す文になるように、（　）に入る最も適当な語をそれぞれ１語ずつ答えなさい。

She thought Atsushi's New Year's resolution was (　) (　) for him to (　).`,
            options: [],
            answerLabel: "(例) too big / achieve",
            type: "fill-in-blank",
            relatedParagraphs: [
                14
            ]
        },
        {
            id: "p5_q4",
            text: "（　③　）に入る最も適当なものを次から１つ選び、記号で答えなさい。",
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
            text: "本文の内容と合っているものを次から１つ選び、記号で答えなさい。",
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
            text: `次は、対話の翌週に厚司が英語部のミーティングで行ったスピーチの一部です。本文の内容に合うように、（　）に入る最も適当な語をそれぞれ本文中から１語ずつ抜き出して答えなさい。

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
            "スミス先生: どうしたの、厚司？",
            "顔色が良くないわよ。"
        ],
        "1": [
            "厚司: こんにちは、スミス先生。",
            "実は、来週英語部のミーティングがあるのですが、<u>①私はそれに参加したくないのです</u>。"
        ],
        "2": [
            "スミス先生: あら、そのミーティングのことは部員の一人のユカから聞いたわ。",
            "あなたは今年の初めに部活で新年の抱負についてプレゼンテーションをしたのよね？",
            "そして、あなたたちのそれぞれが「新年の抱負をどのように達成したか」というテーマについて話すことになっているのよね？"
        ],
        "3": [
            "厚司: その通りです。",
            "それはこの学校の英語部の一種の伝統なんです。",
            "毎年、1年生は1月に新年の抱負を発表します。",
            "そして彼らが2年生になったときの11月の終わりに、その結果について話します。",
            "私は普段、新年の抱負を立てませんが、今年は部活のために1つ立てました。",
            "しかし、私はそれを全然達成していないので、ミーティングで話すことが何もないのです。"
        ],
        "4": [
            "スミス先生: なるほど。",
            "あなたの抱負は何だったの？"
        ],
        "5": [
            "厚司: それは「毎月100個の英単語を覚えること」でした。",
            "私は最初の1ヶ月でさえ、それができませんでした。",
            "ユカは、彼女の3つの抱負すべてを達成したと言っています。",
            "彼女はすごいです。"
        ],
        "6": [
            "スミス先生: でも、厚司、今年はまだあと1ヶ月あるわよ！"
        ],
        "7": [
            "厚司: その通りですね。",
            "だから、私はただ「少なくとも1ヶ月間は一生懸命頑張ります」と言うしかないと思います。",
            "スミス先生は毎年新年の抱負を立てますか？"
        ],
        "8": [
            "スミス先生: ええ。",
            "私の今年の抱負は、健康のために毎週末ジムに行くことでした。",
            "私は今でも月に4、5回はそこへ行っています。"
        ],
        "9": [
            "厚司: どうやってそれをし続けることができるのですか？"
        ],
        "10": [
            "スミス先生: 数年前までは、私も新年の抱負を達成するのが難しかったので、周りの人にアドバイスを求めたの。",
            "良いアドバイスの1つは「環境を作ること」だったわ。",
            "例えば、もし重要なテストの前日に、机の上にあなたのお気に入りの漫画本があったらどうする？"
        ],
        "11": [
            "厚司: 私は意志が弱いので、きっとそれを読んでしまうでしょう。"
        ],
        "12": [
            "スミス先生: ある研究によると、私たちの環境は私たちの意志よりも私たちに影響を与えるかもしれないそうよ。",
            "もしあなたがテストのために勉強したいなら、まずはそのための環境を作ることが大切よ。",
            "漫画本を視界に置いておくべきではないわ。"
        ],
        "13": [
            "厚司: 分かりました。",
            "他に何か良いアドバイスをもらいましたか？"
        ],
        "14": [
            "スミス先生: ええ。",
            "<u>②こちらの方があなたにはもっと良いと思うわ</u>。",
            "大きな将来の夢を持つのは良いことだけど、まずはもっと小さな目標を立てて、それから各目標を達成するための小さなステップを作るべきよ。",
            "大きな夢のことばかり考えるのはあまり良くないわ。",
            "あなたの新年の抱負はとても大きくて、それがあなたにとって達成を不可能にしてしまったのではないかと思うわ、厚司。"
        ],
        "15": [
            "厚司: ああ、なるほど。",
            "つまり「( ③ )」の方が私にとってより良い抱負だったということですね。"
        ],
        "16": [
            "スミス先生: その通りよ。"
        ],
        "17": [
            "厚司: 来週のミーティングで、他のメンバーにこれらのアドバイスを共有してもいいですか？"
        ],
        "18": [
            "スミス先生: ええ、もちろんだわ。"
        ]
    },
    explanations: {
        p5_q1: {
            correct: "ウ",
            beginner: {
                summary: "厚司がミーティングに参加したくない理由を答えます。",
                detail: `下線部の後で厚司は、新年の抱負を全然達成していないと述べ、<ref target="3-5">so I don't have anything to talk about at the meeting.</ref>（だからミーティングで話すことが何もない）と言っています。`,
                keywords: [
                    "meeting (ミーティング)",
                    "join (参加する)",
                    "resolution (抱負、決意)",
                    "achieve (達成する)",
                    "at all (全く～ない)"
                ]
            },
            advanced: {
                summary: "因果関係を表す接続詞soに注目します。",
                detail: `厚司は目標未達成（haven't achieved it at all）の結果として、<ref target="3-5">I don't have anything to talk about</ref>（話すことが何もない）と結論付けています。`,
                keywords: [
                    "tradition (伝統)",
                    "result (結果)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "However, / I haven't achieved it at all, / so I don't have anything / to talk about at the meeting.",
                        translation: "しかし、 / 私はそれを全く達成していません / だから私は何もありません / ミーティングで話すべきことが。"
                    }
                ]
            }
        },
        p5_q2: {
            correct: "イ",
            beginner: {
                summary: "スミス先生の今年の目標についての発言を探します。",
                detail: `スミス先生は <ref target="8-1">My resolution this year was to go to a gym every weekend for my health.</ref>（私の今年の抱負は、健康のために毎週末ジムに行くことでした）と言っています。`,
                keywords: [
                    "gym (ジム)",
                    "weekend (週末)",
                    "health (健康)"
                ]
            },
            advanced: {
                summary: "内容一致問題です。",
                detail: `選択肢イの内容は本文の記述と完全に一致します。選択肢ウについては、<ref target="8-2">I still go there four or five times in a month.</ref> とあり、継続している（達成できている）ため不適です。`,
                keywords: [
                    "continue (続ける)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "My resolution this year was / to go to a gym every weekend / for my health.",
                        translation: "私の今年の抱負は～でした / 毎週末ジムに行くこと / 健康のために。"
                    }
                ]
            }
        },
        p5_q3: {
            correct: "(例) too big / achieve",
            beginner: {
                summary: "「～すぎて…できない」という表現を使います。",
                detail: `スミス先生は厚司の目標について <ref target="14-4">your New Year's resolution was very big and that made achieving it impossible for you</ref>（目標がとても大きくて、それが達成を不可能にした）と言っています。これを「too + 形容詞 + to + 動詞の原形」（～すぎて…できない）の構文で言い換えます。「彼が達成するには大きすぎた」となるように、( too ) ( big ) for him to ( achieve ) とします。`,
                keywords: [
                    "impossible (不可能な)",
                    "achieve (達成する)"
                ]
            },
            advanced: {
                summary: "too...to構文を用いた書き換え問題です。",
                detail: `元の文にある "very big" と "impossible"（不可能）という要素を、否定の意味を含む "too...to..." 構文（あまりに…なので～できない）で表現します。意味上の主語 for him もヒントになります。`,
                keywords: [
                    "impossible (不可能な)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I'm afraid your New Year's resolution / was very big / and that made achieving it impossible / for you.",
                        translation: "あなたの新年の抱負は（残念ながら） / とても大きかったです / そしてそのことが達成することを不可能にしました / あなたにとって。"
                    }
                ]
            }
        },
        p5_q4: {
            correct: "ア",
            beginner: {
                summary: "「小さな目標」に当てはまるものを選びます。",
                detail: `スミス先生のアドバイス <ref target="14-2">you should make smaller goals first</ref>（まずはもっと小さな目標を立てるべき）に従い、元の目標「月100語」よりハードルが低いものを選びます。「毎日3単語」なら月90語程度で、少し簡単になります。`,
                keywords: [
                    "advice (アドバイス)",
                    "small (小さい)"
                ]
            },
            advanced: {
                summary: "文脈理解と計算を含む問題です。",
                detail: `元の目標は「月100単語」。選択肢ア「毎日3単語」は 3×30=90単語/月 なので、若干少なくなり、かつ日々の小さなステップ（create small steps）になっています。選択肢ウ「年1000単語」は月換算で約83単語ですが、スパンが長く「小さなステップ」の趣旨から外れる可能性がありますし、アの方が「毎日」という具体的な行動（steps）に近いです。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "you should make smaller goals first, / and then create small steps / to achieve each goal.",
                        translation: "あなたはまずより小さな目標を立てるべきです、 / そしてそれから小さな段階を作るべきです / 各目標を達成するために。"
                    }
                ]
            }
        },
        p5_q5: {
            correct: "ウ",
            beginner: {
                summary: "環境と意志についての記述を探します。",
                detail: `スミス先生は <ref target="12-0">According to one study, our environment may affect us more than our will.</ref>（ある研究によると、環境は意志よりも私たちに影響を与えるかもしれない）と言っています。これは選択肢ウの内容と一致します。`,
                keywords: [
                    "study (研究)",
                    "environment (環境)",
                    "affect (影響する)",
                    "will (意志)"
                ]
            },
            advanced: {
                summary: "本文の詳細内容の一致問題です。",
                detail: `アは「全学年」ではなく「1年生」の話。イはMs. Smithは「1ヶ月でも頑張る」という厚司を肯定的に捉えアドバイスしているので不適。エは「大きな目標を持つべき」ではなく「小さな目標から」と言っているので逆です。`,
                keywords: [
                    "influence (影響を与える)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "According to one study, / our environment may affect us / more than our will.",
                        translation: "ある研究によると、 / 私たちの環境は私たちに影響を与えるかもしれません / 私たちの意志以上に。"
                    }
                ]
            }
        },
        p5_q6: {
            correct: "① month ② creating",
            beginner: {
                summary: "本文の表現をそのまま使って要約を完成させます。",
                detail: `① 厚司の元の目標は <ref target="5-0">memorizing 100 English words every month</ref> でした。
② アドバイスの一つは <ref target="10-1">creating the environment</ref> でした。`,
                keywords: [
                    "important (重要な)",
                    "share (共有する)"
                ]
            },
            advanced: {
                summary: "要約文の空所補充です。",
                detail: `①は頻度を表す every month。②は動名詞 creating が入ります。文法的には主語になる部分なので動名詞が適切です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "My New Year's resolution was / to memorize 100 English words / every month.",
                        translation: "私の新年の抱負は～でした / 100個の英単語を覚えること / 毎月。"
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
    number: "中3-問題3",
    genre: "スピーチ",
    source: "学力テスト 中3生 2024年度 1月",
    badges: [
        "中3 関係代名詞",
        "中3 分詞の後置修飾",
        "中3 間接疑問文",
        "学力テスト",
        "テクノロジー",
        "社会問題"
    ],
    content: `During the winter vacation, I visited my grandmother in Fukuoka. When I arrived at her house, she welcomed me with her dog, Leon. My grandmother can't see things well, and Leon helps her as her *guide dog. One day, she said she and Leon were going to a supermarket, and I went with them to see <u>①how Leon helped my grandmother</u>. On the way to the supermarket, he guided her with his own *signals. For example, when they came to corners or steps, he told her that by stopping just before them. And when they got to the supermarket, she said "door" to him. Leon looked for a *nearby door, took her there, and stopped in front of it to tell her where the *entrance to the supermarket was. He was amazing.

I got interested in other ways to help *visually impaired people move around, and found a website that introduces a unique technology, <u>②AI Suitcase</u>. It's a kind of an AI robot that looks just like a travel *suitcase. It helps people with eye problems move safely. A user tells it his or her *destination, and it moves to guide the user. The user follows it with the *handle in their hand. AI Suitcase is able to recognize *obstacles, people, and steps on the way. And the user hears the voice guide from AI Suitcase through a *wearable speaker on their neck. For example, when AI Suitcase finds an obstacle on the way, it says, "There is an obstacle in front of you." When they have to wait in line, it leads them to the line and says, "We'll get in a line. Please stop and wait here." AI Suitcase has already been tested by many people, and I could read opinions from the test users on the website. One says, "( ③ ) However, I have to make a *reservation to use the service, so I can't go out freely when I want to. I hope AI Suitcase will help me enjoy going out more." <u>④Another</u> says, "We, visually impaired people, must use a guide dog or a white *cane when we go out, but I don't like to be recognized as a visually impaired person on the street. When I walk around a city with AI Suitcase, I just look like a person with a suitcase. I like that."

AI Suitcase, however, still has some problems that have to be solved. Sometimes recognizing the colors of a traffic light is difficult for AI Suitcase when the *sunlight is too strong or the traffic light is too far, for example. It may take a long time before AI Suitcase can be used in our society, but I hope visually impaired people will be able to go out more freely than now with it.`,
    footnotes: [
        "guide dog 盲導犬",
        "signal 合図",
        "nearby 近くの",
        "entrance 入り口",
        "visually impaired 視覚障害がある",
        "suitcase スーツケース",
        "destination 目的地",
        "handle 取っ手",
        "obstacle 障害物",
        "wearable 身につけることができる",
        "reservation 予約",
        "cane 杖",
        "sunlight 日光"
    ],
    questions: [
        {
            id: "p8_q1",
            text: `次は、下線部①について凛がまとめた【メモ】です。本文の内容に合うように、（　）に入る最も適当な語をそれぞれ１語ずつ答えなさい。

【メモ】
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
            text: `下線部②「AIスーツケース」を使っているときの様子を表すイラストとして最も適当なものを次から１つ選び、記号で答えなさい。

![イラスト：AIスーツケース](/images/rins_speech_q2.png)`,
            options: [],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p8_q3",
            text: `（　③　）に次のA～Cの３つの文を入れるとき、A～Cを並べる順序として最も適当なものをあとから１つ選び、記号で答えなさい。

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
            text: "下線部④の人が述べたAIスーツケースを使った感想として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "盲導犬や白い杖と比べて、AIスーツケースは使用時に視覚障害者として認識されにくいという点が気に入っている。",
                "AIスーツケースは移動を補助してくれる人を派遣してくれるサービスにとって代わるものになると思う。",
                "AIスーツケースと白い杖を併用することで、視覚障害者として認識してもらいつつ、安全に移動することができる。",
                "AIスーツケースを使用していれば、視覚障害者は障害物や歩いている人を視覚で認識できるのでありがたい。"
            ],
            answerLabel: "ア",
            type: "choice",
            relatedParagraphs: [
                1
            ]
        },
        {
            id: "p8_q5",
            text: `次の文が、AIスーツケースが抱えている課題の一例を表す文になるように、（　）に入る最も適当な語をそれぞれ本文中から１語ずつ抜き出して答えなさい。

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
            text: "本文の内容と合っているものを次から１つ選び、記号で答えなさい。",
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
            "冬休みの間、私は福岡の祖母を訪ねました。",
            "彼女の家に到着すると、彼女は愛犬のレオンと一緒に出迎えてくれました。",
            "私の祖母は目があまりよく見えませんが、レオンは盲導犬として彼女を助けています。",
            "ある日、彼女がレオンと一緒にスーパーに行くと言ったので、私は<u>①レオンがどのように祖母を助けるか</u>を見るために彼らと一緒に行きました。",
            "スーパーへ行く途中、彼は独自の合図で彼女を誘導しました。",
            "例えば、角や段差に来たとき、彼はそれらのすぐ手前で止まることで彼女にそのことを伝えました。",
            "そしてスーパーに着くと、彼女は彼に「ドア」と言いました。",
            "レオンは近くのドアを探して彼女をそこへ連れて行き、スーパーの入り口がどこにあるかを彼女に教えるためにその前で止まりました。",
            "彼はすごかったです。"
        ],
        "1": [
            "私は視覚障害がある人々が動き回るのを助ける他の方法に興味を持ち、ユニークな技術、<u>②AIスーツケース</u>を紹介しているウェブサイトを見つけました。",
            "それはまるで旅行用スーツケースのように見える一種のAIロボットです。",
            "それは目の不自由な人々が安全に移動するのを助けます。",
            "利用者が目的地を告げると、それは利用者を誘導するために動きます。",
            "利用者は手にある取っ手を持ってその後をついていきます。",
            "AIスーツケースは途中の障害物、人、段差を認識することができます。",
            "そして利用者は首にかけたウェアラブルスピーカーを通してAIスーツケースからの音声ガイドを聞きます。",
            "例えば、AIスーツケースが途中で障害物を見つけると、「あなたの前に障害物があります」と言います。",
            "列に並ばなければならないときは、彼らを列へと誘導し、「列に並びます。",
            "ここで止まって待ってください」と言います。",
            "AIスーツケースはすでに多くの人々によってテストされており、私はウェブサイトでテストユーザーからの意見を読むことができました。",
            "ある人は言います、「( ③ ) しかしながら、私はそのサービスを利用するために予約をしなければならないので、行きたいときに自由に外出することができません。",
            "私はAIスーツケースが、私が外出をもっと楽しむ助けになることを望んでいます。」",
            "<u>④別の人</u>は言います、「私たち視覚障害者は、外出するときに盲導犬や白い杖を使わなければなりませんが、私は通りで視覚障害者として認識されるのが好きではありません。",
            "私がAIスーツケースと一緒に街を歩くとき、私はただスーツケースを持った人のように見えます。",
            "私はそれが気に入っています。」"
        ],
        "2": [
            "しかし、AIスーツケースにはまだ解決されなければならないいくつかの問題があります。",
            "例えば、日光が強すぎたり信号機が遠すぎたりすると、AIスーツケースにとって信号機の色を認識するのが難しいことがあります。",
            "AIスーツケースが私たちの社会で使われるようになるまでには長い時間がかかるかもしれませんが、私は視覚障害がある人々がそれと一緒にもっと自由に外出できるようになることを望んでいます。"
        ]
    },
    explanations: {
        p8_q1: {
            correct: "① steps ② hearing",
            beginner: {
                summary: "レオンの行動についての詳細を埋める問題です。",
                detail: `①本文の <ref target="0-5">when they came to corners or steps</ref>（角や段差に来たとき）という記述から、cornersに対応するのは steps です。
②本文の <ref target="0-6">she said "door" to him.</ref>（彼女は彼に「ドア」と言った）という記述から、レオンの立場で見ると「ドアという言葉を聞いた後」となるので、hear を動名詞にして hearing とします。`,
                keywords: [
                    "corner (角)",
                    "step (段差)",
                    "hear (聞く)"
                ]
            },
            advanced: {
                summary: "英文の言い換えと語形変化を問う問題です。",
                detail: `①は名詞の並列構造（A or B）を見抜きます。②は前置詞 After の後ろなので動名詞（-ing）が必要です。本文は能動態の文（She said...）ですが、メモはLeonの行動（After hearing...）として表現されています。`,
                keywords: [
                    "nearby (近くの)",
                    "lead (導く)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "For example, / when they came to corners or steps, / he told her that / by stopping just before them.",
                        translation: "例えば、 / 彼らが角や段差に来たとき、 / 彼は彼女にそのことを伝えました / それらのすぐ手前で止まることによって。"
                    }
                ]
            }
        },
        p8_q2: {
            correct: "イ",
            beginner: {
                summary: "AIスーツケースを使っている人の特徴を探します。",
                detail: `本文に <ref target="1-4">The user follows it with the handle in their hand.</ref>（利用者は取っ手を持ってついていく）および <ref target="1-6">through a wearable speaker on their neck</ref>（首の上のウェアラブルスピーカーを通して）とあります。これら2点（スーツケースの取っ手を持つ、首にスピーカー）を満たすイラストはイです。`,
                keywords: [
                    "handle (取っ手)",
                    "wearable speaker (身につけられるスピーカー)",
                    "neck (首)"
                ]
            },
            advanced: {
                summary: "本文の描写と視覚情報を照合する問題です。",
                detail: `wearable speaker on their neck が決定的な手がかりです。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "The user follows it / with the handle / in their hand.",
                        translation: "利用者はそれについていきます / 取っ手を持って / 手の中に。"
                    },
                    {
                        text: "And the user hears the voice guide / from AI Suitcase / through a wearable speaker / on their neck.",
                        translation: "そして利用者は音声ガイドを聞きます / AIスーツケースからの / ウェアラブルスピーカーを通して / 首にある。"
                    }
                ]
            }
        },
        p8_q3: {
            correct: "ウ",
            beginner: {
                summary: "話の流れに合うように文を並べ替えます。",
                detail: `文脈は、あるテストユーザーの意見で、既存のサービス（ヘルパーさんなど）についての話から始まります。
1. (B) 外出時は人を派遣してくれるサービスを使う（導入）
2. (C) その人が家に来て助けてくれる（具体的内容）
3. (A) その人たちのおかげで外出を楽しめる（感謝・感想）
その後に本文の However（しかし予約が必要で不便…）と続きます。`,
                keywords: [
                    "service (サービス)",
                    "send (送る)",
                    "safely (安全に)",
                    "thanks to (～のおかげで)"
                ]
            },
            advanced: {
                summary: "論理的展開（導入→説明→評価→逆接）を読み解きます。",
                detail: `Bで話題（service）を提示し、Cでその代名詞（He or she）を受けて内容を詳述し、Aでその評価（enjoy）を述べます。直後の However（しかし予約が必要で自由がない）という不満点との対比構造を作るためにも、直前はAのような肯定的な内容が来ると自然です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "When I go out, / I usually use a service / that sends someone to help me.",
                        translation: "私はたいていサービスを使います / 私を助ける誰かを派遣してくれる。"
                    }
                ]
            }
        },
        p8_q4: {
            correct: "ア",
            beginner: {
                summary: "もう一人の利用者の意見を読み取ります。",
                detail: `下線部④の後の発言を確認します。<ref target="1-11">I don't like to be recognized as a visually impaired person on the street.</ref>（通りで視覚障害者として認識されるのが好きではない）、<ref target="1-11">I just look like a person with a suitcase. I like that.</ref>（ただのスーツケースを持った人のように見える。それが気に入っている）と言っています。これは選択肢アの内容と一致します。`,
                keywords: [
                    "recognize (認識する)",
                    "visually impaired person (視覚障害者)",
                    "look like (～のように見える)"
                ]
            },
            advanced: {
                summary: "意見の要点を把握する問題です。",
                detail: `guide dog or white cane との比較において、visually impaired person として認識されずに済む（just look like a person with a suitcase）ことをメリットとして挙げています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I don't like to be recognized / as a visually impaired person / on the street.",
                        translation: "私は認識されるのが好きではありません / 視覚障害者として / 通りで。"
                    }
                ]
            }
        },
        p8_q5: {
            correct: "recognize / colors / far",
            beginner: {
                summary: "課題について書かれた部分から単語を抜き出します。",
                detail: `最終段落を見ます。<ref target="2-1">Sometimes recognizing the colors of a traffic light is difficult... traffic light is too far</ref> とあります。
問題文：can't ( recognize ) the ( colors ) ... is too ( far ) away.
本文の recognizing は助動詞 can't の後ろなので原形 recognize に戻します。`,
                keywords: [
                    "traffic light (信号機)",
                    "difficult (難しい)",
                    "strong (強い)"
                ]
            },
            advanced: {
                summary: "英文の構造転換と語形変化（動名詞→原形）を伴う抜き出し問題です。",
                detail: `本文：Sometimes [recognizing the colors...] is difficult.（動名詞句が主語）
問題文：Sometimes AI Suitcase can't [recognize the colors...].（主語＋動詞）
意味的に対応する語を選び、can't の直後なので recognize に形を整えます。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Sometimes / recognizing the colors of a traffic light / is difficult for AI Suitcase",
                        translation: "時々 / 信号機の色を認識することは / AIスーツケースにとって難しいです"
                    }
                ]
            }
        },
        p8_q6: {
            correct: "イ",
            beginner: {
                summary: "本文全体の結論や筆者の願いを選びます。",
                detail: `最後の文 <ref target="2-2">I hope visually impaired people will be able to go out more freely than now with it.</ref>（私は視覚障害者がこれと一緒にもっと自由に外出できるようになることを望んでいます）が、選択肢イの内容と一致します。`,
                keywords: [
                    "hope (望む)",
                    "freely (自由に)",
                    "society (社会)"
                ]
            },
            advanced: {
                summary: "内容一致問題です。",
                detail: `ア：AIスーツケースの後に盲導犬に興味を持ったわけではない（順序逆）。
ウ：AIスーツケースを持った人を派遣するのではなく、AIスーツケース自体がロボット。
エ：すぐに（soon）使えるとは言っておらず、It may take a long time（長い時間がかかるかもしれない）と言っている。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I hope / visually impaired people will be able to go out / more freely than now / with it.",
                        translation: "私は望みます / 視覚障害がある人々が外出できるようになることを / 今よりもっと自由に / それ（AIスーツケース）と一緒に。"
                    }
                ]
            }
        }
    }
};

export const grade3Problems = [weddingRegistryProblem, newYearsResolutionProblem, rinsSpeechProblem];
