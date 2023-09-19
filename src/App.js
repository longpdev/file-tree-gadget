import React from 'react';

const App = () => {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="something.mp4"></File>
        <File name="let_it_be.mp4"></File>

      </Folder>
      <File name="cat.jpeg"></File>
      <File name="dog.jpeg"></File>
    </Folder>
    <Folder name="Application">

    </Folder>

  </div>
}

const Folder = (props) => {

  return <div>
    {props.name}
    <div style={{ marginLeft: '17px' }}>
      {props.children}

    </div>

  </div >

}

const File = (props) => {
  return <div>{props.name}</div>
}


export default App;