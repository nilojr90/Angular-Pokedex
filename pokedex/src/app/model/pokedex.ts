export interface IPokedexEntry {
    name: string;
    url: string;
}

export interface IPokedex {
    count: number;
    next: string;
    previous?: any;
    results: IPokedexEntry[];
}