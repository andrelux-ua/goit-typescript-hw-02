export interface Urls {
  small: string;
  regular: string;
}

export interface User {
  name: string;
}

export interface Image {
  id: string;
  alt_description: string;
  urls: Urls;
  user: User;
  likes: number;
}

export type FetchArticlesResponse = Image[];

export interface SearchBarProps {
  onSubmit: (searchTopic: string) => void;
}

export interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageCardProps {
  item: Image;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

export interface ErrorMessageProps {
  message: string;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}
