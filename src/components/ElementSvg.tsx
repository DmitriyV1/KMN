type Props = {
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
}: Props) {
  return (
    <img
      {...(active === element && { style: { outline: "5px solid red" } })}
      {...(activeOpponent === element && {
        style: { outline: "5px solid green" },
      })}
      src={svgPath}
      width={100}
      onClick={() => setActive(element)}
    />
  );
}

export default ElementSvg;
