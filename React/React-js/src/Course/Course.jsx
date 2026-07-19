import styles from './Course.module.css'
//import HTML from '../assets/wallpaperflare.com_wallpaper.jpg'
import { useState, useEffect } from 'react'

// import PropTypes from 'prop-types'

// const course = "HTML";

function Course(props) {

    //let purchased = false;
    const [purchased, setPurchased] = useState(false);
    
    function BuyCourse(discount, event) {
        console.log(`You have bought the ${props.name} course for ${props.price} for a discount of ${discount}`);
        console.log(event);
        setPurchased(true);
        console.log(purchased);

    }

    useEffect(() => {
        console.log(`Purchased state has changed to: ${purchased}`);
        console.log({purchased});
    });

    const [discount, setDiscountValue] = useState(0);

    function setDiscount(discount) {
        console.log(`Discount of ${discount} has been set for the ${props.name} course`);
        setDiscountValue(discount);
    }
    const style = {
        color: 'blue',
        fontSize: '18px',
    };
    // if(props.show){
    return (
        // props.name && <div className={styles.card}>
        //     {/* <h1 className={styles.head}>Course Page</h1> */}
        //     <img src={props.image} alt={props.name} />
        //     {/* <h1>{course}</h1> */}
        //     <h1>{props.name}</h1>
        //     {/* <p style={style}>Welcome to the course page!</p> */}
        //     <p>{discount > 0 ? `${(props.price * (1 - discount / 100)).toFixed(2)}` : `${props.price.toFixed(2)}`}</p>
        //     <button onClick={(event) => { BuyCourse(20,event) }}>Buy Now</button>
        //     <br></br>
        //     <br></br>
        //     <button onClick={() => { setDiscount(20) }}>Set Discount</button>
        //     <p>{purchased ? 'Purchased' : 'Not Purchased'}</p>
        //     <p>Current Discount: {discount}%</p>
        //     <button onClick={() => { props.deleteCourse(props.id) }}>Delete</button>
        // </div>

        <div className={styles.card}>
    <img src={props.image} alt={props.name} />

    <span className={styles.badge}>Bestseller</span>

    <h1>{props.name}</h1>

    <p className={styles.instructor}>{props.author}</p>

    <div className={styles.rating}>
        <span className={styles.ratingValue}>{props.rating}</span>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.students}>(12,456)</span>
    </div>

    <p className={styles.details}>
        {props.hours} total hours • All Levels
    </p>

    <div className={styles.priceSection}>
        <span className={styles.price}>₹{props.price}</span>
        <span className={styles.oldPrice}>₹{props.originalPrice}</span>
        <span className={styles.off}>{props.offer}% off</span>
    </div>

    <div className={styles.buttonGroup}>
        <button className={styles.buyBtn} onClick={() => BuyCourse(props.offer,event)}>
            Buy Now
        </button>
        <button
            className={styles.deleteBtn}
            onClick={() => props.deleteCourse(props.id)}
        >
            Delete
        </button>
    </div>
    <p>{purchased ? 'Purchased' : 'Not Purchased'}</p>
</div>
    );
    // }
    // else{
    //     return (
    //         <div className={styles.card}>
    //             <h1>Course is not available</h1>
    //         </div>
    //     );
    // }
    // Course.defaultProps = {
    //     name: 'Default Course',
    //     price: '$0.00',
    //     image: HTML,
    // };

    // Course.propTypes = {
    //     name: PropTypes.string,
    //     price: PropTypes.number,
    //     image: PropTypes.string,
    //     show: PropTypes.bool,
    // };
}
export default Course;