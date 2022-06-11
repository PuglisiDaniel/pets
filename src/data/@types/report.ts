import { Pet } from './pets'

export interface Report {
    id: number;
    email: string;
    valor: string;
    pet: Pet;
}