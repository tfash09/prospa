import '../../Assets/css/signup.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftbar from './Leftbar';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Signin = () => {
    const history = useHistory();


    return(
        <>
            <Container fluid style={{height: '100vh'}}>
                <Row style={{height: '100%'}}>
                    <Col lg={3} style={{padding: '0px'}}>
                        <Leftbar />                    
                    </Col>
                    <Col lg={9}>
                        <div className="content">
                            <div className="header">
                                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                            <div className="main">
                                <div className="head">
                                    <h4>Welcome back to Prospa</h4>
                                    <p>An account with powerful, personalised tools all in one place</p>
                                </div>

                                <form onSubmit={(e) => {e.preventDefault(); history.push("/dashboard");} }>
                                    <TextField style={{ width: '100%', marginTop: '0.7em' }} id="filled-basic" type="email" label="Email address" variant="filled" required/>
                                    <TextField style={{ width: '100%', marginTop: '0.7em' }} id="filled-basic" type="password" label="Enter password" variant="filled" required/>

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        style={{ width: '100%', marginTop: '1em', backgroundColor: '#FA4A84', color: '#fff' }}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Signin