import { useEffect, useState } from 'react';
import { MenuGrid } from '../components/menu/MenuGrid';
import { MenuHeader } from '../components/menu/MenuHeaders';
import { MenuRandom } from '../components/menu/MenuRandom';
import { MenuCocktail } from '../models/menu/cocktail';
import { fetchMenuCocktails, fetchMenuRandomCocktail } from '../services/menu';

export const MenuPage = () => {
  const [random, setRandom] = useState<MenuCocktail>();
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<MenuCocktail[]>([]);

  useEffect(() => {
    fetchMenuCocktails(search).then((data) => setData(data.slice(0, 12)));
  }, [search]);

  useEffect(() => {
    onRandom();
  }, []);

  const onSearch = (value: string) => setSearch(value);

  const onRandom = () => fetchMenuRandomCocktail().then((data) => setRandom(data));

  return (
    <section className='menu-page p-4'>
      <MenuHeader onSearch={onSearch} />
      <div className='py-4'>
        <MenuGrid cocktails={data} />
      </div>
      {random && <MenuRandom cocktail={random} onClick={onRandom} />}
    </section>
  );
};
