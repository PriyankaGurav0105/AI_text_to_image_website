import NavBar from "./components/NavBar"
import BuyCredit from "./pages/BUyCredit"
import Home from "./pages/Home"
import Result from "./pages/Result"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-slate-200 to-slate-300'>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/buy" element={<BuyCredit/>}/>
      

      </Routes>
    </div>
  )
}

export default App
