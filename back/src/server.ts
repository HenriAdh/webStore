import 'express-async-errors'
import  express  from 'express'
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import routes from './routes'
import cors from 'cors';

AppDataSource.initialize().then(() => {
    const app = express()
    app.use(cors({ origin: 'http://localhost:3000' }))
    app.use(express.json())
    app.use(routes)
    app.use(errorMiddleware)
    console.log('listening on: ', process.env.PORT)

    return app.listen(process.env.PORT)
})