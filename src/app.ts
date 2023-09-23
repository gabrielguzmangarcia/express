import express from 'express';  

const app = express();  

class App{
    app:express.Application;

    constructor(){
        this.app = express(); 
        this.mountRoutes();
    }

    mountRoutes():void{
        this.app.get('/users', (request, response) => {
            /*response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Hello World!');
            response.end();*/
        
            //response.status(200).type('text/plain').send('Hello World! Express');
            response.send('Hello World! Express users');
            
        });
        
        this.app.get('/products', (request, response) => {
            const products = [
                { name:'Product 1', price:10},
                { name:'Product 2', price:20}
            ];
            /*response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(products)); 
            response.end();*/
        
            //response.status(200).type('application/json').json(products);
            response.json(products);
        
        });
        this.app.get('/pdf', (request, response) => {
            //response.download(__dirname+"/certificate.pdf");
            response.sendFile(__dirname+"/certificate.pdf");
        });
    }
}



export default new App().app;