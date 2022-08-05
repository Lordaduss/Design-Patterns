
import * as readline from "readline"
import CheckPermissionMiddleware from "./src/Middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./src/Middlewares/CheckUserMiddleware";
import Server from "./src/Servers/Server";

declare var process;
const server = new Server()

function setPromptQuestions(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Digite seu email: ", email => {
        rl.question("Digite sua senha: ", password =>{
            server.login(email,password)
            rl.close()
        })
    })
    rl.on("close", () => setPromptQuestions())
}

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware())

server.setMiddleware(middleware)

setPromptQuestions()