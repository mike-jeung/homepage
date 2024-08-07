import { SETTINGS } from "../constants";

const getBreakpoint = ():string => {
    let bp = "";
    const el = document.querySelector(".app") as HTMLDivElement;
    if (el) {
        const w = el.offsetWidth;
        if ( w > SETTINGS.breakpoints.tablet ) {
            bp = "desktop";
        } else {
            bp = "mobile";
        }
    }
    return bp;
};
export default getBreakpoint;