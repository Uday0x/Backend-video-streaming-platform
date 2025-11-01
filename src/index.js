
import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/db.js"
dotenv.config()

const app = express()

const port = process.env.PORT || 4000;
connectDb()
.then(()=>{
    app.listen(port,()=>{`app is listening on ${port}`})
    console.log("app is listening on port",port)
})
.catch((error)=>{
    
    console.error("soory something wrong in connectin to the server",error)
})