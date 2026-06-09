

type Props = {
    header?: string
    label?: string
    stateUpdate?: (value: string) => void
    placeholder?: string
}

const TextArea = (props: Props) => {
    return (
        <fieldset className="fieldset">
            {props.header && (
                <span className="font-semibold text-lg mt-2 -mb-2">
                    {props.header}
                </span>
            )}
            <textarea
                className="textarea h-24 w-full"
                placeholder={props.placeholder || "Enter text"}
                onChange={(e) => props.stateUpdate?.(e.target.value)}
            ></textarea>
            {props.label && (
                <div className="label">{props.label}</div>
            )}
        </fieldset>
    )
}

export default TextArea