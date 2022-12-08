import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "./modules/Form.module.css";

const Form = () => {
  const [loginValues, setLoginValues] = useState({ name: "", email: "" })
  const { theme} = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (loginValues.name.length >= 5 ) {
      alert(`Gracias ${loginValues.name}, te contactaremos cuanto antes via mail`)
      navigate("/home");
    } else {
      alert("Por favor verifique su información nuevamente")
    }
}

  console.log(loginValues);

  return (
    <div className={`text-center card container ${styles.card} ${isDarkMode ? styles.cardDark : ""}`}>
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmitLogin}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            value={loginValues.name}
            onChange={(e) => setLoginValues({ ...loginValues, name: e.target.value })}
            placeholder="Nombre"
            type="text"
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            value={loginValues.email}
            onChange={(e) => setLoginValues({ ...loginValues, email: e.target.value })}
            placeholder="Email"
            type="email"
            required
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;