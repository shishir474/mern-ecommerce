import React from 'react'
import { Layout } from '../../components/Layout'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return(
    <Layout>
      <Row style={{marginTop:"50px"}}>
        <Col md={{span:6, offset: 3}}>
            <Form style={{alignItems: 'center'}}>
                    <Input 
                        Label="Email"
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