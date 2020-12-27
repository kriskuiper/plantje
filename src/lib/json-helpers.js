export const safeJsonParse = (json) => {
  try {
    return JSON.parse(json)
  } catch {
    return json
  }
}

export const safeJsonStringify = (json) => {
  try {
    return JSON.stringify(json)
  } catch (error) {
    return json
  }
}
