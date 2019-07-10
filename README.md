# Smart Messenger
Name: Rabin Gurung

CollegeID: 9637261

Batch: Jan19C

Smart messenger is a social media site where friends and family can share images and opinions with each other. 
They can also communicate in real time thanks to the power of sockets that enables persistent two-way 
communication between server and client. People can also add other people as friend. There is two-way verification.
One is the token verfication in the backend and in the front end. So that people who are not authorized will not lurk around in the system.
The Node version and Npm used are :
Nodejs version : 8.10.0
Npm version : 3.5.2

System Architecture
I used Node js framework for building up back end server. I used the Express package from ease. 
For the database handling I used Sequelize. Sequelize helps create tables and query the tables.
For hashing the password, I used the bycrpt and for the token I used jwt. for saving the file in local storage I used multer.
For bulding up the socket connection. I used socket io. I used socket io to build a two way communication between client and the server.
The Database ER diagram is shown below:
![alt text](https://i.ibb.co/HGF4RxC/Blank-ERD.png)

The user has one to one relation with profile. The user entity has one to many relation with Post and
friend. Admin does not related to any entity directly.
In the front end side I used firebase to auth facebook for log in with facebook. For doing that I had to created developer account for 
google and facebook and get their secret api key. 
All the credential all stored in the .env file.
To run the backend
 <h3>npm install </h3> 
<h3> npm start </h3>

<span>You do not need to configure sql database since the database is remotely hosted in https://remotemysql.com</span>
The credential for phpmyadmin for the remotsql site is given in the .env file

## List of Main Features
The main features are as follow:
<ul>
  <li> All the routes are protected by verifiying token in front and back end </li>
  <li>Chat service</li>
  <li>Image sharing </li>
  <li>View Post and insert post</li>
  <li>Update your details and share</li>
  <li>Map integration </li>
  <li>Facebook Login </li>
  <li>All form validation like email valid or invalid and if email or username exist and password matches or not </li>
  <li>Admin Login </li>
  <li>Admin Panel </li>
  <li> Admin can view user created in 2019 by month </li>
  <li>Admin can view post created in 2019 by month </li>
  
## API Documentation

<strong> user/allusers </strong>
<p>get all the users</p>

 <strong> user/allusers </strong>
<p>get all the users</p>

<strong> user/getOneUser/:username </strong>
<p>get one user detail</p>


<strong> user/getUserCount </strong>
<p>get count of the users created by month</p>



<strong> user/login </strong>
<p>login user</p>



<strong> user/signup </strong>
<p>signup user</p>


<strong>user/updateUser/:username</strong>
<p>update user by their username</p>

<strong> user/facebooklogin </strong>
<p>facebook login</p>



<strong> post/addpost </strong>
<p>(post) add post</p>


<strong> post/getAllpost </strong>
<p>get all post</p>



<strong> post/getOneUserPost/:username </strong>
<p>get post by username</p>



<strong> post/getPostCount </strong>
<p>get post count by month</p>


<strong> friend/addfriend </strong>
<p>post add friend</p>


<strong> post/allfriend </strong>
<p>get all friend</p>


