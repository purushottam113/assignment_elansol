import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    dob: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for handling form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ height:'100vh', backgroundColor:'#098066', display: 'flex'}}>
    <Card style={{ height: '50vh', width: '400px', margin: 'auto' }}>
      <Card.Body style={{ marginTop: '10px'}}>
        <Card.Title style={{ width: '200px',margin: 'auto', textAlign: 'center', backgroundColor: '#03fcfc', padding: '10px', position: 'relative', bottom: '40px' }}>Register</Card.Title>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="formBasicId" style={{ marginBottom: '20px'}}>
            <Form.Control
              type="text"
              placeholder="Username"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicDOB" style={{ marginBottom: '20px'}}>
        <Form.Control
          type="date"
          placeholder="Enter your date of birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" style={{ marginBottom: '20px'}}>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ marginBottom: '20px'}}>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{width:'100%'}}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default RegistrationForm;
