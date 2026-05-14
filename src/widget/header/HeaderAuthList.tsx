import clsx from "clsx";
import { Link } from "react-router";

const authNav = [
  { link: "login", name: "Log in" },
  { link: "register", name: "Registration" },
];

type HeaderAuthListProps = { className: string };

export const HeaderAuthList = ({ className }: HeaderAuthListProps) => {
  return (
    <ul className={clsx(className, "gap-2 ")}>
      {authNav.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "py-3.75 px-5 rounded-ms flex justify-center text-ms",
            className && "py-3!",
            item.name === "Log in"
              ? "bg-yellow text-white px-8.75"
              : " text-yellow bg-cream",
          )}
        >
          <Link to={item.link} className="uppercase">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
