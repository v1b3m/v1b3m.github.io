import { MouseEventHandler } from "react";

export interface BurgerButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  navModalVisible: boolean;
  color: string;
}

export default function BurgerButton({
  handleClick,
  navModalVisible,
  color,
}: BurgerButtonProps): JSX.Element {
  return (
    <button className="menu-button" onClick={handleClick}>
      <ul className={`menu-bars ${navModalVisible ? "menu-open" : ""}`}>
        <li className="bar" style={{ backgroundColor: color }} />
        <li className="bar" style={{ backgroundColor: color }} />
        <li className="bar" style={{ backgroundColor: color }} />
      </ul>
    </button>
  );
}
