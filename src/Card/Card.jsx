import { useState } from 'react';
import styles from './Card.module.css'

const Card = (props) =>{
    // console.log(props);
     const [counter , setCounter] = useState(1);
     const [remove , setRemove] = useState(false);
  //  console.log(counter);
   const onClickFnAdd =() =>{
    setCounter(counter + 1);

   
   }

   const onClickFnSub =() =>{
    setCounter(counter - 1);
    if(counter == 0){
      setRemove(true);
  }
   }
   
    return (
        <>
        {
          remove ? "" : <div className={styles.card_container}>
          <div className={styles.img_box}>
            <img className={styles.img} src={props.imgUrl} alt="" />
          <div className={styles.middle_box}>
             <h2 className={styles.name} >{props.name}</h2>
             <p className={styles.price}>{props.price}</p>
             <button className={styles.remove}>remove</button>
          </div>
          </div>
       
          <div className={styles.buttons}>
            <button  className={styles.up}>
            <svg onClick={onClickFnAdd} fill="currentColor"  viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
            </button>
            <p className={styles.count}>{counter}</p>
            <button className={styles.down}>
            <svg   onClick={onClickFnSub} fill="currentColor"  viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </button>
          </div>
    </div>
        }
        </>
    )
}

export default Card;