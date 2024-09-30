import React, { FC, ReactElement, ReactNode } from "react";
import "./cw09.scss";

interface CW09Props {
    v?:number;
    inner?:ReactNode;
    name?: string;
    desc?: string;
    href?: string;
    click?:(e?:any) => void;
}

const CW09:FC<CW09Props> = ({v = 0, inner = "", name = "", desc = "", href = "#", click = null}) => {
    let component:ReactNode;

    const handleClick = (e) => {
        e.preventDefault();
        if (click) {
            click(e);
        } else if (name === "Contact") {
            const btn = document.querySelector(".cl01contact .cw08 button.cw08revealer") as HTMLElement;
            if (btn) {
                if (!document.querySelector(".cl01contact .cw08 .cw08-active")) {
                    btn.click();
                }
                // scroll into view after the pane is revealed
                window.setTimeout(() => {
                    btn.scrollIntoView({ behavior: "smooth", block: "start" });
                },250);
                
                
            }
        }
    };


    if (v === 1) {
        component = (<div className="cw09 cw09v1">
            <a href={href} aria-label={name} title={name} onClick={handleClick}>{inner}</a>
        </div>);
    } else {
        component = (<div className="cw09 cw09v0">
            <a href={href} aria-label={name} title={name}>{inner}</a>
        </div>);
    }
    return component;
}
export default CW09;