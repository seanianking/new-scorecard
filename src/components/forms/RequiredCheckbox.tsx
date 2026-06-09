
type Props = {
    label: string
    defaultChecked?: boolean
    stateUpdate?: (value: boolean) => void
}

const RequiredCheckbox = (props: Props) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                defaultChecked={props.defaultChecked}
                className="checkbox checkbox-primary"
                onChange={(e) => props.stateUpdate?.(e.target.checked)}
            />
            <span className="font-semibold">
                {props.label}
            </span>
        </div>
    )
}

export default RequiredCheckbox