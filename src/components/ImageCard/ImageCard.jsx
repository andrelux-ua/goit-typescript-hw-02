import css from './ImageCard.module.css';

function ImageCard({ item }) {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}

export default ImageCard;
