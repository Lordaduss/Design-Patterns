import ICorreio from "./ICorreio";

export default class Correio implements ICorreio{
    private _id : number;

    constructor(id: number){
        this._id=id
    }
    sendCorreio(): void {
        console.log("Enviando pacote por correio ID: " + this._id);
    }
    receiveCorreio(): void {
        console.log("Recebendo pacote por correio ID: " + this._id);
    }

    
}