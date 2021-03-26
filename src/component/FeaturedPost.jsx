import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

class FeaturedPost extends Component {
    render() {
        const { classes, post } = this.props;
        return (
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    {
                        (post)
                            ?
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {post.date}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {post.description}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                                <Hidden xsDown>
                                    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                                </Hidden>
                            </Card>
                            :
                            <Card className={classes.card}>
                                <div className={classes.cardDetails} style={{ height: '180px' }}>
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            Loading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                    }

                </CardActionArea>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(FeaturedPost);
