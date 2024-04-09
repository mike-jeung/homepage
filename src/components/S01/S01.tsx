import React, { FC } from "react";
import "./S01.scss";
interface S01Props {
    size?: string;
}
const S01:FC<S01Props> = ({size = "xsm"}) => {
    let ver;
    switch(size) {
        case "xlg":
            ver = "4"
            break;
        case "lg":
            ver = "3"
            break;
        case "md":
            ver = "2"
            break;
        case "sm":
            ver = "1"
            break;
        default:
            ver = "0"
    }
    return <div className={`s01 s01v${ver}`}></div>
}
export default S01;
export { S01Props };