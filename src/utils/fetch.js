export const fetchData = async ({ data: { endpoint, options = {} }, callback, errorCallback }) => {
  try {
    // Fetch the data
    const res = await fetch(endpoint, options)
    // Check for errors
    if (!res.ok)
      throw {
        code: res.status,
        name: `Error ${res.status}`,
        message: res.statusText,
      }
    // Update data
    callback(await res.json())
    errorCallback(null)
  } catch (err) {
    errorCallback(err)
  }
}
