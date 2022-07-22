
import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{

    private _id : number;

    constructor(id : number){
        this._id=id
    }

    send(): void {
        console.log("Enviando pacote por transportadora de ID: " + this._id);
    }
    receive(): void {
        console.log("Recebendo pacote por transportadora de ID: " + this._id);
    }

}