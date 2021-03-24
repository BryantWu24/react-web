import React, { Component } from 'react'
import Header from '../../component/Header'
import FeaturedPost from '../../component/FeaturedPost'
import MainFeaturedPost from '../../component/MainFeaturedPost'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import axios from '../../core/axios';

const styles = (theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
});

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            md: [],
            mainFeaturedPost: {},
            featuredPost: [{
                "title": " ",
                "date": "",
                "description": "",
                "image": "",
                "imageText": ""
            },
            {
                "title": "",
                "date": "",
                "description": "",
                "image": "",
                "imageText": ""
            }]
        }
    }

    componentWillMount() {
        fetch(post1)
            .then((res) => res.text())
            .then((md) => {
                let mdAry = this.state.md;
                mdAry.push(md)
                this.setState({ md: mdAry })
            });
        fetch(post2)
            .then((res) => res.text())
            .then((md) => {
                let mdAry = this.state.md;
                mdAry.push(md)
                this.setState({ md: mdAry })
            });
        fetch(post3)
            .then((res) => res.text())
            .then((md) => {
                let mdAry = this.state.md;
                mdAry.push(md)
                this.setState({ md: mdAry })
            });
        this.getMainFeaturedPost();
        this.getFeaturedPost();
    }

    getMainFeaturedPost = async () => {
        try {
            const Data = await axios.get("/mainFeaturedPost");
            this.setState({ mainFeaturedPost: Data.data })
        }
        catch (error) {
            alert("GET Error!!");
        }
    };

    getFeaturedPost = async () => {
        try {
            const Data = await axios.get("/featuredPost");
            this.setState({ featuredPost: Data.data })
        } catch (error) {
            alert("error", error);
        }
    }

    render() {
        const sections = [
            { title: 'Technology', url: '#' },
            { title: 'Design', url: '#' },
            { title: 'Culture', url: '#' },
            { title: 'Business', url: '#' },
            { title: 'Politics', url: '#' },
        ];

        const sidebar = {
            title: 'About',
            description:
                'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
            archives: [
                { title: 'March 2020', url: '#' },
                { title: 'February 2020', url: '#' },
                { title: 'January 2020', url: '#' },
                { title: 'November 1999', url: '#' },
                { title: 'October 1999', url: '#' },
                { title: 'September 1999', url: '#' },
                { title: 'August 1999', url: '#' },
                { title: 'July 1999', url: '#' },
                { title: 'June 1999', url: '#' },
                { title: 'May 1999', url: '#' },
                { title: 'April 1999', url: '#' },
            ],
            social: [
                { name: 'GitHub', icon: GitHubIcon },
                { name: 'Twitter', icon: TwitterIcon },
                { name: 'Facebook', icon: FacebookIcon },
            ],
        };

        const { classes } = this.props;
        return (
            <div style={{ background: 'black', color: 'white' }}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog" sections={sections} />

                    <main>
                        <MainFeaturedPost post={this.state.mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {
                                this.state.featuredPost.map((post) => (
                                    <FeaturedPost key={post.title} post={post} />
                                ))
                            }
                        </Grid>
                        <Grid container spacing={5} className={classes.mainGrid}>
                            {
                                (this.state.md.length > 0) ?
                                    <Main title="From the firehose" posts={this.state.md} />
                                    : ''
                            }
                            <Sidebar
                                title={sidebar.title}
                                description={sidebar.description}
                                archives={sidebar.archives}
                                social={sidebar.social}
                            />
                        </Grid>
                    </main>
                </Container>
                <Footer title="Footer" description="Something here to give the footer a purpose!" />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(HomePage)