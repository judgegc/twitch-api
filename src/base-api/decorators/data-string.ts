import 'reflect-metadata';
import { MetaVar } from './meta-var';

export const dataStringSymbol = 'dataString';

export function DataString(param: string = '') {
    return (target: any, propertyKey: string, parameterIndex: number) => {
        if (Reflect.hasMetadata(dataStringSymbol, target, propertyKey)) {
            let storage: MetaVar[] = Reflect.getMetadata(dataStringSymbol, target, propertyKey);
            storage.push({ name: param, index: parameterIndex });
        } else {
            Reflect.defineMetadata(dataStringSymbol, [{ name: param, index: parameterIndex }], target, propertyKey);
        }
    };
}