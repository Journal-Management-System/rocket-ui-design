// import Navbar from './navbar'
// import Home from './components/Home'
// import BootDescp from './components/BootDescp'
import About from './components/About'
import ApplyPage from './pages/ApplyPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() { 
  return (
    <Router>
      <div className=" bg-[#0f172a] min-h-screen w-full overflow-hidden">
        {/* <Navbar/> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Home/> */}
                <About/>
              </>
            }
          />
          <Route path='/apply' element={<ApplyPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
