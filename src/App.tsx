import React, { createContext, FC, ReactHTMLElement, useEffect, useRef, useState } from 'react';
import { debounce } from "./helpers";
import { SETTINGS } from "./constants";
import Home from './pages/Home/Home';

interface Status {
    appWidth?: number;
    appHeight?: number;
    isMobile?: boolean;
    isTablet?: boolean;
}
const StatusContext = createContext<Status>({});
const App: FC = () => {
    const appRef = useRef<HTMLDivElement>(null);

    const [status, setStatus] = useState<Status>({
        appWidth:0,
        appHeight:0,
        isMobile: true,
        isTablet: true,
    });
    console.log("status",status)
    useEffect( () => {
        const handleResize = debounce(() => {
            const w = appRef.current?.clientWidth || 0,
                h = appRef.current?.clientHeight || 0,
                isMobile = w <= SETTINGS.breakpoints.mobile ? true : false,
                isTablet = w <= SETTINGS.breakpoints.tablet ? true : false;
            
            console.log("w,h,tab,mob:",w,h,isTablet,isMobile)
            
            setStatus({
                appWidth: w,
                appHeight: h,
                isMobile: isMobile,
                isTablet: isTablet
            });
        },150);
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[]);
    return (
        <div className="app" ref={appRef}>
            <StatusContext.Provider value={status}>
                <Home />
            </StatusContext.Provider>
        </div>
    );
}

export default App;
export { StatusContext };