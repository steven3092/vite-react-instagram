import "./button.scss";

export const Button = ({
  type,
  classnames,
  name,
}: {
  type: "submit" | "reset" | "button" | undefined;
  classnames?: string;
  name: string;
}) => {
  return (
    <button type={type} className={classnames}>
      {name}
    </button>
  );
};
