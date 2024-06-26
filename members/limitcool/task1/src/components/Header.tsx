import React from "react";

interface IProps {
  tool: React.ReactElement;
}

const Header: React.FC<IProps> = (props) => {
  const { tool } = props;
  return (
    <header>
      <h1>Todo List</h1>{tool}
    </header>
  )
}

export default Header