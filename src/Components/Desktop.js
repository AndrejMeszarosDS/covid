import { Col, Row } from "react-bootstrap";
import { List } from "./List";
import { Map } from "./Map";

export const Desktop = (props) => {
  return (
    <>
      {/* whole screen */}
      <Col className="p-0 h-100 bg-primary d-none d-xl-flex flex-column">
        {/* header */}
        <Row
          className="m-0 p-0 bg-dark d-flex justify-content-center align-items-center border-bottom border-secondary"
          style={{ height: "100px" }}
        >
          <h1 className="w-100 p-1 m-0 text-danger text-center">
            <strong>Coronavirus (COVID-19) Dashboard</strong>
          </h1>
          <h4 className="p-1 m-0 text-danger w-100 text-center">
            <strong>
              disease.sh - An open API for disease-related statistics - daily
              updated
            </strong>
          </h4>
        </Row>
        {/* body */}
        <Row
          className="m-0 p-0 flex-grow-1 d-flex flex-row"
          style={{ height: "calc(100% - 140px)" }}
        >
          {/* body left side */}
          <Col
            className="col-2 h-100 p-0 bg-danger"
            style={{ minWidth: "280px" }}
          >
            {/* left top list */}
            <Row
              className="p-0 m-0 bg-dark border-bottom border-secondary"
              style={{ height: "33.33%" }}
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
            </Row>
            {/* left mid list */}
            <Row
              className="p-0 m-0 bg-dark border-bottom border-secondary"
              style={{ height: "33.33%" }}
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
            </Row>
            {/* left bottom list */}
            <Row className="p-0 m-0 bg-dark" style={{ height: "33.33%" }}>
              <List
                title={"Tests per 1 million"}
                data={props.data.map((item) => {
                  return {
                    country: item.country,
                    value: item.testsPerOneMillion,
                  };
                })}
              />
            </Row>
          </Col>
          {/* map on center */}
          <Col className="p-0 bg-secondary flex-grow-1  border-left border-right border-secondary">
            <Map data={props.data} />
          </Col>
          {/* body right side */}
          <Col
            className="col-2 h-100 p-0 bg-danger"
            style={{ minWidth: "280px" }}
          >
            {/* right top list */}
            <Row
              className="p-0 m-0 bg-dark border-bottom border-secondary"
              style={{ height: "33.33%" }}
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
            </Row>
            {/* right mid list */}
            <Row
              className="p-0 m-0 bg-dark border-bottom border-secondary"
              style={{ height: "33.33%" }}
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
            </Row>
            {/* right bottom list */}
            <Row className="p-0 m-0 bg-dark" style={{ height: "33.33%" }}>
              <List
                title={"Active per 1 million"}
                data={props.data.map((item) => {
                  return {
                    country: item.country,
                    value: item.activePerOneMillion,
                  };
                })}
              />
            </Row>
          </Col>
        </Row>
        {/* footer */}
        <Row
          className="m-0 p-0 bg-dark border-top border-secondary d-flex justify-content-center align-items-center"
          style={{ height: "40px" }}
        >
          <h5 className="text-light m-0 p-0">
            Andrej Meszaros - Web Developer - 2021
          </h5>
        </Row>
      </Col>
    </>
  );
};
