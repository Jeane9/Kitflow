"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const padresController_1 = __importDefault(require("../controllers/padresController"));
class PadreRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', padresController_1.default.list);
        this.router.get('/:id', padresController_1.default.list_padre);
        this.router.post('/', padresController_1.default.create);
        this.router.put('/:id', padresController_1.default.update);
        this.router.delete('/:id', padresController_1.default.delete);
    }
}
const padresRoutes = new PadreRoutes();
exports.default = padresRoutes.router;
