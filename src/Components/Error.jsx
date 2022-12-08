import {  useNavigate } from "react-router-dom"
import { useEffect } from "react";

const Error = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/home");
  });

  return (
    alert("Pagina no encontrada")
  )
}
export default Error