const TodoData = (props) => {
    // props là một object {}
    // {
    //     name: "Thành"
    //     age: 25;
    //     data: {}
    // }
    // CÁCH CODE 1
    const {name, age, data} = props;
    // các biến khai báo trong const chính là tên các object
    // được khai báo trong component
    // CÁCH CODE 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    // CÁCH CODE 3 (KHÔNG NÊN DÙNG VỚI NGƯỜI MỚI)

    console.log(">>> check props: ", props)
  return (
    <div className="todo-data">
        <div>My name is {name} </div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
    </div>
  );
};

export default TodoData;
