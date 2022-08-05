import Middleware from "../Middlewares/Middleware";

export default class Server{
    private middleware: Middleware

    public setMiddleware(middleware: Middleware): void{
        this.middleware = middleware
    }
    public login(email: string, password: string): boolean{
        if(this.middleware.check(email,password)){
            console.log("Usuário autenticado")
            return true
        }
        return false
    }
}