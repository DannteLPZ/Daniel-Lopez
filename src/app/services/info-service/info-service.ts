import { Service } from '@angular/core';

@Service()
export class InfoService {
    url: string = ''
    
    async getInfo(id: string): Promise<string>{
        const data = await fetch(`${this.url}/sections/${id}`)
        const json = (await data.json()) ?? ''
        return json
    }
}
