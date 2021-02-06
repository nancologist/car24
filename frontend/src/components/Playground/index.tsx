import { connect, ConnectedProps } from 'react-redux'
import { CountState } from '../../store/pgReducerAndActions'

import Controls from './Controls/index'

const Playground = (props: PropsType) => {
    return (
        <div>
            <h1>Playground</h1>
            <div>
                <input type="text" readOnly value={props.val}/>
                <Controls />
            </div>
        </div>
    )
}

interface PropsType extends PropsFromRedux {}

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = (reduxState: CountState) => {
    return {
        val: reduxState.count
    }
}

const connector = connect(mapStateToProps)

export default connector(Playground);