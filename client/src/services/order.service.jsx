import API from "../api/axios-config";

class PathService {
  registerClass(
    idPath,
    idStudent,
    namePath,
    totalParticipants,
    imgUrl,
    price,
    userSaldo
  ) {
    return API.post(`/register-class/${idPath}`, {
      idStudent,
      namePath,
      totalParticipants,
      imgUrl,
      pathPrice: price,
      userSaldo,
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

  getMentorPath(idMentor) {
    console.log(idMentor);
    return API.post("/mentorpath", {
      idMentor,
    });
  }
}

export default new PathService();
