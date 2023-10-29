import http from "../http-common";
const path = ""
class RessourceDataService {
    getAll() {
        return http.get(path);
    }
    get(id) {
        return http.get(`${path}/${id}`);
    }
    create(data) {
        return http.post(path + "/", data);
    }
    update(id, data) {
        return http.put(`${path}/${id}`, data);
    }
    delete(id) {
        return http.delete(`${path}/${id}`);
    }
    deleteAll() {
        return http.delete(path + "/");
    }
    findByName(name_arme) {
        return http.get(`${path}/?name=${name_arme}`);
    }
}
export default new RessourceDataService();

