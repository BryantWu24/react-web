import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainFeaturedPostLoading: {
        position: 'relative',
        backgroundColor: 'white',
        marginBottom: theme.spacing(4),
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainFeaturedPostContentLoading: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
        background: 'gray',
        height: '300px'
    },
})

class MainFeaturedPost extends Component {
    render() {
        const { classes, post } = this.props;
        return (
            <div>
                {
                    (Object.values(post).length > 0)
                        ?
                        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
                            {/* Increase the priority of the hero background image */}
                            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
                            <div className={classes.overlay} />
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="h5" color="inherit" paragraph>
                                            {post.description}
                                        </Typography>
                                        <Link variant="subtitle1" href="#">
                                            {post.linkText}
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        :
                        <Paper className={classes.mainFeaturedPostLoading}>
                            <Grid container>
                                <Grid item md={12}>
                                    <div className={classes.mainFeaturedPostContentLoading}>

                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                }
            </div>
        )
    }
}

export default withStyles(styles)(MainFeaturedPost)