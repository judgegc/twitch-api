import 'reflect-metadata';
import { MetaVar } from './meta-var';

export const queryStringSymbol = 'queryString';

export function QueryString(param: string = '') {
    return (target: any, propertyKey: string, parameterIndex: number) => {
        if (Reflect.hasMetadata(queryStringSymbol, target, propertyKey)) {
            let storage: MetaVar[] = Reflect.getMetadata(queryStringSymbol, target, propertyKey);
            storage.push({ name: param, index: parameterIndex });
        } else {
            Reflect.defineMetadata(queryStringSymbol, [{ name: param, index: parameterIndex }], target, propertyKey);
        }
    };
}