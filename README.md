<h1 align='center'>
Fullstack Javascript MERN Stack </br>
Website Travel
</h1>
<p align='center'>
I bought a course from BWA and learn how to build website using MERN stack technology.
</p>
<p align='center'>
This is the backend api, build with ExpressJS and MongoDB, and deployed with <a href='https://app.netlify.com/' target='_blank'>Railway</a>
</p>

---


## 🚀 Link to [Deploy Backend](https://staycation-backend.up.railway.app)

## ⚛️ Link to [Frontend](https://github.com/itsmee3223/bwa-mern-staycation-frontend), [Deploy React](https://staycation-frontend-ramanda.netlify.app/)

## 🏫 Link to [Course](https://class.buildwithangga.com/kelas/full-stack-javascript-developer-website-travel?thumbnail=UaLl9ulabm.34&main_leads=searchresult)

## 📸 Screenshot

<img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture1_onpzzs.png' width='48%'> &nbsp; &nbsp; <img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture2_pmzzlp.png'  width='48%'>


<img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture3_q7xrxf.png' width='48%'> &nbsp; &nbsp; <img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture4_kakzdh.png'  width='48%'>


<img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture5_kjlmji.png'  width='48%'> &nbsp; &nbsp; <img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038860/BWA%20Staycation/Capture6_omf076.png'  width='49%'>


<img src='https://res.cloudinary.com/dniq91ewn/image/upload/v1672038861/BWA%20Staycation/Capture7_gek5hb.png'>


## 🧾 Description

MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.

## 🔑 Keypoints
- Learn to Use Reactjs Libraries
- Learn to Build APIs with Nodejs & Expressjs
- Learn to make reusable component react from scratch
- Learn to work with non-sequel DBs with mongodb
- Learn UI/UX in building an online hotel booking website
- Learn Usability-Testing by analyzing website user behavior


## 💾 Database schemas
#### Acttivity schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| name      | String   | True         | False      | -           |
| type      | String   | True         | False      | -           |
| imageUrl  | String   | True         | False      | -           |
| isPopular | Boolean  | False        | False      | -           |
| itemId    | Object(Ref: 'Item')  | True        | False      | -           |

#### Bank schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| nameBank  | String   | True         | False      | -           |
| nomorRekening      | String   | True         | True      | -           |
| name      | String   | True         | False      | -           |

#### Booking schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| bookingStartDate  | Date   | True         | False      | -           |
| bookingEndDate      | Date   | True         | False      | -           |
| invoice      | String   | True         | False      | -           |
| itemId  | Object {<br> _id: ref('Item'),<br> title: String,<br> price: Number,<br> duration: Number,<br> }   | True         | False      | -           |
| total      | Number   | True         | False      | -           |
| memberId      | Object(ref: 'Member')   | True         | False      | -           |
| bankId      | Object(ref: 'Bank')   | True         | False      | -           |
| payments  | Object {<br> proofPayment: String,<br> bankFrom: String,<br> accountHolder: String,<br> status: String(default: Proses),<br> }   | True         | False      | -           |

#### Category schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| name  | String   | True         | False      | -           |
| itemId      | Object(Ref: 'Item')   | True         | False      | -           |

#### Feature schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| name  | String   | True         | False      | -           |
| qty      | Number   | True         | False      | -           |
| imageUrl      | String   | True         | False      | -           |
| itemId      | Object(Ref: 'Item')   | True         | False      | -           |

#### Image schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| imageUrl  | String   | True         | False      | -           |

#### Item schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| title  | String   | True         | True      | -           |
| price  | Number   | True         | False      | -           |
| country  | String   | False         | False      | Indonesia           |
| city  | String   | True         | False      | -           |
| isPopular  | Boolean   | False         | False      | -           |
| description  | String   | True         | False      | -           |
| unit  | String   | False         | False      | night           |
| sumBooking  | Number   | False         | False      | 0           |
| categoryId  | Object(Ref: 'Category')   | True         | False      | -           |
| imageId  | [Object(Ref: 'Image')]   | True         | False      | -           |
| featureId  | [Object(Ref: 'Feature')]   | True         | False      | -           |
| activityId  | [Object(Ref: 'Activity')]   | True         | False      | -           |

