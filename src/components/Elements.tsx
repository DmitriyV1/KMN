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
  setActive: (value: string) => void;
  // use enum
  elements: string[];
}) {
  // swtich-case
  const getImg = (element: string) => (
      element === "rock"
      ? Rock
      : element === "scissors"
          ? Scissors
          : element === "paper"
              ? Paper
              : "")

  return (
    <div className="container">
      {elements.map((element, index) => (
        <img
          {...(active === element && { style: { outline: "5px solid red" } })}
          {...(activeOpponent === element && {
            style: { outline: "5px solid green" },
          })}
          src={
            getImg(element)
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
