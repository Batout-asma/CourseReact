import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <Link to={`/${props.id}/places`}>
      <li className="m-4 w-[calc(45%-2rem)] min-w-[17.5rem]">
        <Card className="flex items-center w-full h-full no-underline p-4 bg-[#292929] hover:bg-[#ff4949] group">
          <div className="w-16 h-16 mr-4">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#ff3939] group-hover:text-white">
              {props.name}
            </h2>
            <h3 className="text-lg">
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Card>
      </li>
    </Link>
  );
};

export default UserItem;
