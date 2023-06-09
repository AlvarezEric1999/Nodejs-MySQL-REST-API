import express from 'express'
import { poolConections } from './db.js'
import employesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'

const app = express() 



app.use(express.json())
app.use(indexRoutes);
app.use('/api',employesRoutes);

app.use((req,res,next )=>{

    return res.status(404).json({
        "message":"error has ocurred"
    })

})


export default app