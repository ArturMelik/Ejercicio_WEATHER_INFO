import React, { useEffect, useState } from "react";
import "./WeatherList.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard";
import { TailSpin } from "react-loader-spinner";

const WeatherList = () => {
  const [value, setValue] = useState("Madrid"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        //await new Promise(resolve => setTimeout(resolve, 3000));
        // Petición HTTP (llamada api)
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric&lang=es`
        );
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));

        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.list);
      } catch (e) {
        setPosts([]); // No pintes nada
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate. Recibir actualizaciones

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    setValue(e.target.city.value); // Modificando el estado de Value
  };

  const renderCards = () =>
    posts.map((post) => <WeatherCard data={post} key={uuidv4()} />);

  return (
    <section className="cards-container">
      <h1>Tiempo en {value} </h1>

      <form onSubmit={handleSubmit}>
        <input name="city" placeholder="Introduce la ciudad" />
        <button>Buscar</button>
      </form>

      {posts.length !== 0 ? (
        <ul>{renderCards()}</ul>
      ) : (
        <TailSpin
          height={120}
          width={120}
          color="#00aaff"
          ariaLabel="loading"
          wrapperStyle={{ margin: "0 auto" }}
          visible={true}
        />
      )}
    </section>
  );
};

export default WeatherList;
