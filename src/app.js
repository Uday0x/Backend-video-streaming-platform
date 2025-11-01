import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


//middleware is used 

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true})) //extended true object ke anadar bhi object de skte ho
app.use(express.static("public"))
app.use(cookieParser()) //to perfoem cookie opeartions on users cookie
export {app}