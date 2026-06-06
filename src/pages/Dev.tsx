import Button from '../components/Button'

type Props = {}

const buttonThemes = ['primary', 'secondary', 'success', 'danger', 'warning', 'neutral'] as const


function Dev({ }: Props) {
    return (
        <div className="space-y-4 p-6">
            <h1 className="text-2xl font-bold">Button Theme Preview</h1>
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
    )
}

export default Dev