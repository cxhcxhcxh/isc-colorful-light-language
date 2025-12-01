// 基础路径常量
const BASE_PATH = '/isc-colorful-light-language'

export const getAssetPath = (path) => {
  // 如果路径已经包含基础路径，直接返回
  if (path.startsWith(BASE_PATH)) {
    return path
  }
  // 如果路径以 / 开头，添加基础路径
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`
  }
  // 否则添加 / 和基础路径
  return `${BASE_PATH}/${path}`
}

export default BASE_PATH
