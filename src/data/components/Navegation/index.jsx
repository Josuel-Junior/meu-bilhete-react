import { Routes, Route } from "react-router-dom";

import Quina from "../../../pages/Quina";
import Home from "../../../pages/Home";

import Container from "../Container";
export default function Navegation() {
  return (
    <Container customClass="minHeight">
      <Routes>
        <Route path="/quina" element={<Quina />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}
