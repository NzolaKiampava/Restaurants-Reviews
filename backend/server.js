import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

//middleware
app.use(cors())
app.use(express.json()) // server can accept json on body in the request 

//initial routes
app.use("/api/v1/restaurants", restaurants) 
app.use("*", (req,res) => res.status(404).json({error: "not found"}))  //wrong path, route that not exist


export default app