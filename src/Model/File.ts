import { IAppartement } from './AppartementModel/AppartementModel';

export interface File {
  id: number;
  name: string;
  type: string;
  file: File;
}
