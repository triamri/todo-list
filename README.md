# todo-list
Make Todo List

Buatlah sebuah REST API sederhana untuk sebuah aplikasi ToDo List dengan menggunakan Express.js, database MongoDB, dan juga ORM Mongoose.

Fitur-fitur yang perlu dibuat antara lain :

  Authentication & Authorization menggunakan JWT.
  CRUD Task :
    - Create new task
    - Edit Task.
    - Mark as completed/uncompleted
    - Get all tasks
    - Delete task


List of user routes:

| Route                       | HTTP           | Description                                 |
| ----------------------------|:--------------:| -------------------------------------------:|
| /api/signup                 |      POST      |    Create all user                          |
| /api/signin                 |      POST      |    Get a single user                        |
| /api/todos                  |      POST      |    Create todos with userId                 |
| /api/todos                  |      GET       |    Get All todos with userId                |
| /api/todos/:id              |      GET       |    Get Single todos with userId             |
| /api/todos/update/:id       |      PUT       |    Update a todo with specific new info     |
| /api/todos/mark/:id         |      PUT       |    Update a todo with Mark as completed/uncompleted |
| /api/todos/remove/:id       |      PUT       |    Delete a todo                            |