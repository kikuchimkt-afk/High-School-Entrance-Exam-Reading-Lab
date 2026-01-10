const holidaysProblem = {
    id: "p3",
    title: "Holidays in Japan and America",
    category: "中学2年",
    target: "中2",
    number: "中2-問題1",
    genre: "対話",
    source: "学力テスト 中2 2025年度 12月",
    badges: [
        "中2 未来表現",
        "中2 不定詞",
        "中2 動名詞",
        "中2 接続詞",
        "学力テスト",
        "文化",
        "対話"
    ],
    content: `Jack: Hi, Mari. ( [ ① ] )

Mari: Hi, Jack. My family and I are going to clean our house. For many Japanese people, the new year is very important. We usually clean our houses *carefully at the end of the year to *welcome the new year.

Jack: I didn't know that. How do you usually spend the new year, Mari?

Mari: I usually visit a shrine with my family on the morning of New Year's Day. After that, we stay at my grandmother's house for a few days.

Jack: In America, New Year's Day is just one *national holiday. A lot of people start working from January 2.

Mari: <u>②That</u> is different here in Japan. A lot of people in Japan are *off work until around January 3. Well, which national holiday is important in America?

Jack: For me, *Independence Day and *Christmas are important. Do you know about Independence Day?

Mari: Not very much. Please tell me about it.

Jack: Sure. It's July 4, and we *celebrate independence from *Great Britain. On that day, we have events like concerts and *parades. At night, we enjoy seeing fireworks.

Mari: That sounds like a lot of fun!

Jack: On that day, I watch a baseball game at a stadium with my friends every year. Players wear special *uniforms for the day.

Mari: That's wonderful. What do you usually do on Christmas?

Jack: In America, many people visit a *church, and they usually spend time with their family at home. My sister lives in Canada. Before Christmas, she comes back home from Canada every year. On Christmas, we eat *turkey and *exchange gifts in America.

Mari: You spend a good time with your family on Christmas in your country. In Japan, Christmas isn't a national holiday, but it is a very popular event. Many young people usually spend the day with their *boyfriend or *girlfriend. My sister went out with her boyfriend and had dinner at a restaurant last year.

Jack: I see.

Mari: How are you going to spend that day in Japan this year?

Jack: I have no plans.

Mari: Then, why don't you come to my house? I am going to have a Christmas party with some of my friends at my house.

Jack: I will. Thank you, Mari.`,
    footnotes: [
        "carefully 入念に",
        "welcome ～を迎える",
        "national holiday 祝日",
        "off work until ～ ～まで仕事が休みで",
        "independence 独立",
        "Christmas クリスマス",
        "celebrate ～を祝う",
        "Great Britain 英国",
        "parade パレード",
        "uniform 制服，ユニフォーム",
        "church 教会",
        "turkey 七面鳥",
        "exchange ～を交換する",
        "boyfriend (男性の)恋人",
        "girlfriend (女性の)恋人"
    ],
    questions: [
        {
            id: "p3_q1",
            type: "choice",
            text: "( ① )に入る最も適当なものを次から1つ選び，記号で答えなさい。",
            options: [
                "When are you going to clean your house?",
                "What are you going to do this weekend?",
                "What did you do yesterday?",
                "How did you spend your winter vacation last year?"
            ],
            answerLabel: "イ",
            relatedParagraphs: [
                0,
                1
            ]
        },
        {
            id: "p3_q2",
            type: "choice",
            text: "下線部②が指す具体的な内容として最も適当なものを次から1つ選び，記号で答えなさい。",
            options: [
                "アメリカではふつう，年末には家の大掃除をしないこと。",
                "アメリカでは，新年は祖父母の家で数日間過ごすこと。",
                "アメリカの元日は祝日ではないこと。",
                "アメリカでは，多くの人が1月2日から働くこと。"
            ],
            answerLabel: "エ",
            relatedParagraphs: [
                4,
                5
            ]
        },
        {
            id: "p3_q3",
            type: "choice",
            text: "アメリカの①独立記念日(Independence Day)と②クリスマスについて，ジャックが本文中で述べていることとして正しいものを，それぞれ次からすべて選び，記号で答えなさい。",
            options: [
                "7月4日である。",
                "フランスからの独立を祝う。",
                "コンサートやパレードのようなイベントが行われる。",
                "若い人は恋人と外出して，レストランで夕食を食べる。",
                "たいていは家族と過ごす。",
                "夜には花火を見て楽しむ。",
                "多くの人が教会を訪れる。",
                "七面鳥を食べたり，プレゼントを交換したりする。"
            ],
            answerLabel: "①: ア, ウ, カ / ②: オ, キ, ク",
            "relatedParagraphs": [
                8,
                10,
                12
            ]
        },
        {
            id: "p3_q4",
            type: "fill-in-blank",
            text: `次の文が本文の内容に合うように，(　)に入る最も適当な語をそれぞれ本文中から1語ずつ抜き出して答えなさい。
Mari usually visits a (　) with her (　) on the morning of New Year's Day.`,
            options: [],
            answerLabel: "shrine / family",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p3_q5",
            type: "fill-in-blank",
            text: `本文の内容に合うように次の質問に英語で答えるとき，(　)に入る最も適当な1語を答えなさい。
<質問> Where does Jack's sister live?
<答え> She lives in (　).`,
            options: [],
            answerLabel: "Canada",
            relatedParagraphs: [
                12
            ]
        },
        {
            id: "p3_q6",
            type: "choice",
            text: `本文の内容に合うように次の質問に英語で答えるとき，(　)に入る最も適当なものをあとから1つ選び，記号で答えなさい。
<質問> What will Jack do on Christmas this year?
<答え> He will (　).`,
            "options": [
                "go back to America",
                "visit a church",
                "stay home",
                "join a Christmas party"
            ],
            answerLabel: "エ",
            relatedParagraphs: [
                16,
                17,
                18
            ]
        },
        {
            id: "p3_q7",
            type: "true-false",
            text: `次の文が本文の内容に合っていれば○で，合っていなければ×で答えなさい。
① ジャックはこの対話が交わされる前から，日本ではたいてい年末に家の大掃除が行われることを知っていました。
② ジャックは，独立記念日には野球の試合で選手たちがその日のための特別なユニフォームを着ると言っています。
③ 真理は，クリスマスは日本では祝日ではないので，人気のあるイベントではないと言っています。`,
            options: [],
            answerLabel: "× / ○ / ×",
            relatedParagraphs: [
                2,
                10,
                13
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "やあ、真理。( [ ① ] )"
        ],
        "1": [
            "こんにちは、ジャック。",
            "私の家族と私は家の大掃除をするつもりです。",
            "多くの日本人にとって、新年はとても重要です。",
            "私たちは普通、新年を迎えるために年末に入念に掃除をします。"
        ],
        "2": [
            "それは知りませんでした。",
            "あなたは普通、新年をどのように過ごしますか、真理？"
        ],
        "3": [
            "私は普通、元旦の朝に家族と神社を訪れます。",
            "その後、私たちは数日間祖母の家に滞在します。"
        ],
        "4": [
            "アメリカでは、元日は単なる一つの祝日です。",
            "多くの人々は1月2日から働き始めます。"
        ],
        "5": [
            "それはここ日本とは違いますね。",
            "日本の多くの人々は、1月3日頃まで仕事が休みです。",
            "ところで、アメリカではどの祝日が重要ですか。"
        ],
        "6": [
            "私にとっては、独立記念日とクリスマスが重要です。",
            "あなたは独立記念日について知っていますか。"
        ],
        "7": [
            "あまり知りません。",
            "それについて私に教えてください。"
        ],
        "8": [
            "いいですよ。",
            "それは7月4日で、私たちは英国からの独立を祝います。",
            "その日には、コンサートやパレードのようなイベントがあります。",
            "夜には、花火を見て楽しみます。"
        ],
        "9": [
            "それはとても楽しそうですね！"
        ],
        "10": [
            "その日、私は毎年友達とスタジアムで野球の試合を見ます。",
            "選手たちはその日のための特別なユニフォームを着ます。"
        ],
        "11": [
            "それは素晴らしいですね。",
            "あなたは普通、クリスマスに何をしますか。"
        ],
        "12": [
            "アメリカでは、多くの人が教会を訪れ、たいていは家で家族と時間を過ごします。",
            "私の姉（妹）はカナダに住んでいます。",
            "クリスマスの前に、彼女は毎年カナダから実家に帰ってきます。",
            "クリスマスには、私たちはアメリカでは七面鳥を食べたりプレゼントを交換したりします。"
        ],
        "13": [
            "あなたの国ではクリスマスに家族と良い時間を過ごすのですね。",
            "日本では、クリスマスは祝日ではありませんが、とても人気のあるイベントです。",
            "多くの若い人たちは、たいていその日を彼氏や彼女と過ごします。",
            "私の姉は昨年、彼氏と外出してレストランで夕食を食べました。"
        ],
        "14": [
            "なるほど。"
        ],
        "15": [
            "あなたは今年、日本でその日をどう過ごすつもりですか。"
        ],
        "16": [
            "予定はありません。"
        ],
        "17": [
            "それなら、私の家に来ませんか。",
            "私の家で何人かの友達とクリスマスパーティーをするつもりなんです。"
        ],
        "18": [
            "行きます。",
            "ありがとう、真理。"
        ]
    },
    explanations: {
        p3_q1: {
            correct: "イ",
            beginner: {
                summary: "真理の返答「掃除をするつもりです」につながる質問を選びましょう。",
                detail: `空所の直後で真理は <ref target="1-1">My family and I are going to clean our house.</ref>（私の家族と私は家を掃除するつもりです）と答えています。したがって、「今週末何をする予定ですか？」と尋ねる選択肢イが適切です。`,
                keywords: [
                    "be going to (～するつもりだ)",
                    "clean (掃除する)",
                    "weekend (週末)"
                ]
            },
            advanced: {
                summary: "be going to を使った未来の予定を尋ねる表現です。",
                detail: `会話の流れとして、直近の予定を尋ねる文脈です。選択肢ア "When are you going to clean..." は、まだ掃除の話が出ていない段階では不自然です。選択肢イ "What are you going to do..." が最も自然な導入となります。`,
                keywords: [
                    "future tense (未来形)",
                    "intention (意図)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "My family and I / are going to clean / our house.",
                        translation: "私の家族と私は / 掃除するつもりです / 私たちの家を。"
                    }
                ]
            }
        },
        p3_q2: {
            correct: "エ",
            beginner: {
                summary: "指示語 that は直前の文の内容を指します。",
                detail: `直前のジャックのセリフ <ref target="4-1">A lot of people start working from January 2.</ref>（多くの人々は1月2日から働き始めます）を指しています。日本とは違い、アメリカでは正月休みが短いことを指して "That is different" と言っています。`,
                keywords: [
                    "start working (働き始める)",
                    "national holiday (祝日)"
                ]
            },
            advanced: {
                summary: "日米の正月文化の違いについての文脈理解を問う問題です。",
                detail: `"That" は前文の内容全体、特に「アメリカでは多くの人が1月2日から働く」という事実を指します。日本では三が日（January 3）まで休むのが一般的であることと対比されています。`,
                keywords: [
                    "demonstrative pronoun (指示代名詞)",
                    "context (文脈)",
                    "contrast (対比)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "A lot of people / start working / from January 2.",
                        translation: "多くの人々が / 働き始めます / 1月2日から。"
                    }
                ]
            }
        },
        p3_q3: {
            correct: "①: ア, ウ, カ / ②: オ, キ, ク",
            beginner: {
                summary: "本文からそれぞれの祝日の特徴を探し出しましょう。",
                detail: `**①独立記念日**: <ref target="8-1">It's July 4</ref> (ア)、<ref target="8-2">concerts and parades</ref> (ウ)、<ref target="8-3">seeing fireworks</ref> (カ) が述べられています。
**②クリスマス**: <ref target="12-0">spend time with their family</ref> (オ)、<ref target="12-0">visit a church</ref> (キ)、<ref target="12-3">eat turkey and exchange gifts</ref> (ク) が述べられています。`,
                keywords: [
                    "Independence Day (独立記念日)",
                    "fireworks (花火)",
                    "church (教会)",
                    "turkey (七面鳥)"
                ]
            },
            advanced: {
                summary: "情報検索能力を問う問題です。各祝日のキーワードをスキャンします。",
                detail: `独立記念日については第8～10段落、クリスマスについては第12段落に記述が集中しています。「Great Britainからの独立」なので選択肢イ（フランス）は誤りです。`,
                keywords: [
                    "scanning (スキャニング)",
                    "details (詳細情報)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "On that day, / we have events / like concerts and parades.",
                        translation: "その日には、 / 私たちはイベントがあります / コンサートやパレードのような。"
                    }
                ]
            }
        },
        p3_q4: {
            correct: "shrine / family",
            beginner: {
                summary: "真理の元日の過ごし方を本文から抜き出します。",
                detail: `第3段落の真理のセリフ <ref target="3-0">I usually **visit a shrine with my family** on the morning of New Year's Day.</ref> と完全に一致します。空所に合うように語句を抜き出します。`,
                keywords: [
                    "shrine (神社)",
                    "usually (たいてい)",
                    "visit (訪れる)"
                ]
            },
            advanced: {
                summary: "本文の文構造をそのまま利用する補充問題です。",
                detail: `"visits a ( )" の目的語と、"with her ( )" の前置詞の目的語を探します。"my family" は主語が Mari に変わったため "her family" となっています。`,
                keywords: [
                    "preposition (前置詞)",
                    "object (目的語)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I usually visit a shrine / with my family / on the morning of New Year's Day.",
                        translation: "私はたいてい神社を訪れます / 家族と一緒に / 元旦の朝に。"
                    }
                ]
            }
        },
        p3_q5: {
            correct: "Canada",
            beginner: {
                summary: "ジャックのお姉さんが住んでいる場所を探しましょう。",
                detail: `第12段落に <ref target="12-1">My sister lives in **Canada**.</ref>（私の姉はカナダに住んでいます）という文があります。`,
                keywords: [
                    "live in (～に住む)"
                ]
            },
            advanced: {
                summary: "固有名詞（国名）を特定する単純な情報抽出です。",
                detail: `質問文 "Where does Jack's sister live?" に対して "She lives in ..." とあるので、場所を表す名詞が入ります。`,
                keywords: [
                    "proper noun (固有名詞)",
                    "location (場所)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "My sister lives / in Canada.",
                        translation: "私の姉は住んでいます / カナダに。"
                    }
                ]
            }
        },
        p3_q6: {
            correct: "エ",
            beginner: {
                summary: "会話の最後で決まったジャックの予定を答えます。",
                detail: `最初は <ref target="16-0">I have no plans.</ref>（予定はない）と言っていましたが、真理に <ref target="17-0">why don't you come to my house?</ref>（うちに来ませんか？）と誘われ、<ref target="18-0">I will.</ref>（行きます）と答えています。真理の家でパーティーに参加することになります。`,
                keywords: [
                    "join (参加する)",
                    "party (パーティー)",
                    "Why don't you...? (～しませんか)"
                ]
            },
            advanced: {
                summary: "文脈の変化を追う必要があります。No plans からの変更に注意。",
                detail: `直前の "I have no plans." だけで判断して "stay home" を選ばないように注意。その後の "Why don't you..." (提案) と "I will" (受諾) の流れから、最終的な予定は真理の家のパーティーに参加することです。`,
                keywords: [
                    "invitation (招待)",
                    "acceptance (受諾)",
                    "flow of conversation (会話の流れ)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "I am going to have / a Christmas party / with some of my friends.",
                        translation: "私は開くつもりです / クリスマスパーティーを / 何人かの友達と一緒に。"
                    }
                ]
            }
        },
        p3_q7: {
            correct: "× / ○ / ×",
            beginner: {
                summary: "本文の内容と照らし合わせて正誤を判断します。",
                detail: `①ジャックは掃除の話を聞いて <ref target="2-0">I didn't know that.</ref>（それは知りませんでした）と言っているので×。
②第10段落で <ref target="10-1">Players wear special uniforms for the day.</ref> と言っているので○。
③真理は <ref target="13-1">it is a very popular event.</ref>（とても人気のあるイベントです）と言っているので×。`,
                keywords: [
                    "know (知っている)",
                    "special (特別な)",
                    "popular (人気のある)"
                ]
            },
            advanced: {
                summary: "詳細な事実確認問題です。否定語や形容詞に注目します。",
                "detail": `① "didn't know" が根拠。③ "isn't a national holiday" だが "very popular" と逆接 "but" で強調されています。`,
                keywords: [
                    "negation (否定)",
                    "conjunction (接続詞)"
                ]
            },
            common: {
                slashReading: [
                    {
                        text: "Christmas isn't a national holiday, / but it is / a very popular event.",
                        translation: "クリスマスは祝日ではありません / しかしそれは～です / とても人気のあるイベント。"
                    }
                ]
            }
        }
    }
};

