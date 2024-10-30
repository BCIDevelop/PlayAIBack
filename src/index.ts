import "dotenv/config"
import Server from '../src/app'
import database from "./database/database"


(async ()=>{
    await database()
    Server.core()
    
})()