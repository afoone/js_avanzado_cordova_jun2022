# Dependency Inversion Principle
Depende de abstracciones, no de objetos

```java
public class User {
    private String name;
    private String email;
    private String password;
}

public class Owner {
    private User user;
}
```

```java
public class User  implements UserInterface {
    private String name;
    private String email;
    private String password;
}

// otro componente
 public interface UserInterface {
    String getName();
    String getEmail();
    String getPassword();
 }

public class Owner {
    private UserInterface user;
}
```

