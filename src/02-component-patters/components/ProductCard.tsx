import styles from '../styles/styles.module.css';

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
        <img className={styles.productImg} src="coffee-mug.png" alt='coffee'/>
    </div>
  )
}

export default ProductCard