import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
  }
  
  displayedColumns: string[] = ['firebaseId', 'name', 'email', 'role', 'benefits', 'action'];
  dataSource: any;
  listUsers: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getListUsers();
  }

  ngAfterViewInit() {
    this.pagination();
  }

  getListUsers()
  {
    this.usersService.GetAllUsers().subscribe({
      next: (data) => {
        this.listUsers = data;
        this.dataSource = new MatTableDataSource<any>(this.listUsers);
        
        this.pagination();
      },
      error: (error) => {
        console.error(error);
      }
    });
  
  }

  deleteUser(user: User) {
    this.usersService.DeleteUser(user).then(() => {
      window.alert('Usuário deletado com sucesso!');
    }).catch((error) => {
      window.alert('Erro ao deletar usuário!');
      console.error(error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  OpenModalViewUser(user: User){
    this.dialog.open(ModalViewUserComponent, {
      width: '700px',
      height: '350px',
      data: user
    });
  }

  OpenModalAddUser(){
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '400px'
    }).afterClosed().subscribe(() => this.getListUsers());
  }

  OpenModalEditUser(user: User) {
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '400px',
      data: user
    }).afterClosed().subscribe(() => this.getListUsers());
  }
}
