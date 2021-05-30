import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Header from './Header';

const Step1 = (props) => {
    console.log("props", props)
    props.setCurrentStep(props.currentStep);
    const countries = [
        {
        name: 'Nigeria',
        num: '+234',
        },
        {
            name: 'Ghana',
            num: '+233',
        },
        {
        name: 'Togo',
        num: '+231',
        },
        {
        name: 'Cotonou',
        num: '+238',
        },
    ];

    return (
        <div className="content">
            <Header prevStep={props.previousStep} currentStep={props.currentStep} />
            <div className="main">
                <div className="head">
                    <h4>Create your account</h4>
                    <p>A short description about account types</p>
                </div>

                <form onSubmit={(e) => {e.preventDefault(); props.nextStep();} }>
                    <TextField style={{ width: '100%', marginTop: '0.7em' }} id="filled-basic" label="First name" variant="filled" required />
                    <TextField style={{ width: '100%', marginTop: '0.7em' }} id="filled-basic" label="Last name" variant="filled" required />
                    <TextField
                        style={{ width: '30%', marginTop: '0.7em', marginRight: '0.3em' }}
                        id="standard-select-currency"
                        select
                        label="Country"
                        variant="filled"
                        required
                        className="mu-select"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.num} value={option.num}>
                                {option.num}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField style={{ width: '68%', marginTop: '0.7em' }} type={`number`} id="filled-basic" label="Mobile Number" variant="filled" required />

                    <TextField style={{ width: '100%', marginTop: '0.7em' }} type={`email`} id="filled-basic" label="Email Address" variant="filled" required />

                    <Button
                        variant="contained"
                        type="submit"
                        style={{ width: '100%', marginTop: '1em', backgroundColor: '#FA4A84', color: '#fff' }}
                    >
                        Next
                </Button>
                </form>
            </div>

        </div>
    )
}

export default Step1