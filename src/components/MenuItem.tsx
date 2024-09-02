//import { FunctionComponent, useMemo, type CSSProperties } from "react";
//import styles from "./MenuItem.module.css";



  

const MenuItem = ({ label, onClick }) => {  
  return (  
      
        <button
          className="p-2 hover:bg-gray-200 cursor-pointer"   
          onClick={onClick}  
        >{label}
        </button>
         
    
  );  
};  

export default MenuItem