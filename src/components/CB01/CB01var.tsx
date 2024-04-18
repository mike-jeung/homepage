import React, { FC } from "react";
import CB01 from "./CB01";


const CB01v0 = () => {

    return (
        <CB01>
            <div className="cb01w0">
                <span className="caption">WEB DEVELOPER</span>
                <h1>Mike Jeung</h1>
                <p>Lorem ipssum dolor sitorem ipssum dolor sitorem ipssum dolor.</p>
            </div>
        </CB01>
    );
}

const CB01v1 = () => {

    return (
        <CB01 v={1}>
            <div className="cb01w0">
                <h2>Contact</h2>
            </div>
        </CB01>
    );
}

export { CB01v0, CB01v1}