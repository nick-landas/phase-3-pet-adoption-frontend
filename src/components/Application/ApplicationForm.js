import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"

function ApplicationForm({ formData, updateFunction, lists, updaters }) {
  const ownerApi = "http://localhost:9292/owners";
  const applicationApi = "http://localhost:9292/adoption-applications";

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    updateFunction({ ...formData, [name]: value });
  };

  const handleSelect = (e) => {
    const value = e.target.value === "Select a pet" ? "" : e.target.value;
    const name = e.target.name;
    const id = lists.petList.find((pet) => {
      return pet.name === value;
    }).id;
    updateFunction({ ...formData, [name]: value, pet_id: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOwner = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      home_address: formData.home_address,
      phone_number: formData.phone_number,
    };

    fetch(ownerApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOwner),
    })
      .then((response) => response.json())
      .then((ownerData) => {
        updaters.updateOwnerList([...lists.ownerList, ownerData]);

        const date = new Date();
        const newApplication = {
          date: `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`,
          accepted: false,
          pet_id: formData.pet_id,
          owner_id: ownerData.id,
        };

        fetch(applicationApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newApplication),
        })
        .then((response) => response.json())
        .then((applicationData) => {
          updaters.updateApplicationList([...lists.applicationList, applicationData])
        })
      });
  };

  const options = (petList) => {
    return petList.map((pet) => {
      return <option key={pet.id}>{pet.name}</option>;
    });
  };

  return (
    <Container className="p-5">
      <Row>
        <header className="App-header">
          <h1>Adoption Application</h1>
        </header>
      </Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="first_name"
                    type="text"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridName">
                <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="last_name"
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
                    name="home_address"
                    type="text"
                    label="Enter home address"
                    onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="phone_number"
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
                    name="pet_name"
                    as="select"
                    size="lg"
                    onChange={handleSelect}
                    custom
                  >
                    <option>Select a pet</option>
                    {options(lists.petList)}
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
