import PropTypes from 'prop-types';

import {useStyles} from "./style";
import './style';

import DeleteIcon from '@material-ui/icons/Delete';
import {Typography, Box, Button, TextField} from '@material-ui/core';

const InputField = ({ text, handleInputChange, handleSubmit, handleDeleteAll }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography className={classes.title} variant="h1" component="h2">
                Todos App
            </Typography>
            <form onSubmit={handleSubmit}>
                <Button className={classes.button} type="submit" variant="contained" color="primary">
                    Add todo
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteAll}
                >
                    Delete All
                </Button>
                <Box>
                    <TextField className={classes.textField} id="outlined-basic" label="Enter your todo..." variant="outlined" value={text} onChange={handleInputChange} />
                </Box>
            </form>
        </Box>
    );
};

InputField.propTypes = {
    text: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleDeleteAll: PropTypes.func
}

export default InputField;