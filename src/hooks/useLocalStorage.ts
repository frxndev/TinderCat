export const setLocalStorage = <T>(key: string, value: T) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : 'user-123'
}
