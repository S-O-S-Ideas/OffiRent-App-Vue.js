import http from './http-common';

class OfficesService {

    getAll() {
        return http.get('/account/100/offices');
    }
    get(id) {
        return http.get(`/offices/${id}`);
    }

    create(data) {
        return http.post("/offices", data);
    }

    update(id, data) {
        return http.put(`/offices/${id}`, data);
    }

    delete(id) {
        return http.delete(`/offices/${id}`);
    }

    deleteAll() {
        return http.delete(`/workspace`);
    }

    findByTitle(title) {
        return http.get(`/workspace?title=${title}`);
    }

    getViewUser(officeId) {
        return http.get(`/offices/${officeId}`);
    }

    getViewProvider(){
        return http.get(`/account/100/offices/`);
    }




}

export default new OfficesService();
