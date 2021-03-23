import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Markdown from '../../component/Markdown';

const styles = theme => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
});

class Main extends Component {
    render() {
        const { posts, title, classes } = this.props;
        console.log('console.log(post);', posts);
        return (
            <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Divider />
                {posts.map((post) => (
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                ))}
            </Grid>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Main)