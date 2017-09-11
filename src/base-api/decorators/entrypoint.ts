import 'reflect-metadata';
import { RequestMethod } from './../request-method';

export const entrypointSymbol = 'entrypoint';

export interface EntrypointMetadata {
    method: RequestMethod;
    resource: string;
}


export function EntryPoint(method: RequestMethod, resource: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(entrypointSymbol, { method: method, resource: resource }, target, propertyKey);
        return {
            value: function (...args) {
                return descriptor.value.apply(this, [...args, propertyKey])
            },
            writable: true,
            enumerable: false,
            configurable: true
        };
    }
}