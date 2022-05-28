import React, { useState } from 'react'

export const useSearchUsers = () => {
    const [wantedUsers, setWantedUsers] = useState([]);

    return [wantedUsers, setWantedUsers];

}
