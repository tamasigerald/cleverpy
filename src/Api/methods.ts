/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosRequestConfig } from 'axios';

import { config } from 'config';

import { user } from '../types/global';
import { post } from 'types/global';

const methods = {
    // Get method
    async get(endpoint: string) {
        const res = await axios.get(config.baseUrl + endpoint);
        return res.data;
    },
    // Post method
    async post(endpoint: string, data: post | user, axiosConfig?: AxiosRequestConfig) {
        const res = await axios.post(config.baseUrl + endpoint, data, axiosConfig);
        return res.data;
    },
    // Put method
    async put(endpoint: string, data: post | user, axiosConfig?: AxiosRequestConfig) {
        const res = await axios.put(config.baseUrl + endpoint, data, axiosConfig);
        return res.data;
    },
    // Delete method
    async delete(endpoint: string, id: string) {
        const res = await axios.delete(config.baseUrl + endpoint + id);
        return res.data;
    }
};

export default methods;
