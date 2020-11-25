import http from './http-common';

class AccountService {
    get() {
        return http.get(`/accounts/100`);
    }

    update(id, data) {
        return http.put(`/accounts/edit/${id}`, data);
    }

    delete(id){
        return http.delete(`/accounts/id?id=${id}`);
    }
}

export default new AccountService();
