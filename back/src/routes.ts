import { Router } from 'express'
import { UserController } from './controllers/UserController';
import { getProfile } from './middlewares/auth';
import { ItensController } from './controllers/ItensController';

const routes = Router()

routes.post('/createUser', 
    new UserController().create
)

routes.post('/login',
    new UserController().login
)

routes.get('/getItens',
    new ItensController().getAll
)

// Rotas protegidas abaixo:
routes.use(getProfile); 

routes.get('/profile',
    new UserController().getProfile
)

routes.post('/createItem',
    new ItensController().create
)

export default routes;