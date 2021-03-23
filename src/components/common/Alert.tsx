interface Props {
  message: string;
  display: boolean;
}

const Alert = ({ message, display = false }: Props) => {
  return display ? <div className={"alert-danger"}>{message}</div> : null;
};

export default Alert;
