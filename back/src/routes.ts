import { Router } from 'express'
import { UserController } from './controllers/UserController';
import { getProfile } from './middlewares/auth';

const routes = Router()

routes.post('/createUser', 
    new UserController().create
)

routes.post('/login',
    new UserController().login
)

// Rotas protegidas abaixo:
routes.use(getProfile); 

routes.get('/profile',
    new UserController().getProfile
)

export default routes;