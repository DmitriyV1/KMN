type TProps = {
  active: string | null;
  activeOpponent: string | null;
  setActive: (value: string) => void;
  element: string;
  svgPath: string;
};

function ElementSvg({
  active,
  activeOpponent,
  setActive,
  element,
  svgPath,
}: TProps) {
  return (
    <img
      className={`element element_${active === element ? "active" : ""}${
        activeOpponent === element ? "active-opponent" : ""
      }`}
      src={svgPath}
      onClick={() => setActive(element)}
    />
  );
}

export default ElementSvg;
