import IPlatform from "../Platforms/IPlatform";
import IPlay from "./IPlay";

export default class Game implements IPlay{
    constructor(private platform: IPlatform){

    }
    playing(): void {
        console.log("Iniciando o jogo...")
    }
    result(): void {
        console.log("Jogo iniciado")
    }

}