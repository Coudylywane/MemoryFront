import { EtatOuvrageModel } from "./etat-ouvrage-model";
import { ExemplaireModel } from "./exemplaire-model";
import { MotsClesModel } from "./mots-cles-model";
import { RayonModel } from "./rayon-model";

export class OuvrageModel{
    public id: number | undefined;
    public libelle: string | undefined;
    public code: string | undefined;
    public dateEdition: string | undefined;
    public rayon: RayonModel | undefined;
    public etatOuvrage: EtatOuvrageModel | undefined;
    public motsCles: MotsClesModel | undefined;
    public exemplaire: ExemplaireModel | undefined;
    public archive: boolean = false;
}
