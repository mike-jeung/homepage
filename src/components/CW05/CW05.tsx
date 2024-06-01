import React, { FC, ReactElement, ReactEventHandler, useEffect, useState } from "react";
import "./CW05.scss";
import { ErrorItem, LogItem, ResponseBucket, svcGetAssistant } from "../../services/data";
interface FormData {
    userInput?: string
}

const CW05:FC = () => {

    const [formData,setFormData] = useState<FormData>({
        userInput: ""
    });
    const [msgLog, setMsgLog] = useState<LogItem[]>();
    // const [msgLog, setMsgLog] = useState<LogItem[]>([
    //     {"role":"system","content":PROMPT["system"]}
    // ]);
    const [responseItem, setResponseItem] = useState<LogItem>();
    useEffect( () => {
        if (responseItem !== undefined && responseItem.role && responseItem.content) {
            setMsgLog( prevLog => {
                const newLog:LogItem[] = [
                    ...(prevLog || []),
                    responseItem
                ];
                return newLog;
            })
        }
    },[responseItem]);

    const clearForm = ():void => {
        setFormData( () => ({userInput:""}))
    }
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
    const handleKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            if (e.shiftKey === false) {
                e.preventDefault();                                                                       
                handleSubmit();
                clearForm();
            } 
        }
    }
    const handleSubmit = async ():Promise<void> => {
        if (formData.userInput) {
            // create user message item
            const userMsg:LogItem = {
                role:"user",
                content:formData.userInput
            };
            // append to end of log
            const newLog:LogItem[] = [
                ...(msgLog || []),
                userMsg
            ];
            setMsgLog(newLog);
            if (newLog !== undefined && newLog.length > 0) {
                const response = await svcGetAssistant(newLog);
                if (response.success) {
                    if ("role" in response.response && "content" in response.response) {
                        const newResponseItem:LogItem = response.response;
                        setResponseItem(newResponseItem);
                    }                    
                } else {

                }
            }
        }
    }

    return (
        <section className="cw05 cw05w0">
            <div className="cw05w0">
                <div className="cw05w1">
                    <div className="cw05chat">
                        <ul>
                            { msgLog?.map( (logItem:LogItem, index) => {
                                let name:string = "cw05";
                                if (logItem.role === "assistant") {
                                    name += "agent";
                                } else if (logItem.role === "user") {
                                    name += "user";
                                }
                                return <li key={index} className={name}>{logItem.content}</li>;
                            }) }
                        </ul>
                    </div>
                    <form className="cw05input">
                        <textarea name="userInput" value={formData.userInput} onChange={handleChange} placeholder="Enter your question." onKeyDown={handleKeyDown}></textarea>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CW05;
