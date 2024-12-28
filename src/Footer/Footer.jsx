import styles from './Footer.module.css'

const Footer = () =>{
    return (
        <>
        <div className={styles.top}>
            <div>
                <h3 className={styles.Total}>Total</h3>
            </div>
            <div className={styles.total}>
                <p className={styles.price}>$ 2199.99</p>
            </div>
        </div>
        <div className={styles.button_box}>
            <button className={styles.clear}>Clear Cart</button>
        </div>
        </>
    )
}

export default Footer;