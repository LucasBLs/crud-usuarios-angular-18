import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

  planosSaude = [
    {
      id: 1,
      descricao: 'Plano de Saúde 1'
    },
    {
      id: 2,
      descricao: 'Plano de Saúde 2'
    },
    {
      id: 3,
      descricao: 'Plano de Saúde 3'
    }
  ];

  planosDental = [
    {
      id: 1,
      descricao: 'Plano Dental 1'
    },
    {
      id: 2,
      descricao: 'Plano Dental 2'
    },
    {
      id: 3,
      descricao: 'Plano Dental 3'
    }
  ];

  formUser: FormGroup;

  constructor(
    public diaLogRef : MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.buildForm();
  }

  saveUser() {
    const objUserForm = this.formUser.getRawValue();

    if(this.data != null && this.data.name) {
      objUserForm.firebaseId = this.data.firebaseId;
      this.userService.UpdateUser(objUserForm).then(
        (response: any) => {
          window.alert('Usuário atualizado com sucesso!');
          this.closeDiaLog();
        }
      ).catch(err => {
        window.alert('Erro ao atualizar usuário! \n' + err);
        console.error(err);
      });

    } else {
      this.userService.AddUser(objUserForm).then(
        (response: any) => {
          window.alert('Usuário cadastrado com sucesso!');
          this.closeDiaLog();
        }
      ).catch(err => {
        window.alert('Erro ao cadastrar usuário! \n' + err);
        console.error(err);
      });
    }  
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(5)]],
      healthPlan: [''],
      dentalPlan: ['']
    });

    if(this.data != null && this.data.name) {
      this.fillForm();
    }
  }

  fillForm() {
    this.formUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      sector: this.data.sector,
      role: this.data.role,
      healthPlan: this.data.healthPlan,
      dentalPlan: this.data.dentalPlan
    });
  }

  closeDiaLog() {
    this.diaLogRef.close();
  }
}
