import prisma from "../prisma/prisma";

class DishModel {
  static async createDish(value) {
    try {
      const dish = await prisma.dishes.create({
        data: value,
      });
      return dish;
    } catch (err) {
      console.log(err);
    }
  }

  static async getAllDishes() {
    try {
      const dishes = await prisma.dishes.findMany();
      return dishes;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateDish(id, value) {
    try {
      const dish = await prisma.dishes.update({
        where: {
          id,
        },
        data: value,
      });
      return dish;
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteDish(id) {
    try {
      const dish = await prisma.dishes.delete({
        where: { id },
      });
      return dish;
    } catch (err) {
      console.log(err);
    }
  }
}

export default DishModel;
