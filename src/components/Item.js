import React from "react";
import { TimelineItem } from "vertical-timeline-component-for-react";
import { LineStyle } from "../styles";

const Item = (props) => {
  const element = props.element;
  return (
    <LineStyle>
      <TimelineItem key={element.id} dateText={element.year}>
        {element.info}
      </TimelineItem>
    </LineStyle>
  );
};

export default Item;
