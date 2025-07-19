
import './App.css'
import Layout from './app/Layout'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async"



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
    })
  });

  

  return (
    <>
     <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>Multipli - Make yield on any assets</title>
        <meta
          name="description"
          content="Unlocking reliable and lucrative yields on native assets like $BTC, $XAUt, and $BNB represents one of the most significant opportunities in the crypto industry, tapping into a trillion-dollar market." />
        
        <meta
          name="keywords"
          content="crypto, fantasy contests, crypto narratives, crypto memes, crypto tokens, blockchain gaming"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://multipli.fi/" />
        <meta
          property="og:title"
          content="Multipli - Make yield on any assets"
        />
        <meta
          property="og:description"
          content="Unlocking reliable and lucrative yields on native assets like $BTC, $XAUt, and $BNB represents one of the most significant opportunities in the crypto industry, tapping into a trillion-dollar market." />
        
        <meta property="og:image" content="https://multipli.fi/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://multipli.fi/" />
        <meta property="twitter:site" content="@multiplifi" />
        <meta
          property="twitter:title"
          content="Multipli - Make yield on any assets"
        />
        <meta
          property="twitter:description"
          content="Unlocking reliable and lucrative yields on native assets like $BTC, $XAUt, and $BNB represents one of the most significant opportunities in the crypto industry, tapping into a trillion-dollar market." />
      
        <meta
          property="twitter:image"
          content="https://multipli.fi/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://multipli.fi/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="public/fevicon-64x64.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

    
  
    
     <Layout>
      <Home/>
     </Layout>
    </HelmetProvider>
     
    </>
  )
}

export default App
