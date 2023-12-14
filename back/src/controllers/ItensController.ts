import { Request, Response } from "express";
import { itensRepository } from "../repositories/itensRepository";

export class ItensController {
    async create(req: Request, res: Response){
        const {img, title, desc, price, color, size, user} = req.body;

        const newItem = itensRepository.create({
            title, desc, price, color, size, idUser: user, image: img
        })

        await itensRepository.save(newItem);

        const { id: _,  } = newItem;
    }

    async getAll(req: Request, res: Response){
        const itens = await itensRepository.findBy({active: true})

        const newItens = itens.map((
            { active, idUser, image: img, ...newItem }) => ({ img, ...newItem})
        )

        return res.json(newItens);
    }
}