import { Button } from "react-bootstrap";
import styles from "./primaryButton.module.scss";

export type Props = {
  label: string;
  type: "submit" | "button" | "reset";
  disable?: boolean | false;
  func?: () => void;
  classname?: string;
  moduleStyles?: string;
  variant?: string;
};

const PrimaryButton = ({
  label,
  type,
  disable,
  func,
  moduleStyles = "",
  classname,
  variant,
}: Props) => {
  return (
    <Button
      variant={variant}
      className={`${styles[moduleStyles]} ${classname}`}
      onClick={func}
      type={type}
      disabled={disable}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
// if (variant === 'primary') {
//     return <Button variant={variant} className={styles.save_button} onClick={func} type={type} disabled={disable}>{label}</Button>;
// } else {
//     return <Button variant={variant} className={styles.cancel_button} onClick={func} type={type} disabled={disable}>{label}</Button>;
// }
