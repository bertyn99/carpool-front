export const login = async (credentials: Credentials) => {
  const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("failed login user");
  const user = await response.json();

  return user.data;
};

type JSONResponse = {
  data?: ITokens;
  errors?: Array<{ message: string }>;
};

async function refreshAccessToken(token: ITokens) {
  console.log("UPDATE");
  const refresh = await fetch(process.env.BACKEND_URL + "/auth/token/refresh", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.refreshToken,
    },
  });

  const res: JSONResponse = await refresh.json();

  if (res.data) {
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      expireAt: Date.now() + 10 * 1000,
    };
  }
  return {
    ...token,
    error: "RefreshAccessTokenError",
  };
}
