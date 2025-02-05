export function setToken(token: string = ""): void {
  if (!!token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
}
export function useToken(): string {
  return localStorage.getItem("token") ?? "";
}
