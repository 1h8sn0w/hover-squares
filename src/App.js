import {Box, Button, Container, FormControl, Grid, MenuItem, Select, Typography} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import {Alert} from "@material-ui/lab";
import {useRef, useState} from "react"
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
    cards: {
        display: "flex",
        flexWrap: 'wrap',
        margin: 10
    },
    card: {
        margin: 3,
        width: 50,
        height: 50
    },
    alert: {
        marginTop: theme.spacing(1)
    }
}));


function App() {
    const classes = useStyles();
    const [field, setField] = useState(null);
    const [mode, setMode] = useState('');
    const [alerts, setAlerts] = useState([]);

    const stateRef = useRef([]);

    stateRef.current = alerts;

    const handleChange = (event) => {
        setMode(event.target.value)
    }

    const createField = () => {
        setField(<Field mode={mode} alert={(message) => {
            setAlerts([message, ...stateRef.current])
        }}/>)
        setAlerts([])
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
                                <em>Pick mode</em>
                            </MenuItem>
                            {/*TODO: Fetch game mode data*/}
                            <MenuItem value={data.easyMode}>easyMode</MenuItem>
                            <MenuItem value={data.normalMode}>normalMode</MenuItem>
                            <MenuItem value={data.hardMode}>hardMode</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" color="primary" onClick={createField}>START</Button>
                    <Box className={classes.cards}>
                        {field}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.infoContainer}>
                    <Typography variant='h4'>Hover squares</Typography>
                    {alerts?.map(alert => {
                        return <Alert className={classes.alert} icon={false} severity="warning" key={Math.random()}>
                            {alert}
                        </Alert>
                    })}
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
