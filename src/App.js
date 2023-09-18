import React from 'react';

function App() {
  return <div>
    <Folder name="Desktop" >
      <File name="dog.jpeg"></File>
      <File name="cat.jpeg"></File>
    </Folder>
    <Folder name="Application" />

  </div>
}

const Folder = (props) => {
  const borderStyle = { border: '2px solid pink' }
  return <div style={borderStyle}>
    {props.name}
    {props.children}
  </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}

export default App;
