import { Container, Row, Table, Alert } from "react-bootstrap";

export const List = (props) => {
  const SortData = (data) => {
    let sortedData = data.sort((a, b) => {
      let aa, bb;
      aa = a.value;
      bb = b.value;
      return bb - aa;
    });
    return sortedData;
  };

  function numberWithCommas(x) {
    // return x;
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <Container fluid className="m-0 p-0 bg-dark h-100 d-flex flex-column">
      <Row className="m-0 p-2 text-light bg-secondary">
        <h5 className="text-center w-100 m-0">{props.title}</h5>
      </Row>
      <Container
        fluid
        className="m-2 p-0 h-100 overflow-auto"
        style={{ width: "calc( 100% - 12px)" }}
      >
        {props.data.length === 0 ? (
          <Container className="p-0 m-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <Alert variant="dark">Fetching data ...</Alert>
          </Container>
        ) : (
          <Table borderless>
            <tbody className="">
              {SortData(props.data).map((country, id) => (
                <tr key={id} className="text-light">
                  <td className="p-0">{country.country}</td>
                  <td className="p-0 text-right">
                    {numberWithCommas(country.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </Container>
  );
};
