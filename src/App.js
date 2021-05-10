import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Desktop } from "./Components/Desktop";
import axios from "axios";
import { useState, useEffect } from "react";
import { Mobile } from "./Components/Mobile";
import { Tablet } from "./Components/Tablet";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        response = await axios.get("https://disease.sh/v3/covid-19/countries");
      } catch (e) {
        console.log(`Failed to fetch countries: ${e.message}`, e);
        return;
      }
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <Container fluid className="w-100 h-100 p-0">
      <Desktop data={data} />
      <Tablet data={data} />
      <Mobile data={data} />
    </Container>
  );
};
