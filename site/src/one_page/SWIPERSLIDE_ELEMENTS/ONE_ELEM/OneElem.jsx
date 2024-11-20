import classes from './oneelem.module.css'
import bottle from './one_elem_IMG/bottle.png'
import carrot from './one_elem_IMG/carrot.png'
import fish from './one_elem_IMG/fish_1.png'
import kk from './one_elem_IMG/kk.png'
import meat from './one_elem_IMG/meat.png'
import table from './one_elem_IMG/table.png'

export default function OneElem(){
    const buttons = [
        { id: 1, label: "Ккал", imgSrc: kk },
        { id: 2, label: "Fish", imgSrc: fish },
        { id: 3, label: "Carrot", imgSrc: carrot },
        { id: 4, label: "Water", imgSrc: bottle },
        { id: 5, label: "Steak", imgSrc: meat },
        { id: 6, label: "Table", imgSrc: table },
      ];
  
    return (
      <div className={classes.menu_container}>
        {buttons.map((button) => (
          <div key={button.id} className={classes.menu_button}>
            <img src={button.imgSrc} alt={button.label} className={classes.icon} />
            <span className={classes.label}>{button.label}</span>
          </div>
        ))}
      </div>
    );
  };