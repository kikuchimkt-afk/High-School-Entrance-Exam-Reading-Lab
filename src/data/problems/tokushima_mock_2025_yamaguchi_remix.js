const tokushima_mock_2025_yamaguchi_remix = {
    id: "tokushima_mock_2025_yamaguchi_remix",
    title: "徳島県模試 英語 大問６（海外研修体験）",
    category: "中学3年",
    target: "受験生",
    number: "オリジナル入試問題3",
    source: "山口県 2025年 (改)",
    genre: "エッセイ",
    badges: ["中3 分詞", "中3 関係代名詞", "異文化理解", "環境問題", "オリジナル入試問題"],
    summary: {
        japanese: "2週間のオーストラリア研修に参加したMahoが、ドイツ・タイの友人と出会い、共にビーチ清掃活動を行う。そこで環境問題への意識の違いに驚き、自身も行動の重要性を学ぶ。また、浴衣や盆踊りの披露を通じて自国文化の価値を再認識。最後は夕日を共に眺め、言葉や国が違っても心が通い合うことを実感し、将来への前向きな意欲を持って帰国する。",
        notes: [
            "Q1: 文脈からの心情推察。日本文化が他者に認められた後のポジティブな結末を選ぶ。",
            "Q2: 要約メモの完成。本文から環境保護(protect)や環境保全に関する動詞(protect)や、将来の目標(talk/share)を抜き出す。",
            "Q3: 内容一致問題。時系列や具体的な数値、国名を正しく照合する。",
            "Q4: 条件英作文。本文のテーマである『文化紹介』を自分のことに置き換えて述べる。"
        ]
    },
    content: `I joined a study abroad program in Australia. I stayed there for only two weeks, but this experience has changed my life.

I met two girls named Luisa and Ploy on the first day. Luisa was from Germany and Ploy was from Thailand. They were 15 years old, just like me. We had different languages, but we always communicated in English with gestures. We quickly became friends and spent a lot of time together.

On the first Sunday morning of the program, we joined a beach cleaning activity with local people and other members. There were a lot of plastic bags and other trash on the beach, so we picked them up. While we were cleaning, Luisa said, "Taking action is important. I want to join more cleaning activities like this when I go back to my country." Ploy agreed with her and said, "That's right. I am going to share this experience at my school and we can think about it together." I was a little surprised to know that they had their own ideas and expressed them in their own words. After we talked, I thought I should do more to protect the environment just like them.

In a class to learn about different cultures, we showed each other the traditional dances and clothes of our own countries. I wore a *yukata* and performed *bon dance*. Luisa and Ploy said to me, "That's very cool! We want to know more about Japanese culture!" When I heard this, I was surprised again and glad at the same time. Wearing a *yukata* and performing *bon dance* were not so special to me, but they were special to them. [ A ]

The last day of this program is the day I will never forget. Luisa, Ploy, and I went to the beach again. While we were playing volleyball on the beach, the sun started to go down, and the sunset over the sea was so beautiful. We could not say anything. But I thought that the three of us were touched by the scene. We came from different countries with different languages, but I thought we shared the same feelings.

Through this program, I learned that there are various people and various ideas in the world. However, there are also things that are the same, like the feelings we had when we watched the sunset on the beach. Now, I want to learn more about other countries. I also want to learn more about Japan. And someday, I want to talk more about our ideas with Luisa and Ploy in English.`,
    questions: [
        {
            id: "q1",
            type: "choice",
            text: "本文中の [  A  ] に入れるのに最も適当なものを、次のア～エから1つ選びなさい。",
            options: [
                "I was proud of Japan.",
                "I wanted to go back to Japan soon.",
                "I learned how to speak their languages.",
                "I decided to live in Australia."
            ],
            answerLabel: "ア",
            relatedParagraphs: [3]
        },
        {
            id: "q2",
            type: "fill-in-blank",
            text: "次は、Mahoが帰国後に自分の体験についてまとめたメモである。本文の内容と合うように、(1), (2) に入る最も適当な英単語をそれぞれ1語ずつ書きなさい。",
            diagram_text: "【Maho's Study Abroad Experience】\n\n[Meeting Friends]\n- Met Luisa (Germany) and Ploy (Thailand).\n- Communicated in English with gestures.\n\n[Beach Cleaning]\n- Luisa and Ploy had their own ideas about the environment.\n- Maho realized she should take action to ( 1 ) the environment.\n\n[Cultural Exchange]\n- Performed Bon dance in a Yukata.\n- Realized Japanese culture was special to others.\n\n[Sunset on the Beach]\n- Shared the same feelings while watching the beautiful sunset.\n\n[Future Goals]\n- Want to learn more about the world and Japan.\n- Want to ( 2 ) ideas with friends in English someday.",
            options: [],
            answerLabel: "(1) protect, (2) talk (または share/discuss)",
            relatedParagraphs: [2, 5]
        },
        {
            id: "q3",
            type: "choice",
            text: "本文の内容と合うものを、次のア～カから2つ選びなさい。",
            options: [
                "Maho stayed in Australia for two months to learn English.",
                "Luisa and Ploy were older than Maho, but they became friends soon.",
                "Maho was surprised because Luisa and Ploy expressed their own opinions clearly.",
                "Maho performed a traditional German dance in the culture class.",
                "Maho, Luisa, and Ploy watched the sunset on the first day of the program.",
                "Maho wants to learn more about her own country, Japan, after this experience."
            ],
            answerLabel: "ウ, カ",
            relatedParagraphs: [1, 2, 3, 5]
        },
        {
            id: "q4",
            type: "free-text",
            text: "Mahoは日本文化を紹介しましたが、あなたなら外国の人に日本のどのような culture を紹介したいですか。その理由も含めて、15語以上30語以内の英語で書きなさい。",
            options: [],
            answerLabel: "(解答例) I want to introduce Japanese food, especially sushi. It is very healthy and looks beautiful. Many people around the world love it.",
            relatedParagraphs: []
        }
    ],
    sentenceTranslations: {
        "0": ["私はオーストラリアでの海外留学プログラムに参加しました。", "私はそこにたった2週間滞在しただけでしたが、この経験は私の人生を変えました。"],
        "1": ["私は初日にルイーザとプロイという2人の少女に出会いました。", "ルイーザはドイツ出身、プロイはタイ出身でした。", "彼女たちは私と同じ15歳でした。", "私たちは異なる言語を持っていましたが、いつもジェスチャーを交えた英語でコミュニケーションを取りました。", "私たちはすぐに友達になり、多くの時間を一緒に過ごしました。"],
        "2": ["プログラムの最初の日曜日の朝、私たちは地元の人々や他のメンバーと一緒にビーチ清掃活動に参加しました。", "ビーチにはたくさんのビニール袋やその他のゴミがあったので、私たちはそれらを拾いました。", "掃除をしている間、ルイーザは「行動を起こすことは重要だわ。国に帰ったら、もっとこういう清掃活動に参加したい」と言いました。", "プロイは彼女に同意して、「その通りね。私はこの経験を学校で共有して、みんなで一緒に考えたいわ」と言いました。", "私は、彼女たちが自分の考えを持ち、それを自分の言葉で表現していることを知って少し驚きました。", "話をした後、私は彼女たちと同じように、環境を守るためにもっと何かしなければならないと思いました。"],
        "3": ["異文化について学ぶ授業で、私たちはお互いの国の伝統的な踊りや服を見せ合いました。", "私は浴衣を着て盆踊りを披露しました。", "ルイーザとプロイは私に「すごくかっこいい！日本文化についてもっと知りたい！」と言してくれました。", "これを聞いたとき、私は再び驚き、同時に嬉しくなりました。", "浴衣を着て盆踊りをすることは私にとってそれほど特別なことではありませんでしたが、彼女たちにとっては特別だったのです。", "[ A: 私は日本を誇りに思いました。 ]"],
        "4": ["このプログラムの最終日は、私が決して忘れることのない日です。", "ルイーザ、プロイ、そして私は再びビーチに行きました。", "私たちがビーチでバレーボールをしていると、太陽が沈み始め、海にかかる夕日はとても美しいものでした。", "私たちは何も言えませんでした。", "しかし、私は私たち3人がその光景に感動していると思いました。", "私たちは異なる言語を持つ異なる国の出身でしたが、同じ感情を共有していたと思いました。"],
        "5": ["このプログラムを通して、私は世界には様々な人々や様々な考えがあることを学びました。", "しかし、ビーチで夕日を見たときに私たちが抱いた感情のように、同じものもあります。", "今、私は他の国々についてもっと学びたいと思っています。", "また、日本についてももっと学びたいです。", "そしていつか、ルイーザやプロイと英語で、自分たちの考えについてもっと話したいと思っています。"]
    },
    explanations: {
        "q1": {
            "correct": "ア (I was proud of Japan.)",
            "beginner": {
                "summary": "文脈理解：直前の文で「自分にとっては普通だが、彼女たちにとっては特別だった」と感じている。",
                "detail": "空所の直前で、Mahoは自国の文化（浴衣・盆踊り）を友人が称賛してくれたことに喜びを感じています。そして直前の文 but they were special to them. から、自国の文化の価値を再認識した文脈につながるため、「日本を誇りに思った」という内容が最適です。原文の I was proud of Japan. を抜き出す（または文脈から推測する）問題です。",
                "keywords": [
                    "proud of ~ (～を誇りに思う)",
                    "special (特別な)",
                    "show each other (お互いに見せ合う)",
                    "perform (披露する/演じる)",
                    "Japanese culture (日本文化)",
                    "at the same time (同時に)",
                    "not so ~ (それほど～ない)"
                ]
            },
            "advanced": {
                "summary": "文脈の論理的帰結",
                "detail": "文脈は Surprise → Realization of value → Pride と流れています。自国の文化が他国の人にとって価値あるものだと気づいた瞬間の心情として、最もポジティブで適切な表現（proud of）を選択します。選択肢イ「すぐに帰りたかった」、ウ「言語を学んだ」、エ「住むことにした」は、この段落のメインテーマから大きく外れます。",
                "keywords": [
                    "proud (誇り高い)",
                    "realize (実感する/気づく)",
                    "value (価値)",
                    "cultural exchange (文化交流)",
                    "again (再び)",
                    "glad (嬉しい/喜ばしい)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "Wearing a *yukata* / and performing *bon dance* / were not so special to me, / but they were special to them.",
                        "translation": "浴衣を着て / 盆踊りをすることは / 私にとってはそれほど特別ではありませんでしたが / 彼女たちにとっては特別だったのです。"
                    }
                ]
            }
        },
        "q2": {
            "correct": "(1) protect, (2) talk / share / exchange",
            "beginner": {
                "summary": "本文からの抜き出しと、文脈に合わせた語形変化（今回はそのまま）。",
                "detail": "(1) 本文第3段落の最後 I should do more to protect the environment から、protect が入ります。\n(2) 本文最終段落の最後 I want to talk more about our ideas から、talk が適当です。文脈的には share や exchange も正解となり得ます。",
                "keywords": [
                    "environment (環境)",
                    "share (共有する)",
                    "protect (守る/保護する)",
                    "take action (行動を起こす)",
                    "important (重要な)",
                    "go back to ~ (～に帰る)",
                    "think about ~ (～について考える)",
                    "know (知る/わかる)",
                    "be surprised to ~ (～して驚く)"
                ]
            },
            "advanced": {
                "summary": "要約メモの構造理解",
                "detail": "徳島県の大問7(5)などで頻出する「要約メモ」形式です。本文の時系列やトピックごとの要点をつかむ必要があります。[Beach Cleaning]の項目の結論部分と、[Future Goals]の結論部分を本文と照合します。特に (1) は動詞 + the environment という形から protect を特定し、(2) は将来の展望における「対話」や「意見交換」を指す動詞を導きます。",
                "keywords": [
                    "summary (要約)",
                    "structure (構造)",
                    "conclusion (結論)",
                    "future goals (将来の目標)",
                    "discuss (話し合う)",
                    "exchange (交換する)",
                    "opinion (意見)",
                    "express (表現する)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "I was a little surprised / to know / that they had their own ideas / and expressed them in their own words.",
                        "translation": "私は少し驚きました / 知って / 彼女たちが自分自身の考えを持ち / そしてそれらを自分の言葉で表現していることを。"
                    }
                ]
            }
        },
        "q3": {
            "correct": "ウ, カ",
            "beginner": {
                "summary": "消去法で事実確認を行う。",
                "detail": "ア：滞在は two weeks なので two months は誤り。\nイ：年齢は 15 years old, just like me なので年上ではない。\nウ：第3段落 I was a little surprised to know that they had their own ideas... と一致。正解。\nエ：Mahoが踊ったのは bon dance (日本) なのでドイツのダンスではない。\nオ：夕日を見たのは The last day なので初日ではない。\nカ：第5段落 I also want to learn more about Japan. と一致。正解。",
                "keywords": [
                    "surprised (驚いた)",
                    "express (表現する)",
                    "stay (滞在する)",
                    "age (年齢)",
                    "performed (演奏した/踊った)",
                    "sunset (夕日)",
                    "learn more about ~ (～についてもっと学ぶ)",
                    "clearly (はっきりと)",
                    "same feelings (同じ感情)"
                ]
            },
            "advanced": {
                "summary": "パラフレーズ（言い換え）の確認",
                "detail": "ウの選択肢は本文の they had their own ideas and expressed them in their own words を expressed their own opinions clearly と要約しています。カの選択肢は本文の I also want to learn more about Japan をそのまま反映しています。内容一致問題では、単語の表面的な一致だけでなく、意味的な一致（パラフレーズ）を正確に見抜く力が試されます。",
                "keywords": [
                    "paraphrase (言い換え)",
                    "opinion (意見)",
                    "clearly (明確に)",
                    "experience (経験)",
                    "consistent (一致する)",
                    "various (様々な)",
                    "someday (いつか)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "Through this program, / I learned / that there are various people / and various ideas / in the world.",
                        "translation": "このプログラムを通して / 私は学びました / 様々な人々や / 様々な考えが / 世界にはあるということを。"
                    }
                ]
            }
        },
        "q4": {
            "correct": "解答例参照",
            "sampleAnswers": [
                {
                    "text": "I want to introduce **Japanese anime**. Because many people in the world like it, and it has many interesting stories. (19 words)",
                    "basis": "本文の日本文化紹介（浴衣・盆踊り）の流れを汲み、現代の日本文化として最も代表的な「アニメ」を選択。",
                    "explanation": "文法的に平易な文を2つ繋げ、15語以上の条件を確実にクリアしています。"
                },
                {
                    "text": "I want to introduce **Japanese food**, like sushi. It is very beautiful and good for our health, so I like it very much. (22 words)",
                    "basis": "外国人への紹介として最もポピュラーで、かつ語彙が定着している「食」をテーマに選択。",
                    "explanation": "**food, like sushi** と具体例を挙げることで語数を稼ぎつつ、内容を豊かにしています。後半に **so** を使った因果関係を加え、論理性を高めています。"
                }
            ],
            "beginner": {
                "summary": "**自分の意見＋理由**の2文構成で書こう。",
                "detail": "「紹介したい文化」と「その理由」を分けて書くのが最も確実です。\n\n**1. 意見:** I want to introduce [紹介したいもの].\n**2. 理由:** Because [理由]. または [理由], so I like it.\n\n**語数稼ぎのコツ:** \n単に sushi と書くだけでなく、 **like sushi** (寿司のような) や、 **It is very beautiful** (とても美しい) のように形容詞を足すと、15語の壁を簡単にクリアできます。",
                "keywords": [
                    "introduce (紹介する)",
                    "culture (文化)",
                    "health (健康)",
                    "beautiful (美しい)",
                    "especially (特に)",
                    "modern (現代の)",
                    "representative (代表的な)",
                    "popular (人気のある)",
                    "stories (物語)"
                ]
            },
            "advanced": {
                "summary": "**徳島県特有の「条件英作文」対策**",
                "detail": "徳島県の入試（大問6の最後）では、15語〜30語程度の自由英作文が頻出です。以下のポイントを意識しましょう。\n\n**1. 条件を守る:** 今回は「15語以上・30語以内」です。短すぎても長すぎても減点対象になります。\n**2. 文法ミスを避ける:** 難しい表現を使おうとしてミスをするより、 **I like it very much.** のような確実な文で点を取りにいきましょう。\n**3. 接続詞の活用:** **Because** や **so**, **and** を使って文をつなぐことで、論理的な文章になります。\n**4. 具体性の付与:** **especially** や **like** を使って具体例を挙げることで、説得力が増し、語数も調整しやすくなります。",
                "keywords": [
                    "composition (英作文)",
                    "logical (論理的な)",
                    "conjunction (接続詞)",
                    "persuasive (説得力のある)",
                    "adjustment (調整)",
                    "sincerely (心を込めて)",
                    "valuable (貴重な)"
                ]
            },
            "common": {
                "slashReading": [
                    {
                        "text": "I want to talk / more about our ideas / with Luisa and Ploy / in English.",
                        "translation": "私は話したいです / 私たちの考えについてもっと / ルイーザやプロイと / 英語で。"
                    }
                ]
            }
        }
    },
    authorIntent: "【徳島県入試再現のポイント】\n1. **「要約メモ」の採用 (Q2):** 徳島県の大問6では、長文の内容を整理した表やメモの空所を補充する問題が頻出です。今回は本文の流れ（出会い→活動→気付き→未来）を整理するようにしました。\n2. **心情変化と気付きの重視 (Q1, Q3):** 徳島の長文は「体験を通じた心情の変化（驚き→共感→誇り）」を問うことが多いです。特に「日本文化の再発見」というテーマは非常に好まれます。\n3. **条件英作文 (Q4):** 単に感想を書くのではなく、「あなたならどうするか（提案・紹介）」を問う形にしています。\n\n【補完箇所】\n提供された画像テキストはほぼ完全なものでしたが、Q1（脱文補充）を作成するために、第4段落の `I was proud of Japan.` の部分を空所 [ A ] に置き換えて設問化しました。\n\n【学習アドバイス】\nこの問題では、**「事実関係（いつ、誰が、何をした）」**と**「心情（どう感じた、何を学んだ）」**を区別して読む練習をしてください。特に、最後の段落にある「まとめ（教訓）」部分は、英作文や要約問題の解答の根拠になりやすい重要箇所です。"
};

export default tokushima_mock_2025_yamaguchi_remix;
