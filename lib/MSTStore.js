// This module handles the app's states
import { getSnapshot, types } from "mobx-state-tree"

const Beats = types
  .model({
    // TODO: change types to non-optional for persistant data storage
    lead: types.optional(types.number, 4),
    rhythm: types.optional(types.number, 3),
    tempo: types.optional(types.number, 105)
  })
  .actions(self => {
    function setValue(name, value) {
      self[name] = value
      console.log('beat value added: ', name, value);
      //TODO: add a function to store the data persistantly
    }

    return { setValue }
  })

  
  // const Numbers = types.model //TODO: add the beat arrays to the store
  
export const beats = Beats.create()

// console.log(getSnapshot(beats))

  
