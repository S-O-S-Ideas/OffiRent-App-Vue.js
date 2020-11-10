import http from './http-common';

class ReservationsService {
    getViewUser(officeId, reservationId) {
        return http.get(`/offices/${officeId}/reservations/${reservationId}`)
    }
    getViewProvider(providerId, officeId, reservationId) {
        return http.get(`/offices/${providerId}/${officeId}/reservations/${reservationId}`)
    }
}

export default new ReservationsService()
