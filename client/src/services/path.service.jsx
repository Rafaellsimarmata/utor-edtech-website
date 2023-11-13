import API from "../api/axios-config";

class PathService {
  //   getPathByPage(page) {
  //     return API.get(`/learn/?page=${page}`);
  //   }
  getPathAll() {
    return API.get(`/learn`);
  }

  getPathById(id) {
    return API.get(`/getDetailPath/${id}`);
  }

  getItemsPathById(id) {
    return API.get(`/getItemPath/${id}`);
  }

  getPathByName(name) {
    return API.get(`/learn/${name}`);
  }

  getListMateri(id) {
    return API.get(`/getListMateri/${id}`);
  }
}

export default new PathService();
