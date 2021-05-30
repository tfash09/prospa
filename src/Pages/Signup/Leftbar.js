import Image from 'react-bootstrap/Image'

const Leftbar = ({currentStep}) => {

    return(
        <div className="leftbar">
            <h3>prospa</h3>
            <div className="stepper">
                <div className={`step ${currentStep > 0 && 'active'} `}></div>
                <div className={`step ${currentStep > 1 && 'active'} `}></div>
                <div className={`step ${currentStep > 2 && 'active'} `}></div>
                <div className={`step ${currentStep > 3 && 'active'} `}></div>
                <div className={`step ${currentStep > 4 && 'active'} `}></div>
            </div>
            <div className="info">
                <h3>Create multiple sub-account</h3>
                <p>Organise your business finances easily with multiple accounts. No limits</p>
            </div>
            <div className="safelock">
                <Image src="https://lun-eu.icons8.com/a/7i-o4k1iyUO7XuTyCOiZNg/eNrEPjlTw0mLz7L1UZXhow/Group%203.png" alt="safelock"  />
            </div>
            <div className="footer">
                <p>&copy; 2020 Prospa Inc</p>
            </div>
        </div>
    )

}

export default Leftbar