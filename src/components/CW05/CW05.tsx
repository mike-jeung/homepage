import React, { FC, ReactEventHandler, useEffect, useState } from "react";
import "./CW05.scss";

interface FormData {
    userInput?: string
}
const CW05:FC = () => {

    const [formData,setFormData] = useState<FormData>({
        userInput: ""
    });

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
        const {name,value} = e.target;
        setFormData( (prevData:FormData) => {
            const newData:FormData = {
                ...prevData,
                [name]:value
            }
            return newData;
        })
    }
    return (
        <section className="cw05 cw05w0">
            <div className="cw05w0">
                <div className="cw05w1">
                    <div className="cw05chat">
                        <ul>
                            <li className="cw05agent">agent lorem ipsum dolor sit</li>
                            <li className="cw05user">user lorem ipsum dolor sit</li>
                        </ul>
                    </div>
                    <form className="cw05input">
                        <textarea name="userInput" value={formData.userInput} onChange={handleChange} placeholder="Enter your question."></textarea>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default CW05;