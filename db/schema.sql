DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    opponent VARCHAR(40),
    game_time DECIMAL(6,2) CHECK (game_time > 0),
    winning_move TEXT,
    most_used TEXT,
    pieces_taken INTEGER,
    won_game BOOLEAN DEFAULT false
);