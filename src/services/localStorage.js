export function getLocalStorage(key) {
  const response = JSON.parse(localStorage.getItem(key));
  return response;
}
