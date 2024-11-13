const TodoNew = (props) => {
  // console.log(">>> check point: ", props);
  const { addNewTodo } = props;

  // addNewTodo("Thành");
  return (
    <div className="todo-new">
      <input type="text" placeholder="Enter yout task" />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
