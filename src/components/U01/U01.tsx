import React, { FC, useState } from "react";
import "./U01.scss";

interface U01Props {
    submissionHandler: ({}:any) => void;
}
const U01:FC<U01Props> = ({submissionHandler}) => {
    const [formFile, setFormFile] = useState<any | null>();
 
    const handleChange = (e):void => {
        setFormFile(e.target.files[0]);
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formFile) {
            submissionHandler({e:e,file:formFile});
        }
    };
    
    return (
        <section className="u01 u01v0">
            <div className="u01w0">
                <form>
                    <ul>
                        <li className="u01full"><input type="file" onChange={handleChange} /></li>
                        <li className="u01full"><button onClick={handleSubmit}>Process</button></li>
                    </ul>
                </form>
            </div>
        </section>
    )
}

export default U01;