import React from "react";
import styles from'./page2.css';
import Header from "./Header";

const Page2 = () =>{
    return (
        <div className={styles.small_box}>
            <Header/>
        <div className={styles.big_box}>
            <h1>Title of the note</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat ut est eleifend fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat ut est eleifend fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu erat ut est eleifend fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <img className={styles.del} src="/image 53.png" alt="example" />
            <img className={styles.edit}src="/image 59.png" alt="Example" />
        </div>
        </div>
    );
};
export default Page2;
