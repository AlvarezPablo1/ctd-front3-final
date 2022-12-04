import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios"
const Home = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => setDentist(res.data))
    .catch(err => console.log(err))
  }, [])


  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentist.length
          ? dentist.map((dentist) => (
              <Card {...dentist} key={dentist.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
