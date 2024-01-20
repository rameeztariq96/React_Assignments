import React from "react";

function Question_one() {
  const name = "Hello World";
  const obj={name: "Hello world object"}
  const data=['We', 'are', 'United'];
  const list = [
    {name: "Hello World 1"},
    {name: "Hello World 2"},
    {name: "Hello World 3"}
    ]
  return (
    <div>
      <h1>{name}</h1>
      <h2>{obj.name}</h2>
      <h3>{data.map( (item,index) => ( 
        <p key={index}>{item}</p>
        ))}</h3>
        <h4>{list.map( (item, index) =>(
            <p key={index}>{item.name}</p>
        ))}</h4>
    </div>
  );
}

export default Question_one;
