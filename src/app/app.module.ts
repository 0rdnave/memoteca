import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentoComponent,
    PensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
