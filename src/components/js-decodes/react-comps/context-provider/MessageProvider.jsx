import { useCallback, useMemo, useState } from "react";
import MessageContext from "./MessageContext";

export function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);

    const addMessage = useCallback((msg) => {
        console.log("addMessage received:", msg);

        const nmsg = {
            id: Date.now().toString(),
            text: msg
        }
        setMessages((prev) => [...prev, nmsg]);
    }, []);

    const delMessage = useCallback((id) => {
        setMessages((prev) => prev.filter((mid) => (mid.id !== id)))
    }, []);

    const values = useMemo(
        () => ({
            messages,
            delMessage,
            addMessage,
        }),
        [messages, delMessage, addMessage]
    );

    return (
        <MessageContext.Provider value={values}>
            {children}
        </MessageContext.Provider>
    );
}