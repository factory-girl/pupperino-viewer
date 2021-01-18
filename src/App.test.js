import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import Pupperinos from './components/Pupperinos';
import Inputs from './components/Inputs'

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders <App /> component containing a Inputs and Pupperinos component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Inputs).length).toBe(1);
    expect(wrapper.find(Pupperinos).length).toBe(1);

  });

  it('calls getDogs when button is clicked', () => {
    const getWeather = sinon.spy();
    const wrapper = shallow(<Inputs getDogs={getDogs} />);
    wrapper.find('form').simulate('submit');
    expect(getWeather).toHaveProperty('callCount', 1);
  })
});