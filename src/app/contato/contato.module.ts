import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()//Padroniza a inserção dos dados no formulário
  ]
})
export class ContatoModule { }
