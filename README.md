Express JS Dependency Injection Example
=======================================

An example application demonstrating dependency injection in Express. This example is based on the application structure in the [Practical Microservices](https://pragprog.com/titles/egmicro/practical-microservices/) book.

For more information about this repo, please see the corresponding [blog post](https://aaronmarr.co.uk/posts/dependency-injection-in-express-js/).

To run the code:

```bash
# install dependencies
npi i

# start the app
npm start
```

The app exposes two `JSON` endoints:

```bash
curl http://localhost:4000/users                                     
[{"id":1,"username":"hamish","email":"hamish@example.com"},{"id":2,"username":"sarah","email":"sarah@example.com"},{"id":3,"username":"jason","email":"jason@example.com"}]
```   

```bash
curl http://localhost:4000/users/1
{"id":1,"username":"hamish","email":"hamish@example.com"}
```
