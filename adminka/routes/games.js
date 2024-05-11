const gameRouter = require("express").Router(); 

const { 
    sendAllGames,
    sendUpdatedGames,
    addGame 
    } = require("../controllers/games")

const { 
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
 } = require("../middleware/games");

gameRouter.get(
    "/games",
    getAllGames,
    sendAllGames
)

gameRouter.delete(
    "/games/:id",
    getAllGames,
    findGameById,
    deleteGame,
    updateGamesFile,
    sendUpdatedGames
);

gameRouter.post(
    "/games",
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    sendUpdatedGames
);
     
module.exports = gameRouter;