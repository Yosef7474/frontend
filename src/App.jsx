import { Outlet } from "react-router-dom"
import "./App.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { AuthProvide } from "./context/AuthContext"




function App() {
  

  return (
    <>
    <AuthProvide>
    <Navbar/>
    <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 ">
      <Outlet/>
     </main>
     <Footer/>
    </AuthProvide>
   
    </>
  )
}

export default App
