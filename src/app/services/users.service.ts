import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) { }

  GetAllUsers() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name'))
      .valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  AddUser(user: User) {
    return this.dataBaseStore.collection('users').add(user);
  }

  UpdateUser(user: User) {
    return this.dataBaseStore.collection('users').doc(user.firebaseId).update(user);
  }

  DeleteUser(user: User) {
    return this.dataBaseStore.collection('users').doc(user.firebaseId).delete();
  }
}
