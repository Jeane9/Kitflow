import express, {Application} from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import padresRoutes from './routes/padresRoutes';

class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); // para ver las peticiones 
        this.app.use(cors());
        this.app.use(express.json()); // para q pueda usar Angular
        this.app.use(express.urlencoded({extended: false}));

    }
    routes(): void{
        // this.app.use('/',indexRoutes); es lo mismo
        this.app.use(indexRoutes);
        this.app.use('/api/padres',padresRoutes);             ///       http://localhost:3000/api/padres
    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();