import {Table, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    table: {
        borderCollapse: "collapse",
        tableLayout: 'fixed',
        width: 'auto',
        margin: "auto"
    },
    td: {
        border: 'solid 1px black',
        overflow: "hidden"
    },
    tdHovered: {
        border: 'solid 1px black',
        overflow: "hidden",
        backgroundColor: "white"
    }
})


function Field({mode, alert}) {
    const classes = useStyles();

    if (!mode.field) {
        return null
    }

    let arr = new Array(mode.field)

    for (let i = 0; i < mode.field; i++) {
        arr[i] = new Array(mode.field)
    }

    for (let i = 0; i < mode.field; i++) {
        for (let j = 0; j < mode.field; j++) {
            arr[i][j] = `row ${i + 1} cell ${j + 1}`;
        }
    }

    const onMouseEnterHandler = (event, cell) => {
        if (event.target.style.backgroundColor === 'white') {
            event.target.style.backgroundColor = 'lightblue'
        } else {
            event.target.style.backgroundColor = 'white'
        }
        alert(cell)

    }

    return (
        <Table className={classes.table}>
            <TableHead>
                {arr.map(row => {
                    return <TableRow key={Math.random()}>
                        {row.map(cell => {
                            return <TableCell className={classes.td} style={{backgroundColor: 'white'}}
                                              key={Math.random()}
                                              onMouseEnter={(event) => onMouseEnterHandler(event, cell)}/>
                        })}
                    </TableRow>
                })}
            </TableHead>
        </Table>
    )
}

export default Field
