import React from 'react';
import renderer from 'react-test-renderer';

import { UserDashboardView } from '../views/user/UserDashboardView';

it('changes the class when hovered', () => {
  const component = renderer.create(<UserDashboardView />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
