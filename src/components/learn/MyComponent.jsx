// () => { }
// component = html + css + js
// JSX - Dùng cho việc code JS trong HTML
// fragment - thay cho việc bọc div cha

import './style.css';
const MyComponent = () => {
    return (
        <>
            <div>THÀNH đang học ReactJS</div>
            <div className='child'>child</div>
        </>
    );
  };
  
  export default MyComponent;