

export interface Heroi {
    id?:               string;
    superhero:         string;
    publisher:         Publisher;
    alter_ego:         string;
    first_appearance:  string;
    characters:        string;
    alt_img?:           string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

// Converts JSON strings to/from your types
// export class Convert {
//     public static toHeroi(json: string): Heroi[] {
//         return JSON.parse(json);
//     }

//     public static heroiToJson(value: Heroi[]): string {
//         return JSON.stringify(value);
//     }
//}
