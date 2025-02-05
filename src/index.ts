export function setToken(token: string = ""): void {
  // document.cookie = `token=${token}`;
  if (!!token) localStorage.setItem("token", token);
  else localStorage.removeItem("token");
}
export function useToken(): string {
  return localStorage.getItem("token") ?? "";
  // const cookies = document.cookie.split("; ");
  // const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));
  // return tokenCookie ? tokenCookie.split("=")[1] : "";
}
