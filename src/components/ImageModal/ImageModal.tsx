import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModal.module.css';
import { ImageModalProps } from '../../types/types';

Modal.setAppElement('#module-root');

function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <button onClick={onClose} className={css.closeButton}>
        ✖
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.modalImage}
      />
      <div>
        <p className={css.imageInfo}>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p className={css.imageInfo}>
          <strong>Likes:</strong> ❤️ {image.likes}
        </p>
      </div>
    </Modal>
  );
}

export default ImageModal;


