import { SafeResourceUrl } from '@angular/platform-browser';

export interface Films {
    title: string;
    synopsis: string;
    trailer: string;
    trailerSafe?: SafeResourceUrl;
    duration: number;
    year: number;
    author: string;
    country: string;
    date: Array<{info: string, event: string}>
};
