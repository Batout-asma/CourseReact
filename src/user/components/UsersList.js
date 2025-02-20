import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <Card>
          <h2 className="text-xl font-semibold text-gray-700">
            No users found.
          </h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="list-none mx-auto p-0 w-[90%] max-w-[50rem] flex justify-center flex-wrap">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
