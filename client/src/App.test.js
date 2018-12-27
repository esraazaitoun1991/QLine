import React from 'react';
import ReactDOM from 'react-dom';
import { createShallow } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import App from './App';
import { expect } from 'chai';
import Header from './Header.js';
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });


// test for checking components and its functionality
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test for checking Category components and its functionality
describe('<App />', () => {
  it('renders one <Category /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('renders an `.centerNav`', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.centerNav')).to.have.lengthOf(1);
  });

  it('click right in button', () => {
    const wrapper = shallow(<div><Header className="foo" /><div className="foo" /></div>);
    expect(wrapper.find('.foo').hostNodes()).to.have.lengthOf(1);
  })
});