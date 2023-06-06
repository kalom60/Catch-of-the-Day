import DishModel from "../models/dishModel";

class DishController {
  static async createDish(req, res) {
    const dish = await DishModel.createDish(req.body);
    res.json(dish);
  }

  static async getAllDishes(req, res) {
    const dishes = await DishModel.getAllDishes();
    res.json(dishes);
  }

  static async updateDish(req, res) {
    const dish = await DishModel.updateDish(req.params.id, req.body);
    res.json(dish);
  }

  static async deleteDish(req, res) {
    const dish = await DishModel.deleteDish(req.params.id);
    res.json(dish);
  }
}

export default DishController;
