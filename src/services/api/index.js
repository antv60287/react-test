import http from '../../helpers/http';

const API_PATH = {
    users: '/users'
};

const ApiRestService = {
    getListUsers: query => {
        return http.get(`${API_PATH.users}${query}`);
    }
};

export default ApiRestService;