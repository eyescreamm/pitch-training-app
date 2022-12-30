import React, { useCallback, useEffect, useState } from "react";
import { KEY, KEY_TO_NOTE, NOTES, VALID_KEYS } from "../grobal/constants";
import Menu from "./components/Menu";
import Piano from "./components/Piano";

const Play = () => {
  const [correctKey, setCorrectKey] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const settingCorrectKey = () => {
    const randNum = Math.floor(Math.random() * 12);
    setCorrectKey(NOTES[randNum]);
    const audioPath = "../../notes/" + NOTES[randNum] + ".mp3";
    const noteAudio = new Audio(audioPath);
    noteAudio.play();
  };

  console.log(correctKey);

  const onCorrected = () => {
    const correctAudio = new Audio("../../correctAnswer.mp3");
    correctAudio.play();
    setTimeout(settingCorrectKey, 700);
  };

  const onMistook = () => {
    const wrongAudio = new Audio("../../wrongBuzzer.mp3");
    wrongAudio.play();
  };

  const isCorrected = (key: keyof KEY) => {
    console.log(correctKey);
    KEY_TO_NOTE[key] == correctKey
      ? setTimeout(onCorrected, 300)
      : setTimeout(onMistook, 300);
  };

  // key down時の処理
  const handleKeyDown = (event: any) => {
    if (event.repeat) {
      return;
    }
    const key: keyof KEY = event.key;
    if (isPlaying) isCorrected(key);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleStart = () => {
    setIsPlaying(true);
    settingCorrectKey();
  };

  const handleReplay = () => {
    const audioPath = "../../notes/" + correctKey + ".mp3";
    const noteAudio = new Audio(audioPath);
    noteAudio.play();
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="fixed bottom-0 right-0 py-20 px-20">
        <div className="menu py-1.5 px-1.5">
          <div className="flex">
            <div
              className="menu-wrap menu-btn mr-1.5 home"
              onClick={handleStart}
            >
              <span className="px-2">home</span>
            </div>
            {!isPlaying ? (
              <div
                className="menu-btn menu-border mr-1.5 play"
                onClick={handleStart}
              >
                <span className="px-12">start</span>
              </div>
            ) : (
              <div className="menu-wrap menu-border flex px-1 py-1 mr-1.5 play-btn">
                <div
                  className="menu-btn menu-border mr-1 px-2 play"
                  onClick={handleReplay}
                >
                  <span className="px-1">replay</span>
                </div>
                <div
                  className="menu-btn menu-border px-2 play"
                  onClick={handleEnd}
                >
                  <span className="">end</span>
                </div>
              </div>
            )}
            <div className="menu-btn menu-wrap setting" onClick={handleStart}>
              <span className="px-4">setting</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center fixed bottom-0 justify-center px-20 py-20">
        <Piano />
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Play;
