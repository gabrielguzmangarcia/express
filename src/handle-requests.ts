export const handleRequest=(request:any, response:any) => {
    if(request.url==='/users' && request.method==='GET'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('UsuariosX');
        response.end();
    }else{
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Not Found');
        response.end();
    }
    
}