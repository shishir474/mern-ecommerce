import React from 'react'
import { Header } from '../Header'

/**
* @author
* @function 
**/

export const Layout  = (props) => {
  return(
    <>
       <Header />
       {props.children}
    </>
   )

 }