import ICorreio from "../Correio/ICorreio";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreio{
    constructor(private transportadora: Transportadora){
        console.log("Adaptando transportadora nos correios");
    }

    sendCorreio(): void{
        this.transportadora.send();
    }
    receiveCorreio():void{
        this.transportadora.receive();
    }
}