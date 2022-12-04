import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";
const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    alert("No se encontro la ubicacion deseada")
  )
}
export default Error