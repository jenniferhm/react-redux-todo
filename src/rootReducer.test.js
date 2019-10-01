// import React from 'react';
import rootReducer from './rootReducer';

describe("actions", function() {
  it("should add a new todo", function() {

    expect(rootReducer({todos: []},{
      type: "ADD",
      payload: {task: "sweep"}
    })).toEqual({todos: [{task: "sweep"}]});
  });
});