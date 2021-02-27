import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3)
    },
    textField: {
        width: "100%",
        maxWidth: 300,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 63,
        border: "1px solid #ffffff",
        marginBottom: 50
    }
}));