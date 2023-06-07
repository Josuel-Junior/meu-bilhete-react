import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/surfaces/Navbar";
import Footer from "./components/layout/surfaces/Footer";
import Navegation from "./components/layout/Navegation";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Navegation />
      <Footer />
    </BrowserRouter>
  );
}
