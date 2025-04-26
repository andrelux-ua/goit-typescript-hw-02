import { ScaleLoader } from 'react-spinners';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loaderContainer}>
      <ScaleLoader
        color="#36d7b7"
        height={60}
        width={6}
        speedMultiplier={0.5}
      />
      <div className={css.loaderText}>Loading...</div>
    </div>
  );
}

export default Loader;
