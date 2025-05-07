import NavigationBar, {
  NavigationBarMenuItem,
} from "apollo-react/components/NavigationBar";
import Typography from "apollo-react/components/Typography";
import Avatar from "apollo-react/components/Avatar";
import SettingsIcon from "apollo-react-icons/Cog";

import HelpIcon from "apollo-react-icons/Help";
import UserIcon from "apollo-react-icons/User";
import { getEnvBasedOnHostName } from "../common/utils/projectEnvPath";
import navStyles from "./Header.module.scss";
import CONSTANTS from "../../constants/appRoutes";
import { useNavigate } from "react-router-dom";

const { ROUTES } = CONSTANTS;
const RbvManagerName: any = () => {
  return (
    <Typography className={navStyles.logo}>
      &nbsp; &nbsp; IQVIA™&nbsp; &nbsp; &nbsp;
      <span style={{ fontWeight: 700 }}>
        QECG WebApp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </Typography>
  );
};

function Header({ userName }: { userName: string }): JSX.Element {
  const navigate = useNavigate();

  const menuItems: NavigationBarMenuItem[] = [
    {
      text: <span className={navStyles.menuText}>Home</span>,
      pathname: "home",
      variant: "classic",
    },
  ];

  const profileMenuProps: any = {
    name: "Akash Singh Parihar",
    title: "Developer",
    email: "akash.singhparihar@iqvia.com",
    logoutText: "Log out",
    icon: (
      <Avatar size="small" alt="Akash_Parihar" stateless>
        ASP
      </Avatar>
    ),
    menuItems: [
      {
        text: "Profile",
        icon: UserIcon,
        pathname: "Profile",
      },
      {
        text: "Settings",
        icon: SettingsIcon,
        pathname: "Settings",
      },
      {
        text: "Help",
        icon: HelpIcon,
        pathname: "Help",
      },
    ],
  };

  return (
    <>
      <div>
        <NavigationBar
          className={navStyles.rbvNavBar}
          profileMenuProps={profileMenuProps}
          variant="classic"
          LogoComponent={RbvManagerName}
          menuItems={menuItems}
          id="NavCheck"
        />
      </div>
    </>
  );
}

export default Header;
