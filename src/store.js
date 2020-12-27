import { writable } from 'svelte/store'

import { safeJsonParse, safeJsonStringify } from './lib/json-helpers'

const persistentWritable = (key, defaultValue) => {
  const initialValue = safeJsonParse(localStorage.getItem(key)) || defaultValue
  const { set, subscribe } = writable(initialValue)

  return {
    set: value => {
      localStorage.setItem(key, safeJsonStringify(value))
      return set(value)
    },
    subscribe
  }
}

export const currentRoute = writable('/')
export const savedPlants = persistentWritable('saved_plants', [])
