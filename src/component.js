
import './Component.css'

function Component(props) {
 
  return (
    <div 
    className={props.componentClass}
    onClick={()=>props.onSubmitHandler(props.title)}
    >
        {props.title} </div>

  );
}



export default Component;