import createApiClient from './api.service';

class PacketService {
    constructor(baseURL = 'http://localhost:3000/api/packets') {
        this.api = createApiClient(baseURL);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }

    async create(data) {
        return (await this.api.post('/', data)).data;
    }

    async search(name) {
        return (await this.api.get(`/search/${name}`)).data;
    }

    async deleteAll() {
        return (await this.api.delete('/')).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`${id}`)).data;
    }
}

export default new PacketService();
