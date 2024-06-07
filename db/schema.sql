DROP DATABASE IF EXISTS trivia_db;

CREATE DATABASE trivia_db;

\c trivia_db; 

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);

-- Questions Table
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    incorrect_answers JSONB NOT NULL,
    category VARCHAR(50),
    difficulty VARCHAR(50)
);

-- Answers Table
CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    question_id INT REFERENCES questions(id),
    submitted_answer VARCHAR(255),
    is_correct BOOLEAN
);
