interface IProps extends React.HTMLProps<HTMLButtonElement> {}

export const PrimaryButton = (props: IProps) => {
  const { className, onClick, label } = props;

  return (
    <button className={`btn btn-success border-radius-100 ${className ?? ''}`} onClick={onClick}>
      {label}
    </button>
  );
};
