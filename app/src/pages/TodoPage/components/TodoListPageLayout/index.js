import Container from "@material-ui/core/Container";

import './style';
import { useStyles } from "./style";

import InputField from "../InputField";
import TodosList from "../TodosList";

const TodoListPageLayout = ({ text, handleInputChange, handleSubmit, handleDeleteAll, todos, handleDeleteTodo, handleEditTodo, isSelected, handleOpenModal, handleCloseModal, isOpen  }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <InputField text={text} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleDeleteAll={handleDeleteAll} />
            <TodosList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} isSelected={isSelected} text={text} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} isOpen={isOpen} />
        </Container>
    );
};

export default TodoListPageLayout;