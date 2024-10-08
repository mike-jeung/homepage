import { SETTINGS } from "../constants";

const getBreakpoint = ():string => {
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
export default getBreakpoint;