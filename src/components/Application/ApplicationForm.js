import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ApplicationForm(update) {
  const { updateFunction } = update;

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formHomeAddress">
        <Form.Label>Home Address</Form.Label>
        <Form.Control type="text" label="Enter home address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" label="Enter a good daytime phone number" />
      </Form.Group>
      <Form.Group controlId="formPetChoice">
        <Form.Label>Pets Available for Adoption</Form.Label>
        <Form.Control as="select" size="lg" custom>
          <option>Lizzy</option>
        </Form.Control>
        <Form.Text className='text-muted'>
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
