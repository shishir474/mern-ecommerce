import React from "react";
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

  const dispatch = useDispatch();
  
  const userLogin = (e) => {

      e.preventDefault();

      const user = {
        "email":"dholu@gmail.com",
        "password":"123456"
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
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                Label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
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
