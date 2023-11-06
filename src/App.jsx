import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout";
import Categorias from "./components/Categorias/Categorias";
import Productos from "./components/Productos/Productos"
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
        <GlobalStyles />
        <Navbar />
        <Layout>
          <Hero />
          <Categorias />
          <Productos /> 
        </Layout>
        
        <Footer />
    </>
  )
}

export default App
