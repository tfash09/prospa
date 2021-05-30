import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import DashboardContent from './DashboardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#F4F8FB',
      height: '100%',
    },
}));


const Main = ({handleToggleSidebar, toggled }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header handleToggleSidebar={handleToggleSidebar} toggled={toggled} />
            <DashboardContent />
        </div>
    );
};

export default Main;

