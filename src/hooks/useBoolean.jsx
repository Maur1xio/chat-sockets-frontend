import { useState } from 'react'

export const useBoolean = (initialState) => {

    const [myBoolean, setMyBoolean] = useState(initialState);

    return [myBoolean, setMyBoolean];
}
