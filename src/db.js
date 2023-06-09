import {createPool} from 'mysql2/promise'

import { host,dbPort,database,user ,password} from './config.js'



export const poolConections = createPool({
    host:host,
    user:user,
    password:password,
    port:dbPort,
    database:database
})