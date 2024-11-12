// () => { }
// component = html + css + js
// JSX - Dùng cho việc code JS trong HTML
// fragment - thay cho việc bọc div cha

import "./style.css";

const MyComponent = () => {
  const thanhReact = "Thanh";
  // const thanhReact = 25; number
  // const thanhReact = true; boolean
  // const thanhReact = underfined;
  // const thanhReact = null;
  // const thanhReact = [1, 2, 3]; array
  // const thanhReact = {
  //     name:"thanh",
  //     age: 25
  // }
  return (
    <>
      <div>{JSON.stringify(thanhReact)} đang học ReactJS</div>
      <div>{console.log("THANH")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
