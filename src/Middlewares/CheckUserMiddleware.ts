import Middleware from "./Middleware";
import Database from "../Servers/Database"
export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1){
            console.error("email inválido")
            return false
        }
        if(!Database.filter(item => item.email === email && item.password === password)){
            console.error("Usuário não encontrado")
            return false
        }
        return this.checkNext(email,password)

    }

}