import Scissors from "../svg/scissors-svgrepo-com.svg";
import Rock from "../svg/rock-svgrepo-com.svg";
import Paper from "../svg/paper-svgrepo-com.svg";
import { EOption } from "../consts";
import ElementSvg from "./ElementSvg";

function Elements({
  active,
  setActive,
  activeOpponent,
}: {
  active: string | null;
  activeOpponent: string | null;
  setActive: (value: string) => void;
}) {
  const elements = Object.values(EOption);
  function getSvgPath(element: string) {
    switch (element) {
      case "rock":
        return Rock;
      case "scissors":
        return Scissors;
      case "paper":
        return Paper;
      default:
        return "";
    }
  }

  return (
    <div className="elements">
      {elements.map((element, index) => (
        <ElementSvg
          key={index}
          element={element}
          active={active}
          activeOpponent={activeOpponent}
          setActive={setActive}
          svgPath={getSvgPath(element)}
        />
      ))}
    </div>
  );
}

export default Elements;
