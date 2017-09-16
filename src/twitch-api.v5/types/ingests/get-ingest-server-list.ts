export interface GetIngestServerListOutput {
    ingests: Ingest[];
}

export interface Ingest {
    _id: string;
    url_template: string;
    availability: number;
    name: string;
    default: boolean;
}
