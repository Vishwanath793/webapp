import Storage from "./storage";

class Session extends Storage {
  constructor() {
    super(window.sessionStorage);
  }
}

export default Session;
