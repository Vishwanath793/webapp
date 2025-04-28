import Storage from "./storage";

class Local extends Storage {
  constructor() {
    super(window.localStorage);
  }
}

export default Local;
