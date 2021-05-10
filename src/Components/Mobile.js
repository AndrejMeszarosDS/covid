import { useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { List } from "./List";
import { Map } from "./Map";

export const Mobile = (props) => {
  const [actualView, setActualView] = useState(1);
  return (
    <Col className="p-0 h-100 bg-primary d-sm-none flex-column">
      <Row
        className="m-0 p-0 bg-dark d-flex justify-content-center align-items-center border-bottom border-secondary"
        style={{ height: "100px" }}
      >
        <h4 className="w-100 p-1 m-0 text-danger text-center">
          <strong>Coronavirus Dashboard</strong>
        </h4>
        <h6 className="p-1 m-0 text-danger w-100 text-center">
          <strong>
            disease.sh - An open API for disease-related statistics - daily
            updated
          </strong>
        </h6>
      </Row>
      <Row
        className="m-0 p-0 flex-grow-1 d-flex flex-row"
        style={{ height: "calc(100% - 188px)" }}
      >
        {actualView === 1 ? <Map data={props.data} /> : null}
        {actualView === 2 ? (
          <List
            style={{ maxWidth: "100% !important" }}
            title={"Recovered per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.recoveredPerOneMillion,
              };
            })}
          />
        ) : null}
        {actualView === 3 ? (
          <List
            title={"Critical per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.criticalPerOneMillion,
              };
            })}
          />
        ) : null}
        {actualView === 4 ? (
          <List
            title={"Tests per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.testsPerOneMillion,
              };
            })}
          />
        ) : null}
        {actualView === 5 ? (
          <List
            title={"Cases per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.casesPerOneMillion,
              };
            })}
          />
        ) : null}
        {actualView === 6 ? (
          <List
            title={"Deaths per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.deathsPerOneMillion,
              };
            })}
          />
        ) : null}
        {actualView === 7 ? (
          <List
            title={"Active per 1 million"}
            data={props.data.map((item) => {
              return {
                country: item.country,
                value: item.activePerOneMillion,
              };
            })}
          />
        ) : null}
      </Row>
      <Row
        className="m-0 p-0 bg-dark border-top border-secondary"
        style={{ height: "48px" }}
      >
        <Container fluid className="m-0 p-0 h-100 w-100 d-flex flex-row">
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(1)}
            >
              1
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(2)}
            >
              2
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(3)}
            >
              3
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(4)}
            >
              4
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(5)}
            >
              5
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(6)}
            >
              6
            </Button>
          </Container>
          <Container className="m-0 p-1" style={{ width: "calc(100% / 7)" }}>
            <Button
              block
              className=""
              variant="secondary"
              onClick={() => setActualView(2)}
            >
              7
            </Button>
          </Container>
        </Container>
      </Row>
      <Row
        className="m-0 p-0 bg-dark border-top border-secondary d-flex justify-content-center align-items-center"
        style={{ height: "40px" }}
      >
        <h6 className="text-light m-0 p-0">
          Andrej Meszaros - Web Developer - 2021
        </h6>
      </Row>
    </Col>
  );
};
