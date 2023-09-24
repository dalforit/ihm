import { AdresseIP } from "./AdresseIP";

export interface Attack {
    label: string;
    date: string;
    severity: string;
    adresseIP: AdresseIP;
  }