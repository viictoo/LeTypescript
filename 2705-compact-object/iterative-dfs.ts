// iterative dfs implementations
// same complexity but slower than recursive

const compactObject = (obj) => {
  const origObj = obj
  const queue = [obj]
  while (queue.length) {
    obj = queue.shift()
    if (Array.isArray(obj)) {
      let k = 0
      for (let i = 0; i < obj.length; ++i)
        if (obj[i]) {
          obj[k++] = obj[i]
          if (typeof obj[i] === 'object')
            queue.push(obj[i])
        }
      obj.length = k
    } else
      for (const key in obj)
        if (obj[key]) {
          if (typeof obj[key] === 'object')
            queue.push(obj[key])
        } else
          delete obj[key]
  }
  return origObj
}
