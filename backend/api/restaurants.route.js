import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()    //accessing the route file

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)   //go to RestaurantsCrtl in method apiGetRestaurants
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)     //post review
    .put(ReviewsCtrl.apiUpdateReview)    //edit or update review
    .delete(ReviewsCtrl.apiDeleteReview) //delete review

export default router 