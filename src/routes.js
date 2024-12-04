import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Resume from "./Pages/Resume/Resume"
import Works from "./Pages/Works/Works"
import Contact from "./Pages/Contact/Contact"

const routes = [
    {path: "/" , element: <Home />},
    {path: "/about" , element: <About />},
    {path: "/resume" , element: <Resume />},
    {path: "/works" , element: <Works />},
    {path: "/contact" , element: <Contact />},
]


export default routes