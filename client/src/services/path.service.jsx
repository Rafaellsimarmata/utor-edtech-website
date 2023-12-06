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
    return API.post(`/addMateriTopic/${idTopic}`, {
      ...materiData,
    });
  }

  getMentorData(idMentor) {
    return API.get(`/users/${idMentor}`);
  }

  createReview(dataComment, userData, id) {
    return API.post(`/add-review/${id}`, {
      idUser: userData.id,
      review: dataComment,
      namaUser: userData.name,
      imgUser: userData.img_profile,
    });
  }

  getReviewsData(id) {
    return API.get(`/get-review/${id}`);
  }
}

export default new PathService();
