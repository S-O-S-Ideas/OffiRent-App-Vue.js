import http from './http-common';

class OfficesService {
    getViewUser(officeId) {
        return http.get(`/offices/${officeId}`);
    }

    getViewProvider(officeId){
        return http.get(`/account/offices/${officeId}`);
    }



}

export default new OfficesService();
