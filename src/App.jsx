import { HashRouter } from "react-router-dom";

import Navbar from "./data/components/surfaces/Navbar/Nav";
import Footer from "./data/components/surfaces/Footer";
import Navegation from "./data/components/Navegation";



export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Navegation />
      <Footer />
    </HashRouter>
  );
}
