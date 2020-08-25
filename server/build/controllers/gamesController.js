"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PadresController {
    //GET
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const padres = yield database_1.default.query('select * from padre');
            // console.log(padres);
            res.json(padres);
        });
    }
    list_game(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // Obtener solo el id que viene del resq.params
            const padre = yield database_1.default.query('select * from padre where id= ?', id);
            if (padre.length > 0) {
                return res.json(padre[0]);
            }
            res.status(404).json({ text: 'El padre no está registrado' });
            // console.log(padre);
            // res.json({text: 'Juego encontrado'});
        });
    }
    //POST
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into padre set ?', [req.body]);
            // console.log(req.body);
            res.json({ message: 'game saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const padre = yield database_1.default.query('update padre set ? where id = ? ', [req.body, id]);
            res.json({ message: 'Dato actualizado' });
            // res.json({text: 'update a game ' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const padre = yield database_1.default.query('delete from padre where id = ?', [id]);
            res.json({ message: 'Padre fue eliminado' });
            // res.json({text:'delete a game ' + req.params.id});
        });
    }
}
const padresController = new PadresController();
exports.default = padresController;
