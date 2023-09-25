import express, { Request,Response } from "express";  


class Router{
        router: express.Router;
        constructor() {
        this.router=express.Router();
        this.mountRoutes();
                
        }
        mountRoutes():void {
                this.router.get('/', (request: Request, response: Response) => {
                        response.send('Hello World! Express users');
                });
        }
}



export default new Router().router;