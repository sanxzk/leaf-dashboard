import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import CardPage from "../components/Cards/CardPage";
import './Home.css'
import { useSelector } from "react-redux";
const Home = () => {
const {colors} = useSelector((state)=>state.theme)
  return (
    <div style={{backgroundColor:colors.secondary}} className="page">
      <aside>
        <Sidebar />
      </aside>
      <div>
        <nav  >
          <Navbar />
        </nav>
        <section>
          <CardPage />
        </section>
      </div>
    </div>
  );
};

export default Home;
