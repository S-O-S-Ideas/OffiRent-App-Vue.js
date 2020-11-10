import http from './http-common';

class OfficesService {
<<<<<<< HEAD
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
=======
    getViewUser(officeId) {
        return http.get(`/offices/${officeId}`);
    }

    getViewProvider(officeId){
        return http.get(`/account/offices/${officeId}`);
    }



>>>>>>> feature/US08-US23
}

export default new OfficesService();
