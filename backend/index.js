import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient  //accessing MongoClient

const port = process.env.PORT || 8000

//connect to the database
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,    //50 people accessing at time
        wtimeoutMS: 2500,
        UseNewUrlParser: true    // feel free to remove, no longer used by the driver.
    }
) // catch the error
.catch(err => {
    console.error(err.stack)
    process.exit(1)
}) // start the server
.then(async client => {
    await RestaurantsDAO.injectDB(client)  // access injectDB function to connect to the database
    await ReviewsDAO.injectDB(client)  // connect to review
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
