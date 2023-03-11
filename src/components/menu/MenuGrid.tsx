import { Link } from 'react-router-dom';
import { MenuCocktail } from '../../models/menu/cocktail';
import { MenuCocktailCard } from './MenuCocktailCard';

interface IProps {
  cocktails: MenuCocktail[];
}

export const MenuGrid = (props: IProps) => {
  const { cocktails } = props;

  return (
    <div className='grid container-fluid'>
      <div className='row'>
        {cocktails.map((cocktail) => (
          <div key={cocktail.id} className='col-12 col-lg-3 mb-4'>
            <Link className='text-dark text-decoration-none' to={cocktail.id.toString()}>
              <MenuCocktailCard item={cocktail} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
