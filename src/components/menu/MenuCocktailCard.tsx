import { MenuCocktail } from '../../models/menu/cocktail';

interface IProps {
  item: MenuCocktail;
}

export const MenuCocktailCard = (props: IProps) => {
  const { item } = props;

  return (
    <div className='card'>
      <img className='card-img-top' src={item.imageUrl} alt='cocktail' />
      <div className='card-body text-center'>
        <h5 className='card-title'>{item.name}</h5>
      </div>
    </div>
  );
};
