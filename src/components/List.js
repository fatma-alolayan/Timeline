import React from "react";

import { Timeline } from "vertical-timeline-component-for-react";
import myTimeLine from "../myTimeLine";

import Item from "./Item";

const List = () => {
  const timeLineList = myTimeLine.map((element) => (
    <Timeline lineColor={"#ddd"}>
      <Item element={element} key={element.id} />
    </Timeline>
  ));
  return <div>{timeLineList}</div>;
};

export default List;
