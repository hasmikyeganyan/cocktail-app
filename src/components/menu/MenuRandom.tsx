import { MenuCocktail } from '../../models/menu/cocktail';
import { PrimaryButton } from '../PrimaryButton';
import { MenuCocktailCard } from './MenuCocktailCard';

interface IProps {
  cocktail: MenuCocktail;
  onClick: () => void;
}

export const MenuRandom = (props: IProps) => {
  const { cocktail, onClick } = props;

  return (
    <div className='menu-random row'>
      <div className='col'></div>
      <div className='col-12 col-lg-2 text-center'>
        <PrimaryButton label='Generate random Cocktail' onClick={onClick} />
        <hr />
        <MenuCocktailCard item={cocktail} />
        <hr />
        <p>{cocktail.recipe}</p>
      </div>
      <div className='col'></div>
    </div>
  );
};
