import './home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setOpen(false);
    };

    const [result, setResult] = useState('');

    const clearDisplay = () => {
        setResult('');
    }

    const clickHandler = (e) => {
        try {
            setResult(result.concat(e.target.value));
        } catch (error) {
            setResult('');
        }
    }

    const showDisplay = () => {
        try {
            setResult(eval(result));
        } catch (error) {
            handleClick();
        }
    }

    const theme = createTheme({
        typography: {
            body1: {
                fontFamily: 'Poppins',
                fontSize: '1.3rem',
                '@media (max-width: 950px)': {
                    fontSize: '1rem',
                },
                '@media (max-width: 600px)': {
                    fontSize: '0.9rem',
                },
                '@media (max-width: 400px)': {
                    fontSize: '0.8rem',
                },
            }
        },
    });

    return (
        <>
            <div className='home-body'>
                <div className='home-section'>
                    <div className='home-1'>
                        Calculator
                    </div>

                    <div className='home-2'>
                        <div className='home-2-1'>
                            <div className='home-2-1-1'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            fullWidth
                                            type='text'
                                            value={result}
                                            focused={true}
                                            label='Display'
                                            variant="filled"
                                            id='home-cal-dis'
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <Button
                                color='error'
                                id='home-cal-btn-1'
                                variant='contained'
                                onClick={clearDisplay}
                            >
                                C
                            </Button>
                        </div>

                        <div>
                            <Button
                                value='7'
                                id='home-cal-btn-2'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                7
                            </Button>
                            <Button
                                value='8'
                                id='home-cal-btn-3'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                8
                            </Button>
                            <Button
                                value='9'
                                id='home-cal-btn-4'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                9
                            </Button>
                            <Button
                                value='/'
                                id='home-cal-btn-5'
                                variant='contained'
                                color='secondary'
                                onClick={clickHandler}
                            >
                                /
                            </Button>
                        </div>

                        <div>
                            <Button
                                value='4'
                                id='home-cal-btn-6'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                4
                            </Button>
                            <Button
                                value='5'
                                id='home-cal-btn-7'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                5
                            </Button>
                            <Button
                                value='6'
                                id='home-cal-btn-8'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                6
                            </Button>
                            <Button
                                value='*'
                                id='home-cal-btn-9'
                                variant='contained'
                                color='secondary'
                                onClick={clickHandler}
                            >
                                *
                            </Button>
                        </div>

                        <div>
                            <Button
                                value='1'
                                id='home-cal-btn-10'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                1
                            </Button>
                            <Button
                                value='2'
                                id='home-cal-btn-11'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                2
                            </Button>
                            <Button
                                value='3'
                                id='home-cal-btn-12'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                3
                            </Button>
                            <Button
                                value='-'
                                id='home-cal-btn-13'
                                variant='contained'
                                color='secondary'
                                onClick={clickHandler}
                            >
                                -
                            </Button>
                        </div>

                        <div>
                            <Button
                                value='0'
                                id='home-cal-btn-14'
                                variant='contained'
                                color='primary'
                                onClick={clickHandler}
                            >
                                0
                            </Button>
                            <Button
                                value='.'
                                id='home-cal-btn-15'
                                variant='contained'
                                color='secondary'
                                onClick={clickHandler}
                            >
                                .
                            </Button>
                            <Button
                                id='home-cal-btn-16'
                                variant='contained'
                                color='success'
                                onClick={showDisplay}
                            >
                                =
                            </Button>
                            <Button
                                value='+'
                                id='home-cal-btn-17'
                                variant='contained'
                                color='secondary'
                                onClick={clickHandler}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    className='footer-body'
                >
                    Developed by -&nbsp;
                    <Link
                        className='footer-link'
                        to='https://yashhkumarrrr.netlify.app/'
                    >
                        Yash
                    </Link>
                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Please Enter a Valid Expression!
                    </Alert>
                </Snackbar>
            </div>
        </>
    );
}

export default Home;