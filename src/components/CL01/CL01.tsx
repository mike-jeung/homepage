import React, { FC } from "react";
import "./CL01.scss";
import CB01 from "../CB01/CB01";
import CT02 from "../CT02/CT02";
import CW03 from "../CW03/CW03";
import CW04 from "../CW04/CW04";

const CL01:FC = () => {
    return (
<section className="cl01 cl01v0">
    <div className="cl01w0">
        <div className="cl01w1">
            <div className="col1"><CB01 /></div>
            <div className="col2"><CT02 /></div>
            <div className="cl01bleed"><CW03 /></div>
            <div className="cl01bleed"><CW04 /></div>
        </div>
    </div>
</section>
    );
}
export default CL01;