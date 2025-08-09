type DefaultInputProps = {
  id: string;
  labelText?: string; //opcional
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <> 
      {/* mesmo que ? : sem o : */}
      {labelText && <label htmlFor={ id }>{ labelText }</label>}
      <input id={ id } type={ type } {...rest} />
    </>
  );
}