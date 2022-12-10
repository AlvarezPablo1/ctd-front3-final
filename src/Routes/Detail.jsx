import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "../Components/modules/DetailCard.module.css";
import axios from "axios";


const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState();
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setDentist(res.data))
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <>
      {dentist ? (
        <>
          <h1>Detalle sobre: {dentist.name} </h1>
          <section className="card col-sm-12 col-lg-6 container">
            <div
              className={`card-body row ${isDarkMode ? styles.dark : ""}`}
            >
              <div className="col-sm-12 col-lg-6">
                <img
                  className="card-img-top"
                  src="/images/doctor.jpg"
                  alt="doctor placeholder"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                <button type="button" onClick={() => navigate(-1)} className= {`btn btn-${isDarkMode ? "dark" : "primary"}`}>volver</button>
                  <li className="list-group-item">Usuario: {dentist.username}</li>
                  <li className="list-group-item">Email: {dentist.email}</li>
                  <li className="list-group-item">Sitio Web: {dentist.website}</li>
                  <li className="list-group-item">Telefono: {dentist.phone}</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  )
}

export default Detail