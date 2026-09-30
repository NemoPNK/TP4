CREATE TABLE tasks (
    id INTEGER UNIQUE,
    titre TEXT,
    complete BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (id, titre, complete)
VALUES 
    (1, 'monter', TRUE),
    (2, 'down', FALSE),
    (3, 'side', FALSE);