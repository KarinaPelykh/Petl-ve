import clsx from "clsx";
import { Link, useLocation } from "react-router";

const authNav = [
  { link: "login", name: "Log in" },
  { link: "register", name: "Registration" },
];

type HeaderAuthListProps = { className: string };

export const HeaderAuthList = ({ className }: HeaderAuthListProps) => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <ul className={clsx(className, "gap-2 ")}>
      {authNav.map((item) => (
        <Link to={item.link} key={item.name}>
          <li
            className={clsx(
              "py-3.75 px-5 rounded-ms flex justify-center text-ms uppercase",
              className && "py-3!",
              item.name === "Log in"
                ? "bg-yellow text-white px-8.75"
                : " text-yellow bg-cream",
              homePage && "border border-white",
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
