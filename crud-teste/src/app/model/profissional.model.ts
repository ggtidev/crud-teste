export class ProfissionalResponseModel {

    public Nome: string = '';

    public Especialidade: string = '';

    public CRM: string = '';

    public Contato: string = '';

    public Email: string = '';

    public Data_Contratacao: string = '';

    public Inicio_Atendimento: string = '';

    public Fim_Atendimento: string = '';

    public Status_Cadastro: boolean = false ;

    public Dias_Atendimento: string = '';
}

export class CadastroProfissionalModel {

    public nome: string = '';

    public especialidade: string = '';

    public crm: string = '';

    public contato: string = '';

    public email: string = '';

    public datacontratacao: string  | Date = '';

    public inicioatendimento: string = '';

    public fimatendimento: string = '';

    public statuscadastro: boolean = false ;

    public diasatendimento: string = '';
}