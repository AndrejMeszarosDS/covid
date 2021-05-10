import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Table, Container, Alert } from "react-bootstrap";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import "./Map.css";

export const Map = (props) => {
  return (
    <MapContainer className="w-100 h-100" center={[51.505, -0.09]} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      />
      {props.data.length === 0 ? (
        <Container className="p-0 m-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <Alert style={{ zIndex: "999" }} variant="dark">
            Fetching data ...
          </Alert>
        </Container>
      ) : (
        props.data.map((country, id) => (
          <Marker
            key={id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={L.divIcon({
              html: renderToStaticMarkup(
                <span className="icon-marker">
                  {country.cases > 1000000
                    ? `${Math.round(country.cases / 1000000)}m+`
                    : country.cases > 1000
                    ? `${Math.round(country.cases / 1000)}k+`
                    : country.cases}
                </span>
              ),
            })}
          >
            <Popup>
              <h5 className="text-center text-light">{country.country}</h5>
              <Table borderless>
                <tbody className="text-light">
                  <tr className="text-light">
                    <td className="pr-4 pl-0 py-0">Population</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.population}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Total cases</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.cases}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Today cases</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.todayCases}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Total deaths</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.deaths}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Today deaths</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.todayDeaths}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Total recovered</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.recovered}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Today recovered</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.todayRecovered}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Total active</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.active}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 pl-0 py-0">Todal critical</td>
                    <td className="p-0"> </td>
                    <td className="p-0 text-right">{country.critical}</td>
                  </tr>
                </tbody>
              </Table>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
};
