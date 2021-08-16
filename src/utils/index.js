import { useEffect } from 'react'
export const isFaly = (value) => value === 0 ? false : !value
export const cleanObject = (object) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFaly(value)) {
            delete result[key]
        }
    })

    return result
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}