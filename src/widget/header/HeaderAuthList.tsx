import clsx from "clsx";
import { Link } from "react-router";

type AuthNav = { name: string; link: string };

type HeaderAuthListProps = {
  authNav: AuthNav[];
};

export const HeaderAuthList = ({ authNav }: HeaderAuthListProps) => {
  return (
    <ul className=" desktop-l:gap-2 hidden desktop-l:flex">
      {authNav.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "py-3.75 px-5 rounded-ms",
            item.name === "Log in"
              ? "bg-yellow text-white"
              : " text-yellow bg-cream",
          )}
        >
          <Link to={item.link}> {item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
