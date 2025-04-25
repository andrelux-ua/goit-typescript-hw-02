import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.loadMoreContainer}>
      <button onClick={onClick} className={css.loadMoreButton}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
