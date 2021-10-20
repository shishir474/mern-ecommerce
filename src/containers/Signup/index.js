import React from 'react'
import { Layout } from '../../components/Layout'
import { Form,Button,Row,Col, Container } from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
/**
* @author
* @function 
**/

export const Signup = (props) => {
  return(
    <Layout>
        <Row style={{marginTop:"50px"}}>
          <Col md={{span:6, offset: 3}}>
              <Row>
                <Col md={6}>
                     <Input 
                        Label="First Name"
                        placeholder="First Name"
                        value=""
                        type="text"
                        onChange={ ()=>{} }
                     />
                </Col>
                <Col md={6}>
                      <Input 
                        Label="Last Name"
                        placeholder="Last Name"
                        value=""
                        type="text"
                        onChange={ ()=>{} }
                     />
                </Col>
              </Row>
              <Form >
                     <Input 
                        Label="Email Address"
                        placeholder="Enter email"
                        value=""
                        type="email"
                        onChange={ ()=>{} }
                     />

                    <Input 
                        Label="Password"
                        placeholder="Password"
                        value=""
                        type="password"
                        onChange={ ()=>{} }
                     />
  
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>

              
              </Form>
          </Col>
        

        </Row>
          
  </Layout>
   )

 }