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
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
    }

    async deleteResource(url, id) {
        const res = await fetch(`
        ${this._apiBase}${url}${id}`, {
            method: 'DELETE',
            headers: {'Content-type':'application/json'}    
        });
        if (!res.ok) {
            throw new Error(`Could not delete ${url}` + 
                `, received ${res.status}`);
        }
    }

    async putResourse(url,item) {
        const res = await fetch(`
        ${this._apiBase}${url}${item.id}`, {
            method: 'PUT',
            headers: {'Content-type':'application/json'
            },   
            body: JSON.stringify(item)
        });
        if (!res.ok) {
            throw new Error(`Could not put ${url}` + 
                `, received ${res.status}`);
        }
    }

    async getTaskItems () {
        return await this.getResource('/tasks');
    }

}