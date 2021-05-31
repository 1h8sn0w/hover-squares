import {Box, Button, Container, FormControl, Grid, MenuItem, Select, Typography} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import {useState} from "react"
import Field from "./components/Field";
import data from './data'

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        marginTop: theme.spacing(2),
    },
    formControl: {
        marginRight: theme.spacing(1),
        minWidth: 125
    },
    infoContainer: {},
    alert: {
        marginBottom: theme.spacing(2)
    },
    cards: {
        display: "flex",
        flexWrap: 'wrap',
        margin: 10
    },
    card: {
        margin: 3,
        width: 50,
        height: 50
    }
}));


function App() {
    const classes = useStyles();
    const [alerts, setAlerts] = useState([]);
    const [mode, setMode] = useState('');

    const handleChange = (event) => {
        setMode(event.target.value)
    }

    return (
        <Container className={classes.rootContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={mode}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value="" disabled>
                                <em>Placeholder</em>
                            </MenuItem>
                            {/*TODO: Fetch game mode data*/}
                            <MenuItem value={data.easyMode}>easyMode</MenuItem>
                            <MenuItem value={data.normalMode}>normalMode</MenuItem>
                            <MenuItem value={data.hardMode}>hardMode</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" color="primary">START</Button>
                    <Box className={classes.cards}>
                        <Field mode={mode} alert={(message) => {
                            setAlerts([message, ...alerts])
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.infoContainer}>
                    <Typography variant='h4' className={classes.alert}>Hover squares</Typography>
                    {
                        alerts?.map(alert => {
                            return <Alert icon={false} severity="warning" className={classes.alert} key={Math.random()}>
                                {alert}
                            </Alert>
                        })
                    }

                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
