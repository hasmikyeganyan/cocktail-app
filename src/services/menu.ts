import { MenuCocktail } from '../models/menu/cocktail';
import { menuItemsAdapter } from '../utils/adapters/menu';

const API_BASE_URL = process.env.REACT_APP_MENU_API_URL;

export const fetchMenuCocktails = async (search?: string): Promise<MenuCocktail[]> => {
  const response = await fetch(`${API_BASE_URL}/search.php?s=${search}`);

  return response.json().then((data) => {
    if (!data || !data.drinks) throw Error('No data');
    return menuItemsAdapter(data);
  });
};

export const fetchMenuRandomCocktail = async (): Promise<MenuCocktail> => {
  const response = await fetch(`${API_BASE_URL}/random.php`);

  return response.json().then((data) => {
    if (!data || !data.drinks) throw Error('No data');
    return menuItemsAdapter(data)[0];
  });
};

export const fetchMenuCocktailById = async (id: string): Promise<MenuCocktail> => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);

  return response.json().then((data) => {
    if (!data || !data.drinks) throw Error('No data');
    return menuItemsAdapter(data)[0];
  });
};
