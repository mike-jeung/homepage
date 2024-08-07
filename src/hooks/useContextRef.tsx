import { useContext, useRef, useEffect } from 'react';

const useContextRef = (Context:React.Context<any>) => {
    const contextValue = useContext(Context);
    const contextRef = useRef(contextValue);

    useEffect(() => {
        contextRef.current = contextValue;
    }, [contextValue]);

    return contextRef;
};
export default useContextRef; 