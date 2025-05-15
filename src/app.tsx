import React, { Suspense, useEffect, useState } from "react";
import { useAppDispatch } from "./app/hooks";
import constants from "./constants";
import Header from "./features/header";
import CONSTANTS from "../src/constants/appRoutes";
import {
  getQecgListData,
  setLoggedInUserTeamLead,
} from "./features/landingPage/slice/landingPageSlice";
import { getDeliveryAndUserDetails } from "./services/landingPage";
import Session from "./services/storage/storage.session";
import Loader from "apollo-react/components/Loader";
import { Route, Routes } from "react-router-dom";
import LeftComponent from "./features/landingPage/Component/LeftComponent";
import Grid from "apollo-react/components/Grid";
import Typography from "apollo-react/components/Typography";
import style from "./features/landingPage/Component/LeftComponent/sidebarStyle.module.scss";
import "./app.scss";
const session = new Session();
const { ROUTES } = CONSTANTS;

const DashboardComponent = React.lazy(
  () => import("./features/landingPage/Component/DashboardComponent/index")
);
const SiteDeviceComponent = React.lazy(
  () => import("./features/landingPage/Component/SiteDeviceComponent/index")
);
const DocumentRepository = React.lazy(
  () => import("./features/landingPage/Component/DocumentRespository/index")
);
const MoreSearchOptions = React.lazy(
  () => import("./features/landingPage/Component/MoreSearchOptions/index")
);
const FinanceReport = React.lazy(
  () => import("./features/landingPage/Component/FinanceReport/index")
);
const QECGReport = React.lazy(
  () => import("./features/landingPage/Component/QECGReport/index")
);
const ManageDocument = React.lazy(
  () => import("./features/landingPage/Component/ManageDocument/index")
);
const SuppliesRequest = React.lazy(
  () => import("./features/landingPage/Component/SuppliesRequest/index")
);

const MessageBoard = React.lazy(
  () => import("./features/landingPage/Component/MessageBoard/index")
);
const TrainingReview = React.lazy(
  () => import("./features/landingPage/Component/TrainingReview/index")
);
const TrainingAcknowledgement = React.lazy(
  () => import("./features/landingPage/Component/TrainingAcknowledgement/index")
);
const ContactLinks = React.lazy(
  () => import("./features/landingPage/Component/ContactLinks/index")
);

//

