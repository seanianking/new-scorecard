import { useState } from 'react'
import Button from '../components/Button'
import Checkbox from '../components/forms/Checkbox'
import Input from '../components/forms/Input'
import RadioGroup from '../components/forms/RadioGroup'
import Select from '../components/forms/Select'
import TextArea from '../components/forms/TextArea'
import { BadgeDollarSign } from 'lucide-react'
import Card from '../components/Card'

type Props = {}

const buttonThemes = ['primary', 'secondary', 'success', 'danger', 'warning', 'neutral'] as const

function Dev({ }: Props) {
    const [inputValue, setInputValue] = useState('')
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [radioValue, setRadioValue] = useState('option-1')
    const [selectValue, setSelectValue] = useState('Option 1')
    const [textAreaValue, setTextAreaValue] = useState('')

    return (
        <>
            <div className="space-y-4 p-6">
                <h1 className="text-2xl font-bold">Buttons</h1>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {buttonThemes.map((theme) => (
                        <Button
                            key={theme}
                            theme={theme}
                            text={theme.charAt(0).toUpperCase() + theme.slice(1)}
                            onClick={() => console.log(theme)}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-4 p-6">
                <h1 className="text-2xl font-bold">Forms</h1>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <Input label="Name" placeholder="Enter text" stateUpdate={setInputValue} />
                        <Input label="Email" placeholder="Enter text" stateUpdate={setInputValue} leftIcon={<BadgeDollarSign />} />
                        <div className="text-sm text-gray-500 mt-2">Value: {inputValue}</div>
                    </Card>

                    <Card>
                        <h2 className="font-semibold mb-2">Checkbox</h2>
                        <Checkbox label="Accept Terms" stateUpdate={setCheckboxValue} />
                        <div className="text-sm text-gray-500 mt-2">Value: {String(checkboxValue)}</div>
                    </Card>

                    <Card>
                        <h2 className="font-semibold mb-2">RadioGroup</h2>
                        <RadioGroup
                            items={[
                                { label: 'Option 1', value: 'option-1', defaultChecked: true },
                                { label: 'Option 2', value: 'option-2' },
                            ]}
                            stateUpdate={setRadioValue}
                            groupName="example-1"
                            orientation="vertical"
                        />
                        <br />
                        <RadioGroup
                            items={[
                                { label: 'Option 1', value: 'option-1', defaultChecked: true },
                                { label: 'Option 2', value: 'option-2' },
                            ]}
                            stateUpdate={setRadioValue}
                            groupName="example-2"
                            orientation="horizontal"
                        />
                        <div className="text-sm text-gray-500 mt-2">Value: {radioValue}</div>
                    </Card>

                    <Card>
                        <h2 className="font-semibold mb-2">Select</h2>
                        <Select
                            options={['Option 1', 'Option 2', 'Option 3']}
                            defaultValue="Option 1"
                            stateUpdate={setSelectValue}
                        />
                        <div className="text-sm text-gray-500 mt-2">Value: {selectValue}</div>
                    </Card>

                    <Card>
                        <h2 className="font-semibold mb-2">TextArea</h2>
                        <TextArea header="Bio" label="Add a short bio" stateUpdate={setTextAreaValue} />
                        <div className="text-sm text-gray-500 mt-2">Value: {textAreaValue}</div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Dev