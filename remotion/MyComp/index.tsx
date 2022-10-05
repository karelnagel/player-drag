import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { Rnd } from "react-rnd";
import { AbsoluteFill, Img } from "remotion";
import { ElementContext } from "../../pages";
import { Element, Props } from "../../types/MyComp";

export const MyComposition = ({ elements }: Props) => {
  return (
    <AbsoluteFill className="relative h-full w-full bg-green-200">
      {elements.map((element, index) => (
        <OneElement key={index} element={element} />
      ))}
    </AbsoluteFill>
  );
};

export const OneElement = ({ element }: { element: Element }) => {
  const { editElement, selectElement, selected } = useContext(ElementContext);

  return (
    <Rnd
      position={{ x: element.x, y: element.y }}
      size={{ height: element.height, width: element.width }}
      onDragStop={(_, data) => editElement({ ...element, x: data.x, y: data.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        editElement({
          ...element,
          width: Number(element.width + delta.width),
          height: Number(element.height + delta.height),
        });
      }}
      scale={0.4}
      className="overflow-hidden border-red-500"
      style={{ borderWidth: selected === element.id ? "10px" : "0" }}
    >
      <div className=" h-full w-full" onClick={() => selectElement(element.id)}>
        {element.type === "text" && (
          <p
            style={{
              fontSize: element.props.fontSize,
              backgroundColor: element.props.backgroundColor,
              color: element.props.color,
            }}
          >
            {element.props.text}
          </p>
        )}
        {element.type === "image" && (
          <Img
            className="pointer-events-none h-full w-full"
            src={element.props.src}
            style={{
              borderRadius: `${element.props.borderRadius}px`,
              objectFit: element.props.objectFit,
            }}
          />
        )}
      </div>
    </Rnd>
  );
};
