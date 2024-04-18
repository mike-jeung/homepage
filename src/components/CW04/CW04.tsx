import React, { FC, useEffect, useState } from "react";
import "./CW04.scss";

interface FormData {
    name: string;
    email: string;
    city: string;
    message: string;
}
const CW04:FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name:"",
        email:"",
        city:"",
        message:""
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const { name, value } = e.target;
        setFormData( (prevData) => {
            const newData:FormData = {
                ...prevData,
                [name]:value
            }
            return newData;
        });
    }
    const handleForm = (e:React.MouseEvent<HTMLButtonElement>):void => {
        console.log(formData);
        
    };
    return (
        <section className="cw04 cw04v0">
            <div className="cw04w0">
                <form>
                    <ul>
                        <li><label htmlFor="contact-name">Name</label>
                        <input placeholder="Name" id="contact-name" name="name" className="cw04field" type="text" value={formData.name} onChange={handleChange} /></li>

                        <li><label htmlFor="contact-email">Email</label>
                        <input placeholder="Email" id="contact-email" name="email" className="cw04field" type="text" value={formData.email} onChange={handleChange} /></li>

                        <li className="cw04city"><label htmlFor="contact-city">City</label>
                        <input placeholder="City" id="contact-city" name="city" className="cw04field" type="text" value={formData.city} onChange={handleChange} /></li>

                        <li className="cw04full"><label htmlFor="contact-msg">Message</label>
                        <textarea placeholder="What would you like to build?" id="contact-msg" name="message" className="cw04msg" value={formData.message} onChange={handleChange}></textarea></li>

                        <li className="cw04full"><button onClick={handleForm}>Submit</button></li>
                    </ul>
                </form>
            </div>
        </section>    
    );
}

export default CW04;