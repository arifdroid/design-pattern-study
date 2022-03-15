import React, { useState } from 'react'


const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue()

    return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    return [value, setValue];
}