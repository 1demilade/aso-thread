import { Route, Routes, useLocation } from 'react-router-dom'
import { BagProvider } from './context/BagContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BagDrawer from './components/BagDrawer.jsx'
import Notice from './components/Notice.jsx'
import RouteEffects from './components/RouteEffects.jsx'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()
  return (
    <BagProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <RouteEffects />
      <Header />
      <main id="main" tabIndex={-1} key={pathname} className="route-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BagDrawer />
      <Notice />
    </BagProvider>
  )
}
