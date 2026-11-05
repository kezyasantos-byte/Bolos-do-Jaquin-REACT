import { Route, Routes } from "react-router-dom";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./pages/home/Home";
import DetProdutos from "./pages/detProduto/DetProdutos";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";



export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/detalheProduto" element={<DetProdutos/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" 
        element={
        <img  className="container-notfound" src="https://cdn.dribbble.com/userupload/41802618/file/original-30bd81eb7c805503b995ab442f08b739.gif" alt="imagem de gift não encontrado" />} />
       </Routes>
      <Footer />
    </>
  )
}
