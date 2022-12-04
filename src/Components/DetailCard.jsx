import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "./modules/DetailCard.module.css";
import axios from "axios";

const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState();
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setDentist(res.data))
    .catch(err => console.log(err))
  }, [id])

  
  return (
    <>
      {dentist ? (
        <>
          <h1>Detail about Dentist {dentist.name} </h1>
          <section className="card col-sm-12 col-lg-6 container">
            <div
              className={`card-body row ${isDarkMode ? styles.cardDark : ""}`}
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
                  <li className="list-group-item">Name: {dentist.name}</li>
                  <li className="list-group-item">Surname: {dentist.username}</li>
                  <li className="list-group-item">email: {dentist.email}</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default DetailCard;
