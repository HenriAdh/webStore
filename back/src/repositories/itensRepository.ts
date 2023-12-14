import { AppDataSource } from "../data-source";
import { itens } from "../entities/Item";

export const itensRepository = AppDataSource.getRepository(itens);