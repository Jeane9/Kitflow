import { Router} from 'express';
import padresController from '../controllers/padresController';

class PadreRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', padresController.list);
        this.router.get('/:id', padresController.list_padre);
        
        this.router.post('/', padresController.create);
        this.router.put('/:id', padresController.update);
        this.router.delete('/:id', padresController.delete);
    }

}
const padresRoutes = new PadreRoutes();
export default padresRoutes.router;