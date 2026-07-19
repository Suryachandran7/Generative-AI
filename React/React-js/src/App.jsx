import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import Course from './Course/Course'
// import HTML from './assets/HTML.png'
// import CSS from './assets/CSS.png'
// import JavaScript from './assets/JavaScript.png'
import CoursesList from './Course/CoursesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Navbar /> */}
   {/* <Course name="HTML" price="$19.99" image={HTML} show={true}/>
   <Course name="CSS" price="$19.99" image={CSS} />
   <Course name="JavaScript" price="$19.99" image={JavaScript} show={true} />
   <Course/> */}
   <CoursesList/>
   </>
  )
}

export default App
