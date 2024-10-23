import Scissors from "../svg/scissors-svgrepo-com.svg";
import Rock from "../svg/rock-svgrepo-com.svg";
import Paper from "../svg/paper-svgrepo-com.svg";
import "./index.css";

function Elements({
  active,
  setActive,
  activeOpponent,
}: {
  active: string | null;
  activeOpponent: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div className="container">
      <img
        // Я вот этим вообще не горжусь
        {...(active === "rock" ? { style: { outline: "5px solid red" } } : "")}
        {...(activeOpponent === "rock"
          ? { style: { outline: "5px solid green" } }
          : "")}
        src={Rock}
        width={100}
        onClick={() => setActive("rock")}
      />
      <img
        {...(active === "scissors"
          ? { style: { outline: "5px solid red" } }
          : "")}
        {...(activeOpponent === "scissors"
          ? { style: { outline: "5px solid green" } }
          : "")}
        src={Scissors}
        width={100}
        onClick={() => setActive("scissors")}
      />
      <img
        {...(active === "paper" ? { style: { outline: "5px solid red" } } : "")}
        {...(activeOpponent === "paper"
          ? { style: { outline: "5px solid green" } }
          : "")}
        src={Paper}
        width={100}
        onClick={() => setActive("paper")}
      />
    </div>
  );
}

export default Elements;
