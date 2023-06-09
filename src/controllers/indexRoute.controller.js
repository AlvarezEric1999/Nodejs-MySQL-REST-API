
import { poolConections } from '../db.js '


export const index = async(req,res)=>{ const [result] = await poolConections.query('SELECT "pong " AS result')
    res.json(result)}

