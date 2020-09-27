import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

/*import React from "react";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if(loading) {
            return <Loading />
        }
        return (
          <div>
            rooms container
            <RoomsFilter rooms={sortedRooms}/>
            <RoomsList rooms={rooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}*/
