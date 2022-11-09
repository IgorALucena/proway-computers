import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato=this.fb.group({ //Agrupa e inicia as validações do fomulário
    nome:["", [
      Validators.minLength(4),
      Validators.required //Torna a validação obrigatória
    ]],
    assunto: ["",[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]

  })

  constructor(
    private fb: FormBuilder //Permite criar validação para o formulário
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("A mensagem foi enviada!");
    this.formContato.reset();
  }

}
