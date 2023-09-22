import React, { useState } from "react";

const App = () => {
  return <div>
    <Folder name="Documents">
      <Folder name="Music">
        <File name="all_star.mp4"></File>
        <File name="express_file.mp4"></File>
      </Folder>
      <File name="cats.jpegs"></File>
      <File name="dogs.jpegs"></File>
    </Folder>

    <Folder name="Application"></Folder>
  </div >
}

const Folder = (props) => {

  const [isOpen, setIsopen] = useState(true);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsopen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
}

const File = (props) => {
  const [name] = [props.name]
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpegs: 'file image',
    png: 'file image outline'
  };
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;
