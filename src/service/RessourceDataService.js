import http from "../http-common";
const path = "/games"
class RessourceDataService {
    getAll(game) {
        return http.get(`${path}/${game}/values`);
    }
    get(game) {
        return http.get(`${path}/${game}`);
    }
    create(game,data) {
        return http.post(`${path}/${game}`, data);
    }
    update(game,ressource, data) {
        return http.put(`${path}/${game}/${ressource}`, data);
    }
    delete(game, ressource) {
        return http.delete(`${path}/${game}/${ressource}`);
    }
}
export default new RessourceDataService();

