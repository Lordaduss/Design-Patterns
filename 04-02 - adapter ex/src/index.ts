import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import Correio from "./Correio/Correio";
import ICorreio from "./Correio/ICorreio";
import ITransportadora from "./Transportadora/ITransportadora";
import Transportadora from "./Transportadora/Transportadora";

const transporte1: ICorreio = new TransportadoraAdapter(new Transportadora(1));
transporte1.sendCorreio();
transporte1.receiveCorreio();
const transporte2: ICorreio = new Correio(2);
transporte2.sendCorreio();
transporte2.receiveCorreio();