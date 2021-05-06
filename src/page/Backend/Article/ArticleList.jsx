import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    select: {
        paddingTop: '1rem',
        width: '100%'

    },

});
class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            title: '',
            category: 'eat',
            content: ''
        }
    }
    render() {
        const { classes } = this.props;
        const categoryAry = [{
            name: '興趣',
            value: 'interest'
        }, {
            name: '美食',
            value: 'eatting'
        }, {
            name: '購物',
            value: 'shopping'
        }, {
            name: '住所',
            value: 'lodging'
        }, {
            name: '交通',
            value: 'traffic'
        }];
        const handleCategoryChange = (event) => {
            this.setState({ category: event.target.value });
        };

        const onSave = () => {
            console.log('this.state', this.state);
        }
        return (
            <div >
                ArticleList
                <Grid container spacing={3}>
                    <Grid item xs={8} md={8} xl={10}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="標題"
                            name="title"
                            autoComplete="title"
                            autoFocus
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                        />
                    </Grid>
                    <Grid item xs={4} md={4} xl={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.status}
                                    onChange={event => this.setState({ status: !this.state.status })}
                                    name="status"
                                    color="primary"
                                />
                            }
                            label="發布狀態"
                            labelPlacement="top"
                        />
                    </Grid>

                    <Grid item xs={12} md={6} xl={6}>
                        <FormControl variant="outlined" className={classes.select} >
                            <InputLabel className={classes.select} htmlFor="outlined-category">類別</InputLabel>
                            <Select
                                native
                                value={this.state.category}
                                onChange={handleCategoryChange}
                                label="類別"
                                inputProps={{
                                    name: 'category',
                                    id: 'outlined-category',
                                }}
                            >
                                {
                                    categoryAry.map((item, index) => {
                                        return (<option key={index} value={item.value}>{item.name}</option>)
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            label="內文"
                            name="content"
                            autoComplete="content"
                            autoFocus
                            multiline
                            rows={6}
                            value={this.state.content}
                            onChange={event => this.setState({ content: event.target.value })}
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={onSave}
                        >
                            Save
                    </Button>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ArticleList);
