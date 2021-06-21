import React from 'react';
import renderer from 'react-test-renderer';
import GenericNotFound from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(<GenericNotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
