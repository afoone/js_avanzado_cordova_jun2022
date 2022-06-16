# Principio de responsabilidad única

Cada componente tiene una sola responsabilidad.

*Cada componente tiene sólo una razon para cambiar.*

```javascript
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

    save() {
        // save user to database
    }
}
```

```javascript
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

class UserRepository {

  save(user) {
    this.users.push(user);
  }
}

```

