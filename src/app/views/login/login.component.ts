import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new Login("","")
  mensagem = ""

  receberDados() {
    // console.log(this.userModel)

    this.loginService.login(this.userModel).subscribe( (response) => {
      console.log("response:", response)
      console.log("O Status Code é:", response.status)
      console.log("O token de permissão é:", response.body.acessToken)

      this.mensagem = "Bem vindo " + response.body.user.nome
      console.log(this.mensagem)
    }, (error) => {
      console.log(error)
      this.mensagem = error
    }
    )
  }
}
