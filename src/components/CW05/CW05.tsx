import React, { FC, forwardRef, ReactElement, ReactEventHandler, useEffect, useImperativeHandle, useState } from "react";
import "./CW05.scss";
import { ErrorItem, LogItem, ResponseBucket, svcGetAssistant } from "../../services/data";
import { PROMPT } from "../../constants";
import { constants } from "buffer";
interface FormData {
    userInput?: string
}

// const CW05:FC = () => {
const CW05 = forwardRef( ({},ref) => {

    const [formData,setFormData] = useState<FormData>({
        userInput: ""
    });
    const [convoStarted,setConvoStarted] = useState<boolean>(false);
    // const [msgLog, setMsgLog] = useState<LogItem[]>();
    const [msgLog, setMsgLog] = useState<LogItem[]>([
        {"role":"system","content":PROMPT["system"]}
    ]);
    const [responseItem, setResponseItem] = useState<LogItem>();
    useEffect( () => {
        if (responseItem !== undefined && responseItem.role && responseItem.content) {
            setMsgLog( prevLog => {
                const last = prevLog.length - 1;
                if (responseItem.context) {
                    prevLog[last].content = "###CONTEXT:" + responseItem.context + " " + prevLog[last].content;
                }
                const newLog:LogItem[] = [
                    ...(prevLog || []),
                    {role:responseItem.role,content:responseItem.content}
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
            if (!convoStarted) {
                setConvoStarted(true);
            }
            // create user message item and append it to end  of log
            const userMsg:LogItem = {
                role:"user",
                content:`###REQUEST:${formData.userInput}`
            };
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
    const resetContent = ():void => {
        setFormData({userInput:""});
        setMsgLog([
            {"role":"system","content":PROMPT["system"]}
        ]);
        setResponseItem(undefined);
        setConvoStarted(false);
    }
    useImperativeHandle(ref, () => ({
        resetContent
    }));
    return (
        <section className="cw05 cw05w0">
            <div className="cw05w0">
                <div className="cw05w1">
                    <div className="cw05chat">
                        <ul>
                            { msgLog.map( (logItem:LogItem, index) => {
                                let name:string = "cw05",offset = 0;
                                if (logItem.role === "system") {
                                    return null;
                                } else if (logItem.role === "assistant") {
                                    offset = 0;
                                    name += "agent";
                                } else if (logItem.role === "user") {
                                    offset = 11;
                                    name += "user";
                                }
                                // extract request for rendering
                                const content = logItem.content.substring(logItem.content.indexOf("###REQUEST:") + offset);
                                return <li key={index} className={name}>{content}</li>;
                            })}
                        </ul>
                    </div>
                    <form className="cw05input">
                        <textarea name="userInput" value={formData.userInput} onChange={handleChange} placeholder="Please state the nature of your tactical situation" onKeyDown={handleKeyDown}></textarea>
                    </form>
                </div>
            </div>
        </section>
    );
});

export default CW05;
