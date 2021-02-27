import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    checkbox: {
        color: "primary"
    },
    todoItem: {
        backgroundColor: "#1d59c4",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid cornflowerblue",
        padding: 10,
        cursor: "pointer",
        borderRadius: 5,
        alignItems: "center",
    },
    done: {
        color: "red",
        textDecoration: "line-through",
    },
    undone: {
        color: "#ffffff",
    },
    hider: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
}));