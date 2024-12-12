import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
function AllRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
