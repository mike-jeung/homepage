import React, { FC } from "react";
import CB01, { CB01Props } from "./CB01";

// #region Interfaces
interface CB01v0Props {
    title: string;
    caption?: string;
    description?: string;
    moreTxt?: string;
    moreLink?: string;
    moreClick?: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
// #endregion
// #region Variants
const CB01v0:FC<CB01v0Props> = ({title = "Title",caption = "Caption",description = "Lorem ipsum dolor sit"}) => {
    return (
        <CB01>
            <div className="cb01w0">
                <span className="caption">{caption}</span>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </CB01>
    );
}
const CB01v1:FC<CB01v0Props> = ({title}) => {

    return (
        <CB01 v={1}>
            <div className="cb01w0">
                <h2>{title}</h2>
            </div>
        </CB01>
    );
}
const CB01v2:FC<CB01v0Props> = ({title,caption}) => {

    return (
        <CB01 v={2}>
            <div className="cb01w0">
                <h3>{title}</h3>
                <p>{caption}</p>
            </div>
        </CB01>
    );
}
const CB01v3:FC<CB01v0Props> = ({ title }) => {
    return (
        <CB01 v={3}>
            <div className="cb01w0">
                <h2>{title}</h2>
            </div>
        </CB01>
    );
}
const CB01v4:FC<CB01v0Props> = ({title,caption,description}) => {
    return (
        <CB01 v={4}>
            <div className="cb01w0">
                {caption && <span className="caption">{caption}</span>}
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
        </CB01>
    );
}
// #endregion

export { 
    CB01v0,
    CB01v1,
    CB01v2,
    CB01v4,
    CB01v0Props
}