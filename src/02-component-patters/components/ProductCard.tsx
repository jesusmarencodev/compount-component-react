import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';



const ProductCard = ({}) => {

    const {counter, increaseBy} = useProduct();

  return (
    <div className={styles.productCard}>
        <img className={styles.productImg} src="coffee-mug.png" alt='coffee'/>
        <span className={styles.productDescription}>Coffee Mug</span>
        {/* <img className={styles.productImg} src={noImage} alt='noImage'/> */}

        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={()=>increaseBy(+1)}>+</button>
        </div>
    </div>
  )
}

export default ProductCard