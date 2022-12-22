import express from 'express';
import cors from 'cors';
import "dotenv/config";


class Server {

    constructor() {
        this.app = express();
        this.middlewares();
        this.router();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.text());
    }
    router() {
        this.app.use( express.static(__dirname + '/public'));
        this.app.use('/hola' , (req, res) =>{
            res.status(200).send('holaaa')
        })
    }

    iniciar() {
        this.app.listen(process.env.PORT || 1040, () => {
            console.log('servidor corriendo en puerto', process.env.PORT)
        })
    }
}

const server = new Server();

server.iniciar();