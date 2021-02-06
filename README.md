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
1. MongoDB + Mongoose (Mori: I would not use Mongoose: 1. Using Normal JS classes instead of Mongoose Schema constructor, 2. Bad Documentation, 3. Hard to use for complicated queries.)
2. NodeJS + ExpressJS
3. GraphQL 
4. React
___

# 2. Backend

## 2.1. Required Packages:__
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
    * Maybe first directly work or Read about direct MongoDB JS interface.

After installing these packages in one tab of terminal first run ``tsc -w`` and in other tab, after that run ``npm start``.

* For Inline Documentation and Comments:
    * ``jsdoc -dev``
___

## 2.2. Implementation Notices

* __ERROR:__ Instead of ``require()`` you should use ``import`` to profit from TS-IDE helps!

* __ATTENTION - DO NOT USE .use():__ ``.all()`` (Express Router): To handle all different types of HTTP Requests together. (look at ``routes/cars.ts -> /:carId``)

* __MongoDB__
    * Install:
        * ``npm i mongodb`` (i = ``install --save``)
        * ``npm i -D @types/mongodb`` (i = ``install --save`` and -D = ``--save-dev``)
    * Instruction:
        1. Go to MongoDB Atlas
        2. Create New Project
        3. Use Cluster0 (Sandbox) for getting a free DB.
    * Users:
        * "nancologist" - "1BgmNOzX8pWh4Ryf" - "mongodb+srv://nancologist:<password>@cluster0.sgb6o.mongodb.net/<dbname>?retryWrites=true&w=majority"
    * I will go with Native MongoDB Driver for NodeJS WITHOUT Mongoose (one of the reason is to write the Models classes with TS in usual class forms and not using Mongoose Schema constructors.)

# 3. Frontend

## 3.1. Dependencies

* ``redux`` is working with TS
* ``react-redux`` needs @types : npmjs.com/package/@types/react-redux
