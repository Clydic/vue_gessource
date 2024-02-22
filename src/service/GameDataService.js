import http from "../http-common";
const path = "/games"
class GameDataService {
    getAll() {
        return http.get(`${path}/`);
    }
    get(game) {
        return http.get(`${path}/${game}`);
    }
    create(data) {
        return http.post(`${path}/`, data);
    }
    update(game, data) {
        return http.put(`${path}/${game}`, data);
    }
    delete(game) {
        return http.delete(`${path}/${game}`);
    }
}
export default new GameDataService();

