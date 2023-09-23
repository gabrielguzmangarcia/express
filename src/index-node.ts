import http from 'http';
import { handleRequest } from './handle-requests';

const server = http.createServer(handleRequest);

server.listen(3000,() => {
    console.log('server listening on port 3000');
});    