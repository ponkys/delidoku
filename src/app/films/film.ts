import { SafeResourceUrl } from '@angular/platform-browser';

export interface Film {
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

export interface Film2018 extends Film {
    section: string;
    subtitleNote: string;
}
