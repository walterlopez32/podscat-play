
import styles from "./FormContainer.module.css";

interface PlaylistType {
  image?: string; // Opcional
  title: string; // Requerido
  description: string; // Requerido
}

interface FormContainerProps {
  currentPlaylist: PlaylistType;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function FormContainer({ currentPlaylist, onInputChange, onFormSubmit }: FormContainerProps) {
  const { title, description, image } = currentPlaylist;
  const isFormComplete = title && description && image;

  return (
    <form
      className="form-container"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFormSubmit(e); // Pasamos el evento aquí
      }}
    >
      <input
        type="text"
        name="title"
        value={title}
        onChange={onInputChange}
        placeholder="Título de la playlist"
        className={styles.search}
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Descripción"
        className={styles.search}
      />
      <input
        type="text"
        name="image"
        value={image || ''} // Manejo de valor opcional
        onChange={onInputChange}
        placeholder="URL de la imagen"
        className={styles.search}
      />
      <button className={styles.button} type="submit" disabled={!isFormComplete}>
        Add List
      </button>
    </form>
  );
}

export default FormContainer;
