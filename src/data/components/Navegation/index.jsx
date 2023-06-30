import { Routes, Route } from "react-router-dom";

import Duplasena from "../../../pages/Duplasena";
import Lotofacil from "../../../pages/Lotofacil";
import Quina from "../../../pages/Quina";
import Home from "../../../pages/Home";

import Container from "../Container";
export default function Navegation() {
  return (
    <Container customClass="minHeight">
      <Routes>
        <Route path="/duplasena" element={<Duplasena />} />
        <Route path="/lotofacil" element={<Lotofacil />} />
        <Route path="/quina" element={<Quina />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}
