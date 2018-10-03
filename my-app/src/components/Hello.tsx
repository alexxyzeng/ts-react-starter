import * as React from 'react';
import './Hello.css';
import TodoInput from './TodoInput';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface State {
    currentEnthusiasm: number;
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

// const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) => {
    
// }
class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }
    render() {
        const { enthusiasmLevel = 0, onDecrement, onIncrement} = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
    
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
                <div>
                    <TodoInput placeholder='fff' />
                </div>
            </div>
        );
    }
}
export default Hello;