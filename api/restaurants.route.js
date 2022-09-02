import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

router
    .route("/review")                     //route
    .post(ReviewsCtrl.apiPostReview)     //insert
    .put(ReviewsCtrl.apiUpdateReview)     //update
    .delete(ReviewsCtrl.apiDeleteReview)  //delete

export default router