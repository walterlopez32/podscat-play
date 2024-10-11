import styles from "./Buttons.module.css";  
const Buttons = ({ nombre }: { nombre: string }) => {
  return (  
    <button className={styles.Buttons}>  {nombre}
      
       
    </button>  
  );  
}  

export default Buttons;
