import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient    // accessing mongoclient from mongodb

const port = process.env.PORT || 8000

//connecting to mongoclient from mongodb, and pass database uri (process.env.RESTREVIEWS_DB_URI), passing the options to access the database
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {    
        maxPoolSize: 50,    //50 people accessing at time
        wtimeoutMS: 2500,
        UseNewUrlParser: true    // feel free to remove, no longer used by the driver.
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})