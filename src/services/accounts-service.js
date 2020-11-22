import http from './http-common';

class AccountService {
    get(id) {
        return http.get(`/profile/${id}`);
    }

    update(id, data) {
        return http.put(`/profile/edit/${id}`, data);
    }

    delete(id){
        return http.delete(`/profile/id?id=${id}`);
    }
}

export default new AccountService();
