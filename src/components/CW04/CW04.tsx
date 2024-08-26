import React, { FC, useEffect, useState } from "react";
import "./CW04.scss";
import { ContactMessage, svcSendMsg } from "../../services/data";

interface CW04Props {
    title?: string;
    intro?: string;
}
const CW04:FC<CW04Props> = ({title,intro}) => {
    const [formData, setFormData] = useState<ContactMessage>({
            name:"",
            email:"",
            city:"",
            message:""
        }),
        [isFormSent, setIsFormSet] = useState(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const { name, value } = e.target;
        setFormData( (prevData) => {
            const newData:ContactMessage = {
                ...prevData,
                [name]:value
            }
            return newData;
        });
    }
    const handleForm = (e:React.MouseEvent<HTMLButtonElement>):void => {
        console.log(formData);
        e.preventDefault();
    };
    return (
        <section className="cw04 cw04v0">
            <div className="cw04w0">
                {title && <h2>{title}</h2>}
                {intro && <p>{intro}</p>}
                { isFormSent ? (
                    <div className="cw04w1">
                        <p>
                            Your message has been sent. I appreciate you taking the time to reach out to me. I will review your inquiry and respond within two business days.
                        </p>
                    </div>
                ) : (
                    <form>
                        <ul>
                            <li><label htmlFor="contact-name">Name</label>
                            <input placeholder="Your Name" id="contact-name" name="name" className="cw04field" type="text" value={formData.name} onChange={handleChange} /></li>

                            <li><label htmlFor="contact-email">Email</label>
                            <input placeholder="Your Email" id="contact-email" name="email" className="cw04field" type="text" value={formData.email} onChange={handleChange} /></li>

                            <li className="cw04city"><label htmlFor="contact-city">City</label>
                            <input placeholder="City" id="contact-city" name="city" className="cw04field" type="text" value={formData.city} onChange={handleChange} tabIndex={-1} /></li>

                            <li className="cw04full"><label htmlFor="contact-msg">Message</label>
                            <textarea placeholder="What would you like to build?" id="contact-msg" name="message" className="cw04msg" value={formData.message} onChange={handleChange}></textarea></li>

                            <li className="cw04full"><button onClick={handleForm}>Submit</button></li>
                        </ul>
                    </form>
                )}
            </div>
        </section>    
    );
}

export default CW04;