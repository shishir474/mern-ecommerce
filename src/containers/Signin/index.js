import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Input } from "../../components/UI/Input";
import { login } from '../../actions'
import { useDispatch } from "react-redux";
/**
 * @author
 * @function Signin
 **/
  
export const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const dispatch = useDispatch();

  const userLogin = (e) => {

      e.preventDefault();

      const user = {
        email, password
      }

      dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{span: 6, offset: 3 }} >
            <Form onSubmit={userLogin}>
              <Input
                Label="Email"
                placeholder="Enter email"
                value={email}
                type="email"
                onChange={(e) => { setEmail(e.target.value)}}
              />

              <Input
                Label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
