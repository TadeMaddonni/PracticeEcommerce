import React from "react";
import "./styles.css";
import StarsIcon from "@mui/icons-material/Stars";
import { Link } from "react-router-dom";


const Item = (props) => {

    return (
        <Link className="noUnderline" to={`/detail/${props.id}`}>
            <div className="itemCard">
                <img className="itemImg" src={props.img} alt="" />
                <h4 className="itemTitle">{props.title}</h4>
                <div className="itemCardDivider">
                    <span className="itemInfo">${props.price}</span>
                    <span className="itemInfo rating">
                        {" "}
                        <StarsIcon sx={{ height: "16px" }} /> {props.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Item;
