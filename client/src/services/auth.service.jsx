import API from "../api/axios-config";

class AuthService {
  async login(email, password) {
    const { data } = await API.post("/auth/login", {
      email,
      password,
    });

    return data;
  }

  async googleLogin(code) {
    console.log("Google Login session");
    const { data } = await API.post("/auth/google", {
      code,
    });
    console.log("already getting data");
    return data;
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
  }

  forgotPassword(email) {
    return API.post("/auth/forgot-password", {
      email,
    });
  }

  checkToken(token, email) {
    return API.post("/auth/check-token", {
      token,
      email,
    });
  }

  resetPassword(token, email, password, password2) {
    return API.post("/auth/reset-password", {
      token,
      email,
      password,
      password2,
    });
  }

  async register(name, email, password) {
    const { data } = await API.post("/auth/register", {
      name,
      email,
      password,
    });

    return data;
  }

  getCurrentUser() {
    return API.get("/users/profile");
  }
}

export default new AuthService();
