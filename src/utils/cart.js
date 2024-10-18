import { pizzas } from "./pizzas"

export const findPizza = (id) => pizzas.find((el) => el.id === id)
