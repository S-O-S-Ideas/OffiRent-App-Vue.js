import http from './http-common';

class ReservationService {
    getAllByAccount(status) {
        return http.get(`/reservations/100?status=${status}`);
    }

    getAllByOffice(officeId, status) {
        return http.get(`offices/${officeId}/reservations?status=${status}`);
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/reservations/id?id=${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}

export default new ReservationService();
