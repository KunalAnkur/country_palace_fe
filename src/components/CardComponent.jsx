import "../App.css";
import { useNavigate } from "react-router-dom";
import avatarwomen from "../assets/avatarwomen.png";
import "./CardComponent.css";
import flag from "../Flags";
const CardComponent = (props) => {
  const Navigate = useNavigate();

  function goToBlog() {
    Navigate(`/blog/${props.index}`);
  }

  return (
    <div className="cardComponent" onClick={goToBlog}>
      <div className="cardTop">
        <h1 className="cardTitle">discovering {props.title}</h1>
        <img className="cardFlag" src={props.imageLink} alt="flag"></img>
      </div>

      <div className="cardBottom">
        <img src={avatarwomen} alt="avatarwomen" />
        <p>{props.createdBy}</p>
      </div>
    </div>
  );
};

export default CardComponent;
