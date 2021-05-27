import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import axios from '../../../core/axios';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: '1rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%'
    },
    dataGridDiv: {
        height: '80vh',
        width: '100%'
    }
});
class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            title: '',
            category: 'eat',
            content: '',
            dataGridColumns: [],
            dataGridRows: [],
            selection: [],
        }
    }

    getArticleList = async () => {
        // const Data = await axios.get("/articlelist");
        const Data= {
            data: {
                "columns": [
                    {
                        "field": "number",
                        "headerName": "編號",
                        "width": 80
                    },
                    {
                        "field": "name",
                        "headerName": "文章名稱",
                        "width": 200
                    },
                    {
                        "field": "status",
                        "headerName": "已發布",
                        "width": 100
                    },
                    {
                        "field": "category",
                        "headerName": "類別",
                        "width": 100
                    },
                    {
                        "field": "viewCount",
                        "headerName": "查看人數",
                        "width": 100
                    },
                    {
                        "field": "likeCount",
                        "headerName": "喜歡人數",
                        "width": 100
                    }
                ],
                "data": [
                    {
                        "id": "article-000001",
                        "name": "文章名稱",
                        "status": "已發布",
                        "viewCount": "1909",
                        "likeCount": "200",
                        "category": "eating"
                    },
                    {
                        "id": "article-000002",
                        "name": "文章名稱2",
                        "status": "已發布",
                        "viewCount": "1909",
                        "likeCount": "200",
                        "category": "eating"
                    },
                    {
                        "id": "article-000003",
                        "name": "文章名稱",
                        "status": "已發布",
                        "viewCount": "1909",
                        "likeCount": "200",
                        "category": "eating"
                    },
                    {
                        "id": "article-000004",
                        "name": "文章名稱",
                        "status": "已發布",
                        "viewCount": "1909",
                        "likeCount": "200",
                        "category": "eating"
                    },
                    {
                        "id": "article-000005",
                        "name": "文章名稱",
                        "status": "未發發布",
                        "viewCount": "1909",
                        "likeCount": "200",
                        "category": "eating"
                    }
                ]
            }
        }
        if (Data.data) {

            if (Data.data.columns) {
                this.setState({
                    dataGridColumns: Data.data.columns
                });
            }

            if (Data.data.data && Data.data.data.length > 0) {
                let rows = []
                Data.data.data.forEach((item, index) => {
                    rows.push({
                        id: item.id,
                        number: index,
                        name: item.name,
                        status: item.status,
                        viewCount: item.viewCount,
                        likeCount: item.likeCount,
                        category: item.category
                    })
                })
                this.setState({
                    dataGridRows: rows
                })
            }
        } else {
            alert('articlelist API ERROR');
        }
    }

    componentDidMount = () => {
        this.getArticleList();
    }

    render() {
        const { classes } = this.props;
        const onCreate = () => {
            console.log('CREATE:', this.state.selection);
        }
        const onEdit = () => {
            console.log('EDIT', this.state.selection);
        }
        const onDelete = () => {
            console.log('DELETE', this.state.selection);
        }
        const onSelectionModelChange = (newSelection) => {
            console.log('new:', newSelection)
            this.setState({
                selection: newSelection
            })
        }

        return (
            <div >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7} >
                        <div className={classes.title}>
                            Article List
                            </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className={classes.header}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<DeleteOutlineIcon />}
                                onClick={onDelete}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<EditIcon />}
                                onClick={onEdit}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<PostAddIcon />}
                                onClick={onCreate}
                            >
                                Create
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.dataGridDiv}>
                            <DataGrid rows={this.state.dataGridRows}
                                columns={this.state.dataGridColumns}
                                checkboxSelection
                                onSelectionModelChange={onSelectionModelChange}
                                selectionModel={this.stateselection} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ArticleList);
