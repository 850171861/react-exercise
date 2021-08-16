import { useEffect, useState } from 'react'
export const isFaly = (value: unknown) => value === 0 ? false : !value
export const cleanObject = (object:object) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (isFaly(value)) {
             // @ts-ignore
            delete result[key]
        }
    })

    return result
}

export const useMount = (callback:() => void) => {
    useEffect(() => {
        callback()
    }, [])
}


export const useDebounce = <V>(value:V,delay?:number) => {
    // value转换debouncedValue
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // 每次value变化以后，设置一个定时器
        const timeout = setTimeout(()=> setDebouncedValue(value),delay)
        // 清理上一次定时器
        return () => clearTimeout(timeout)
    },[value,delay])

    return debouncedValue
    
}