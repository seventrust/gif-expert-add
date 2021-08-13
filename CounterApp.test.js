import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../../CounterApp';

describe('CounterApp funciones del contador', () => {
	let wrapper = shallow(<CounterApp value={10} />);

	beforeEach(() => {
		wrapper = shallow(<CounterApp value={10} />);
	});

	test('should be showing the component CounterApp', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should be 100 at the counter show', () => {
		const contador = 100;

		const wrapper = shallow(<CounterApp value={contador} />);

		const contadorhtml = parseInt(wrapper.find('h2').text());

		expect(contador).toBe(contadorhtml);
	});

	test('should be increment counter in CounterApp', () => {
		wrapper.find('button').at(0).simulate('click');

		const counterText = parseInt(wrapper.find('h2').text());

		expect(counterText).toBe(11);
	});

	test('should be decrement counter in CounterApp', () => {
		wrapper.find('button').at(2).simulate('click');

		const counterText = parseInt(wrapper.find('h2').text());

		expect(counterText).toBe(9);
	});

	test('should be reset the counter in CounterApp', () => {
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(2).simulate('click');
		wrapper.find('button').at(1).simulate('click');

		const counterReset = parseInt(wrapper.find('h2').text());

		expect(counterReset).toBe(10);
	});
});
