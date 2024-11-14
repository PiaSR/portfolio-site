import { Routes, Route } from "react-router-dom";
import { useWindowSize } from '@custom-react-hooks/use-window-size';
import { Hero } from './components/Hero'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";


function App() {
  const {width} = useWindowSize();

  const isLargeScreen = width > 912;

  return (
    <>
    
      <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Projects isLargeScreen={isLargeScreen} /><Footer /></>}></Route>
          <Route path="projects" element={<><Projects isLargeScreen={isLargeScreen}  /><Footer/></>}></Route>
          <Route path="about" element={<><About isLargeScreen={isLargeScreen}  /><Footer /></>}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>

    </>
  )
}

export default App
