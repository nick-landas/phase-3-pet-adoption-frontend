import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="Enter first name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Enter last name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formHomeAddress">
        <Form.Label>Home Address</Form.Label>
        <Form.Control
          name="homeAddress"
          type="text"
          label="Enter home address"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name="phoneNumber"
          type="text"
          label="Enter a good daytime phone number"
          onChange={handleChange}
        />
      </Form.Group>
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
        <Form.Text className="text-muted">
          Please select the pet you'd like to adopt.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ApplicationForm;
