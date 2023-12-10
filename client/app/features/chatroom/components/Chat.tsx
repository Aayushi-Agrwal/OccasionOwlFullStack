"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ChatBox } from "./ChatBox";
import {
  faArrowRight,
  faEllipsisVertical,
  faMicrophone,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const Chat = ({ name }: { name: string }) => {
  const [sendActive, setSendActive] = useState(false);
  const [messages, setMessages] = useState<Array<string>>([]);

  function handleChange(e: { target: { value: string } }) {
    if (e.target.value) {
      setSendActive(true);
    } else {
      setSendActive(false);
    }
  }

  function addMessage(e: any) {
    e.preventDefault();
    const newMessage: string = e.target.typeBox.value;
    setMessages((current) => [...current, newMessage]);
    e.target.typeBox.value = "";
    setSendActive(false);
  }

  const mapMessage = messages.map((message: string, key: number) => {
    return (
      <div key={key} className="bg-white text-black">
        {message}
      </div>
    );
  });
  return (
    <ChatBox bgColor="from-[#403DC8] to-[#05045E]" width="w-7/12">
      <div className="h-14 rounded-t-3xl bg-[#403DC8] flex justify-between px-12 items-center">
        <p className="text-2xl">{name}</p>
        <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
      </div>
      <div>{mapMessage}</div>
      <div className="h-16 bg-[#403DC8] absolute bottom-0 w-full flex items-center rounded-b-3xl">
        <form
          className="w-full flex gap-4 justify-center items-center"
          onSubmit={addMessage}
        >
          <button className="h-9 w-9 bg-white rounded-full">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faPlus}
              size="xl"
            />
          </button>
          <input
            className="w-5/6 rounded-lg h-8 placeholder:pl-2 text-gray-800 px-2"
            id="typeBox"
            name="typeBox"
            placeholder="Type a message..."
            onChange={handleChange}
          />
          <button className="h-9 w-9 bg-white rounded-full" type="submit">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={sendActive ? faArrowRight : faMicrophone}
              size="xl"
            />
          </button>
        </form>
      </div>
    </ChatBox>
  );
};
