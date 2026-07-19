// import HTML from '../assets/HTML.png'
// import CSS from '../assets/CSS.png'
// import JavaScript from '../assets/JavaScript.png'
import Course from './Course'   
//import { useState, useEffect } from 'react'
import useFetch from './useFetch'

function CoursesList() {

    // const courses = [
    //     {},
    //     { name: 'HTML', price: 299, image: HTML, show: true },
    //     { name: 'CSS', price: 399, image: CSS, show: false },
    //     { name: 'JavaScript', price: 499, image: JavaScript, show: true },
    // ];

    // const [courses, setCourses] = useState([
    //     {},
    //     { id: 1, name: 'HTML', price: 299, image: HTML, show: true ,author: 'Surya' , hours: 42, rating: 4.8, originalPrice: 999, offer: 80, delete: {deleteCourse}},
    //     { id: 2, name: 'CSS', price: 399, image: CSS, show: false ,author: 'Harish' ,hours: 36, rating: 4.6, originalPrice: 799, offer: 70, delete: {deleteCourse}},
    //     { id: 3, name: 'JavaScript', price: 499, image: JavaScript, show: true ,author: 'Sugumar' ,hours: 50, rating: 4.9, originalPrice: 1299, offer: 85, delete: {deleteCourse}},
    // ]);

    // const [courses, setCourses] = useState(null);
    // const [dummy, setDummy] = useState(true);
    // const [error, setError] = useState(null);  
    
    const [courses, dummy, error] = useFetch('http://localhost:3000/courses');

    // useEffect(() => {
    //     console.log('Courses state has changed');
    // }, [courses]);

    // useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // });
    // }, []);


    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('Fetching courses from API...');
    // fetch('http://localhost:3000/courses')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP ${response.status} ${response.statusText}`);
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     setCourses(data);
    // })
    // .catch(error => {
    //     setError(error.message);
    //     console.log('Error fetching courses:', error.message);
    // })
    //     }, 2000);
    // }, []);

    if(!courses) {
        return <><center><img src="data/assets/Loading.gif" alt="Loading..." /></center></>;
    }
    courses.sort((a, b) => b.price - a.price);
    const filteredCourses = courses.filter(course => course.price > 100);

    function deleteCourse(id) {
        console.log(`Deleting course with id: ${id}`);
        const newcourses = filteredCourses.filter(course => course.id !== id);
        setCourses(newcourses);
    }

    const coursesList = filteredCourses.map((course,index) => (
        <Course
            key={index}
            name={course.name}
            price={parseInt((course.price / 100) * course.offer).toFixed(2)}
            image={course.image}
            show={course.show}
            id={course.id}
            author={course.author}
            hours={course.hours}
            rating={course.rating}
            offer={course.offer}
            originalPrice={course.originalPrice}
            deleteCourse={deleteCourse}
        />
    ));

    return (
        <>
            {coursesList}
            <button onClick={() => setDummy(false)}>Dummy</button>
        </>
    );
}

export default CoursesList;

// npx json-server --watch data/dummyData.json --port 3000 --static ./data