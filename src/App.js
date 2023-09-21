import React, { useState } from "react";

const App = () => {
  return <div>
    <Folder name="Documents">
      <Folder name="Menu">
        <File name="cat.jpeg"></File>
        <File name="dog.jpeg"></File>
      </Folder>
      <File name="cat.jpeg"></File>
      <File name="dog.jpeg"></File>
    </Folder>

    <Folder name="Application"></Folder>
  </div >
}

const Folder = (props) => {
  const handleClick = () => {
    setIsopen(!isOpen);
  }

  const [isOpen, setIsopen] = useState(false);
  const [name, children] = [props.name, props.children];
  return <div>
    <span onClick={handleClick}>{name}</span>
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>

  </div >
}

const File = (props) => {
  const [name] = [props.name]
  return <div>
    {name}
  </div>
}

export default App;
