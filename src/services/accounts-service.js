import http from './http-common';

class AccountService {
    get() {
        return http.get(`/accounts/100`);
    }

    update(data) {
        return http.put(`/accounts/100`, data);
    }

    delete(){
        return http.delete(`/accounts/id?id=${100}`);
    }
}

export default new AccountService();
