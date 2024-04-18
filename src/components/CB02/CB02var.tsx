import React, { FC, ReactNode } from "react";
import CB02 from "./CB02";

interface CB02v0Props {
    title: ReactNode;
    desc: ReactNode[];
}

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


export { CB02v0 }