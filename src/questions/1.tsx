import React from "react";

//@ts-ignore
//eslint-disable-next-line
const list = ["eggs", "cheese", "ham", "flour", "bread"]; //use this variable

const One = () => {
  return (
    <>
      <div>Show the items here</div>
      {list.map((string, index) => {
        if (index % 2 == 0) {
          return <li key={string}>{string}</li>;
        }
        return null;
      })}
    </>
  )
};

export default One;