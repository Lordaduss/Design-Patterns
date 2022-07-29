import IPlatform from "../Platforms/IPlatform";
import Game from "./Game";

export default class AdvancedPlay extends Game{
    constructor(platform : IPlatform){
        super(platform);
    }
    challenge(): void{
        console.log("Desafio ativado");
    }
}