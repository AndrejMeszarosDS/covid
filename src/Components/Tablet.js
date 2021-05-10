import { Col, Row, Container } from "react-bootstrap";
import { List } from "./List";
import { Map } from "./Map";

export const Tablet = (props) => {
  return (
    <Col className="p-0 h-100 bg-primary d-none d-sm-flex d-xl-none flex-column">
      <Row
        className="m-0 p-0 bg-dark d-flex justify-content-center align-items-center border-bottom border-secondary"
        style={{ height: "100px" }}
      >
        <h3 className="w-100 p-1 m-0 text-danger text-center">
          <strong>Coronavirus (COVID-19) Dashboard</strong>
        </h3>
        <h6 className="p-1 m-0 text-danger w-100 text-center">
          <strong>
            disease.sh - An open API for disease-related statistics - daily
            updated
          </strong>
        </h6>
      </Row>
      <Row
        className="m-0 p-0 flex-grow-1 d-flex flex-row"
        style={{ height: "calc((100% - 140px)/2)" }}
      >
        <Map data={props.data} />
      </Row>
      <Row
        className="m-0 p-0 bg-dark border-top border-secondary"
        style={{ height: "calc((100% - 140px)/2)" }}
      >
        <Container
          fluid
          className="h-100 w-100 p-0 m-0 d-flex flex-row justify-content-between overflow-auto"
        >
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Recovered per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.recoveredPerOneMillion,
                };
              })}
            />
          </Col>
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Critical per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.criticalPerOneMillion,
                };
              })}
            />
          </Col>
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Tests per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.testsPerOneMillion,
                };
              })}
            />
          </Col>
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Cases per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.casesPerOneMillion,
                };
              })}
            />
          </Col>
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Deaths per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.deathsPerOneMillion,
                };
              })}
            />
          </Col>
          <Col
            sm={6}
            md={4}
            className="p-0 flex-shrink-0 border border-secondary"
          >
            <List
              title={"Active per 1 million"}
              data={props.data.map((item) => {
                return {
                  country: item.country,
                  value: item.activePerOneMillion,
                };
              })}
            />
          </Col>
        </Container>
      </Row>
      <Row
        className="m-0 p-0 bg-dark border-top border-secondary d-flex justify-content-center align-items-center"
        style={{ height: "40px" }}
      >
        <h5 className="text-light m-0 p-0">
          Andrej Meszaros - Web Developer - 2021
        </h5>
      </Row>
    </Col>
  );
};
