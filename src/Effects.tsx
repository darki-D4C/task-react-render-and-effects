import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setMessage] = useState(-1);

    const callback = (messageID: number) => {
        setMessage(messageID);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            setMessage(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
