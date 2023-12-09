"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEllipsisVertical,
  faCircle,
  faPlus,
  faMicrophone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Box, SelectedBox } from "@/app/components/Box";
import { useState } from "react";
import { events } from "@/app/constants/events";
import useFirebaseUser from "@/app/hooks/useFirebaseUser";

interface props {
  children: React.ReactNode;
  bgColor: string;
  width?: string;
}

interface chatName {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ChatBox: React.FC<props> = ({ children, bgColor, width }) => {
  return (
    <div
      className={`bg-gradient-to-r ${bgColor} ${width} relative m-4 rounded-3xl`}
    >
      {children}
    </div>
  );
};

const ChatHead: React.FC<props> = ({ children, bgColor }) => {
  return (
    <div
      className={`h-14 rounded-t-3xl ${bgColor} flex gap-2 justify-center items-center border-b-2 border-white`}
    >
      {children}
    </div>
  );
};

const EventsChat = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChatBox bgColor="from-[#C081D7] to-[#9076F8]" width="w-1/12">
      <ChatHead bgColor="bg-[#B275C8]">
        <FontAwesomeIcon icon={faUserCircle} size="xl" className="mr-3" />
        XUser
      </ChatHead>
      {children}

      {/* Direct Messages */}
      <div className="mt-12 border-t-2 border-white">
        <SelectedBox bgColor="bg-[#9076F8]">
          <p className="text-sm">Direct Messages</p>
        </SelectedBox>
        {/* <Box title="Shubhi" onClick={onClick} />
        <Box title="Alex" onClick={onClick} /> */}
      </div>
    </ChatBox>
  );
};

const TeamsChat = ({
  childrenTeams,
  childrenOtherTeams,
  eventName,
}: {
  childrenTeams: React.ReactNode;
  childrenOtherTeams: React.ReactNode;
  eventName: string;
}) => {
  return (
    <ChatBox bgColor="from-[#9076F8] to-[#403DC8]" width="w-3/12">
      <ChatHead bgColor="bg-[#7151F0]">
        <FontAwesomeIcon icon={faUserCircle} size="2xl" />
        <p className="text-xl">{eventName}</p>
      </ChatHead>

      {childrenTeams}

      {/* Other Teams */}
      <div className="mt-12 border-t-2 border-white">
        <SelectedBox
          bgColor="bg-[#9076F8]"
          title="Other Teams"
          textSize="text-2xl"
        />
        {childrenOtherTeams}
      </div>
    </ChatBox>
  );
};

const Chat = ({ name }: { name: string }) => {
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

export default function ChatRoom() {
  const [team, setTeam] = useState("");
  const [event, setEvent] = useState(events[0].name);
  const { logout } = useFirebaseUser();

  const mapEventName = events.map(
    (eventData: { name: string }, key: number) => {
      return (
        <div key={key}>
          {event === eventData.name ? (
            <SelectedBox bgColor="bg-[#9076F8]">
              <FontAwesomeIcon icon={faCircle} size="2xl" />
            </SelectedBox>
          ) : (
            <Box
              onClick={() => {
                setEvent(eventData.name), setTeam("");
              }}
            >
              <FontAwesomeIcon icon={faCircle} size="2xl" />
            </Box>
          )}
        </div>
      );
    }
  );

  const mapTeamName = events.map(
    (eventData: { name: string; teams: string[] }, key: number) => {
      const mapTeam = eventData.teams.map((teamName: string, key: number) => {
        return (
          <>
            {eventData.name === event && (
              <div key={key}>
                {team === teamName ? (
                  <SelectedBox title={teamName} bgColor="bg-[#351D96]" />
                ) : (
                  <Box title={teamName} onClick={() => setTeam(teamName)} />
                )}
              </div>
            )}
          </>
        );
      });
      return <div key={key}>{mapTeam}</div>;
    }
  );

  const mapOtherTeamName = events.map(
    (eventData: { name: string; otherTeams: string[] }, key: number) => {
      const mapTeam = eventData.otherTeams.map(
        (teamName: string, key: number) => {
          return (
            <>
              {eventData.name === event && (
                <div key={key}>
                  {team === teamName ? (
                    <SelectedBox title={teamName} bgColor="bg-[#351D96]" />
                  ) : (
                    <Box title={teamName} onClick={() => setTeam(teamName)} />
                  )}
                </div>
              )}
            </>
          );
        }
      );
      return <div key={key}>{mapTeam}</div>;
    }
  );

  return (
    // <div className="h-screen w-screen flex justify-center items-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:absolute before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //   just a test page
    // </div>
    <div className="bg-[#463C72] h-screen w-screen flex justify-around cursor-default">
      <p onClick={logout}>Logout</p>
      <EventsChat>{mapEventName}</EventsChat>
      <TeamsChat
        eventName={event}
        childrenOtherTeams={mapOtherTeamName}
        childrenTeams={mapTeamName}
      />
      <Chat name={team} />
    </div>
  );
}
