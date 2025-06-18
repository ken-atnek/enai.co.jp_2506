import styles from '@/styles/components/Modal.module.scss';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <article className={styles.blockModal}>
      <div onClick={onClose}>
        <div>
          <p>{message}</p>
          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
