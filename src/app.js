import express from 'express';
import cors from 'cors';
import "dotenv/config";
import path from 'path';
import {fileURLToPath} from 'url';
import  correoController  from './controllador/correo.js';
class Server {

    constructor() {
        this.app = express();
        this.middlewares();
        this.fileURLToPath = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.fileURLToPath);
        this.router();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.text());
    }
    router() {
        this.app.use(express.static(this.__dirname + '/public'));
        this.app.use('/correo', correoController);
    }

    iniciar() {
        this.app.listen(process.env.PORT || 1020, () => {
            console.log('servidor corriendo en puerto', process.env.PORT)
        })
    }
}

const server = new Server();

server.iniciar();