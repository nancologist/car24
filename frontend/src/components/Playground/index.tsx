import Controls from './Controls/index'

const Playground = (props: PropsType) => {
    return (
        <div>
            <h1>Playground</h1>
            <div>
                <input type="text" readOnly/>
                <Controls />
            </div>
        </div>
    )
}

export default Playground;

// ------------------------------------

interface PropsType {}