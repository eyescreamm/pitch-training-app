import React from "react";
import _ from "lodash";
import { NOTE, NOTE_TO_KEY } from "../../grobal/constants";

type Props = {
  key: number;
  note: any;
  pressedKeys: string[];
};

const Key = (props: Props) => {
  let keyClassName = "whiteKey";

  const noteIsFlat = isFlat(props.note.length);
  const keyIsPressed = isPressed(props.note, props.pressedKeys);
  if (noteIsFlat) {
    keyClassName = "blackKey";
  }
  if (keyIsPressed) {
    keyClassName += " pressed";
  }
  let key;
  if (noteIsFlat) {
    key = <div className={keyClassName}></div>;
  } else {
    key = (
      <div className={keyClassName}>
        <div className="key-text">{props.note.toUpperCase()}</div>
      </div>
    );
  }
  return key;
};

function isFlat(length: number) {
  return length > 2;
}

function isPressed(note: keyof NOTE, pressedKeys: string[]) {
  return _.includes(pressedKeys, NOTE_TO_KEY[note]);
}

export default Key;
