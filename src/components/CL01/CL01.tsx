import React, { FC } from "react";
import "./CL01.scss";
import { CB01v0, CB01v1 } from "../CB01/CB01var";
import { CB02v1 } from "../CB02/CB02var";
import CT02 from "../CT02/CT02";
import CW03 from "../CW03/CW03";
import CW04 from "../CW04/CW04";
import CW05 from "../CW05/CW05";
const CL01:FC = () => {
    return (
        <section className="cl01 cl01v0">
            <div className="cl01w0">
                <div className="cl01w1">
                    <div className="col1"><CB01v0 /></div>
                    <div className="col2"><CT02 /></div>
                    <div className="col0"><CB02v1 title="RAG Chatbot" /><CW05 /></div>
                    <div className="col0 cl01bleed"><CW03 /></div>
                    <div className="col0"><CB02v1 title="Contact" /><CW04 /></div>
                </div>
            </div>
        </section>
    );
}
export default CL01;