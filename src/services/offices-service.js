import http from './http-common';

class OfficesService {
    getViewUser(id) {
        return http.get(`/offices/${id}`);
    }

    getViewProvider(providerId, officeId){
        return http.get(`/offices/${providerId}/${officeId}`);
    }



}

export default new OfficesService();
