import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignBoard from '../page/HomePage/SignBoard';

const styles = theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: 'white'
    },
    toolbarTitle: {
        flex: 1,
        color: 'white'
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        color: 'white'
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: 'white'
    }, modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            signType: "signIn"
        }
    }

    signUp = () => {
        this.setState({
            open: true,
            signType: 'signUp'
        });
    };
    signIn = () => {
        this.setState({
            open: true,
            signType: 'signIn'
        });
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        const { classes, sections, title } = this.props;
        return (
            <div>
                <Toolbar className={classes.toolbar}>
                    <Button size="small" color="inherit">Subscribe</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {title}
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small" color="inherit" onClick={this.signUp}>
                        Sign up
                    </Button>
                    <Button variant="outlined" size="small" color="inherit" onClick={this.signIn}>
                        Sign in
                    </Button>
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <SignBoard signType={this.state.signType} />
                        </div>
                    </Fade>
                </Modal>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);