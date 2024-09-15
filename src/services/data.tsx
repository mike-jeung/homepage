import React from "react";
import { URL } from "../constants";

interface EmbeddingItem {
    embedding: number[];
    model?: string;
}
interface ErrorItem {
    error?: Error;
    other?: any;
}
interface LogItem {
    role:string;
    content:string;
}
interface QuoteItem {
    quote:string;
    author:string;
}
interface ResponseBucket {
    success: boolean;
    response: QuoteItem | LogItem | ErrorItem | EmbeddingItem;
}
interface ContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
}
const svcGetEmbeddings = async (text:string):Promise<ResponseBucket> => {
    console.log("svcgetembeddings")
    try {
        const data = await fetch(URL.embed, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({text:text}),
        });
        if (!data.ok) {
            throw( new Error("Network response was not ok."));
        }
        const p = await data.json();
        const response = JSON.parse(p.response);
        if (response.success == false) {
            throw( new Error("There was a server error."));
        }
        const embedding:EmbeddingItem = {
            embedding: response.embedding,
        }
        return {success:true,response:embedding};
    } catch (err) {
        const error: ErrorItem = {};
        if (err instanceof Error) {
            error.error = err;
        } else {
            error.other = err;
        }
        return {success:false,response:error};
    }
};
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
const svcGetQuote = async ():Promise<ResponseBucket> => {
    try {
        const data = await fetch(URL.quote, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //console.log("data",data.ok)
        if (!data.ok) {
            throw new Error("Network response was not ok.");
        }
        const p = await data.json();
        const response = JSON.parse(p.response);
        if (response.success == false) {
            throw( new Error("There was a server error."));
        }
        const quote:QuoteItem = {
            quote: response.text,
            author: response.author
        }
        return {success:true,response:quote};
    } catch (err) {
        //console.log("catch")
        const error: ErrorItem = {};
        if (err instanceof Error) {
            error.error = err;
        } else {
            error.other = err;
        }
        return {success:false,response:error};
    }
}
const svcSendMsg = async (msg:ContactMessage) => {
    try {
        const data = await fetch(URL.contact, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg)
        });
        if (!data.ok) {
            throw new Error("Network response was not ok.");
        }
        const response = await data.json();
        return response;
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
export {
    ContactMessage,
    ErrorItem,
    LogItem,
    QuoteItem,
    ResponseBucket,
    svcGetAssistant,
    svcGetEmbeddings,
    svcGetQuote,
    svcSendMsg
};
