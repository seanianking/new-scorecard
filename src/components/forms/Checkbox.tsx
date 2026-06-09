
type Props = {
    label: string
    defaultChecked?: boolean
    stateUpdate?: (value: boolean) => void
}

const Checkbox = (props: Props) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                defaultChecked={props.defaultChecked}
                className="checkbox checkbox-primary"
                onChange={(e) => props.stateUpdate?.(e.target.checked)}
            />
            <span>
                {props.label}
            </span>
        </div>
    )
}

export default Checkbox