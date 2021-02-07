import './Controls.css';
import { increaseCount, decreaseCount } from '../../../store/pgReducerAndActions'
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

/* 

In a shorter way the Redux will wrap the functions of the "mapDispatchToProps" automatically in
a dispatch(), the longer way was:

const mapDispatchToProps = dispatch => ({
    prop1: () => dispatch(<ActionCreatorFunc>),
    prop2: () => dispatch(<ActionCreaterFunc2)
})

There is also another way, which you won't have mapDispatchToProps object/function at all!
Instead of that in the Component you should use props.dispatch(<ActionCreatorFunc>).

*/

const mapDispatchToProps = {
    increaseIt: () => (increaseCount()),
    decreaseIt: () => (decreaseCount())
}

const connector = connect(null, mapDispatchToProps)

export default connector(Controls);
