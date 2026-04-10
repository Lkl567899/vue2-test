const key = 'active_INDEX'
// 获取
export const getActiveIndex = () => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : 0
}
// 存储
export const setActiveIndex = (index) => {
    localStorage.setItem(key, JSON.stringify(index))
}