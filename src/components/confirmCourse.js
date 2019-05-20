import React from 'react';
import {Container, Row, Col, Form, Button, InputGroup, FormControl, Navbar} from 'react-bootstrap';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class CornfirmCourse extends React.Component {
    constructor(props) {
        super(props);

        this.handleConfirmRegistrationFee = this.handleConfirmRegistrationFee.bind(this);
        this.handleSignin = this.handleSignin.bind(this)
        // this.deregister = this.deregister.bind(this);

        this.state = { 
            title: 'COURSE REGISTRATION',
            confirmfees: [],
            notification: null
         };
    }

    handleConfirmRegistrationFee(e){
        e.preventDefault();

        let {confirmfees} = this.state;

        let regNumber = this.refs.regNumber.value;
        let courseCode = this.refs.courseCode.value;


        if (regNumber !=="" && courseCode !=="") {
            let courses = {
                regNumber,
                courseCode
            }

            confirmfees.push(courses);
            localStorage.setItem("Student", JSON.stringify(confirmfees));
            
            let getStore = localStorage.getItem("Student");
            console.log(JSON.parse(getStore));
            

            // if (getStore.length() > 0 || getStore.length() === []) {
              
            // }
          
            this.setState({
              courseCode: courseCode,
              
              // confirmfees : JSON.parse(localStorage.getItem(confirmfees)),
              // confirmfees : this.state.confirmfees,
              notification: regNumber+" registered for " +courseCode,
            })
           
            this.refs.formReset.reset();
            
        }else{
           this.setState({
             notification:"Fill the inputs please!"
           })
        };
        
    } 
  // }
handleSignin(event){
  
  event.preventDefault();
  this.setState({
    notification: "Oops! Sign in page under development..."
  })
}
    render() {
      
        return (
            <div className="App">
            <Container style={{marginTop: '10%'}}> 
      <Row className="justify-content-md-center">
    <Col xs lg="2">
    
    </Col>

    <Col md="auto"> <h1 style={{color:"#348b8a"}}>{this.state.title}</h1> </Col>

    <Col xs lg="2">
      
    </Col>
  </Row>

  <Row>
    <Col xs={<i class="fas fa-signal-3    "></i>}></Col>
    <Col xs={6}>

    <Navbar className="bg-light justify-content-between" >
  <Form  ref="formReset" inline>
    <InputGroup >
      <InputGroup.Prepend>
    <Button className="btn btn-info" type="submit" onClick={this.handleSignin}>Sign in</Button>

        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon="stroopwafel" /></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl ref="regNumber" placeholder="Registration Number" aria-label="Username"  aria-describedby="basic-addon1"
      />
      <FormControl  ref="courseCode" placeholder="Course code" aria-describedby="basic-addon1" aria-label="Username"/>
    <Button className="btn btn-info" type="submit" onClick={this.handleConfirmRegistrationFee}>Confirm</Button>

    </InputGroup>
  </Form>
 
</Navbar>

<div style={{marginLeft:"40px"}}>
    {this.state.notification} 
  </div>
    </Col>
    <Col xs={3}>
          
    </Col>
  </Row>
</Container>
            </div>
        );
    }
}

export default CornfirmCourse;