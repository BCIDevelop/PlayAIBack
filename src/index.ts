import "dotenv/config"
import Server from './app'
import database from "./database/database"


(async ()=>{
    await database()
    Server.core()
    
})()