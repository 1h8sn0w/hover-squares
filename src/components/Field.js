import {TableRow} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import {logDOM} from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    table: {
        borderCollapse: "collapse",
        tableLayout: 'fixed',
        width: "auto"
    },
    cell: {
        border: 'solid 1px',
        height: 10,
        width: 10
    }
}))

function Field({mode}) {
    const classes = useStyles();
    console.log(mode)

    const createField = (field) => {
        if (!field) {
            return null
        }
        let arr = new Array(field)
        for (let i = 0; i < field; i++) {
            arr[i] = new Array(field)
        }

        for (let i = 0; i < field; i++) {
            for (let j = 0; j < field; j++) {
                arr[i][j] = '<TableCell className={classes.cell}/>';
            }
        }
        return arr
    }

    return (
        <>
            {
                createField(mode.field)?.forEach(row => {
                    return <TableRow>
                        {row.forEach(cell => {
                            return cell
                        })}
                    </TableRow>
                })
            }
        </>
    )
}

export default Field
