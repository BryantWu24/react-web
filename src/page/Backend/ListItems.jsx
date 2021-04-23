import React from 'react';
import BallotIcon from '@material-ui/icons/Ballot';
import DashboardIcon from '@material-ui/icons/Dashboard';

const iconColor = {
    color: 'white'
}


export const mainListItems = [{
    icon: <DashboardIcon style={iconColor} />,
    primary: "Dashboard",
}, {
    icon: <BallotIcon style={iconColor} />,
    primary: "Article Manage"
}];
