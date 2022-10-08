import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Introduction() {
  return (
    <div className="h-screen bg-blue-200">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_cBATFDETGa.json"
        style={{ width: "50vw", height: "50vh" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}

export default Introduction;
