import { SETTINGS } from "../constants";

const getStatus = ():string => {
    let bp = "";
    const w = window.innerWidth;
    if (w) {
        if ( w > SETTINGS.breakpoints.tablet ) {
            bp = "desktop";
        } else {
            bp = "mobile";
        }
    }
    return bp;
};
export default getStatus;