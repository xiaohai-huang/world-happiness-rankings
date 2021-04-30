import fakeAPI from "./fakeAPI";
import qutAPI from "./qutAPI";
const dev = false;
const API = dev ? fakeAPI : qutAPI;
export default API;
