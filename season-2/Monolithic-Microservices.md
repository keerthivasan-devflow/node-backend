## Software Development Lifecycle

### Waterfall Model
- Requirements Gathering / Analysis `(Product Manager / Project Manager)`
- Design `(Product Engineer / Engineer Manager)` Tech stack, Monolithic / Microservices, HLD /LLD
- Development `(Software Engineer / Software Developers) - SDE1, SDE2` [usually Unit Testing done by developers in most cases]
- Testing `(Software Tester / SDET)`
- Deployment `(Mostly developers)` Nowadays DevOps Engineer also involved in deployment process
- Maintenance / Support - Whole lifecycle again follows

## Monolithic Architecture vs Microservices

**Monolithic** - All the project code of frontend, backend and database will be put together

**Microservice**
Note: service - meaning project / module / application / service are the same

- There will be a different microservice for the following:
- Each could be implemented in different tech stack
    - Frontend Service
        - Admin Dashboard Service (React.js)
        - Details Page (Next.js)
    - Backend Service
    - Database Service
    - Authentication / Authorization Service

### Advantages of microservice:
- Dev speed
- Code repo
- Scalability
- Flexibility
- Tech stack
- Infra cost
- Complexity
- Fault isolation
- Testing
- Ownership
- Maintenance
- Revamping
- Debugging
- Dev experience

1. Frontend
2. Backend 
These can be communicated through API