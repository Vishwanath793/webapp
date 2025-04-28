const APP_ROUTES = {
  ROUTES: {
    MENU_LINK: {
      MY_DASHBOARD: "/home",
      DOCUMENT_REPOSITORY: "/documentrepository",
      SITE_DEVICE_ECG_UPLOAD: "/sitedeviceecgupload",
      MANAGE_DOCUMENT_REPOSITORY: "/managedocumentrepository",
      SUPPLIES_REQUEST_ON_THE_WEB: "/suppliesrequestontheweb",
      MESSAGE_BOARD: "/messageboard",
      COMPANY_INFORMATION_AND_CONTACT_LINKS:
        "/companyinformationandcontactlinks",
      TRAINING_REVIEW: "/trainingreview",
      TRAINING_ACKNOWLEDGEMENT: "/trainingacknowledgement",
    },
    SEARCH: {
      MORE_SEARCH_OPTIONS: "/moresearchoptions",
      ECG_LIST: "/ecglist",
      DCF_LIST: "/dcflist",
      PROJECT_SITE: "/projectsitedetails",
      PROTOCOL_DETAILS: "/protocoldetails",
    },
    REPORTS: {
      FINANCE_REPORT: "/financereport",
      QECG_METRICS_REPORT: "/qecgmetricsreport",
    },
  },
} as const;

export default APP_ROUTES;
