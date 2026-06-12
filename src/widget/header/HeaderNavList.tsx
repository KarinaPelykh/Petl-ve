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
    <ul className={clsx(className, "gap-2")}>
      {nav.map((item) => (
        <Link key={item.name} to={item.link}>
          <li
            className={clsx(
              "rounded-ms text-ms hover:border-yellow flex w-fit items-center border border-black/15 px-5 py-3.75 shadow-lg transition-all duration-500 hover:scale-105",
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
