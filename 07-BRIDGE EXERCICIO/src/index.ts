import IPlatform from "./Platforms/IPlatform";
import Playstation from "./Platforms/Playstation";
import Xbox from "./Platforms/Xbox";
import AdvancedPlay from "./Play/AdvancedPlay";
import Game from "./Play/Game";

function startGame(platfrom : IPlatform){
    console.log("Aguarde...")
    const game = new Game(platfrom);
    game.playing();
    game.result();
}

function startChallengeGame(platfrom : IPlatform){
    console.log("Aguarde...")
    const game = new AdvancedPlay(platfrom);
    game.playing();
    game.result();
    game.challenge();
}

startGame(new Playstation());
startChallengeGame(new Xbox());