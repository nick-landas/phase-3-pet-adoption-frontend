import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PetForm({formData, updateFunction, listData, updateList}) {
  const api = "http://localhost:9292/pets";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === "weight" ? parseInt(e.target.value) : e.target.value;
    updateFunction({ ...formData, [name]: value });
  };

  const handleCheckBoxChange = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    updateFunction({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      updateList([...listData, data])
    })
  };

  return (
    <>
      <h1>Add a pet available for adoption</h1>
      <Form onSubmit={handleSubmit}>
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
            name="house_broken"
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
