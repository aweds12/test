export function setToken(token: string = ""): void {
  document.cookie = `token=${token}`;
}
export function useToken(): string {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : "";
}