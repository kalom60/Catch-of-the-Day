import prisma from "../prisma/prisma";
require("express-async-errors");

class DishModel {
  static async createDish(value) {
    const dish = await prisma.dishes.create({
      data: value,
    });
    return dish;
  }

  static async getAllDishes() {
    const dishes = await prisma.dishes.findMany();
    return dishes;
  }

  static async updateDish(id, value) {
    const checkDish = await prisma.dishes.findUnique({
      where: { id },
    });
    if (!dish) {
      const error = new Error("Dish not found");
      error.statusCode = 404;
      throw error;
    }

    const dish = await prisma.dishes.update({
      where: {
        id,
      },
      data: value,
    });

    return dish;
  }

  static async deleteDish(id) {
    const dish = await prisma.dishes.findUnique({
      where: { id },
    });
    if (!dish) {
      const error = new Error("Dish not found");
      error.statusCode = 404;
      throw error;
    }

    await prisma.dishes.delete({ where: { id } });

    return true;
  }
}

export default DishModel;
