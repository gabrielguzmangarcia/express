import http from 'http';
import app from './app';

 /*class App{
    constructor(){
    
    }
    mountRoutes() {
    }
 }*/

const server = http.createServer(app);
server.listen(3000,() => {
    console.log('Server running at http://localhost:3000/');
});