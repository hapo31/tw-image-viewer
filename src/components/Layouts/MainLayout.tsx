import styled from "@emotion/styled";
import { PropsWithChildren, ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
type Menu = { to: string; icon: ReactNode; alt?: string; bottom?: boolean };

const menus = [
  {
    to: "/",
    alt: "Top menu",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    to: "/likes",
    alt: "Favorites",
    icon: <FavoriteIcon fontSize="large" />,
  },
  {
    to: "/bookmarks",
    alt: "Bookmarks",
    icon: <BookmarkIcon fontSize="large" />,
  },
  {
    to: "/config",
    alt: "Config",
    bottom: true,
    icon: <SettingsIcon fontSize="large" />,
  },
] satisfies Menu[];

type Props = PropsWithChildren<{}>;

export default function MainLayout({ children }: Props) {
  const location = useLocation();
  return (
    <Wrap>
      <MenuWrap>
        {menus.map(({ icon, to, bottom }) => (
          <Link
            key={to}
            to={to}
            className={classNames({
              active: location.pathname === to,
              bottom: !!bottom,
            })}>
            {icon}
          </Link>
        ))}
      </MenuWrap>
      <MainContentWrap>{children}</MainContentWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  height: 100vh;
  width: 100vw;
`;

const MenuWrap = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50px;
  background-color: ${({ theme }) => theme.palette.menu.background};
  gap: 15px;
  padding: 15px 0px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 3px;

    &.bottom {
      margin-top: auto;
    }

    &.active {
      border-left: ${({ theme }) => theme.palette.menu.active} 2px solid;
      padding-left: 1px;
      > svg {
        fill: ${({ theme }) => theme.palette.menu.active};
      }
    }
    > svg {
      fill: ${({ theme }) => theme.palette.menu.button};
    }
  }
`;

const MainContentWrap = styled.main`
  padding: 2px;
  flex-grow: 1;
  height: 100%;
`;
