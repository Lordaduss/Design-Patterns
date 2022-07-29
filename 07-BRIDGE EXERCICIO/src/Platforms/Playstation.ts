import IPlatform from "./IPlatform";

export default class Playstation implements IPlatform{
    constructor(){
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("Playstation: iniciando jogo...")
    }
    authToken(): void {
        console.log("Autenticando...")
    }

}