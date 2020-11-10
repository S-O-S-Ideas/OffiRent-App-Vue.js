import http from './http-common';

class ReservationsService {
    getViewUser(id) {
        return http.get(`/reservations/${id}`)
    }
    getViewProvider(id) {
        return http.get(`/reservation/${id}`)
    }
}

export default new ReservationsService()
