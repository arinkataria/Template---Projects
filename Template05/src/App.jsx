import './App.css'
import Navbar from './Components/Navbar'
import SecctionFirst from './Components/SecctionFirst'
import SectionLast from './Components/SectionLast'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import Galleries from './Screen/Features/Galleries'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="container">
        <Navbar />

        <Routes>
          {/* Home route with extra sections */}
          <Route
            path="/home"
            element={
              <div className="sections">
                <SecctionFirst />
                <section className="mid">
                  <Home />
                </section>
                <SectionLast />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="sections">
                <SecctionFirst />
                <section className="mid">
                  <Home />
                </section>
                <SectionLast />
              </div>
            }
          />
          

          {/* Galleries route */}
          <Route path="/galleries" element={<Galleries />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
