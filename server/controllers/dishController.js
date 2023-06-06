import DishModel from "../models/dishModel";

class DishController {
  static async createDish(req, res) {
    const dish = await DishModel.createDish(req.body);
    res.statusCode(201).json(dish);
  }

  static async getAllDishes(req, res) {
    const dishes = await DishModel.getAllDishes();
    res.statusCode(200).json(dishes);
  }

  static async updateDish(req, res) {
    const dish = await DishModel.updateDish(req.params.id, req.body);
    res.statusCode(200).json(dish);
  }

  static async deleteDish(req, res) {
    const dish = await DishModel.deleteDish(req.params.id);
    res.statusCode(204);
  }
}

export default DishController;
