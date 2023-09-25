import express from 'express';  
import routerUsers from './modules/users/presentation/user.route';

const app = express();  

class App{
    app: express.Application;
    //routerUsers: routerUsers;

    constructor(){
        this.app = express(); 
        //this.routerUsers =routerUsers;
        this.mountRoutes();
    }

    mountRoutes():void{
        this.app.use('/users', routerUsers)
        
       /* this.app.get('/products', (request, response) => {
            const products = [
                { name:'Product 1', price:10},
                { name:'Product 2', price:20}
            ];
          
        
            
            response.json(products);
        
        });
        this.app.get('/pdf', (request, response) => {
          
            response.sendFile(__dirname+"/certificate.pdf");
        });*/
    }
}



export default  app;