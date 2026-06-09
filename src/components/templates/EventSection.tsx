
import Checkbox from '../forms/Checkbox'
import RequiredCheckbox from '../forms/RequiredCheckbox'
import TextArea from '../forms/TextArea'

type CheckboxItems = {
    label: string
    stateUpdate?: (value: boolean) => void
}
type Props = {
    eventName: string
    requiredItems?: CheckboxItems[]
    checkboxItems: CheckboxItems[]

}

const EventSection = (props: Props) => {
    return (
        <div>
            <span className="font-bold underline text-lg">{props.eventName}:</span>
            {props.requiredItems && (
                <>
                    <br />
                    <span className="font-semibold text-muted-foreground">
                        REQUIRED:
                    </span>
                    <div className="flex mt-2 mb-4 justify-between w-5/6">
                        {props.requiredItems.map((item, index) => (
                            <div key={index}>
                                <RequiredCheckbox
                                    label={item.label}
                                    stateUpdate={item.stateUpdate}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
            <div className="grid gap-2 grid-cols-2 w-1/2">
                {props.checkboxItems.map((item, index) => (
                    <div key={index}>
                        <Checkbox
                            label={item.label}
                            stateUpdate={item.stateUpdate}
                        />
                    </div>
                ))}
            </div>
            <div >
                <TextArea
                    header="Comments:"
                    stateUpdate={() => { }}
                />
            </div>
        </div>
    )
}

export default EventSection