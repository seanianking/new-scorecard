

type Props = {
    header?: string
    label?: string
    stateUpdate?: (value: string) => void
}

const TextArea = (props: Props) => {
    return (
        <fieldset className="fieldset">
            {props.header && (
                <legend className="fieldset-legend">{props.header}</legend>
            )}
            <textarea
                className="textarea h-24"
                placeholder="Bio"
                onChange={(e) => props.stateUpdate?.(e.target.value)}
            ></textarea>
            {props.label && (
                <div className="label">{props.label}</div>
            )}
        </fieldset>
    )
}

export default TextArea