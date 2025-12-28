# Smart-Job-Tracker
A full-stack Job Application Tracking System that helps users efficiently manage their job search by tracking applications, statuses, and history — all in one place.
##  Features
A personal job management system that helps users track job applications, interview stages, and outcomes in one place.
##  Why This Project?

Many **graduate and undergraduate students** apply to multiple jobs across different platforms but often **forget where they applied, the job role, application date, or current status**. This creates confusion during interview calls and follow-ups.

The **Smart Job Tracker** solves this problem by allowing students to:

* Store all applied job details in one place
* Track application status (Applied, Interview, Offer, Rejected)
* Quickly recall company, role, and application dates
* Stay organized and confident during interview preparation

### Authentication

* User **Register & Login** using JWT authentication
* Secure APIs protected with middleware

### Job Management

* Add job applications
* View all applications
* Filter jobs by status:

  * Applied
  * Interview
  * Offer
  * Rejected

###  Delete with History Tracking

* Deleted jobs are **moved to History**
* History is **read-only** 
* Includes **deleted timestamp**

### Dashboard UI

* Sticky top navigation bar
* Sidebar filters
* Scrollable content area
* Clean, responsive UI using Bootstrap

---

## Tech Stack

### Frontend

* React.js
* Axios
* Bootstrap 5
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## Project Structure

```
SMART_JOB_TRACKER/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Job.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.css
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json

```

---

##  Setup Instructions



### 1 Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 2 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---


## 🔗 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Jobs (Protected)

* `GET /jobs`
* `POST /jobs`
* `DELETE /jobs/:id`

---

## Screenshots
---
### create account and JOIN_SMART_JOB_TRACKER_COMMUNITY_TODAY
<img width="1917" height="947" alt="image" src="https://github.com/user-attachments/assets/d652e570-b0b9-4a4f-8601-c394e0c37a59" />


### Login Page
<img width="1919" height="948" alt="image" src="https://github.com/user-attachments/assets/d70f9810-9b5c-4651-b116-8bdb104db3fb" />

---

### Dashboard
<img width="1919" height="944" alt="image" src="https://github.com/user-attachments/assets/e5c1cecc-393c-45ba-8fd1-207f050975e1" />

---

###  Add Job Application
<img width="1917" height="939" alt="image" src="https://github.com/user-attachments/assets/63de55d5-2255-4a99-88a8-c81e5225c5be" />

---

###  Application History
<img width="1919" height="951" alt="image" src="https://github.com/user-attachments/assets/07f402b5-9a26-46c5-8834-8ef3c1a97d89" />


##  Why This Project?

* Real-world **full-stack MERN application**
* Clean UI & UX
* Proper authentication & authorization
* Demonstrates CRUD + state management
* Recruiter-friendly & scalable design

---

## 👨‍💻 Author

**Yanamala Akhil Kumar Reddy**
---
B.Tech CSE 
-----
 akhi4uy@gmail.com

