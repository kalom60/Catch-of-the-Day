import express from "express";
import DishController from "../controllers/dishController";

const router = express.Router();

router
  .route("/")
  .get(DishController.getAllDishes)
  .post(DishController.createDish);
router
  .route("/:id")
  .patch(DishController.updateDish)
  .delete(DishController.deleteDish);

export default router;
