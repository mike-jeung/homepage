import React, { createContext, FC, ReactHTMLElement, useEffect, useRef, useState } from 'react';
import { debounce } from "./helpers";

import Home from './pages/Home/Home';

interface Status {
    appWidth?: number;
    appHeight?: number;
}
const StatusContext = createContext<Status>({});
const App: FC = () => {
    const appRef = useRef<HTMLDivElement>(null);

    const [status, setStatus] = useState<Status>({
        appWidth:0,
        appHeight:0
    });
    useEffect( () => {
        const handleResize = debounce(() => {
            const w = appRef.current?.clientWidth,
                h = appRef.current?.clientHeight;
            console.log("w,h:",w,h)
            setStatus({
                appWidth: w,
                appHeight: h
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