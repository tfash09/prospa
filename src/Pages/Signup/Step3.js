import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";


const Step3 = (props) => {
    props.setCurrentStep(props.currentStep);
    const history = useHistory();
    const [gender, setGender] = React.useState('');

    return (
        <div className="content">
            <Header prevStep={props.previousStep} currentStep={props.currentStep} />
            <div className="main">
                <div className="head">
                    <h4>Open a new business account</h4>
                    <p>A short description comes here</p>
                </div>

                <form onSubmit={(e) => {e.preventDefault(); history.push("/signin"); } }>

                    <FormControl component="fieldset" className="w-100" >
                        <RadioGroup aria-label="gender" name="gender1" required onChange={(e)=>setGender(e.target.value) }> 
                            <div className={`radioItem ${gender === '2' && 'active'}`}>
                                <FormControlLabel 
                                    value="2" 
                                    control={<Radio />} 
                                    label={
                                        <div>
                                            <p>I have a registered business/ charity with CAC </p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={`radioItem ${gender === '1' && 'active'}`}>
                                <FormControlLabel 
                                    value="1" 
                                    control={<Radio />} 
                                    label={
                                        <div>
                                            <p>My business is not yet registered, i would like to register </p>
                                            <p style={{fontSize: '12px', marginTop: '-15px', color: '#B2BECB'}}>Everything you need to start business</p>
                                            <p style={{fontSize: '12px', marginTop: '-10px', color: '#B2BECB'}}> <img src="https://lun-eu.icons8.com/a/7i-o4k1iyUO7XuTyCOiZNg/isArqHzoXU6PPYCvdjVZiA/Group%204.png" alt="checked" /> Registered business name with CAC </p>
                                            <p style={{fontSize: '12px', marginTop: '-13px', color: '#B2BECB'}}> <img src="https://lun-eu.icons8.com/a/7i-o4k1iyUO7XuTyCOiZNg/isArqHzoXU6PPYCvdjVZiA/Group%204.png" alt="checked" /> Tax identification number</p>
                                            <p style={{fontSize: '12px', marginTop: '-13px', color: '#B2BECB'}}> <img src="https://lun-eu.icons8.com/a/7i-o4k1iyUO7XuTyCOiZNg/isArqHzoXU6PPYCvdjVZiA/Group%204.png" alt="checked" /> Your account will be automatically opened on completion</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={`radioItem ${gender === '3' && 'active'}`}>
                                <FormControlLabel 
                                    value="3" 
                                    control={<Radio />} 
                                    label={
                                        <div>
                                            <p>I'm a freelancer i do business in my personal name </p>
                                        </div>
                                    }
                                />
                            </div>
                        </RadioGroup>
                    </FormControl>

                    <Button
                        variant="contained"
                        style={{ width: '100%', marginTop: '1em', backgroundColor: '#FA4A84', color: '#fff' }}
                        type="submit"
                    >
                        Next
                </Button>
                </form>
            </div>

        </div>
    )
}

export default Step3