import React, { FC, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import "./CW08.scss";

interface CW08Props {
    title?: string;
    btn?:ReactElement;
    content?:ReactElement;
}
const CW08:FC<CW08Props> = (props) => {

    
    const [paneActive, setPaneActive] = useState(false);
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        setPaneActive((prev) => {
            return prev === true ? false : true;
        });
    };
    return (
        <section className="cw08 cw08v0">
            <div className="cw08w0">
                {props.title ? (<>
                    <h2>{props.title}</h2>
                    <button className="cw08revealer icnbtn" onClick={handleClick} title={`${paneActive ? "Hide":"Show"} content`}>
                        <span className={`icn${paneActive ? " icn-arrow-up":" icn-arrow-down"}`}>
                            <span className="sro">{paneActive ? "Hide" : "Show"} form</span>
                        </span>
                    </button></>) : null}
                {props.content ? <div className={`cw08w1${paneActive ? " cw08-active" : ""}`}>{props.content}</div> : <></>}
            </div>
        </section>
    );
};

export default CW08;