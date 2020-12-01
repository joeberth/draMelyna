import React from 'react';
import Navigation from './navigation';
import renderer from 'react-test-renderer';


test("Snapshot navigation without crash", () => {
    const component= renderer.create(
        <Navigation/>
    )
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})