const morningRoutineProblem = {
    id: "p6",
    title: "A Morning Routine",
    category: "中学2年",
    target: "中2",
    number: "中2-問題2",
    genre: "対話",
    source: "学力テスト 中2生 2025年度 11月",
    badges: [
        "中2 動名詞",
        "中2 不定詞",
        "中2 助動詞",
        "学力テスト",
        "生活",
        "対話"
    ],
    content: `Sarah: Good morning, Tatsuya. Are you OK? Are you tired?

Tatsuya: Good morning, Sarah. I'm OK, thank you. I'm just *sleepy.

Sarah: What time did you go to bed last night?

Tatsuya: At twelve thirty.

Sarah: That's so late! Do you usually go to bed at twelve thirty?

Tatsuya: Yes. I do things like watching TV or listening to music for a few hours before going to bed. And I'm always sleepy in the morning. You are always *active, Sarah. Do you sleep a lot?

Sarah: Yes. I go to bed at ten, and I get up at six every day. And I have a morning *routine. From Monday to Friday, I walk in the park for thirty minutes, have breakfast at home, and study Japanese for an hour. I can be active all day after doing these. You should be <u>an early bird</u> like me!

Tatsuya: What do you mean?

Sarah: You should get up early and *make good use of your time in the morning. You should go to bed early, too, of course.

Tatsuya: I see. When did you start getting up early and doing those?

Sarah: I started doing them last year. Keeping my morning routine is very good for my *health, and I'm always active!

Tatsuya: Why did you start it?

Sarah: Because I was often sleepy in the morning like you, and I couldn't do well in class. I told my mother about that, and she said to me, "Why don't you get up early? You should also make a morning routine."

Tatsuya: I see. Do you have your morning routine for Saturdays and Sundays, too?

Sarah: Of course. I run around my house and read a book at home. Also, I have breakfast at a *cafe with my family.

Tatsuya: I want to make my own morning routine. What should I do?

Sarah: For your health, you should have breakfast and do some *exercise. You have a dog, right? How about walking your dog in a park?

Tatsuya: That's good. My mother walks him in the morning, and she walks him in the evening, too. I will do that in the morning *in place of her.

Sarah: Good.

Tatsuya: I will have breakfast first. After that, I will walk my dog in the park. And then, I will read the newspaper before coming to school.

Sarah: That will be a good morning routine. I have an idea. Why don't we walk in a park together? Can you come to Kita Park with your dog at six thirty tomorrow?

Tatsuya: OK. Thank you, Sarah.`,
    footnotes: [
        "sleepy 眠い",
        "active 活発な，元気な",
        "routine 日課，習慣",
        "make good use of ～ ～を有効利用する",
        "health 健康",
        "cafe カフェ",
        "exercise 運動",
        "in place of ～ ～の代わりに"
    ],
    questions: [
        {
            id: "p6_q1",
            text: "下線部 an early bird の意味として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "夜、早く寝ることができない人",
                "朝、早く起きる人",
                "睡眠時間が短くても元気な人",
                "すばやく行動する人"
            ],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                6,
                8
            ]
        },
        {
            id: "p6_q2",
            text: `サラが行っている朝の習慣についてまとめた次の表を完成させるとき、（　①　）と（　②　）に入るものをあとからそれぞれすべて選び、記号で答えなさい。

![表](/images/morning_routine_q2.png)`,
            options: [],
            answerLabel: "① ア, ウ, オ　② イ, エ, カ",
            type: "choice",
            relatedParagraphs: [
                6,
                14
            ]
        },
        {
            id: "p6_q3",
            text: `次は、この対話が交わされたあとに達也が始める予定の朝の習慣です。本文の内容に合うようにア～エを達也が行う順に並べかえ、その順序を記号で答えなさい。ただし、不要なものが１つあります。

![イラスト](/images/morning_routine_q3.png)`,
            options: [],
            answerLabel: "ウ → エ → イ",
            type: "sort",
            relatedParagraphs: [
                19
            ]
        },
        {
            id: "p6_q4",
            text: `本文の内容に合うように次の質問に英語で答えるとき、（　）に入る最も適当な語をそれぞれ１語ずつ答えなさい。

① <質問> How long does Sarah sleep every day?
　 <答え> She sleeps for ( ) ( ).

② <質問> Who told Sarah about a morning routine?
　 <答え> Sarah's ( ) did.`,
            options: [],
            answerLabel: "① eight hours ② mother",
            type: "fill-in-blank",
            relatedParagraphs: [
                6,
                12
            ]
        },
        {
            id: "p6_q5_1",
            text: `次の文が本文の内容に合っていれば○、合っていなければ×で答えなさい。

① 達也はこの対話が交わされる前、たいてい夜の10時30分に寝ていました。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "×",
            type: "choice",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p6_q5_2",
            text: `次の文が本文の内容に合っていれば○、合っていなければ×で答えなさい。

② サラは朝の習慣を作る前、達也と同じようによく午前中に眠いことがありました。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                12
            ]
        },
        {
            id: "p6_q5_3",
            text: `次の文が本文の内容に合っていれば○、合っていなければ×で答えなさい。

③ 達也とサラはこの対話が交わされた次の日、朝の6時30分に北公園(Kita Park)で会う約束をしました。`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                20,
                21
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "サラ: おはよう、達也。",
            "大丈夫？",
            "疲れているの？"
        ],
        "1": [
            "達也: おはよう、サラ。",
            "僕は大丈夫だよ、ありがとう。",
            "ただ眠いんだ。"
        ],
        "2": [
            "サラ: 昨夜は何時に寝たの？"
        ],
        "3": [
            "達也: 12時30分だよ。"
        ],
        "4": [
            "サラ: それはとても遅いわね！",
            "たいてい12時30分に寝るの？"
        ],
        "5": [
            "達也: うん。",
            "寝る前に数時間、テレビを見たり音楽を聴いたりといったことをするんだ。",
            "そして午前中はいつも眠いんだ。",
            "君はいつも活発だね、サラ。",
            "たくさん寝るの？"
        ],
        "6": [
            "サラ: ええ。",
            "私は毎日10時に寝て、6時に起きるわ。",
            "そして私には朝のルーティン（日課）があるの。",
            "月曜日から金曜日までは、公園を30分歩いて、家で朝食を食べて、1時間日本語を勉強するの。",
            "これらをした後は一日中活発でいられるわ。",
            "あなたも私のように<u>早起きの人</u>になるべきよ！"
        ],
        "7": [
            "達也: どういう意味？"
        ],
        "8": [
            "サラ: 早起きをして、朝の時間を有効に使うべきということよ。",
            "もちろん、早く寝るべきでもあるわ。"
        ],
        "9": [
            "達也: なるほど。",
            "いつ早起きをしてそれらのことをし始めたの？"
        ],
        "10": [
            "サラ: 去年それらをし始めたわ。",
            "朝のルーティンを続けることは私の健康にとってとても良いことで、私はいつも元気よ！"
        ],
        "11": [
            "達也: なぜそれを始めたの？"
        ],
        "12": [
            "サラ: なぜなら、私もあなたのように午前中によく眠くて、授業でうまくできなかったからよ。",
            "母にそのことを話したら、彼女は私に言ったの、『早起きしたらどう？",
            "あなたも朝のルーティンを作るべきよ』って。"
        ],
        "13": [
            "達也: そうなんだ。",
            "土曜日と日曜日も朝のルーティンがあるの？"
        ],
        "14": [
            "サラ: もちろんよ。",
            "家の周りを走って、家で本を読むわ。",
            "あと、家族と一緒にカフェで朝食をとるの。"
        ],
        "15": [
            "達也: 僕も自分自身の朝のルーティンを作りたいな。",
            "何をすべきかな？"
        ],
        "16": [
            "サラ: 健康のために、朝食をとって運動をすべきよ。",
            "あなたは犬を飼っているわよね？",
            "公園で犬の散歩をするのはどう？"
        ],
        "17": [
            "達也: それはいいね。",
            "母が朝に犬の散歩をしていて、夕方にも散歩をしているんだ。",
            "僕が母の代わりに朝にそれをするよ。"
        ],
        "18": [
            "サラ: いいわね。"
        ],
        "19": [
            "達也: 僕は最初に朝食をとるよ。",
            "その後、公園で犬の散歩をするよ。",
            "そしてそれから、学校に来る前に新聞を読むよ。"
        ],
        "20": [
            "サラ: それは良い朝のルーティンになりそうね。",
            "いい考えがあるわ。",
            "一緒に公園を歩かない？",
            "明日6時半にあなたの犬と一緒に北公園に来られる？"
        ],
        "21": [
            "達也: OK。",
            "ありがとう、サラ。"
        ]
    },
    explanations: {
        p6_q1: {
            correct: "イ",
            beginner: {
                summary: "early bird の文字通りの意味「早起きの鳥」から推測します。",
                "detail": "Sarahは <ref target=\"6-1\">I go to bed at ten, and I get up at six every day.</ref>（毎日10時に寝て6時に起きる）と言い、Tatsuyaに「私のように early bird になるべき」と勧めています。次の文で <ref target=\"8-0\">You should get up early</ref>（早起きすべき）と言い換えています。",
                "keywords": [
                    "early (早い)",
                    "bird (鳥)",
                    "get up (起きる)",
                    "mean (意味する)"
                ]
            },
            advanced: {
                summary: "イディオムの意味を文脈から推測する問題です。",
                "detail": "an early bird はことわざ \"The early bird catches the worm.\"（早起きは三文の徳）から来ており、「早起きの人」を指します。文脈上、夜型のTatsuyaに対して、Sarahのような朝型の生活を勧めています。",
                "keywords": [
                    "should (～すべきだ)",
                    "make good use of (～を有効利用する)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "You should get up early / and make good use of your time / in the morning.",
                        "translation": "あなたは早起きすべきです / そして時間を有効利用すべきです / 朝に。"
                    }
                ]
            }
        },
        p6_q2: {
            correct: "① ア, ウ, オ　② イ, エ, カ",
            beginner: {
                "summary": "Sarahの平日と週末の習慣を本文から抜き出します。",
                "detail": "①平日（Monday to Friday）: <ref target=\"6-3\">walk in the park (ウ), have breakfast at home (ア), study Japanese (オ)</ref>\n②週末（Saturdays and Sundays）: <ref target=\"14-1\">run around my house (エ), read a book at home (カ)</ref>, <ref target=\"14-2\">have breakfast at a cafe (イ)</ref>",
                "keywords": [
                    "Monday (月曜日)",
                    "Friday (金曜日)",
                    "Saturday (土曜日)",
                    "Sunday (日曜日)",
                    "walk (歩く)",
                    "run (走る)"
                ]
            },
            advanced: {
                "summary": "情報の分類と抽出を行う問題です。",
                "detail": "From Monday to Friday と For Saturdays and Sundays の記述を正確に区別します。特に朝食の場所（home / cafe）や運動の種類（walk / run）の違いに注意します。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "From Monday to Friday, / I walk in the park / for thirty minutes,",
                        "translation": "月曜日から金曜日まで、 / 私は公園を歩きます / 30分間、"
                    },
                    {
                        "text": "have breakfast at home, / and study Japanese for an hour.",
                        "translation": "家で朝食を食べ、 / そして1時間日本語を勉強します。"
                    }
                ]
            }
        },
        p6_q3: {
            correct: "ウ → エ → イ",
            beginner: {
                "summary": "Tatsuyaがこれから行う順序を確認します。",
                "detail": "Tatsuyaの発言 <ref target=\"19-0\">I will have breakfast first.</ref>（ウ：食事）、<ref target=\"19-1\">After that, I will walk my dog...</ref>（エ：犬の散歩）、<ref target=\"19-2\">And then, I will read the newspaper...</ref>（イ：新聞）の順です。ア（テレビ）は夜の習慣なので不要です。",
                "keywords": [
                    "first (最初に)",
                    "after that (そのあと)",
                    "then (それから)",
                    "newspaper (新聞)"
                ]
            },
            advanced: {
                "summary": "時系列を表す接続詞（first, after that, and then）を追う問題です。",
                "detail": "不要な選択肢「ア」は、Tatsuyaが改善したいと言っていた「夜寝る前にテレビを見る」習慣（watching TV... before going to bed）を描写したものです。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "I will have breakfast first. / After that, / I will walk my dog in the park.",
                        "translation": "私は最初に朝食を食べます。 / そのあと、 / 私は公園で犬を散歩させます。"
                    }
                ]
            }
        },
        p6_q4: {
            correct: "① eight hours ② mother",
            beginner: {
                "summary": "数や人物を特定する記述問題です。",
                "detail": "① Sarahは10時に寝て6時に起きるので、睡眠時間は8時間 (eight hours) です。\n② Sarahにアドバイスしたのは <ref target=\"12-1\">I told my mother... she said to me...</ref> とある通り、彼女の母 (mother) です。",
                "keywords": [
                    "hour (時間)",
                    "mother (母)"
                ]
            },
            "advanced": {
                "summary": "情報の計算と特定が必要です。",
                "detail": "① 10 p.m. to 6 a.m. = 8 hours.\n② \"Who told Sarah...?\" という質問に対して、本文の \"she (my mother) said to me\" という記述から回答します。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "I go to bed at ten, / and I get up at six / every day.",
                        "translation": "私は10時に寝ます、 / そして6時に起きます / 毎日。"
                    }
                ]
            }
        },
        p6_q5_1: {
            correct: "×",
            beginner: {
                "summary": "Tatsuyaの寝る時間を確認します。",
                "detail": "Tatsuyaは <ref target=\"3-0\">At twelve thirty.</ref>（12時30分）と答えています。10時30分ではありません。",
                "keywords": [
                    "twelve (12)",
                    "thirty (30)"
                ]
            },
            "advanced": {
                "summary": "時刻の聞き取り（読み取り）です。",
                "detail": "twelve thirty (12:30) と ten thirty (10:30) の違いです。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "Do you usually go to bed / at twelve thirty?",
                        "translation": "あなたはたいてい寝ますか / 12時30分に？"
                    }
                ]
            }
        },
        p6_q5_2: {
            correct: "○",
            beginner: {
                "summary": "Sarahの過去の状態を確認します。",
                "detail": "Sarahは <ref target=\"12-0\">Because I was often sleepy in the morning like you</ref>（私もあなたのように午前中よく眠かったから）と言っています。内容は合っています。",
                "keywords": [
                    "sleepy (眠い)",
                    "like (～のように)"
                ]
            },
            "advanced": {
                "summary": "理由を説明する文脈での過去の事実確認です。",
                "detail": "like you（あなたと同様に）という表現で、かつてのSarahもTatsuyaと同じ状態だったことが示されています。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "Because I was often sleepy / in the morning / like you,",
                        "translation": "なぜなら私はよく眠かったからです / 午前中に / あなたのように、"
                    }
                ]
            }
        },
        p6_q5_3: {
            correct: "○",
            beginner: {
                "summary": "最後の約束を確認します。",
                "detail": "Sarahが <ref target=\"20-3\">Can you come to Kita Park... at six thirty tomorrow?</ref>（明日6時半に北公園に来れる？）と提案し、Tatsuyaが <ref target=\"21-0\">OK.</ref> と承諾しています。",
                "keywords": [
                    "tomorrow (明日)",
                    "together (一緒に)"
                ]
            },
            "advanced": {
                "summary": "対話の結末部分での合意事項の確認です。",
                "detail": "場所(Kita Park)、時間(six thirty)、日時(tomorrow)の条件が一致しています。",
                "keywords": []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "Can you come to Kita Park / with your dog / at six thirty tomorrow?",
                        "translation": "あなたは北公園に来られますか / あなたの犬と一緒に / 明日の6時30分に？"
                    }
                ]
            }
        }
    }
};


