
import './App.css'
import Layout from './app/Layout'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  });

  

  return (
    <>
     <Layout>
      <Home/>
     </Layout>
    </>
  )
}

export default App
