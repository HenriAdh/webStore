import { NextFunction, Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import jwt from "jsonwebtoken";

type JwtPayLoad = {
    id: number
}

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) throw new UnauthorizedError('Não autorizado.')

    const token = authorization.split(' ')[1];

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayLoad

    const user = await userRepository.findOneBy({ id });
    if (!user) throw new BadRequestError('Sessão inspirada.');

    const { password: _, ...userLogged} = user;

    req.user = userLogged;
    
    next();
}