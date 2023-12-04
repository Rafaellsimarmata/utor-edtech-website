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

  getDetailTopic(id) {
    return API.get(`/getDetailTopic/${id}`);
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

  createPath(pathData) {
    return API.post("/addPath", {
      ...pathData,
    });
  }

  createTopicPath(topicData, idPath) {
    return API.post(`/addTopicPath/${idPath}`, {
      ...topicData,
    });
  }

  createMateriTopic(materiData, idTopic) {
    // console

    return API.post(`/addMateriTopic/${idTopic}`, {
      ...materiData,
    });
  }

  getMentorData(idMentor) {
    return API.get(`/users/${idMentor}`);
  }
}

export default new PathService();
