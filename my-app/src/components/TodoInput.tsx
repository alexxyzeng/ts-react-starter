import * as React from 'react';

interface TodoTextInputProps {
    onSave?: (text: string) => void;
    text?: string;
    placeholder: string,
    editing?: boolean;
    newTodo?: boolean;
}
interface TodoTextInputState {
    text: string;
}

class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    handleSubmit = (e: any) => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            if (this.props.onSave) {
                this.props.onSave(text);
            }
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    }

    handleChange = (e: any) => {
        this.setState({ text: e.target.value });
    }

    handleBlur = (e: any) => {
        if (!this.props.newTodo && this.props.onSave) {
            this.props.onSave(e.target.value);
        }
    }

    render() {
        return (
            <input
                type="text"
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit} />
        );
    }
}


export default TodoTextInput;
