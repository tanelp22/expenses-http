import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card.js";
import Button from "./Button.js";

import "./Error.css";

const BackDrop = () => {
  return <div className="backdrop" />;
};
const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="footer">
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};
const Error = (props) => {
  console.log(props);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Error;
//{} [] ({})
