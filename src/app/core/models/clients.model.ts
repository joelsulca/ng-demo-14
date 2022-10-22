export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  languages: Language[];
  creationDate: string;
}

export interface Language {
  id: number;
  name: string;
  color?: string;
}