import styles from "./Buttons.module.css";  

// Definimos la interfaz para las props
interface ButtonsProps {
  nombre: string; // Asegúrate de que el tipo de `nombre` sea `string`
}

const Buttons: React.FC<ButtonsProps> = ({ nombre }) => {
  return (  
    <button className={styles.Buttons}>  
      {nombre}
    </button>  
  );  
}  

export default Buttons;
