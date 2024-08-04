"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
// import { useAppSelector } from "@/redux-store/hooks";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import styles from "./header.module.scss";
import ThemeSwitch from "../SwitchTheme";

const {
  header_wrapper,
  desktop_header,
  mob_header,
  header,
  container,
  logo,
  menu,
  hembugger_menu,
  hembugger_menu_title,
  profileIcon,
  activeLink,
} = styles;

const mainMenu = [
  { name: "Home", link: "/" },
  { name: "Who We Are", link: "/about-us" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
];

const Header = () => {
  const { isAuthenticated, logggedInUser, loading }: any = {} //useAppSelector((state) => state.authUser);
  const [openProfile, setOpenProfile] = useState(false);
  const pathname = usePathname();
  const [openMobMenu, setOpenMobMenu] = useState(false);

  useEffect(() => {
    setOpenMobMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={`${header_wrapper} ${desktop_header} font-kamron`}>
        <div className={header}>
          <div className={`container ${container}`}>
            <div className={logo}>
              <Link href="/">
                <div>
                  <Image
                    src="/logo.svg"
                    width={60}
                    height={50}
                    priority={true}
                    alt="webtimes-logo"
                  />
                </div>
              </Link>
            </div>

            <ul className={menu}>
              {mainMenu.map(({ name, link }, idx) => (
                <li key={idx} className={`${pathname === link && activeLink}`}>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>

            <ul className={menu}>
              {isAuthenticated ? (
                <li
                  className={profileIcon}
                  onClick={() => setOpenProfile(!openProfile)}>
                  <Image
                    src={logggedInUser.avatar ? `/upload/avatar/${logggedInUser.avatar}` : '/user.png'}
                    width={40}
                    height={40}
                    alt={logggedInUser.username}
                    style={{objectFit: "cover"}}
                  />
                  <span>{logggedInUser.username}</span>
                </li>
              ) : (
                <li
                  className={`${
                    pathname === ("/userAuth/login" || "/userAuth/signup") &&
                    activeLink
                  }`}>
                  {/* <Link href={"/userAuth/login"}>Login | SignIn</Link> */}
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
              )}

              <li>
                <ThemeSwitch />
                {/* <Link href="/contact-us">
                  <Button title="Contact Us" />
                </Link> */}
              </li>
            </ul>
          </div>
        </div>

        {openProfile ? (
          <Profile
            user={logggedInUser}
            setOpenProfile={setOpenProfile}
            loading={loading}
          />
        ) : null}
      </header>

      {/* =========================== FOR MOBILE MENU ======================= */}
      <header className={`${header_wrapper} ${mob_header}`}>
        <div className={header}>
          <div className={`container ${container}`}>
            <div className={logo}>
              <Link href="/">
                <div>
                  <Image
                    src="/logo.svg"
                    width={60}
                    height={50}
                    priority={true}
                    alt="logo"
                  />
                </div>
              </Link>
            </div>

            <RiMenu3Line
              size={30}
              color="var(--black-color)"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenMobMenu(true)}
            />
          </div>

          <div
            className={`${hembugger_menu} [backdrop-filter:blur(10px)] bg-backgroundClr-dark border border-borderLine`}
            style={openMobMenu ? { transform: "translate(0)" } : {}}>
            <div className={hembugger_menu_title}>
              <div className={logo}>
                <Link href="/">
                  <div>
                    <Image
                      src={"/logo.svg"}
                      width={60}
                      height={50}
                      priority={true}
                      alt="logo"
                    />
                  </div>
                </Link>
              </div>

              <RiCloseFill
                size={30}
                color="var(--secondary-color)"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenMobMenu(false)}
              />
            </div>

            <div
              className="flex flex-col"
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "calc(100% - 85px)",
              }}>
              <ul className={menu} style={{ margin: "20px 0" }}>
                {mainMenu.map(({ name, link }, idx) => (
                  <li
                    key={idx}
                    className={`${pathname === link && activeLink} text-whiteClr`}>
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
                <li className="text-whiteClr">
                  <Link href="/contact-us">
                    <Button title="Contact Us" />
                  </Link>
                </li>
                <li className="text-whiteClr flex gap-2"><span>Dark/Light Mode:</span> <ThemeSwitch /></li>
              </ul>

              <ul
                className={`${menu}`}
                style={{
                  position: "sticky",
                  bottom: 0,
                  padding: "20px 0",
                  width: "100%",
                }}>
                {isAuthenticated ? (
                  <li
                    className={`${profileIcon} border border-t-borderLine text-whiteClr`}
                    onClick={() => setOpenProfile(!openProfile)}>
                    <Image
                      src={`/upload/avatar/${logggedInUser.avatar}`}
                      width={40}
                      height={40}
                      alt={logggedInUser.username}
                      objectFit="cover"
                    />
                    <span>{logggedInUser.username}</span>
                  </li>
                ) : (
                  <li className="text-whiteClr">
                    {/* <Link href={"/userAuth/login"}>
                      Login {"  "} | {"  "} SignIn
                    </Link> */}
                    <Link href={"/contact-us"}>
                      Contact Us
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {openProfile ? (
          <Profile
            user={logggedInUser}
            setOpenProfile={setOpenProfile}
            loading={loading}
          />
        ) : null}
      </header>
    </>
  );
};

export default Header;
