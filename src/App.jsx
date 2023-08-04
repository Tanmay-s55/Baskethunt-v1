import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"

function App() {
 return (
  <div id="parent">
    <Navbar />
    <Section1 />
    <Section2 />
    <img src="/BG_triangle.png" className="triangle" />
    <Section3 />
    <Section4 />
  </div>
 )
}

export default App
