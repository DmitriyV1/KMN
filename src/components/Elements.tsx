import Scissors from "../svg/scissors-svgrepo-com.svg";
import Rock from "../svg/rock-svgrepo-com.svg";
import Paper from "../svg/paper-svgrepo-com.svg";
import "./index.css";

function Elements({
  active,
  setActive,
  activeOpponent,
  elements,
}: {
  active: string | null;
  activeOpponent: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  elements: string[];
}) {
  return (
    <div className="container">
      {elements.map((element, index) => (
        <img
          {...(active === element && { style: { outline: "5px solid red" } })}
          {...(activeOpponent === element && {
            style: { outline: "5px solid green" },
          })}
          // Лучше ничего не придумал...
          src={
            element === "rock"
              ? Rock
              : element === "scissors"
              ? Scissors
              : element === "paper"
              ? Paper
              : ""
          }
          width={100}
          onClick={() => setActive(element)}
          key={index}
        />
      ))}
    </div>
  );
}

export default Elements;
