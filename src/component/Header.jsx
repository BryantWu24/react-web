import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
    },
});

class Header extends Component {
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
                    <Button variant="outlined" size="small" color="inherit">
                        Sign up
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
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);