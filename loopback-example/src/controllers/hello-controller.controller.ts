import {get, RestBindings, param} from '@loopback/rest';
import {inject} from "@loopback/context";
import {Request} from "express";


export class HelloController {
    constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {
    }

    @get('/hello/{user}')
    hello1(@param.path.string('user')name: string): string {
        return `Hello ${name}`;
    }

    @get('/hello')
    hello2(@param.query.string('user')  name: string): string {
        return `Hello ${name}`;
    }
}
