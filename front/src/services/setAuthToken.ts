import axios from "axios";

function setAuthToken(token: string | false): void {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
export default setAuthToken;
