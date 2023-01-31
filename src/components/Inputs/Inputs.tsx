import "./Inputs.module.css";

type InputsProps = {
  type: string;
  placeHolder: string;
  name: string;
  value?: any;
};

const Inputs = ({ type, placeHolder, name }: InputsProps) => {
  return (
    <div>
      <input type={type} placeholder={placeHolder} name={name} />
    </div>
  );
};

export default Inputs;
