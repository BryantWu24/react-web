import React, { Component } from 'react'
import Header from '../../component/Header'
import Container from '@material-ui/core/Container';

class HomePage extends Component {

    render() {
        const sections = [
            { title: 'Technology', url: '#' },
            { title: 'Design', url: '#' },
            { title: 'Culture', url: '#' },
            { title: 'Business', url: '#' },
            { title: 'Politics', url: '#' },
            { title: 'Opinion', url: '#' },
            { title: 'Science', url: '#' },
            { title: 'Health', url: '#' },
            { title: 'Style', url: '#' },
            { title: 'Travel', url: '#' },
        ];

        return (
            <div style={{ background: 'black' }}>
                <Container maxWidth="lg">
                    <Header title="Blog" sections={sections} />
                HOMEPAGE
                </Container>
            </div>
        )
    }
}

export default HomePage