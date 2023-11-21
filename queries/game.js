// import db connection
const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// INSERT INTO games (name, is_favorite) VALUES ('Red', true)
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games (name, opponent, game_time, winning_move, most_used, pieces_taken, won_game) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        game.name,
        game.opponent,
        game.game_time,
        game.winning_move,
        game.most_used,
        game.pieces_taken,
        game.won_game
      ]
    );
    return newGame;
} catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id = $1 RETURNING *",
      id
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE games SET name=$1, opponent=$2, game_time=$3, winning_move=$4, most_used=$5, pieces_taken =$6, won_game =$7 where id=$8 RETURNING *",
      [
        game.name,
        game.opponent,
        game.game_time,
        game.winning_move,
        game.most_used,
        game.pieces_taken,
        game.won_game
      ]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
};