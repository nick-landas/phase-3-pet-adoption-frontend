import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PetForm(props) {
  const { formData, updateFunction } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    updateFunction({...formData, [name]: value})
  };

  const handleCheckBoxChange = (e) => {
    const checked = e.target.checked;
    const name = e.target.name
    updateFunction({...formData, [name]: checked})
  };

  return (
    <>
      <div>Add a pet available for adoption.</div>
      <Form>
        <Form.Group className="mb-3" controlId="formSpecies">
          <Form.Label>Species</Form.Label>
          <Form.Control
            name="species"
            type="text"
            placeholder="Species of the pet"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            name="color"
            type="text"
            placeholder="A brief description of its color"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            name="weight"
            type="text"
            placeholder="The pet's weight (lbs)"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIsHousebroken">
          <Form.Label>House Training</Form.Label>
          <Form.Check
            name="isHousebroken"
            type="checkbox"
            label="Is the pet housebroken?"
            onChange={handleCheckBoxChange}
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Name of Pet"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPersonality">
          <Form.Label>Personality</Form.Label>
          <Form.Control
            name="personality"
            as="textarea"
            rows={3}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Please input a description of the pet's personality, habits, and how
            they get along with people, kids, and other pets.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default PetForm;
