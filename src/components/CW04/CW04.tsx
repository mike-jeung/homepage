import React, { FC, ReactNode, useEffect, useState } from "react";
import "./CW04.scss";
import { ContactMessage, svcSendMsg } from "../../services/data";
import { ERROR } from "../../constants";

interface CW04Props {
    title?: string;
    intro?: string;
}
interface CW04FormData {
    field: string;
    error: number;
}
interface CW04FormBuild {
    label: string;
    name: string;
    type: string;
    desc?: string;
    attr?:string[];
}
const CW04:FC<CW04Props> = ({title,intro}) => {
    const [errors,setErrors] = useState<string[]>([]),
        [formData, setFormData] = useState<ContactMessage>({
            name:"",
            email:"",
            city:"",
            message:""
        }),
        [isFormSent, setIsFormSent] = useState(false),
        [isError, setIsError] = useState(false);
    const addError = (er:string):void => {
        if (!er) return;
        setErrors( (prev) => {
            return [
                ...prev,
                er
            ];
        });
    }
    const formBuildData:CW04FormBuild[] = [
        {
            label:"Name",
            name:"name",
            type:"text",
            attr:["required"]
        },
        {
            label:"City",
            name:"city",
            type:"text"
        },
        {
            label:"Email Address",
            name:"email",
            type:"email",
            attr:["required","email"]
        },
        {
            label:"Message",
            name:"message",
            type:"textarea",
            attr:["required"]
        },
        {
            label:"Submit",
            name:"submit",
            type:"button",
        }
    ];
    const buildForm = (data:CW04FormBuild[],prefix?:string):ReactNode[] => {
        let form:ReactNode[] = [],
            line:ReactNode;
        const pfx = prefix ? prefix : "form";

        for (const item of data) {
            if (item.type === "textarea") {
                line = (<li className="cw04full" key={item.name}>
                        <label htmlFor={`${pfx}${item.name}`}>{item.label}</label>
                        <textarea id={`${pfx}${item.name}`} name={item.name} className={`cw04${item.name}`} value={formData[item.name]} onChange={handleChange}></textarea>
                    </li>);
            } else if (item.type === "button") {
                line = (<li className="cw04full" key={item.name}>
                        <button onClick={handleForm}>{item.name}</button>
                    </li>);
            } else if (item.type === "text" || item.type === "email") {
                line = (<li className={`cw04${item.name}`} key={item.name}>
                        <label htmlFor={`${pfx}${item.name}`}>{item.label}</label>
                        <input id={`${pfx}${item.name}`} name={item.name} className="cw04field" type={item.type} value={formData[item.name]} onChange={handleChange} />
                    </li>);
            }
            form.push(line);
        }
        return form;
    }
    const clearForm = ():void => {
        setFormData( (prevData) => {
            prevData.name = "";
            prevData.email = "";
            prevData.city = "";
            prevData.message = "";
            return prevData;
        });
        setErrors([]);
        setIsFormSent(true);
    }
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
    const handleForm = async (e:React.MouseEvent<HTMLButtonElement>):Promise<void> => {
        e.preventDefault();
        if (validateForm()) {
            const result = await svcSendMsg(formData);
            if (result.success) {
                clearForm();
            } else {
                setIsFormSent(false);
                addError(ERROR.general);
            }
        }
    };
    const validateForm = ():boolean => {
        let re = /\S+@\S+\.\S+/; // simple email regex
        let errors:string[] = [];
        formBuildData.map( (m) => {
            if (m.attr !== undefined) {
                const value = formData[m.name];
                for (const i in m.attr ) {
                    if (m.attr[i] === "required") {
                        if (!value) {
                            errors.push(ERROR.required_missing.replace("$01$", m.label));
                        }
                    } else if (m.attr[i] === "email") {

                        if (!re.test(value)) {
                            errors.push(ERROR.invalid_email);
                        }
                    }
                }
            }
        });
        setErrors(errors);
        if (errors.length < 1) {
            return true;
        }
        return false;
    }
    return (
        <section className="cw04 cw04v0">
            <div className="cw04w0">
                {title && <h2>{title}</h2>}
                {intro && <p>{intro}</p>}
                { errors.length > 0 && (
                    <div className="cw04w1 cw04error">
                        <h3>Error</h3>
                        <ul>
                        {errors.map( (error,i) => <li key={i}>{error}</li>)}
                        </ul>
                    </div>
                )}
                { isFormSent ? (
                    <div className="cw04w1">
                        <p>
                            Thank you for your message. A response will be provided within two business days.
                        </p>
                    </div>
                ) : (
                    <form>
                        <ul>
                            {buildForm(formBuildData,"contact")}
                        </ul>
                    </form>
                )}
            </div>
        </section>    
    );
}

export default CW04;