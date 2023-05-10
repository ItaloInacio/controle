import { Component } from '@angular/core';

interface ItemOrcamento {
  codigo: number | null;
  descricao: string;
  quantidade: number | null;
  valor_unitario: number | null;
  custo: number | null;
  percentual: number | null;
  substituicao_tributaria: number | null;
  icms_diferencial: number | null;
  valor_venda_unitario: number | null;
  frete: number | null;
  valor_venda: number | null;
  fornecedor: string;
  qualificacao: string;
}

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent {
  removerLinha(index: number) {
    this.orcamento.splice(index, 1);
  }
  
  orcamento: ItemOrcamento[] = [];
  totalDespesas: any;
  despesaCartao: any;
  comissao: any;
  frete: any;
  despesasNota: any;
  icms: any;
  totalPecas: any;
  totalInvestimento: any;
  custoPecas: any;
  lucroBruto: any;
  taxaRetorno: any;

  cores = ['#E6E6E6', '#B4FBB4'];

  adicionarLinha() {
    const novaLinha: ItemOrcamento = {
      codigo: null,
      descricao: '',
      quantidade: null,
      valor_unitario: null,
      custo: null,
      percentual: null,
      substituicao_tributaria: null,
      icms_diferencial: null,
      valor_venda_unitario: null,
      frete: null,
      valor_venda: null,
      fornecedor: '',
      qualificacao: ''
    };
    this.orcamento.push(novaLinha);
  }
}