const rikaCakeShopProblem = {
    id: "p9",
    title: "Rika's Work Experience at a Cake Shop",
    category: "中学2年",
    target: "中2",
    number: "中2-問題3",
    genre: "スピーチ",
    source: "学力テスト 中2生 2024年度 1月",
    badges: [
        "中2 不定詞",
        "中2 接続詞",
        "中2 動名詞",
        "学力テスト",
        "生活",
        "スピーチ"
    ],
    content: `Hello, everyone. Today, I will talk about my work experience.

I worked at a cake shop. I like cakes, so I was happy. Before my work experience, I said to my father, "Do you think I can do well at a cake shop?" He said, "I think you can. Do your best." I couldn't sleep well before the first day of my work experience.

On the first day, I cleaned the *showcase. The *shopkeeper, Mr. Hoshi, said, "The showcase is very important. It's like our shop's face. It tells people that we sell these delicious cakes. So we clean the showcase carefully." The cakes looked delicious in the showcase. I learned that cleaning the showcase has a special meaning. After that, I learned the names of cakes. There were 30 different kinds of cakes. Mr. Hoshi told me their names and the reasons for each name. Learning the names with the reasons was interesting to me.

The third day was the *last day of my work experience at the cake shop. I cut some fruit on that day. I cut *strawberries into *heart shapes. Mr. Hoshi said, "The cakes with strawberries are very popular in our shop." In the afternoon, when he was making a cake in the kitchen, a woman came into the shop and talked to me. She said, "Today is my mother's birthday. I want some cakes with fruit. She likes strawberries very much. Which cakes do you *recommend?" I became very nervous and just said to her, "How about this cake? Its name is 'One Heart.'" She said, "They're so cute! I'll buy two of these." Then, Mr. Hoshi came and said, "Thank you. This girl here cut these strawberries." I told her, "Thank you very much! I hope you enjoy the cakes!" And then I *handed the cakes to the woman. The woman smiled and left the shop. Mr. Hoshi said, "Good job, Rika. She smiled when she heard your words." <u>I felt glad</u> to hear that.

This work experience was very important for me. Now, I am thinking about my future job. I want to see people's smiles at my job in the future. Thank you for listening.`,
    footnotes: [
        "showcase 陳列用ガラスケース",
        "shopkeeper 店長",
        "last 最後の",
        "strawberry イチゴ",
        "heart ハート(の)",
        "recommend ～をすすめる",
        "hand ～を手渡す"
    ],
    questions: [
        {
            id: "p9_q1",
            text: "下線部 I felt glad の理由として最も適当なものを次から１つ選び、記号で答えなさい。",
            options: [
                "保志さん(Mr. Hoshi)から彼のケーキ屋にはとてもおいしいケーキがたくさんあると聞いたから。",
                "店にケーキを買いにきた女性が里香のことばを聞いてほほえんだと、保志さんがほめてくれたから。",
                "店にケーキを買いにきた女性が、里香が切ったイチゴとケーキの名前を好きだと言ってくれたから。",
                "とても緊張していたが、店にケーキを買いにきた女性に声をかけることができたから。"
            ],
            answerLabel: "イ",
            type: "choice",
            relatedParagraphs: [
                3
            ]
        },
        {
            id: "p9_q2",
            text: `次は、里香が職業体験で行ったことを表すイラストです。本文の内容に合うようにア～エを里香が行った順に並べかえ、その順序を記号で答えなさい。

![イラスト](/images/rika_cake_shop_q2.png)`,
            options: [],
            answerLabel: "ア → ウ → イ → エ",
            type: "sort",
            relatedParagraphs: [
                2,
                3
            ]
        },
        {
            id: "p9_q3",
            text: `次の文が本文の内容に合うように、（　）に入る最も適当な英語１語を本文中から抜き出して答えなさい。

Mr. Hoshi thinks the showcase at his shop is very important because it is like his shop's ( ).`,
            options: [],
            answerLabel: "face",
            type: "fill-in-blank",
            relatedParagraphs: [
                2
            ]
        },
        {
            id: "p9_q4",
            text: `本文の内容に合うように次の質問に英語で答えるとき、（　）に入る最も適当な１語を答えなさい。

<質問> How many kinds of cakes were there at Mr. Hoshi's cake shop?
<答え> There were ( ) kinds of cakes.`,
            options: [],
            answerLabel: "30 / thirty",
            type: "fill-in-blank",
            relatedParagraphs: [
                2
            ]
        },
        {
            id: "p9_q5_1",
            text: `次の文が本文の内容に合っていれば○で、合っていなければ×で答えなさい。

① Before her work experience, Rika's father didn't think she could do well at a cake shop.`,
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
            id: "p9_q5_2",
            text: `次の文が本文の内容に合っていれば○で、合っていなければ×で答えなさい。

② Rika worked at Mr. Hoshi's cake shop for three days.`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                2,
                3
            ]
        },
        {
            id: "p9_q5_3",
            text: `次の文が本文の内容に合っていれば○で、合っていなければ×で答えなさい。

③ Rika wants to see people's smiles at her job in the future.`,
            options: [
                "○",
                "×"
            ],
            answerLabel: "○",
            type: "choice",
            relatedParagraphs: [
                4
            ]
        }
    ],
    sentenceTranslations: {
        "0": [
            "皆さん、こんにちは。",
            "今日は、私の職業体験についてお話しします。"
        ],
        "1": [
            "私はケーキ屋さんで働きました。",
            "私はケーキが好きなので、嬉しかったです。",
            "職業体験の前に、私は父に「私がケーキ屋さんでうまくやれると思う？」と言いました。",
            "彼は「お前ならできると思うよ。",
            "ベストを尽くしなさい」と言いました。",
            "私は職業体験の初日の前、よく眠れませんでした。"
        ],
        "2": [
            "初日、私はショーケースを掃除しました。",
            "店長の保志さんは言いました、「ショーケースはとても重要だよ。",
            "それは私たちのお店の顔のようなものなんだ。",
            "それは人々に、私たちがこれらのおいしいケーキを売っているということを伝えているんだ。",
            "だから私たちはショーケースを丁寧に掃除するんだよ」と。",
            "ショーケースの中のケーキはおいしそうに見えました。",
            "私はショーケースを掃除することには特別な意味があることを学びました。",
            "その後、私はケーキの名前を覚えました。",
            "30種類の異なるケーキがありました。",
            "保志さんは私にそれらの名前と、それぞれの名前の由来を教えてくれました。",
            "由来と一緒に名前を覚えることは、私にとって興味深いことでした。"
        ],
        "3": [
            "3日目は、ケーキ屋さんでの職業体験の最終日でした。",
            "私はその日、果物を切りました。",
            "私はイチゴをハートの形に切りました。",
            "保志さんは「イチゴを使ったケーキは当店でとても人気があるんだ」と言いました。",
            "午後、彼がキッチンでケーキを作っていたとき、一人の女性が店に入ってきて私に話しかけました。",
            "彼女は言いました、「今日は私の母の誕生日なんです。",
            "私は果物を使ったケーキがいくつか欲しいです。",
            "彼女はイチゴが大好きなんです。",
            "どのケーキがおすすめですか？」",
            "私はとても緊張して、彼女にただこう言いました、「このケーキはいかがですか？",
            "名前は『ワン・ハート』です。」",
            "彼女は言いました、「すごくかわいいですね！",
            "これを2つ買います。」",
            "その時、保志さんが来て言いました、「ありがとうございます。",
            "ここにいるこの女の子が、これらのイチゴを切ったんですよ。」",
            "私は彼女に言いました、「本当にありがとうございます！",
            "ケーキを楽しんでいただけると嬉しいです！」",
            "そして私は女性にケーキを手渡しました。",
            "女性は微笑んで店を出ました。",
            "保志さんは言いました、「よくやったね、里香。",
            "彼女は君の言葉を聞いて微笑んでいたよ。」",
            "私はそれを聞いて嬉しく感じました。"
        ],
        "4": [
            "この職業体験は私にとってとても重要でした。",
            "今、私は将来の仕事について考えています。",
            "私は将来、自分の仕事で人々の笑顔を見たいです。",
            "ご清聴ありがとうございました。"
        ]
    },
    explanations: {
        p9_q1: {
            correct: "イ",
            beginner: {
                summary: "直前の保志さんのセリフが理由です。",
                detail: `下線部の直前で保志さんが <ref target="3-20">She smiled when she heard your words.</ref>（彼女は君の言葉を聞いてほほえんでいたよ）と言っています。それを聞いて里香は glad（嬉しい）と感じました。`,
                keywords: [
                    "glad (嬉しい)",
                    "hear (聞く)",
                    "smile (ほほえむ)",
                    "word (言葉)"
                ]
            },
            advanced: {
                summary: "感情の原因を特定する問題です。",
                detail: `to hear that の that が指す内容は、直前の Mr. Hoshi の発言内容です。自分の接客（言葉）がお客さんを笑顔にしたと認められたことが喜びの理由です。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "Mr. Hoshi said, / \"Good job, Rika.",
                        translation: "保志さんは言いました / 「よくやったね、里香。"
                    },
                    {
                        text: "She smiled / when she heard your words.\"",
                        translation: "彼女は微笑みました / 彼女があなたの言葉を聞いたとき。」"
                    },
                    {
                        text: "I felt glad / to hear that.",
                        translation: "私は嬉しく感じました / それを聞いて。"
                    }
                ]
            }
        },
        p9_q2: {
            correct: "ア → ウ → イ → エ",
            beginner: {
                summary: "本文の流れに沿って出来事を並べます。",
                detail: `1. <ref target="2-0">cleaned the showcase</ref>（ア：ショーケースの掃除）
2. <ref target="2-7">learned the names of cakes</ref>（ウ：名前を覚える）
3. <ref target="3-2">cut strawberries</ref>（イ：イチゴを切る）
4. <ref target="3-18">handed the cakes to the woman</ref>（エ：接客・手渡し）`,
                keywords: [
                    "clean (掃除する)",
                    "learn (学ぶ、覚える)",
                    "cut (切る)",
                    "hand (手渡す)"
                ]
            },
            advanced: {
                summary: "時系列の把握問題です。",
                detail: `第2段落に「初日（掃除→名前学習）」、第3段落に「3日目（イチゴ切り→午後の接客）」という記述があります。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "On the first day, / I cleaned the showcase.",
                        translation: "初日に、 / 私はショーケースを掃除しました。"
                    }
                ]
            }
        },
        p9_q3: {
            correct: "face",
            beginner: {
                summary: "「店の顔」という表現を探します。",
                detail: `保志さんのセリフの中に <ref target="2-2">It's like our shop's face.</ref>（それは私たちのお店の顔のようなものだ）とあります。`,
                keywords: [
                    "important (重要な)",
                    "face (顔)",
                    "like (～のような)"
                ]
            },
            advanced: {
                summary: "空所補充・抜き出し問題です。",
                detail: `it is like his shop's ( ) という構造に合う名詞を本文から探します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "The showcase is very important. / It's like our shop's face.",
                        translation: "ショーケースはとても重要です。 / それは私たちのお店の顔のようなものです。"
                    }
                ]
            }
        },
        p9_q4: {
            correct: "30 / thirty",
            beginner: {
                summary: "ケーキの種類の数を探します。",
                detail: `第2段落に <ref target="2-8">There were 30 different kinds of cakes.</ref>（30種類の異なるケーキがありました）と書かれています。`,
                keywords: [
                    "how many (いくつ)",
                    "kind (種類)"
                ]
            },
            advanced: {
                summary: "数値情報の検索問題です。",
                detail: `There were 30 different kinds of cakes. という文からそのまま数字を抜き出します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "There were 30 different kinds / of cakes.",
                        translation: "30の異なる種類がありました / ケーキの。"
                    }
                ]
            }
        },
        p9_q5_1: {
            correct: "×",
            beginner: {
                summary: "お父さんの発言を確認します。",
                detail: `里香の父は <ref target="1-3">I think you can.</ref>（お前ならできると思うよ）と言って励ましています。didn't think（思っていなかった）は誤りです。`,
                keywords: [
                    "think (思う)",
                    "can (できる)",
                    "well (上手に)"
                ]
            },
            advanced: {
                summary: "真偽判定問題です。",
                detail: `本文の肯定文 "I think you can" と、選択肢の否定文 "didn't think she could" が矛盾します。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "He said, / \"I think you can.",
                        translation: "彼は言いました / 「私はあなたならできると思います。"
                    }
                ]
            }
        },
        p9_q5_2: {
            correct: "○",
            beginner: {
                summary: "働いた期間を確認します。",
                detail: `本文には「初日(first day)」と「3日目(third day)が最後の日(last day)」という記述があります。これは3日間働いたことを示しています。`,
                keywords: [
                    "first (最初の)",
                    "third (3番目の)",
                    "last (最後の)"
                ]
            },
            advanced: {
                summary: "期間の推論問題です。",
                detail: `1日目から始まり、3日目が最終日なので、期間は three days です。`,
                keywords: []
            },
            "common": {
                "slashReading": [
                    {
                        "text": "The third day was the last day / of my work experience / at the cake shop.",
                        "translation": "3日目は最後の日でした / 私の職業体験の / ケーキ屋さんでの。"
                    }
                ]
            }
        },
        p9_q5_3: {
            correct: "○",
            beginner: {
                summary: "里香の将来の希望を確認します。",
                detail: `スピーチの最後で <ref target="4-2">I want to see people's smiles at my job in the future.</ref>（私は将来、自分の仕事で人々の笑顔を見たいです）と述べています。選択肢と一致します。`,
                keywords: [
                    "future (将来)",
                    "smile (笑顔)",
                    "job (仕事)"
                ]
            },
            advanced: {
                summary: "最終的な結論部分の一致確認です。",
                detail: `本文の want to see... と選択肢の wants to see... が一致しています。`,
                keywords: []
            },
            common: {
                slashReading: [
                    {
                        text: "I want to see people's smiles / at my job / in the future.",
                        translation: "私は人々の笑顔を見たいです / 私の仕事で / 将来。"
                    }
                ]
            }
        }
    }
};

export const grade2Problems = [
    holidaysProblem,
    morningRoutineProblem,
    rikaCakeShopProblem
];
