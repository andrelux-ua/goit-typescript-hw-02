import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types/types';

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.loadMoreContainer}>
      <button onClick={onClick} className={css.loadMoreButton}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
