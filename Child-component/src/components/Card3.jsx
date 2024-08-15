import styles from '../styles/Card3.module.scss'

function Card3 ({title, textContent, image, footerContent}){
    return(
        <>
        <div className={styles.card_container}>
        <figure>
            <h1>{title}</h1>
            <p>{textContent}</p>
            <img src={image}  style={{ width: '100%' }} />
            <footer>{footerContent}</footer>
        </figure>
        </div>
       
        </>
    )
}

export default Card3