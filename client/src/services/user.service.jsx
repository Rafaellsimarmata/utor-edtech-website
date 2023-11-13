import API from "../api/axios-config";

class UserService {
  getUserProfileById(id) {
    return API.get(`/users/${id}`);
  }

  //   getPathByPage(page) {
  //     return API.get(`/learn/?page=${page}`);
  //   }
  //   getPathAll() {
  //     return API.get(`/learn`);
  //   }
  //   getPathById(id) {
  //     return API.get(`/learn/${id}`);
  //   }
  //   getPathByName(name) {
  //     return API.get(`/learn/${name}`);
  //   }
}

export default new UserService();
