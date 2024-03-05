import styles from './Items.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Items = ({ fruitName }) => {

    const  handleClickButton = () => {
        console.log(`${fruitName} item get sell`)
    }

    return (
        <>
            <li className={` list-group-item`}>
                {fruitName}
 {/* <button className={`${styles.button} btn btn-info`} onClick={() => console.log(`${fruitName} item get sell`)}> */}
 {/* <button className={`${styles.button} btn btn-info`} onClick={()=> handleClickButton(fruitName)}> */}
 <button className={`${styles.button} btn btn-info`} onClick={handleClickButton}>
                Sell
                </button>
            </li>
        </>
    )

}

export default Items;