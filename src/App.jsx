import { useEffect, useContext } from 'react';
import { Outlet, useNavigate, useLocation, Route, Routes  } from "react-router-dom";
import { ContextGlobal } from './Components/utils/global.context';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Error from './Components/Error'

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <Navbar/>
      <main>
        <Outlet/>
      <Routes>
          <Route path="/">
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
