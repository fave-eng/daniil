Daniil English Space — clean starter site

Student:
- student_id: daniil
- name: Даниил / Daniil
- level: A2.2
- coursebook: Prepare Level 4 · Intermediate B1/B2

This archive is intentionally empty:
- no published homework
- no vocabulary topics
- no grammar topics
- no old audio files
- no old Daniil progress/materials

Where to add new materials later:
- Homework lessons: data/lessons/lesson-1.json, lesson-2.json, ...
- Lesson list: data/lessons/index.json, or run node scripts/build-content-index.mjs
- Vocabulary topics: data/vocabulary-data.js
- Grammar topics: data/grammar-data.js
- Audio: audio/lessons/
- Lesson images: assets/lessons/

Important Supabase note:
Run supabase/schema.sql only if Daniil needs cloud progress/Telegram.
The SQL adds policies for student_id = 'daniil' without deleting policies for other students.
