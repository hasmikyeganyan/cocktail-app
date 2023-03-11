import { MenuCocktail } from '../../models/menu/cocktail';

export const menuItemsAdapter = (data: any): MenuCocktail[] => {
  return data.drinks.map((item: any) => ({
    id: item.idDrink,
    imageUrl: item.strDrinkThumb,
    name: item.strDrink,
    recipe: item.strInstructions,
  }));
};
