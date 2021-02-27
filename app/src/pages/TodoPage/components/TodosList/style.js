import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 560,
        width: "100%",
        margin: "10px auto 0",
        overflowX: "auto",
        overflowY: "auto"
    }
}));