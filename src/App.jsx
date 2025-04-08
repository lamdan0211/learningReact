import React from 'react'
import Banner from './components/ui/banner/Banner'
import Navbar from './components/layout/navbar/Navbar'
import News from './components/ui/news/News'
import Footer from './components/layout/footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <News />
      <Footer />
    </>
  )
}

export default App;