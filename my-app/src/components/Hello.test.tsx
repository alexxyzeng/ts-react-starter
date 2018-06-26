import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
    expect(hello.find('.greeting')).toEqual('Hello Daniel!');
})