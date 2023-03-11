import { FormInput } from '../FormInput';

export interface IProps {
  onSearch: (value: string) => void;
}

export const MenuHeader = (props: IProps) => {
  const { onSearch } = props;

  return (
    <div className='row align-items-center justify-content-center border-bottom pb-4'>
      <div className='col'></div>
      <div className='col-10 col-lg-3'>
        <FormInput onValueChange={onSearch} placeholder='Search for a Cocktail...' icon='search' />
      </div>
      <div className='col'></div>
    </div>
  );
};
