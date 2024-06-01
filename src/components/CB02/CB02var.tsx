import React, { FC, ReactNode } from "react";
import CB02 from "./CB02";

interface CB02v0Props {
    title?: ReactNode;
    desc?: ReactNode[];
}
// content block: article
const CB02v0:FC<CB02v0Props> = ({ title, desc = [] }) => {
    return (
        <CB02>
            <div className="cb02w0">
                <article>
                    <h3>{title}</h3>
                    <div>
                        { desc.map((content,idx) => (<p key={idx}>{content}</p>)) }
                    </div>
                    <figure>
                        
                        
                    </figure>
                </article>
            </div>
        </CB02>
    );
}
// content block: headline
const CB02v1:FC<CB02v0Props> = ({ title, desc = [] }) => {
    return (
        <CB02>
            <div className="cb02w0">
                <h2>{title}</h2>
            </div>
        </CB02>
    );
}

export { 
    CB02v0,
    CB02v1
}