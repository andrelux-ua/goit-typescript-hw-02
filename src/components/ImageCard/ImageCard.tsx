import css from './ImageCard.module.css';
import { ImageCardProps } from '../../types/types';

function ImageCard({ item }: ImageCardProps) {
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

