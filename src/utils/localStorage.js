export function get(name) {
  let params = localStorage.getItem(name);
  return JSON.parse(params);
}

export function set(name, params) {
  let data = JSON.stringify(params);
  return localStorage.setItem(name, data);
}

export function remove(name) {
  return localStorage.removeItem(name);
}

export function clear() {
  return localStorage.clear();
}

export function setTokens(refreshToken, params) {
  let refresh = JSON.stringify(refreshToken);
  let token = JSON.stringify(params);
  localStorage.setItem("refreshToken", refresh);
  return localStorage.setItem("token", token);
}
