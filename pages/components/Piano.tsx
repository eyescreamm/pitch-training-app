import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { KEY, KEY_TO_NOTE, NOTES, VALID_KEYS } from "../../grobal/constants";
import Key from "./Key";

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  // key down時の処理
  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.repeat) {
        return;
      }
      const key: keyof KEY = event.key;
      var updatedPressedKeys: string[] = pressedKeys.slice(
        0,
        pressedKeys.length
      );
      if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
        updatedPressedKeys.push(key);
      }
      setPressedKeys(updatedPressedKeys);
      playNote(KEY_TO_NOTE[key]);
    },
    [pressedKeys]
  );

  // key up時の処理
  const handleKeyUp = useCallback(
    (event: any) => {
      const index = pressedKeys.indexOf(event.key);
      if (index > -1) {
        const newKeys = pressedKeys.slice(0, pressedKeys.length);
        newKeys.splice(index, 1);
        setPressedKeys(newKeys);
      }
    },
    [pressedKeys]
  );

  // Run only on first render ([] <- Run only on change)
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKeys, handleKeyDown, handleKeyUp]);

  const playNote = (note: string) => {
    if (!_.isEmpty(note)) {
      const element = document.getElementById(note)! as HTMLInputElement;
      const noteAudio = new Audio(element.src);
      noteAudio.play();
    }
  };

  const Keys = _.map(NOTES, (note, index) => {
    return <Key key={index} note={note} pressedKeys={pressedKeys} />;
  });

  const audioFiles = _.map(NOTES, (note, index) => {
    return <audio id={note} key={index} src={"../../notes/" + note + ".mp3"} />;
  });

  return (
    <div className="item-center">
      <div className="piano">{Keys}</div>
      <div>{audioFiles}</div>
    </div>
  );
};

export default Piano;
