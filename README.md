# Tablify

## Project Description 

Tablify is a simple, streamlined, and user-friendly application that allows restaurant owners and staff to build their custom restaurant layout from scratch, assign customers to tables, and track those customers' meals - individual items and meal stages - from start to finish. In addition, Tablify offers user authentication through Firebase - and through the use of one's personal account, a user may track employees and revenue. By using this app, we hope that users will be able to process customers through the restaurant as efficiently as possible - and that the difficult nature of running a restaurant is made easier.


## Table of Contents 

1. [Installations & Dependencies](##Installations-And-Dependencies)

2. [Usage](##Usage) 

3. [Additional Contributors](##Additional-Contributors)

4. [Licensing](##License) 

5. [Testing](##Testing)


## Installations and Dependencies 

### Server
1. Express
2. If-Env
3. Nodemon
4. Dotenv
5. Axios

### Database
1. MongoDB 
2. Mongoose

### Front-End - React
1. React-DOM
2. React-Router-DOM
3. React-Draggable
4. React-Moment
5. React-ChartJS2
6. React-Square-Payment-Form

### Authentication
1. Firebase

### Additional Dependencies
1. Chart.JS
2. Moment / Moment-Timezone
3. Bootstrap
4. Recompose



## Usage 

> Kindly install all dependencies through your packet manager of choice before beginning the application on your local machine.

Tablify is a fully fleshed-out restaurant management application where restaurant owners can login to their own secure account - with authentication provided by Firebase - and use the site to arrange restaurant layout, track employees and customers, edit the restaurant menu, view revenue analytics, and more. Our goal for this application is that owners can use it to manage every aspect of their restaurant from front to back.

To begin, users are taken to a landing page where they are given the option to login or signup for an account with the site. Upon signing in or creating an account, users gain access to the application - from there, they can access the Accounts page, with its respective analytics, or the Front Desk, in which users can create restaurant layout, track customer meals, process payments, and edit the menu. In addition, users can access the Kitchens page, where the kitchen staff can track meal tickets.

#### Account

From here, users are presented with functionality regarding the managing of their resturant staff and revenue, as well as the option to reset their password. In the "Employees" page, users may add and remove restaurant staff within a table, which will track all pertinent personal information about the employee. Within the "Revenue" page, users can track all current and past orders, and can filter by dates or from a range of dates. In addition, users have access to a chart of revenue data by date and can print invoices from the specific invoice location within the table.

#### Kitchen

Users can utilize the kitchen page to track all current meal tickets for the restaurant floor. After preparation, they may click to remove same tickets and notify the wait staff that the specific food is ready to be served.

#### Front Desk

From here, users can add tables to the restaurant floor and customize the layout of the floor by dragging and place those tables. Users will then be asked if they would like to lock the table in place. Along with restaurant layout, these tables offer the ability submit food orders, and to track those orders through color-coding - when a user (e.g. waiter) states that a certain portion of the meal (e.g. appetizer) is served, they can click the respective button for the meal portion within the table modal, which will color-code the table. In this way, the restaurant can accurately judge the state of a table at a glance from within the app, and more decisiviely provide waiting times to prospective customers. Finally, users may access "Payment" from the sidenav to process payments by credit card, or choose "Menu" to access the menu. From the menu, the restaurant can edit the restaurant's menu by adding or removing food items. 


## Contributors 

1. [Justin Lin](https://github.com/Chih-Chien-Lin)
2. [Kevin Salamon](https://github.com/kevin-salamon)
3. [Kenny Lam](https://github.com/Thewa55)
4. [Kimia Darden](https://github.com/kimiadarden)
5. [Anamika](https://github.com/anam2028)


## License 

N/A

## Testing 

N/A
