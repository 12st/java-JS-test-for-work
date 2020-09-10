export default class TaskServise {
    _apiBase ="http://localhost:3000";
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }
    async postResource(url, body) {
        const res = await fetch(`
        ${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getTaskItems () {
        return await this.getResource('/tasks');
    }

    async postTaskItems() {
        return await this.postResource('/tasks');
    }
}