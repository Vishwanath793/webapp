import Local from "./storage.local";
import Session from "./storage.session";

export default {
  local: new Local(),
  session: new Session(),
};
