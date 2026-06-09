


type Props = {
    disabled?: boolean
    leftIcon?: React.ReactNode
    stateUpdate?: (value: string) => void
    placeholder?: string
    label: string
}

const Input = (props: Props) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-2">

                <span className="font-bold">{props.label}</span>
                <label className="input">
                    {props.leftIcon && props.leftIcon}
                    <input type="text" className="grow" placeholder={props.placeholder} disabled={props.disabled} onChange={(e) => props.stateUpdate?.(e.target.value)} />
                </label>
            </div>
        </>
    )
}

export default Input