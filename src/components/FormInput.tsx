interface IProps extends React.HTMLProps<HTMLInputElement> {
  icon?: string;
  onValueChange: (value: string) => void;
}

export const FormInput = (props: IProps) => {
  const { type, name, value, placeholder, className, icon, onValueChange } = props;

  return (
    <div className='input-group'>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.value)}
        className={`form-control ${className ?? ''}`}
      />
      <div className='input-group-append'>
        <span className='input-group-text rounded-0 rounded-right rounded-left'>
          &nbsp;
          <i className={`fa fa-${icon}`}></i>
          &nbsp;
        </span>
      </div>
    </div>
  );
};
