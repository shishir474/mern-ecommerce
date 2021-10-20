import React from 'react'
import { Form,Container } from 'react-bootstrap'
/**
* @author
* @function Input
**/

export const Input = (props) => {
  return(
    //   <Container style={{marginTop:'8px'}}>
        <Form.Group controlId="formBasicEmail">
                <Form.Label style={{marginTop:'1 rem'}}>{props.Label}</Form.Label>
                <Form.Control 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}  
                />
                <Form.Text className="text-muted">
                    {props.errorMessage}
                </Form.Text>
        </Form.Group>


    //   </Container>
  

   )

 }