import { Player, Controls } from "@lottiefiles/react-lottie-player";

function IndexHome() {
  return (
    <div className="py-16" id="content-wrap">
      <div className="flex justify-end items-center p-14">
        <div className="w-100">
          <p className="text-7xl font-sans">
            Hello, <br /> My name is <br /> <b>Arya Wicaksana</b>
          </p>
        </div>
        <div className=" ">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_o6spyjnc.json"
            style={{ width: "50vw", height: "50vh" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>
    </div>
  );
}

export default IndexHome;
