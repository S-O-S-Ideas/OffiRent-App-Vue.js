import http from './http-common';

class OfficesService {
    getAll() {
        return http.get('/workspace');
    }
    get(id) {
        return http.get(`/workspace/${id}`);
    }

    create(data) {
        return http.post("/workspace", data);
    }

    update(id, data) {
        return http.put(`/workspace/${id}`, data);
    }

    delete(id) {
        return http.delete(`/workspace/${id}`);
    }

    deleteAll() {
        return http.delete(`/workspace`);
    }

    findByTitle(title) {
        return http.get(`/workspace?title=${title}`);
    }
}

export default new OfficesService();