#### Member schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| firstName  | String   | True         | False      | -           |
| lastName  | String   | True         | False      | -           |
| email  | String   | True         | True      | -           |
| phoneNumber  | String   | True         | False      | -           |

#### User schema

| **Field** | **Type** | **Required** | **Unique** | **Default** |
| --------- | -------- | ------------ | ---------- | ----------- |
| username  | String   | True         | True      | -           |
| password  | String   | True         | False      | -           |
| role  | String   | True         | False      | guest           |

## 🌍 APIs

#### Admin

| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| POST        | /admin/signin             | -              | {</br> username: String, </br>password: String </br>} |Login Admin                                    |
| GET       | /admin/logout             | -             | -     | Logout admin                                       |
| POST       | /admin/category     | -              | {<br>name: String <br>} | Creates a new category                                                 |
| PUT        | /admin/category        | -             | {<br>name: String <br>} | Update existing category                                       |
| DELETE     | /admin/category        | id             | -   | Deletes an existing category                                           |
| POST       | /admin/bank     | -              | {<br>name: String <br> nameBank: String <br> nomorRekening: String <br> image: jpeg, jpg, png, gif <br>} | Creates a new bank                                                 |
| PUT        | /admin/bank        | -             | {<br>id: String, </br> name: String <br> nameBank: String <br> nomorRekening: String <br> image: jpeg, jpg, png, gif <br>} | Update existing bank                                       |
| DELETE     | /admin/bank        | id             | -   | Deletes an existing bank                                           |
| POST       | /admin/item     | -              | {<br>categoryId: String <br> title: String <br> price: Number <br> city: String <br> about: String <br> image: [jpeg, jpg, png, gif] <br>} | Creates a new item                                                 |
| PUT       | /admin/item     | id              | {<br>categoryId: String <br> title: String <br> price: Number <br> city: String <br> about: String <br> image: [jpeg, jpg, png, gif] <br>} | Update an existing item                                                 |
| DELETE     | /admin/item        | id             | -   | Deletes an existing item                                           |
| POST       | /admin/item/add/feature     | -              | {<br>name: String <br> itemId: String <br> qty: Number <br> image: jpeg, jpg, png, gif <br>} | Creates a new feature                                                 |
| PUT       | /admin/update/feature     | id              | {<br>id: String, </br> name: String <br> itemId: String <br> qty: Number <br> image: jpeg, jpg, png, gif <br>} | Update an feature item                                                 |
| DELETE     | /admin/item/:itemId/feature/:id        | id, itemId             | -   | Deletes an existing feature                                           |
| POST       | /admin/item/add/activity     | -              | {<br>name: String <br> itemId: String <br> type: String <br> image: jpeg, jpg, png, gif <br>} | Creates a new activity                                                 |
| PUT       | /admin/update/activity     | id              | {<br>id: String, </br> name: String <br> itemId: String <br> type: String <br> image: jpeg, jpg, png, gif <br>} | Update an activity item                                                 |
| DELETE     | /admin/item/:itemId/activity/:id        | id, itemId             | -   | Deletes an existing activity                                           |

#### Member
| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| GET        | /api/v1/member/landing-page             | -              | - | Get landing page item |
| GET        | /api/v1/member/detail-page/:id             | id              | - | Get detail item |
| POST        | /api/v1/member/booking-page             | -              | {<br>idItem: String, </br> duration: Number <br> bookingStartDate: String <br> bookingEndDate: String <br> firstName: String <br> lastName: String <br> accountHolder: String <br> email: String <br> phoneNumber: String <br> bankFrom: String <br> image: jpeg, jpg, png, gif <br>} | Create booking item |

## ⚙ Tools and Technologies used
1. Node JS
2. Express JS
3. Bootstrap CSS
4. GitHub
5. Figma
6. InVision App
7. Visual Studio Code

## 🛠 Installation and setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   npm install
   ```

3. Create a .env file inside the root folder and provide the following environment variables:

   ```env
   MONGO_URI = <mongo connection url>
   ```

4. Start the dev server using :

   ```javascript
   npm run dev
   ```
## 🤝 Test user credentials
#### Admin

| **Username**  | **Password**     |
| ------------- | ---------------- |
| admin         |       rahasia    |