
type RadioItem = {
    label: string
    value: string
    defaultChecked?: boolean
}
type Props = {
    items: RadioItem[]
    stateUpdate?: (value: string) => void
    orientation?: 'horizontal' | 'vertical'
    disabled?: boolean
    groupName: string
}

const RadioGroup = (props: Props) => {
    return (
        <div className={props.orientation === 'vertical' ? 'flex flex-col gap-2' : 'flex gap-2'}>

            {props.items.map((item) => (
                <label key={item.value}>
                    <input
                        type="radio"
                        name={` ${props.groupName}`}
                        value={item.value}
                        defaultChecked={item.defaultChecked}
                        onChange={() => props.stateUpdate?.(item.value)}
                        disabled={props.disabled}
                        className="mr-1"
                    />
                    {item.label}
                </label>
            ))}
        </div>
    )
}

export default RadioGroup