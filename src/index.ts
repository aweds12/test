export function setToken(token: string = ""): void {
  if (typeof document !== "undefined") {
    document.cookie = `token=${token}`;
  }
}

export function useToken(): string {
  if (typeof document !== "undefined") {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : "";
  }
  return "";
}