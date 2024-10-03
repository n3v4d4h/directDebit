import env from "../config/env.js";
import request from 'request';



export const initializePayment = (form, mycallback) => {
    const options = {
        url: `${env.paystack_api_url}/transaction/initialize`,
        headers: {
            Authorization: `Bearer ${env.paystack_secret_key}`,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        },
        form
    }

    const callback = (error, response, body) => {
        return mycallback(error, body)
    }
    request.post(options, callback)
}

export const verifyPayment = (ref, mycallback) => {
    const options = {
        url: `${env.paystack_api_url}/transaction/verify/` + encodeURIComponent(ref),
        headers: {
            Authorization: `Bearer ${env.paystack_secret_key}`,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        }
    }
    const callback = (error, response, body) => {
        return mycallback(error, body)
    }
    request(options, callback)
}

//Direct debit implementation
export const initializeDirectDebit = (form, mycallback) => {
    const options = {
        url: `${env.paystack_api_url}/customer/authorization/initialize`,
        headers: {
            Authorization: `Bearer ${env.paystack_secret_key}`,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        },
        form
    }

    const callback = (error, response, body) => {
        return mycallback(error, body)
    }
    request.post(options, callback)
}

export const ChargeUserAccount = (form, mycallback) => {
    const options = {
        url: `${env.paystack_api_url}/transaction/charge_authorization`,
        headers: {
            Authorization: `Bearer ${env.paystack_secret_key}`,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        },
        form
    }

    const callback = (error, response, body) => {
        return mycallback(error, body)
    }
    request.post(options, callback)
}

export const deactivateDirectDebit = (form, mycallback) => {
    const options = {
        url: `${env.paystack_api_url}/customer/authorization/deactivate`,
        headers: {
            Authorization: `Bearer ${env.paystack_secret_key}`,
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        },
        form
    }

    const callback = (error, response, body) => {
        return mycallback(error, body)
    }
    request.post(options, callback)
}