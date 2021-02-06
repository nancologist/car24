import './Controls.css';
import { INCREASE_COUNT, DECREASE_COUNT } from '../../../store/pgReducerAndActions'
import { connect, ConnectedProps } from 'react-redux'

const Controls = (props: PropsType) => {
    return (
        <div>
            <button id="plus" onClick={props.increaseIt}>+</button>
            <button id="minus" onClick={props.decreaseIt}>-</button>
        </div>
    )
}

interface PropsType extends PropsFromRedux {}

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapDispatchToProps = {
    increaseIt: () => ({ type: INCREASE_COUNT }),
    decreaseIt: () => ({ type: DECREASE_COUNT })
}

const connector = connect(null, mapDispatchToProps)

export default connector(Controls);
