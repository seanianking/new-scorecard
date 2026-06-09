

type Props = {
    defaultValue?: string
    options?: string[]
    stateUpdate?: (value: string) => void
    disabled?: boolean
}

const Select = (props: Props) => {
    return (
        <select
            defaultValue={props.defaultValue}
            className="select"
            onChange={(e) => props.stateUpdate?.(e.target.value)}
            disabled={props.disabled}
        >
            {props.options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Select