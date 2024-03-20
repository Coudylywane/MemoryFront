import { EtatDemandeModel } from "./etat-demande-model";
import { OuvrageModel } from "./ouvrage-model";
import { UtilisateurModel } from "./utilisateur.model";

export class DemandeModel{
    public id: number | undefined;
    public libelle: string | undefined;
    public date: Date | undefined;
    public archive: boolean = false;
    public ouvrage: OuvrageModel | undefined;
    public etatDemande: EtatDemandeModel | undefined;
    public adherent: UtilisateurModel | undefined;
}
