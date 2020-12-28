# Car24

# 1. Todos:

## 1.1. Role: Admin
* Admin can add new cars and the specs of the cars and the pictures of them
* Admin can also edit and delete cars

## 1.2. Steps
1.1. Show some cars on screen. (Postman first)
1.2. Implement Frontend.
2. Add/Edit/Delete Cars (Add/Edit -> Form)
3. Admin Signup/Login

## 1.3. Stacks
0. Typescript
1. MongoDB + Mongoose
2. NodeJS + ExpressJS
3. GraphQL 
4. React
___

# 2. Backend

## 2.1. Required Packages for ExpressJS, Typescript and MongoDB:__
* ``npm init``
* ``tsc --init``

* ``express``
* ``body-parser``
* ``nodemon -dev``

* GraphQL:
    * ``graphql``
    * ``express-graphql``  

(_Mori: First I will build it REST and then I will change implement a parallel version in GraphQL._)

* For TS:
    * ``@types/node -dev``
    * ``@types/express -dev``
    * ``@types/body-parser -dev``

* For MongoDB:
    * ``mongoose``
    * Maybe we need ``@typegoose``?!!!

After installing these packages in one tab of terminal first run ``tsc -w`` and in other tab, after that run ``npm start``.
___

## 2.2. Implementation

* __ERROR:__ Instead of ``require()`` you should use ``import`` to profit from TS-IDE helps!

