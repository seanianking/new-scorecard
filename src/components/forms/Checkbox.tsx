
type Props = {
    label: string
    defaultChecked?: boolean
    stateUpdate?: (value: boolean) => void
}

const Checkbox = (props: Props) => {
    return (
        <label className="label">
            <input
                type="checkbox"
                defaultChecked={props.defaultChecked}
                className="checkbox"
                onChange={(e) => props.stateUpdate?.(e.target.checked)}
            />
            {props.label}
        </label>
    )
}

export default Checkbox