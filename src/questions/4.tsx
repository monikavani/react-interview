import React, {useState} from "react"; 

const items = ["one", "two", "three", "four"];
const Four = () => {
  const [query, setQuery] = useState('');
  return (
    <div>
      {/*Place the input here*/}
      {<input type="text" value="inputVal" onChange={(e) => setQuery(e.target.value)}/>}
      {items.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Four;
