import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import MuiAlert from '@material-ui/lab/Alert';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from '../../core/axios';

const styles = (theme) => ({
    root: {
        height: '100%',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errorHint: {
        color: 'red'
    },
    snackbarStyle: {
        width: '250px',
        marginTop: theme.spacing(2),
    },
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SignBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signType: this.props.signType,
            signIn_account: '',
            signIn_password: '',
            signUp_account: '',
            signUp_password: '',
            signUp_userName: '',
            signUp_email: '',
            signUp_errorMsg: '',
            signIn_errorMsg: '',
            snackbarOpen: false,
            snackbarMsg: '',
            snackbarStyle: 'success',
            env: (!!sessionStorage.getItem('hardcode') && sessionStorage.getItem('hardcode') === 'true') ? 'hardcode' : 'mock'
        }
    }

    // 切換至登入頁面
    changeToSignUp = () => {
        this.setState({
            signType: 'signUp'
        })
    }

    // 關閉彈跳視窗     
    snackbarClose = () => {
        this.setState({
            snackbarOpen: false,
            snackbarMsg: ''
        })
    }

    // 註冊
    signUp = async () => {
        if (this.state.env === 'hardcode') {
            this.setState({
                snackbarMsg: 'HardCode 模式下自動導向登入頁面',
                snackbarStyle: 'info',
                snackbarOpen: true
            })
        } else {
            const { signUp_account, signUp_password, signUp_userName, signUp_email } = this.state
            if (signUp_account && signUp_password && signUp_userName && signUp_email) {
                const Data = await axios.post("/user",
                    {
                        "account": signUp_account,
                        "password": signUp_password,
                        "name": signUp_userName,
                        "email": signUp_email,
                        "userIcon": "https://source.unsplash.com/random"
                    });
                if (Data.data.length === 0)
                    this.setState({
                        snackbarMsg: '註冊失敗',
                        snackbarStyle: 'error',
                        snackbarOpen: true
                    })
                else {
                    this.setState({
                        signType: 'signIn',
                        signUp_account: '',
                        signUp_password: '',
                        signUp_userName: '',
                        signUp_email: '',
                        signUp_errorMsg: '',
                        snackbarMsg: '註冊成功',
                        snackbarOpen: true,
                        snackbarStyle: 'success'
                    });
                }
            }
            else this.setState({ signUp_errorMsg: '請填寫所有欄位' })
        }
    }

    // 登入
    signIn = async () => {
        const { signIn_account, signIn_password } = this.state

        try {
            if (signIn_account && signIn_password) {
                let data;
                if (this.state.env === 'hardcode') {
                    data = [
                        {
                            "id": 1,
                            "account": "admin",
                            "password": "111111",
                            "name": "Admin 管理員",
                            "email": "a@A.com",
                            "userIcon": "https://source.unsplash.com/random"
                        }
                    ]
                    let isLogin = false;
                    data.forEach((item) => {
                        if (item.account === signIn_account && item.password === signIn_password) {
                            this.setState({
                                signIn_account: '',
                                signIn_password: '',
                                signIn_errorMsg: '',
                                snackbarMsg: '登入成功',
                                snackbarStyle: 'success',
                                snackbarOpen: true
                            });
                            this.props.getSignStatus(true);
                            this.props.getUserInfo(data);
                            isLogin = true;
                        }
                    })
                    if (!isLogin) this.setState({
                        snackbarMsg: "HardCode模式下請使用帳號：admin ，密碼：111111",
                        snackbarStyle: 'error',
                        snackbarOpen: true
                    })
                } else {
                    data = await axios.get("/user?account=" + signIn_account + "&password=" + signIn_password);
                    if (!!data && !!data.data && data.data.length > 0) {
                        this.setState({
                            signIn_account: '',
                            signIn_password: '',
                            signIn_errorMsg: '',
                            snackbarMsg: '登入成功',
                            snackbarStyle: 'success',
                            snackbarOpen: true
                        });
                        const userInfo = JSON.stringify(data.data);
                        sessionStorage.setItem('userInfo', userInfo)
                        this.props.getSignStatus(true);
                        this.props.getUserInfo(data.data);
                    } else this.setState({
                        snackbarMsg: "請輸入正確的帳號密碼",
                        snackbarStyle: 'error',
                        snackbarOpen: true
                    })
                }
            }
            else this.setState({
                snackbarMsg: "請輸入帳號密碼",
                snackbarStyle: 'error',
                snackbarOpen: true
            })
        }
        catch (error) {
            alert("mainFeaturedPost API Error.");
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container component="main" className={classes.root}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={5000}
                    onClose={this.snackbarClose}
                    open={this.state.snackbarOpen}
                >
                    <Alert className={classes.snackbarStyle} severity={this.state.snackbarStyle}>{this.state.snackbarMsg}</Alert>
                </Snackbar>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={5} className={classes.image} />
                <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
                    {
                        (this.state.signType === 'signIn')
                            ?
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <form className={classes.form} noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="signIn_account"
                                        label="Account"
                                        name="signIn_account"
                                        autoComplete="account"
                                        autoFocus
                                        value={this.state.signIn_account}
                                        onChange={event => this.setState({ signIn_account: event.target.value })}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="signIn_password"
                                        label="Password"
                                        type="password"
                                        id="signIn_password"
                                        autoComplete="current-password"
                                        value={this.state.signIn_password}
                                        onChange={event => this.setState({ signIn_password: event.target.value })}
                                    />
                                    <div className={classes.errorHint}>{this.state.signIn_errorMsg}</div>
                                    {/* <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    /> */}
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={this.signIn}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link variant="body2" onClick={this.changeToSignUp}>
                                                Don't have an account? Sign Up
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Box mt={5}>
                                        <Copyright />
                                    </Box>
                                </form>
                            </div>
                            :
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <form className={classes.form} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        name="userName"
                                        autoComplete="userName"
                                        autoFocus
                                        value={this.state.signUp_userName}
                                        onChange={event => this.setState({ signUp_userName: event.target.value })}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="account"
                                        label="Account"
                                        name="account"
                                        autoComplete="account"
                                        autoFocus
                                        value={this.state.signUp_account}
                                        onChange={event => this.setState({ signUp_account: event.target.value })}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={this.state.signUp_email}
                                        onChange={event => this.setState({ signUp_email: event.target.value })}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.state.signUp_password}
                                        onChange={event => this.setState({ signUp_password: event.target.value })}
                                    />
                                    <div className={classes.errorHint}>{this.state.signUp_errorMsg}</div>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={this.signUp}
                                    >
                                        Sign Up
                                    </Button>
                                    <Box mt={5}>
                                        <Copyright />
                                    </Box>
                                </form>
                            </div>
                    }
                </Grid>
            </Grid >
        );
    }
}

export default withStyles(styles, { withTheme: true })(SignBoard);