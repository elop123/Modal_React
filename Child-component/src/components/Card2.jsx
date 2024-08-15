import styles from '../styles/Card2.module.scss'

function Card2(obj){
    return(
        <>
        <div className={styles.container}>
            {obj.children}
        </div>
        </>
    )
}

export default Card2
