export enum ParametersPackMethod {
    Inline,
    KeyVal
}

export interface QueryParamsPacketSettings {
    inlineSeparator?: string;
    paramsPackMethod?: ParametersPackMethod;
}