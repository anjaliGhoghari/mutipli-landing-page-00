import "./App.css";
import Layout from "./app/Layout";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-Z3DGNZ7QB0";
    script1.async = true;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-Z3DGNZ7QB0");

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <>
      <HelmetProvider>
       

        <Layout>
          <Home />
        </Layout>
      </HelmetProvider>
    </>
  );
}

export default App;
