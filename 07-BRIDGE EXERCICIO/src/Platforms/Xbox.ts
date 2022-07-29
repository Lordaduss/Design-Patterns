import IPlatform from "./IPlatform";

export default class Xbox implements IPlatform{
    constructor(){
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: iniciando jogo...")
    }
    authToken(): void {
        console.log("Autenticando...")
    }

}