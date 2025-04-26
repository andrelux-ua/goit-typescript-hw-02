import css from './ErrorMessage.module.css';
import { ErrorMessageProps } from '../../types/types';

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className={css.errorMessage}>{message}</p>;
}

export default ErrorMessage;
