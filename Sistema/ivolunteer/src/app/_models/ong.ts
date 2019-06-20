export class Ong {
    id: number;
    nome: string;
    descricao: string;
    doacoes: string;
    endereco: object;
    dataFundacao: string;
    dataCriacao: string;
    areas: string[] = [];
    telefone: string;
    email: string;
    urlFacebook: string;
    urlWebsite: string;
    idsEventos: number[] = [];
    idsSeguidores: number[] = [];
}