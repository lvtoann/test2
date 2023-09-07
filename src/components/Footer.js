import React from 'react';
import ContactFooter from './footer/ContactFooter';
import ListProperty from './footer/ListProperty';
import Footer2 from './footer/Footer2';

export const Footer = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column', width:'100%', backgroundColor:'#FFFFFF'}}>
       <ContactFooter/>
       <ListProperty/>
       <Footer2/>
     
</div>
  );
}

