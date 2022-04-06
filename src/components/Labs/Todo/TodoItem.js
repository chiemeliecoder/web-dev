
const TodoItem = ({todo={done:true,status:'COMPLETED',title:'Buy Milk'}}) => {
  return(
        <li>
            <input type="checkbox"
                defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>);
}
export default TodoItem;
