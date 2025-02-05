export function setToken(token: string = ""): void {
  if (process.client) {
    document.cookie = `token=${token}`;
  }
}

export function useToken(): string {
  if (process.client) {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : "";
  }
  return "";
}