import API from "../api/axios-config";

class PathService {
  registerClass(idPath, idStudent) {
    return API.post(`/register-class/${idPath}`, {
      idStudent,
    });
  }

  isRegistered(idPath, idStudent) {
    return API.post(`/check-user/${idPath}`, {
      idStudent,
    });
  }

  getUserPath(idStudent) {
    console.log(idStudent);
    return API.post("/studentpath", {
      idStudent,
    });
  }
}

export default new PathService();
