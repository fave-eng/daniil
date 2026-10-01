/* Daniil’s grammar topics. */
window.GRAMMAR_DATA = [
  {
    "id": "grammar-present-simple-continuous",
    "number": 1,
    "order": 1,
    "status": "published",
    "title": "Present simple and present continuous",
    "subtitle": "How to talk about routines, facts, now and temporary situations",
    "label": "Lesson 2",
    "linkedLessonId": "lesson-2",
    "passScore": 100,
    "explanation": "Use the present simple for habits, routines, facts and states. Use the present continuous for actions happening now, temporary situations and future arrangements.",
    "formula": "Present simple: subject + verb / verb-s. Present continuous: subject + am/is/are + verb-ing.",
    "glanceCards": [
      {
        "icon": "🔁",
        "label": "Present simple",
        "hint": "habits, routines, facts, states",
        "pattern": "I play · she plays · I don’t play · Does she play?",
        "example": "My dad runs 5 km every day."
      },
      {
        "icon": "⏳",
        "label": "Present continuous",
        "hint": "now, temporary actions, arrangements",
        "pattern": "I am playing · she is playing · Are they playing?",
        "example": "We’re learning about plant life this term."
      }
    ],
    "miniRules": [
      {
        "title": "Habits and routines",
        "text": "Use the present simple with words like every day, always, never and sometimes.",
        "example": "Julia gets up every day at 7 am."
      },
      {
        "title": "Now and temporary situations",
        "text": "Use the present continuous with now, right now, at the moment, this term and temporary plans.",
        "example": "I’m learning the guitar at the moment."
      },
      {
        "title": "Future arrangements",
        "text": "The present continuous can describe a fixed plan in the near future.",
        "example": "I’m going to a party later today."
      },
      {
        "title": "State verbs",
        "text": "Some verbs usually stay in the present simple because they describe thoughts, feelings or possession.",
        "example": "I don’t understand. My mother owns a company."
      }
    ],
    "tables": [
      {
        "title": "Present simple",
        "headers": [
          "Form",
          "Example"
        ],
        "rows": [
          [
            "Positive",
            "I play tennis. / She plays tennis."
          ],
          [
            "Negative",
            "I don’t play tennis. / He doesn’t play tennis."
          ],
          [
            "Question",
            "Do you play tennis? / Does she play tennis?"
          ],
          [
            "Short answer",
            "Yes, I do. / No, she doesn’t."
          ]
        ]
      },
      {
        "title": "Present continuous",
        "headers": [
          "Form",
          "Example"
        ],
        "rows": [
          [
            "Positive",
            "I am watching TV. / They are watching TV."
          ],
          [
            "Negative",
            "I’m not watching TV. / They aren’t watching TV."
          ],
          [
            "Question",
            "Are you watching TV? / Is he watching TV?"
          ],
          [
            "Short answer",
            "Yes, I am. / No, he isn’t."
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Time expressions",
        "items": [
          "every day → present simple",
          "right now → present continuous",
          "this term → present continuous",
          "always / never / sometimes → usually present simple"
        ]
      }
    ],
    "mistakes": [
      "Don’t use present continuous with many state verbs: I don’t believe it, not I’m not believing it.",
      "Remember -s after he/she/it in the present simple: my dad runs, not my dad run.",
      "Use am/is/are before verb-ing: We are finishing, not We finishing.",
      "For fixed future arrangements, present continuous is possible: I’m going to a party later today."
    ],
    "exercises": [
      {
        "id": "psc-1",
        "difficulty": "Easy",
        "title": "Choose the correct tense.",
        "instructions": "Choose Present simple or Present continuous.",
        "items": [
          {
            "id": "1",
            "input": "select",
            "prompt": "1 Julia gets up every day at 7 am.",
            "options": [
              "Present simple",
              "Present continuous"
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "select",
            "prompt": "2 They are watching a TV show tonight.",
            "options": [
              "Present simple",
              "Present continuous"
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "select",
            "prompt": "3 I don’t understand what you mean.",
            "options": [
              "Present simple",
              "Present continuous"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "select",
            "prompt": "4 We’re learning about plant life this term.",
            "options": [
              "Present simple",
              "Present continuous"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "psc-2",
        "difficulty": "Medium",
        "title": "Complete the verb form.",
        "instructions": "Write the correct present simple or present continuous form.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "1 Every day my dad ________ 5 km before work. (run)",
            "answer": "runs"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "2 Right now, I ________ my homework. (finish)",
            "answer": "am finishing",
            "acceptedAnswers": [
              "am finishing",
              "'m finishing",
              "I am finishing",
              "I’m finishing"
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "3 My mother ________ a computer company. (own)",
            "answer": "owns"
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "4 We ________ to a party later today. (go)",
            "answer": "are going",
            "acceptedAnswers": [
              "are going",
              "'re going",
              "we are going",
              "we’re going"
            ]
          }
        ]
      },
      {
        "id": "psc-3",
        "difficulty": "Higher challenge",
        "title": "Choose the correct sentence.",
        "instructions": "Choose the sentence that is correct in this context.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "1 State verb: believe",
            "options": [
              "I don’t believe that robots are better than humans.",
              "I’m not believing that robots are better than humans."
            ],
            "answer": 0
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "2 Future arrangement: birthday party at a restaurant",
            "options": [
              "I have my birthday party at my favourite restaurant.",
              "I’m having my birthday party at my favourite restaurant."
            ],
            "answer": 1
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "3 Habit: every week",
            "options": [
              "We go out together every week.",
              "We are going out together every week."
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "4 Current action: this email",
            "options": [
              "I send you this email to invite you.",
              "I’m sending you this email to invite you."
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "psc-4",
        "difficulty": "Most challenging",
        "title": "Rewrite the sentence correctly.",
        "instructions": "Write the full correct sentence.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "1 When we are together, we are having fun.",
            "answer": "When we are together, we have fun",
            "acceptedAnswers": [
              "When we are together, we have fun.",
              "When we are together we have fun",
              "When we are together we have fun."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "2 I write to tell you that I have a new computer.",
            "answer": "I am writing to tell you that I have a new computer",
            "acceptedAnswers": [
              "I am writing to tell you that I have a new computer.",
              "I'm writing to tell you that I have a new computer.",
              "I’m writing to tell you that I have a new computer."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "3 I send you this email to invite you to my birthday party.",
            "answer": "I am sending you this email to invite you to my birthday party",
            "acceptedAnswers": [
              "I am sending you this email to invite you to my birthday party.",
              "I'm sending you this email to invite you to my birthday party.",
              "I’m sending you this email to invite you to my birthday party."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "4 Put the words in order: I / play tennis / every week",
            "answer": "I play tennis every week",
            "acceptedAnswers": [
              "I play tennis every week",
              "I play tennis every week."
            ],
            "placeholder": "Write the full sentence."
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-past-simple",
    "number": 2,
    "order": 2,
    "status": "published",
    "title": "Past simple",
    "subtitle": "Completed actions and situations in the past",
    "label": "Lesson 4",
    "linkedLessonId": "lesson-4",
    "passScore": 100,
    "explanation": "Use the past simple for actions and situations that started and finished in the past. We often use it with finished time expressions such as yesterday, last week, on Friday, two years ago and when I was younger.",
    "formula": "Positive: subject + past form. Negative: subject + did not (didn’t) + base verb. Question: Did + subject + base verb? With be, use was/were without did.",
    "glanceCards": [
      {
        "icon": "✓",
        "label": "Positive",
        "hint": "finished past action",
        "pattern": "I watched · she went · they bought",
        "example": "Dad went into town yesterday."
      },
      {
        "icon": "−",
        "label": "Negative",
        "hint": "didn’t + base verb",
        "pattern": "I didn’t watch · she didn’t go",
        "example": "I didn’t enjoy the film."
      },
      {
        "icon": "?",
        "label": "Question",
        "hint": "Did + subject + base verb?",
        "pattern": "Did you watch? · What did she buy?",
        "example": "Did your dad buy a new shirt?"
      },
      {
        "icon": "BE",
        "label": "Past of be",
        "hint": "was / were",
        "pattern": "I was · you were · wasn’t / weren’t",
        "example": "We were at the party on Friday."
      }
    ],
    "miniRules": [
      {
        "title": "Regular verbs",
        "text": "Most regular verbs add -ed. If a verb ends in -e, add -d. If it ends consonant + y, change y to i and add -ed. Short stressed verbs may double the final consonant.",
        "example": "love → loved · study → studied · stop → stopped"
      },
      {
        "title": "Irregular verbs",
        "text": "Irregular verbs have special past forms that you need to learn.",
        "example": "go → went · buy → bought · wear → wore · get → got"
      },
      {
        "title": "Negatives",
        "text": "Use didn’t + the base form. Do not use a past form after didn’t.",
        "example": "She didn’t buy the dress. Not: She didn’t bought the dress."
      },
      {
        "title": "Questions",
        "text": "Use Did + subject + base form. Question words come before did.",
        "example": "Did you go out? · What did you wear?"
      },
      {
        "title": "Was / were",
        "text": "The verb be is different: I/he/she/it was; you/we/they were. Use wasn’t/weren’t for negatives and Was/Were at the beginning of questions.",
        "example": "She was happy. · Were they at school?"
      }
    ],
    "tables": [
      {
        "title": "Past simple forms",
        "headers": [
          "Form",
          "Pattern",
          "Example"
        ],
        "rows": [
          [
            "Positive",
            "subject + past form",
            "She bought new trainers."
          ],
          [
            "Negative",
            "subject + didn’t + base verb",
            "She didn’t buy new trainers."
          ],
          [
            "Question",
            "Did + subject + base verb?",
            "Did she buy new trainers?"
          ],
          [
            "Short answer",
            "Yes, ... did. / No, ... didn’t.",
            "Yes, she did."
          ]
        ]
      },
      {
        "title": "Past simple of be",
        "headers": [
          "Subject",
          "Positive",
          "Negative"
        ],
        "rows": [
          [
            "I / he / she / it",
            "was",
            "wasn’t"
          ],
          [
            "you / we / they",
            "were",
            "weren’t"
          ]
        ]
      }
    ],
    "exampleGroups": [
      {
        "title": "Common finished-time expressions",
        "items": [
          "yesterday",
          "last week / last year",
          "on Friday",
          "two years ago",
          "when I was younger"
        ]
      }
    ],
    "mistakes": [
      "After did/didn’t, use the base verb: Did you go? not Did you went?",
      "Do not add -ed to irregular verbs: went, not goed; bought, not buyed.",
      "Use was/were for be, not did be: She was happy.",
      "A finished past time normally needs the past simple: I had fun last weekend."
    ],
    "exercises": [
      {
        "id": "past-1",
        "difficulty": "Easy",
        "title": "Choose the correct past form.",
        "instructions": "Choose the correct form in each sentence.",
        "items": [
          {
            "id": "1",
            "input": "single",
            "prompt": "1 Yesterday Mia ___ a new jacket.",
            "options": [
              "buy",
              "bought"
            ],
            "answer": 1
          },
          {
            "id": "2",
            "input": "single",
            "prompt": "2 We ___ a film last night.",
            "options": [
              "watched",
              "watch"
            ],
            "answer": 0
          },
          {
            "id": "3",
            "input": "single",
            "prompt": "3 Dad ___ into town yesterday.",
            "options": [
              "went",
              "goed"
            ],
            "answer": 0
          },
          {
            "id": "4",
            "input": "single",
            "prompt": "4 They ___ very happy after the party.",
            "options": [
              "was",
              "were"
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "past-2",
        "difficulty": "Medium",
        "title": "Complete the sentences.",
        "instructions": "Write the correct past simple form.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "1 I ________ my homework after dinner. (finish)",
            "answer": "finished"
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "2 Leo ________ his phone on the bus. (lose)",
            "answer": "lost"
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "3 We ________ the dress. (not like)",
            "answer": "didn't like",
            "acceptedAnswers": [
              "didn't like",
              "didn’t like",
              "did not like"
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "4 My friends ________ home late. (come)",
            "answer": "came"
          }
        ]
      },
      {
        "id": "past-3",
        "difficulty": "Higher challenge",
        "title": "Change the sentence.",
        "instructions": "Write the requested negative or question.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "1 Make negative: She bought new shoes.",
            "answer": "She didn't buy new shoes",
            "acceptedAnswers": [
              "She didn't buy new shoes.",
              "She didn’t buy new shoes",
              "She didn’t buy new shoes.",
              "She did not buy new shoes",
              "She did not buy new shoes."
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "2 Make a question: You went shopping.",
            "answer": "Did you go shopping?",
            "acceptedAnswers": [
              "Did you go shopping"
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "3 Make negative: They were at school.",
            "answer": "They weren't at school",
            "acceptedAnswers": [
              "They weren't at school.",
              "They weren’t at school",
              "They weren’t at school.",
              "They were not at school",
              "They were not at school."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "4 Make a question: He wore a tie.",
            "answer": "Did he wear a tie?",
            "acceptedAnswers": [
              "Did he wear a tie"
            ]
          }
        ]
      },
      {
        "id": "past-4",
        "difficulty": "Most challenging",
        "title": "Build the full sentence.",
        "instructions": "Use the prompts to write a complete past simple sentence or question.",
        "items": [
          {
            "id": "1",
            "input": "text",
            "prompt": "1 what / you / do / yesterday?",
            "answer": "What did you do yesterday?",
            "acceptedAnswers": [
              "What did you do yesterday"
            ]
          },
          {
            "id": "2",
            "input": "text",
            "prompt": "2 my brother / not wear / tie / party",
            "answer": "My brother didn't wear a tie to the party",
            "acceptedAnswers": [
              "My brother didn't wear a tie to the party.",
              "My brother didn’t wear a tie to the party",
              "My brother didn’t wear a tie to the party."
            ]
          },
          {
            "id": "3",
            "input": "text",
            "prompt": "3 we / be / at home / last night",
            "answer": "We were at home last night",
            "acceptedAnswers": [
              "We were at home last night."
            ]
          },
          {
            "id": "4",
            "input": "text",
            "prompt": "4 she / buy / new dress / Friday",
            "answer": "She bought a new dress on Friday",
            "acceptedAnswers": [
              "She bought a new dress on Friday."
            ]
          }
        ]
      }
    ]
  }
];
