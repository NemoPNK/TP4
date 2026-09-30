CREATE TABLE tasks (
    id INTEGER UNIQUE,
    titre TEXT,
    complete BOOLEAN DEFAULT FALSE
);