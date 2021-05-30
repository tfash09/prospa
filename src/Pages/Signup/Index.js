import '../../Assets/css/signup.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftbar from './Leftbar';
import StepWizard from "react-step-wizard";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


const Signup = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    return(
        <>
            <Container fluid style={{height: '100vh'}}>
                <Row style={{height: '100%'}}>
                    <Col lg={3} style={{padding: '0px'}}>
                        <Leftbar currentStep={currentStep} />                    
                    </Col>
                    <Col lg={9}>
                        <StepWizard>
                            <Step1 setCurrentStep={setCurrentStep} />
                            <Step2 setCurrentStep={setCurrentStep} />
                            <Step3 setCurrentStep={setCurrentStep} />
                        </StepWizard>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Signup