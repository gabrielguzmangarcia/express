import http from 'http';
import yenv from "yenv";
import RouterUsers from './modules/users/presentation/user.route';
//import ControllerUser from './modules/users/presentation/user.controller';

import App from './app';

const env=yenv();

//const controllerUser=new ControllerUser()
//const routerUsers=new RouterUsers();

const server = http.createServer(App);
server
.listen(env.PORT)
.on("listening",() => console.log(`Server is listening on port ${env.PORT}`))
.on("error",(error) => {
console.log("Server error",error);
process.exit(1);
});