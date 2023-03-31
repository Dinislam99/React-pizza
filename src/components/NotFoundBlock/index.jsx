import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {


    return (
        <div className={styles.root}>
            <h1 >
                <span>:(</span>
                <br />
                <h1>Ничего не найдено</h1>
            </h1>
            <p className={styles.description}>К сожалению данная страница отсутствует</p>
        </div>
    )
}

export default NotFoundBlock