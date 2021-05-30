import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({prevStep, currentStep}) => {

    return(
        <div className="header">
            <Row>
                <Col lg={6} md={4} xs={3}>
                    {currentStep > 1 &&
                        <Button
                            style={{ backgroundColor: '#FFF', color: '#B1BECA', fontSize: '12px', boxShadow: '0 0 10px #B1BECA', minWidth: '20px', padding: '5px 2px 5px 13px' }}
                            onClick={prevStep}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                    }
                </Col>
                <Col lg={6} md={8} xs={9}>
                    <p>Already a member? <Link to="/signin">Sign in</Link></p>
                </Col>
            </Row>
        </div>
    )
}

export default Header