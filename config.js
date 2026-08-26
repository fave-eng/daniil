window.APP_CONFIG = {
  student: {
    id: "daniil",
    nameRu: "Даниил",
    nameEn: "Daniil",
    level: "A2.2",
    textbook: "Prepare",
    textbookEdition: "Level 4 · Intermediate B1/B2"
  },

  supabase: {
    url: "https://zqzgarvmpqqqaobeicpc.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxemdhcnZtcHFxcWFvYmVpY3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2ODQwNTIsImV4cCI6MjA5NzI2MDA1Mn0.gARetYwVZfInx3QKS0RvB2I5cOwegPMY5q3nJPX4ZP8",
    tables: {
      homework: "homework_progress",
      vocabulary: "vocabulary_progress",
      vocabularyTopics: "vocabulary_topic_progress",
      grammar: "grammar_progress"
    },
    functions: {
      notifyTelegram: "notify-homework-telegram"
    }
  },

  interface: {
    language: "en",
    russianTextPercent: 30
  },

  features: {
    homework: true,
    vocabulary: true,
    grammar: true,
    cloudSync: true,
    wordPronunciation: true,
    telegramNotifications: true
  },

  site: {
    baseUrl: "",
    appVersion: "daniil-lesson-1.0.0"
  }
};
