import clsx from "clsx";
import { Link, useLocation } from "react-router";

const nav = [
  { link: "news", name: "News" },
  { link: "findPet", name: "Find pet" },
  { link: "friends", name: "Our friends" },
];

type HeaderNavListProps = { className: string; itemClassName?: string };

export const HeaderNavList = ({
  className,
  itemClassName,
}: HeaderNavListProps) => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <ul className={clsx(className, "gap-2 ")}>
      {nav.map((item) => (
        <Link to={item.link}>
          <li
            key={item.name}
            className={clsx(
              "py-3.75  flex items-center px-5 border border-black/15 rounded-ms  text-ms w-fit  transition-colors  duration-500 hover:border-yellow",
              itemClassName,
              homePage && "border-white text-white",
            )}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
