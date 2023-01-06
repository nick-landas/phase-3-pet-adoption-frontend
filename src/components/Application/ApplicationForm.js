import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"

function ApplicationForm(props) {
  const { formData, updateFunction } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    updateFunction({ ...formData, [name]: value });
  };

  const handleSelect = (e) => {
    const value = e.target.value === "Select a pet" ? "" : e.target.value;
    const name = e.target.name;
    updateFunction({ ...formData, [name]: value });
  };

  return (
    <Container className="p-5">
      <Row>
        <header className="App-header">
          <h1>Adoption Application</h1>
        </header>
      </Row>
        <Col>
          <Form>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridName">
                <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    onChange={handleChange}
                  />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formHomeAddress">
                <Form.Label>Home Address</Form.Label>
                  <Form.Control
                    name="homeAddress"
                    type="text"
                    label="Enter home address"
                    onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    type="text"
                    label="Enter a good daytime phone number"
                    onChange={handleChange}
                  />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formPetChoice">
                <Form.Label>Pets Available for Adoption</Form.Label>
                  <Form.Select
                    name="petName"
                    as="select"
                    size="lg"
                    onChange={handleSelect}
                    custom
                  >
                    <option>Select a pet</option>
                    <option>Lizzy</option>
                    <option>Spark</option>
                  </Form.Select>
                  <Form.Text className="text-muted text-align: center">
                    Please select the pet you'd like to adopt. Adoptions are based on multiple criteria and not guaranteed. More than one pet may be applied for through a separate application.
                  </Form.Text>
              </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Col>
    </Container>
  );
}

export default ApplicationForm;
