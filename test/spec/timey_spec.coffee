# global describe, it 
assert = require("chai").assert
  "use strict"
  describe "Give it some context", ->
    describe "maybe a bit more context here", ->
      it "should run here few assertions", ->
        assert true
