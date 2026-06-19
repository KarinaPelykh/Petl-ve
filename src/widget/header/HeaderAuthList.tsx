import clsx from "clsx";
import { Link, useLocation } from "react-router";

const authNav = [
  { link: "login", name: "Log in" },
  { link: "register", name: "Registration" },
];

type HeaderAuthListProps = { className?: string; btnClassName?: string };

export const HeaderAuthList = ({
  className,
  btnClassName,
}: HeaderAuthListProps) => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <ul className={clsx(className, "gap-2")}>
      {authNav.map((item) => (
        <Link to={item.link} key={item.name}>
          <li
            className={clsx(
              "rounded-ms text-ms flex justify-center px-5 py-3.75 uppercase shadow-lg transition-all duration-500 hover:scale-105",
              className && "py-3!",
              item.name === "Log in"
                ? "bg-yellow px-8.75 text-white"
                : "text-yellow bg-cream",
              homePage && "border border-white",
              btnClassName,
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
