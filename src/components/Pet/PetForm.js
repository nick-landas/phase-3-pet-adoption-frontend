import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function PetForm(update) {
  const { updateFunction } = update;

  return (
    <>
      <div>Add a pet available for adoption.</div>
      <Form>
        <Form.Group className="mb-3" controlId="formSpecies">
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" placeholder="Species of the pet" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="A brief description of its color" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="The pet's weight (lbs)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIsHousebroken">
          <Form.Label>House Training</Form.Label>
          <Form.Check type="text" label="Is the pet housebroken?" />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name of Pet"/>
        </Form.Group>
        <Form.Group controlId="formPersonality">
          <Form.Label>Personality</Form.Label>
          <Form.Control as="textarea" rows={3}/>
          <Form.Text className="text-muted">
            Please input a description of the pet's personality, habits,
            and how they get along with people, kids, and other pets.
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