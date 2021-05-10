import axios from 'axios';

import { config } from 'config';

const methods = {
    async get(endpoint: string) {
        const res = await axios.get(config.baseUrl + endpoint);
        return res.data;
    }
};

export default methods;
