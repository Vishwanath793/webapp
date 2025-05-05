export function getEnvBasedOnHostName() {
  const authenticationUrl =
    "https://dev2-fedsvc.solutions.iqvia.com/oauth2/authorize";
  const ENV_LEVEL_CONFIGURATION = {
    LOCAL: {
      API_ENDPOINT:
        "https://rds-bis-rbv-dev.gdev-car3-k8s.work.iqvia.com/rbvmanager",
      BIS_HOME_URL: "https://dev-biosis.work.iqvia.com",
      HOST: "localhost",
      CLIENT_ID: "",
      CB_URL: "http://localhost:3082",
      AUTH_URL: authenticationUrl,
    },
    DEV: {
      API_ENDPOINT:
        "https://rds-bis-rbv-dev.gdev-car3-k8s.work.iqvia.com/rbvmanager",
      BIS_HOME_URL: "https://dev-biosis.work.iqvia.com",
      HOST: "rbvcontainer-dev.gdev-car3-k8s.work.iqvia.com",
      LOCAL_HOST: "localhost",
      CLIENT_ID: "",
      CB_URL: "https://rbvcontainer-dev.gdev-car3-k8s.work.iqvia.com",
      AUTH_URL: authenticationUrl,
    },
    TEST: {
      API_ENDPOINT:
        "https://rds-bis-rbv-test.gdev-car3-k8s.work.iqvia.com/rbvmanager",
      BIS_HOME_URL: "https://test-biosis.work.iqvia.com",
      HOST: "rbvcontainer-test.gdev-car3-k8s.work.iqvia.com",
      CLIENT_ID: "yuzndrmqa0JnJC0S4hy6aZUQbqsa",
      CB_URL: "https://rbvcontainer-test.gdev-car3-k8s.work.iqvia.com",
      AUTH_URL: authenticationUrl,
    },
    SVT: {
      API_ENDPOINT:
        "https://rds-bis-rbv-svt.gtest-car3-k8s.work.iqvia.com/rbvmanager",
      BIS_HOME_URL: "https://svt-biosis.work.iqvia.com",
      HOST: "rbvcontainer-svt.gtest-car3-k8s.work.iqvia.com",
      CLIENT_ID: "yuzndrmqa0JnJC0S4hy6aZUQbqsa",
      CB_URL: "https://rbvcontainer-svt.gtest-car3-k8s.work.iqvia.com",
      AUTH_URL: authenticationUrl,
    },
  };
  const hostName = window.location.hostname;
  let envConfigs = {};

  switch (hostName) {
    case ENV_LEVEL_CONFIGURATION.LOCAL.HOST:
      envConfigs = ENV_LEVEL_CONFIGURATION.LOCAL;
      break;
    case ENV_LEVEL_CONFIGURATION.DEV.HOST:
      envConfigs = ENV_LEVEL_CONFIGURATION.DEV;
      break;
    case ENV_LEVEL_CONFIGURATION.TEST.HOST:
      envConfigs = ENV_LEVEL_CONFIGURATION.TEST;
      break;
    case ENV_LEVEL_CONFIGURATION.SVT.HOST:
      envConfigs = ENV_LEVEL_CONFIGURATION.SVT;
      break;
  }
  return envConfigs;
}
