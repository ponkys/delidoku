import { SafeResourceUrl } from '@angular/platform-browser';

export interface Film2017 {
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

export interface Film2018 extends Film2017 {
    section: string;
    subtitleNote: string;
}
