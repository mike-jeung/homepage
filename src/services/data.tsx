import React from "react";
import { URL } from "../constants";


interface ErrorItem {
    error?: Error;
    other?: any;
}
interface LogItem {
    role:string;
    content:string;
}
interface ResponseBucket {
    success: boolean;
    response: LogItem | ErrorItem;
}

const svcGetAssistant = async (log:LogItem[]):Promise<ResponseBucket> => {
    try {
        const data = await fetch(URL.api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        });
        const p = await data.json();
        const response = JSON.parse(p.response);
        if (response.success == false) {
            throw( new Error("There was a server error."));
        }
        const logItem:LogItem = {
            role: response.role,
            content: response.content
        }
        return {success:true,response:logItem};
    } catch (err) {
        const error: ErrorItem = {};
        if (err instanceof Error) {
            error.error = err;
        } else {
            error.other = err;
        }
        return {success:false,response:error};
    }
}

export { ErrorItem, LogItem, ResponseBucket, svcGetAssistant };
