// This module handles the app's states
import { types } from "mobx-state-tree"

const BeatIndexes = types
  .model({
    lead: types.optional(types.number, 3),
    rhythm: types.optional(types.number, 2),
    tempo: types.optional(types.number, 35),
  })
  .actions(self => {
    function setIndex(name, index) {
      self[name] = index
      //TODO: add a function to store the data persistantly
    }

    function getValue(name) {
      const index = self[name]
      return (inputValues[name][index])
    }

    return { setIndex, getValue }
  })

export const beats = BeatIndexes.create()

const defaultTempoArray =  [...Array(100).keys()].map(x => x + 50)

const Numbers = types
  // carrys the arrays of values for the BeatIndex object
  .model({
    tempo: types.optional(types.array(types.number), defaultTempoArray),
    lead: types.optional(types.array(types.number), [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22]),
    rhythm: types.optional(types.array(types.number), [2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 22])
  })

export const inputValues = Numbers.create()