import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TextExpander
        collapsedNumWords={50}
        collapseButtonText="show less text"
        expandButtonText={"show more text"}
        buttonColor={"red"}
        textColor={"orange"}
        className="box"
        expanded={false}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  textColor = "black",
  className = "box",
  expanded = false
}) {
  const [isClicked, setIsClicked] = useState(expanded);
  const textStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  };
  const buttonStyle1 = {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: buttonColor
  };

  const text = children.substring(0, collapsedNumWords);
  return (
    <div style={textStyle} className={className}>
      <p style={{ color: textColor }}>{isClicked ? children : `${text}...`}</p>
      <button style={buttonStyle1} onClick={() => setIsClicked((v) => !v)}>
        {isClicked ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
