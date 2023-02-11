import {ChangeEvent, useState} from "react";

export default function useInput(initialValue: string){
    const [value, setValue] = useState<string>(initialValue)
    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }
    return [value, setValue, onChange] as const
}