import { Injectable } from "@angular/core";
import { HttpCommom } from "./http-commom.service";
import { Observable } from "rxjs";
import { CadastroProfissionalModel, ProfissionalResponseModel } from "../model/profissional.model";

@Injectable({
    providedIn: 'root'
})
export class ProfissionaisService extends HttpCommom {
    public getListaProfissionais() : Observable<{ profissionais: ProfissionalResponseModel[]}> {
       return this.get('');
    }
    public postCadastrarProfissional(body: CadastroProfissionalModel) : Observable<void> {
        return this.post('', body);
    }
    public putAtualizarCadastroProfissional(body: CadastroProfissionalModel) : Observable<void> {
        return this.put('', body);
    }
    public deleteApagaProfissional(crm: string) : Observable<void> {
        return this.delete(`?crm=${crm}`);
    }
}