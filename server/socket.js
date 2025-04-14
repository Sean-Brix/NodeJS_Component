import { Server } from 'socket.io'

export function connect_socket(server){

    const io = new Server(server, {
        cors:{
            origin: 'http://localhost:5173/',
            method: ['POST', 'GET']
        }
    });

    io.on('connection', socket =>{

        
        socket.on('disconnect', ()=>{
            console.log("A User has Disconnect");
        })

        socket.on('error', error => {
            console.log("\n\nSocket Error: " + error);
        })

    })

}

