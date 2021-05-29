import {Button, Container, FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'block'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function App() {
    const classes = useStyles();
    const [mode, setMode] = useState({"easyMode": {"field": 5}});
    return (
        <Container maxWidth="sm">
            <FormControl className={classes.formControl}>
                <InputLabel>Pick mode</InputLabel>
                <Select
                    value={12}
                    onChange={() => {
                    }}
                >
                    <MenuItem value={mode.easyMode.field}>Easy mode</MenuItem>
                    <MenuItem value={10}>Normal mode</MenuItem>
                    <MenuItem value={20}>Hard mode</MenuItem>
                </Select>
                <Button>START</Button>
            </FormControl>
        </Container>
    );
}

export default App;


// {
//     "easyMode": {
//     "field": 5
// },
//     "normalMode": {
//     "field": 10
// },
//     "hardMode": {
//     "field": 15
// }
// }
