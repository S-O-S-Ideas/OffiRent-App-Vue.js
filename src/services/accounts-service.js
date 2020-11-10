import http from './http-common';

class AccountService {
    get() {
        return http.get(`/profile`);
    }

    update(data) {
        return http.put(`/profile/edit`, data);
    }

    delete(){
        return http.delete(`/profile`);
    }
}

export default new AccountService();
