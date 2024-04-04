import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    id: '',
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
    <div className="App" style={{ height:'100vh', backgroundColor:'#098066', display: 'flex'}}>
    <Card style={{ height: '40vh', width: '400px', margin: 'auto' }}>
      <Card.Body style={{ marginTop: '10px'}}>
        <Card.Title style={{ width: '200px',margin: 'auto', textAlign: 'center', backgroundColor: '#03fcfc', padding: '10px', position: 'relative', bottom: '40px' }}>SIGN IN</Card.Title>
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
      <Card.Text className="mt-3">
          Don't have an account?<Link to ="/registration">Register here.</Link>
        </Card.Text>
    </Card>
    </div>
  );
};

export default LoginForm;
