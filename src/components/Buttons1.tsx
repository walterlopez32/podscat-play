/* eslint-disable @typescript-eslint/no-unused-vars */
//import { FaBeer } from 'react-icons/fa'; // Importar un ícono específico  
import styles from "./Buttons1.module.css";

interface IconProps {
  className?: string; // Asegúrate de que esta propiedad sea 'className'
}

function Buttons1({ name, Icono }: { name: string; Icono: React.FC<IconProps> }) {
  return (
    <button className={styles.Buttons1}>
      <Icono /> {/* Cambia 'ClassName' por 'className' */}
      {name}
    </button>
  );
}

export default Buttons1;
