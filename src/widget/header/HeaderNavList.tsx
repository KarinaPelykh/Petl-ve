import { Link } from "react-router";

type Nav = { name: string; link: string };

type HeaderNavListProps = {
  nav: Nav[];
};

export const HeaderNavList = ({ nav }: HeaderNavListProps) => {
  return (
    <ul className="hidden desktop-l:flex desktop-l:gap-2.5">
      {nav.map((item) => (
        <li
          key={item.name}
          className="py-3.75 px-5 border border-black/15 rounded-ms"
        >
          <Link to={item.link}> {item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
