import {Request, Response, json} from 'express';
import pool_db from '../database';

class PadresController{
    //GET
    public async list (req: Request, res: Response) {
        const padres= await pool_db.query('select * from padre');
        // console.log(padres);
        res.json(padres);
    }
    public async list_padre(req: Request, res: Response): Promise<any> {
        const {id} = req.params; // Obtener solo el id que viene del resq.params
        const padre= await pool_db.query('select * from padre where id= ?', id);
        if( padre.length > 0 ){
            return res.json(padre[0]);
        }
        res.status(404).json({text: 'El padre no está registrado'});
        // console.log(padre);
        // res.json({text: 'Juego encontrado'});
    }
    //POST
    public async create (req: Request, res: Response): Promise<void>{
        await pool_db.query('insert into padre set ?',[req.body]);
        // console.log(req.body);
        res.json({message:'game saved'});
    }
    public async update (req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        const padre = await pool_db.query('update padre set ? where id = ? ', [req.body, id]);
        res.json({message:'Dato actualizado'});
        // res.json({text: 'update a game ' + req.params.id});
    }
    public async delete (req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const padre = await pool_db.query('delete from padre where id = ?', [id]);
         res.json({message: 'Padre fue eliminado'});
        // res.json({text:'delete a game ' + req.params.id});
    }
}

const padresController = new PadresController();
export default padresController;