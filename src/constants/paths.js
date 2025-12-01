// 基础路径常量
const BASE_PATH = '/isc-colorful-light-language'

export const getAssetPath = (path) => {
  // 直接返回带有基础路径的完整路径
  // 例如: /assets/image.png -> /isc-colorful-light-language/assets/image.png
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`
  }
  return `${BASE_PATH}/${path}`
}

export default BASE_PATH
