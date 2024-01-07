import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import PopularItems from './Components/PopularItems'
import RecommendedItems from './Components/RecommendedItems'




function App() {
  
  return (
    <div>
      <Navbar/>
      <hr className='md:hidden'/>
      <Header/>
      <PopularItems/>
      <RecommendedItems/>
      <Footer/>
    </div>
  )
}

export default App
