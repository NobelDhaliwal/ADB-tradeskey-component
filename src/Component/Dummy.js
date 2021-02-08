import React,{useState,useEffect,useRef} from 'react';
import { Table,Row,Col,Container } from 'react-bootstrap';
// import {useSpring, animated} from 'react-spring';
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./Dummy.css";
// import Flag from "react-flags";
//import Flag from 'react-world-flags'
import ReactCountryFlag from "react-country-flag";
const Dummy = () => {
    
    // useEffect(() => {
    //     Aos.init({
           
       
    //     });
    //   },[]);
       
  
    // const props = useSpring({ number: 1, from: { number: 0 } })
    return (
        <>
        
         <Container>
           <Row style={{marginTop:"7px"}}>
            <Col>
           
        {/* <animated.span>{propsone.number}</animated.span> */}
      
           <Table striped bordered hover variant="dark" responsive  > 
  <thead >
    <tr>
      <th>Latest Buy Offers</th>
      <th></th>
      <th>View More</th>
      </tr>
  </thead>
  <tbody className="pas" >
 
    <tr>
    <td>  <ReactCountryFlag countryCode="IN"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="India" svg  />
 </td>
      <td>Work Gloves</td><td>08-Feb</td>
      </tr>
      <tr>
      <td><ReactCountryFlag countryCode="US"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="United States"svg  /></td>
          <td>Purchaser Of Small nd Large Pools Of Notes</td>
          <td>08-Feb</td>
          </tr>
    <tr>
      <td><ReactCountryFlag countryCode="Ca"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Canada"svg  /></td>
      <td>Beans Peeling Machine</td>
      <td>08-Feb</td>
    </tr>
    <tr>
      <td><ReactCountryFlag countryCode="au"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Australia"svg  /></td>
      <td>Refined Corn Oil And Refined Sunflower Oil</td>
      <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="cn"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="China"svg  /></td>
    <td>Purchaser Of Small nd Large Pools Of Notes</td>
    <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="gb"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="United Kingdom"svg  /></td>
      <td>Copy Paper</td>
      <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="de"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Germany"svg  /></td>
      <td>Cocunut Husk And Shell Supplier Quezen Pro...</td>
      <td>08-Feb</td>
    </tr>
    
  </tbody>
</Table>

</Col>
<Col>
<Table striped bordered hover variant="dark" responsive  > 
  <thead >
    <tr>
      <th>Latest Buy Offers</th>
      <th></th>
      <th>View More</th>
      </tr>
  </thead>
  <tbody className="pas" >
 
    <tr>
    <td>  <ReactCountryFlag countryCode="IN"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="India" svg  />
 </td>
      <td>Work Gloves</td><td>08-Feb</td>
      </tr>
      <tr>
      <td><ReactCountryFlag countryCode="US"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="United States"svg  /></td>
          <td>Purchaser Of Small nd Large Pools Of Notes</td>
          <td>08-Feb</td>
          </tr>
    <tr>
      <td><ReactCountryFlag countryCode="Ca"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Canada"svg  /></td>
      <td>Beans Peeling Machine</td>
      <td>08-Feb</td>
    </tr>
    <tr>
      <td><ReactCountryFlag countryCode="au"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Australia"svg  /></td>
      <td>Refined Corn Oil And Refined Sunflower Oil</td>
      <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="cn"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="China"svg  /></td>
    <td>Purchaser Of Small nd Large Pools Of Notes</td>
    <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="gb"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="United Kingdom"svg  /></td>
      <td>Copy Paper</td>
      <td>08-Feb</td>
    </tr>
    <tr>
    <td><ReactCountryFlag countryCode="de"
   style={{
        fontSize: '2em',
        lineHeight: '2em',
    }}
    aria-label="Germany"svg  /></td>
      <td>Cocunut Husk And Shell Supplier Quezen Pro...</td>
      <td>08-Feb</td>
    </tr>
    
  </tbody>
</Table>
</Col>
</Row>
</Container>

</>
    )
}

export default Dummy;
