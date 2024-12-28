import styles from './MainCart.module.css'
import Card from '../Card/Card'

const MainCart = () =>{
    const arr = [
        {
            id : 1,
            imgUrl : "https://www.course-api.com/images/cart/phone-1.png",
            name : "Samsung Galaxy S8",
            price : "$ 399.99"
        },
        {
              id : 2,
            imgUrl : "https://www.course-api.com/images/cart/phone-2.png",
            name : "Google Pixel",
            price : "$ 499.99"
        },
        {
              id : 3,
            imgUrl : "https://www.course-api.com/images/cart/phone-3.png",
            name : "Xiaomi Redmi Note 2",
            price : "$ 699.99"
        },
        {
              id : 4,
            imgUrl : "https://www.course-api.com/images/cart/phone-1.png",
            name : "Samsung Galaxy S7",
            price : "$ 599.99"
        }

    ]
    return (
        <>
         <div className={styles.card_con}>
           {
            arr.map((val) =>{
                return <Card key={val.id} {...val} />
            })
           }
         </div>
        </>
    )
}

export default MainCart;