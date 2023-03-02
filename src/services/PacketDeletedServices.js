import createApiClient from './api.service';

class PacketService {
    constructor(baseURL = 'http://localhost:3000/api/packetsDeleted') {
        this.api = createApiClient(baseURL);
    }

    async getAll() {
        return (await this.api.get('/')).data;
    }

    async create(data) {
        return (await this.api.post('/', data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`${id}`)).data;
    }
}

export default new PacketService();
