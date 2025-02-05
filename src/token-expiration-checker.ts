export function tokenExpired(token: string) {
  const parsedToken = parseToken(token);
  if (parsedToken) {
    return new Date(Date.now()) > new Date(parsedToken.exp * 1000);
  } else {
    return true;
  }
}

const parseToken = (token: string) => {
  try {
    if (!token) return null;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const tokenBody: ITokenBody = JSON.parse(jsonPayload);
    return tokenBody;
  } catch (e) {
    console.warn("cannot parse token: ", e);
    return null;
  }
};

export interface ITokenBody {
  exp: number;
  grg: any[];
}
