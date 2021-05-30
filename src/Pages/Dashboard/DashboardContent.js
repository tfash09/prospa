import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {AccountBalance, Payment, PermScanWifi, SpeakerPhone, CompareArrows} from '@material-ui/icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactApexChart from 'react-apexcharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}); 

const DashboardContent = () => {
    const classes = useStyles();
    const series = [{
        name: "STOCK ABC",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }]

    const options = {
        chart: {
          height: 150,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          strokeColors: '#FA4A84',
          colors: '#FA4A84',
        },
        markers: {
            size: 2,
            strokeColors: '#FA4A84',
            colors: '#FA4A84',
        },
        fill: {
            type: 'gradient',
            colors: '#FA4A84'
        },
        colors: ['#FA4A84'],
        grid: {
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      }
      
    return(
        <>
            <div className="main-content">
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <h2>Welcome back, Kathy</h2>
                        <p>Here's what had been happening in the last 
                             &nbsp;<span style={{color: '#FA4A84', textDecoration: 'underline' }}>7 days </span>
                        </p>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Button
                            variant="contained"
                            type="submit"
                            style={{ width: '15em', marginTop: '1em', backgroundColor: '#FA4A84', color: '#fff', textTransform: 'none' }}                        
                        >
                            Add as a sub account 
                        </Button>
                    </Col>
                </Row>

                <Row style={{marginTop: '2em'}}>
                    <Col lg={6} md={12} sm={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Row>
                                    <Col md={6} style={{textTransform: 'uppercase', fontSize: '14px'}}>
                                        <p>Current Account</p>
                                        <p style={{color: '#B9C4D0', marginTop: '-1em'}}>Providus Bank - 9906449822</p>
                                    </Col> 
                                    <Col md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <Payment style={{color: '#7E51FF', fontSize: '35px'}} />
                                    </Col>
                                </Row>
                            </CardContent>
                            <CardActions>
                                <Row>
                                    <Col md={12}>
                                        <p style={{fontSize: '30px', fontWeight: '300', margin: '0.3em 0 -0.3em 0.2em'}}>
                                            N814,800
                                            <span style={{fontSize: '18px', fontWeight: '400'}}>.45</span>
                                        </p>
                                    </Col>
                                </Row>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Row>
                                    <Col md={6} style={{textTransform: 'uppercase', fontSize: '14px'}}>
                                        <p>Savings Account</p>
                                        <p style={{color: '#B9C4D0', marginTop: '-1em'}}>Sub Account - 1234567890</p>
                                    </Col> 
                                    <Col md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        <Payment style={{color: '#00D2FF', fontSize: '35px'}} />
                                    </Col>
                                </Row>
                            </CardContent>
                            <CardActions>
                                <Row>
                                    <Col md={12}>
                                        <p style={{fontSize: '30px', fontWeight: '300', margin: '0.3em 0 -0.3em 0.2em'}}>
                                            N39,342
                                            <span style={{fontSize: '18px', fontWeight: '400'}}>.45</span>
                                        </p>
                                    </Col>
                                </Row>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>

                <Row style={{marginTop: '2em'}}>
                    <Col lg={7} md={12} sm={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <p>June summary</p>
                                <div className="money">
                                    <div className="item">
                                        <p>Money in</p>
                                        <p>N 5,650,000</p>
                                    </div>

                                    <div className="item">
                                        <p>Money out</p>
                                        <p>N 5,650,000</p>
                                    </div>
                                    <div className="item">
                                        <p>Difference</p>
                                        <p>N 5,650,000</p>
                                    </div>

                                </div>
                                <div className="chart">
                                    <ReactApexChart options={options} series={series} type="area" height={150} />    
                                </div>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col lg={5} md={12} sm={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <p>Cash outflow</p>

                                <div className="cashflow">

                                    <div className="cashflow-item">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <AccountBalance style={{color: '#E900AE'}} />
                                            <p style={{marginLeft: '1em', color: '#9DADBC'}}>Bank Fees</p>
                                        </div>
                                        <div>
                                            <p> -N 250,000</p>
                                            <ProgressBar variant="warning" style={{width: '100%', height: '8px', marginTop: '-1.3em'}} now={90} />
                                        </div>
                                    </div>

                                    <div className="cashflow-item">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <PermScanWifi style={{color: '#17ECD4'}} />
                                            <p style={{marginLeft: '1em', color: '#9DADBC'}}>Internet</p>
                                        </div>
                                        <div>
                                            <p> -N 250,000</p>
                                            <ProgressBar variant="warning" style={{width: '100%', height: '8px', marginTop: '-1.3em'}} now={60} />
                                        </div>
                                    </div>

                                    <div className="cashflow-item">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <SpeakerPhone style={{color: '#C155FF'}} />
                                            <p style={{marginLeft: '1em', color: '#9DADBC'}}>Marketing</p>
                                        </div>
                                        <div>
                                            <p> -N 250,000</p>
                                            <ProgressBar variant="warning" style={{width: '100%', height: '8px', marginTop: '-1.3em'}} now={35} />
                                        </div>
                                    </div>
                                    <div className="cashflow-item">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <CompareArrows style={{color: '#00EC47'}} />
                                            <p style={{marginLeft: '1em', color: '#9DADBC'}}>Transfer</p>
                                        </div>
                                        <div>
                                            <p> -N 250,000</p>
                                            <ProgressBar variant="warning" style={{width: '100%', height: '8px', marginTop: '-1.3em'}} now={15} />
                                        </div>
                                    </div>

                                </div>

                            </CardContent>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default DashboardContent;