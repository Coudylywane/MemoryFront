import { RayonModel } from "./rayon-model";

export class ExemplaireModel{
    public id: number | undefined;
    public libelle: string | undefined;
    public rayon: RayonModel | undefined;
    public archive: boolean = false;
}