function CoreApp({ userId, deliveryId }: any) {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string>(
    session.getItem("userName") || ""
  );
  const [isBladeOpened, setIsBladeOpened] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log("window size" + window.innerWidth);

      if (window.innerWidth < 768) {
        if (isBladeOpened) {
          setIsBladeOpened(false);
        }
      }
      if (window.innerWidth > 768) {
        setIsBladeOpened(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MenuLinkNavItems = [
    {
      path: ROUTES.MENU_LINK.DOCUMENT_REPOSITORY,
      navText: "Document Repository",
      child: (
        <Typography sx={{ marginBottom: ".2rem" }} variant="body2" darkMode>
          Document Repository
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.SITE_DEVICE_ECG_UPLOAD,
      navText: "Site Device ECG Upload",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Site Device ECG Upload
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.MANAGE_DOCUMENT_REPOSITORY,
      navText: "Manage Document Repository",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Manage Document Repository
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.SUPPLIES_REQUEST_ON_THE_WEB,
      navText: "Supplies Request on the Web",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Supplies Request on the Web
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.MESSAGE_BOARD,
      navText: "Message Board",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Message Board
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.COMPANY_INFORMATION_AND_CONTACT_LINKS,
      navText: "Company Information and Contact Links",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Company Information and Contact Links
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.TRAINING_REVIEW,
      navText: "Training Review",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Training Review
        </Typography>
      ),
    },
    {
      path: ROUTES.MENU_LINK.TRAINING_ACKNOWLEDGEMENT,
      navText: "Training Acknowledgement",
      child: (
        <Typography variant="body2" darkMode sx={{ marginBottom: ".2rem" }}>
          Training Acknowledgement
        </Typography>
      ),
    },
  ];

  const SearchNavItems = [
    {
      path: ROUTES.SEARCH.MORE_SEARCH_OPTIONS,
      navText: "More Search Options",
      child: (
        <Typography variant="body2" darkMode>
          {"More Search Options>"}
        </Typography>
      ),
    },
  ];

  const ReportNavItems = [
    {
      path: ROUTES.REPORTS.FINANCE_REPORT,
      navText: "Finance Report",
      child: (
        <Typography variant="body2" darkMode>
          Finance Report
        </Typography>
      ),
    },
    {
      path: ROUTES.REPORTS.QECG_METRICS_REPORT,
      navText: "QECG Metrics Report",
      child: (
        <Typography variant="body2" darkMode>
          QECG Metrics Report
        </Typography>
      ),
    },
  ];

  // const getUserDeliveryDetails = (deliveryId: string, userId: string) => {
  //   getDeliveryAndUserDetails(deliveryId, userId).then((response) => {
  //     const { output } = response;
  //     if (output) {
  //       session.setItem("userAndDeliveryDetails", JSON.stringify(output));
  //       setUserName(output?.userName);
  //       session.setItem("userName", output?.userName);
  //       dispatch(
  //         setLoggedInUserTeamLead(
  //           output?.roleDetails?.includes(constants.TEAM_LEAD)
  //         )
  //       );
  //       dispatch(getQecgListData(deliveryId));
  //     }
  //   });
  // };
  useEffect(() => {
    if (deliveryId && userId) {
      session.setItem("userId", userId);
      session.setItem("deliveryId", deliveryId);
      // getUserDeliveryDetails(deliveryId, userId);
    }
  }, [deliveryId, userId]);

  //blade expanded-closed
  const handleBladeOpened = (e: any) => {
    setIsBladeOpened(!isBladeOpened);
  };

  return (
    <>
      <React.Fragment>
        <Header userName={userName} />

        <Grid container spacing={1}>
          <Grid item xs={isBladeOpened ? 3 : 0.5}>
            <LeftComponent
              handleBladeOpen={handleBladeOpened}
              isBladeOpen={isBladeOpened}
              menuNavItems={MenuLinkNavItems}
              searchNavItems={SearchNavItems}
              reportsNavItems={ReportNavItems}
              isDisplay={isMenuOpen}
            />
          </Grid>

          <Grid item xs={isBladeOpened ? 9 : 11.5} className="rightGrid">
            <Suspense fallback={<Loader overlayClassName="fallback-loader" />}>
              <Routes>
                <Route
                  path={ROUTES.MENU_LINK.MY_DASHBOARD}
                  element={<DashboardComponent />}
                />
                <Route
                  path={ROUTES.MENU_LINK.SITE_DEVICE_ECG_UPLOAD}
                  element={<SiteDeviceComponent />}
                />
                <Route
                  path={ROUTES.MENU_LINK.DOCUMENT_REPOSITORY}
                  element={<DocumentRepository />}
                />
                <Route
                  path={ROUTES.SEARCH.MORE_SEARCH_OPTIONS}
                  element={<MoreSearchOptions />}
                />
                <Route
                  path={ROUTES.REPORTS.FINANCE_REPORT}
                  element={<FinanceReport />}
                />
                <Route
                  path={ROUTES.REPORTS.QECG_METRICS_REPORT}
                  element={<QECGReport />}
                />
                <Route
                  path={ROUTES.MENU_LINK.TRAINING_REVIEW}
                  element={<TrainingReview />}
                />
                <Route
                  path={ROUTES.MENU_LINK.TRAINING_ACKNOWLEDGEMENT}
                  element={<TrainingAcknowledgement />}
                />
                <Route
                  path={ROUTES.MENU_LINK.MANAGE_DOCUMENT_REPOSITORY}
                  element={<ManageDocument />}
                />
                <Route
                  path={ROUTES.MENU_LINK.COMPANY_INFORMATION_AND_CONTACT_LINKS}
                  element={<ContactLinks />}
                />
                <Route
                  path={ROUTES.MENU_LINK.MESSAGE_BOARD}
                  element={<MessageBoard />}
                />
                <Route
                  path={ROUTES.MENU_LINK.SUPPLIES_REQUEST_ON_THE_WEB}
                  element={<SuppliesRequest />}
                />
              </Routes>
            </Suspense>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
}
export default CoreApp;
