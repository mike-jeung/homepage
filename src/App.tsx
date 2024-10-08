import React, { createContext, FC, ReactHTMLElement, useEffect, useRef, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import debounce from "./helpers/debounce";
import { SETTINGS } from "./constants";
import ChunkUtil from './pages/ChunkUtil/ChunkUtil';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home';
import getBreakpoint from './helpers/getBreakpoint';

interface Status {
    appWidth?: number;
    appHeight?: number;
    isMobile?: boolean;
    isTablet?: boolean;
    bp?: string;
    bpChanged?: boolean;
}
const StatusContext = createContext<Status>({});

const router = createBrowserRouter([
    {
        path:"/",
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"chunker",
                element: <ChunkUtil />
            },
            {
                path: "*",
                element: <Error404 />
            }
        ],
    },
    
]);

const App: FC = () => {
    const appRef = useRef<HTMLDivElement>(null);
    const bp = getBreakpoint();
    const [status, setStatus] = useState<Status>({
        appWidth:0,
        appHeight:0,
        isMobile: bp === "mobile" ? true : false,
        isTablet: bp === "mobile" ? true : false,
        bp:bp,
        bpChanged: false
    });
    useEffect( () => {
        const handleResize = debounce(() => {
            const //w = appRef.current?.clientWidth || 0,
                w = window.innerWidth,
                h = appRef.current?.clientHeight || 0,
                isMobile = w <= SETTINGS.breakpoints.mobile ? true : false,
                isTablet = w <= SETTINGS.breakpoints.tablet ? true : false,
                bp = w > SETTINGS.breakpoints.tablet ? "desktop" : "mobile";            
            setStatus( (oldStatus) => {
                let bpChanged = false,
                    changes = 0;
                if (oldStatus.appWidth !== w) {changes++}
                if (oldStatus.appHeight !== h) {changes++}
                if (oldStatus.isMobile !== isMobile) {changes++}
                if (oldStatus.isTablet !== isTablet) {changes++}
                if (oldStatus.bp !== bp) {
                    changes++;
                    bpChanged = true;
                }
                // console.log("*+=+*+=+*+= handleResize",`Changes: ${changes}`,{
                //     appWidth: w,
                //     appHeight: h,
                //     isMobile: isMobile,
                //     isTablet: isTablet,
                //     bp: bp,
                //     bpChanged: bpChanged
                // })
                if (changes > 0) {
                    
                    return {
                        appWidth: w,
                        appHeight: h,
                        isMobile: isMobile,
                        isTablet: isTablet,
                        bp: bp,
                        bpChanged: bpChanged
                    }
                } else {
                    return oldStatus;
                }
            });
        },150);
        window.addEventListener("resize",handleResize);
        handleResize();
        return () => window.removeEventListener("resize",handleResize);
    },[]);
    return (
        <div className="app" ref={appRef}>
            <StatusContext.Provider value={status}>
                <RouterProvider router={router} />
            </StatusContext.Provider>
        </div>
    );
}

export default App;
export { StatusContext };