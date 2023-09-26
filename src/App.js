import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Pages/Main";
import Orders from "./Pages/Orders";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setOrders(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main class="main">
      <div class="container" data-layout="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route
            path="/orders"
            element={<Orders orders={orders} loading={loading} />}
          />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
