# 🏥 MediCare — Healthcare Appointment System

> A full-stack DevSecOps project built as part of the #90DaysOfDevOps challenge.
> Built by **Ketul Shah** | Mentored by **TrainWithShubham**

---

## 🗂️ Project Structure

```
healthcare-appointment/
├── frontend/                   # Static HTML/CSS/JS UI
│   ├── index.html
│   └── Dockerfile
├── backend/                    # Node.js + Express REST API
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.example
│   ├── routes/
│   │   ├── appointments.js
│   │   └── doctors.js
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   └── doctorController.js
│   ├── models/
│   │   ├── Appointment.js
│   │   └── Doctor.js
│   └── middleware/
├── db/
│   └── seed.js                 # Seed doctors into MongoDB
├── docker-compose.yml          # All services together
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI/CD pipeline
└── README.md
```

---

## ⚙️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML, CSS, JavaScript             |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB                           |
| DB Admin   | Mongo Express                     |
| Container  | Docker, Docker Compose            |
| CI/CD      | GitHub Actions                    |
| Security   | Trivy image scanner               |

---

## 🚀 Getting Started (Local - Mac)

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/healthcare-appointment.git
cd healthcare-appointment
```

### 2. Setup backend environment
```bash
cp backend/.env.example backend/.env
# Edit backend/.env if needed
```

### 3. Run with Docker Compose
```bash
docker-compose up --build
```

### 4. Access the services

| Service        | URL                          |
|----------------|------------------------------|
| Frontend UI    | http://localhost:3000        |
| Backend API    | http://localhost:5000        |
| Mongo Express  | http://localhost:8081        |

### 5. Seed the database (first time only)
```bash
cd db
node seed.js
```

---

## 📡 API Endpoints

### Appointments
```
GET    /api/appointments        → Get all appointments
POST   /api/appointments        → Create new appointment
PUT    /api/appointments/:id    → Update appointment status
DELETE /api/appointments/:id    → Delete appointment
```

### Doctors
```
GET    /api/doctors             → Get all doctors
GET    /api/doctors/:specialty  → Filter by specialty
```

### Sample POST body
```json
{
  "firstName": "Ketul",
  "lastName": "Shah",
  "email": "ketul@example.com",
  "phone": "+91 98765 43210",
  "specialty": "Cardiology",
  "doctor": "Dr. Rohan Mehta",
  "date": "2026-04-28",
  "timeSlot": "10:00 AM",
  "symptoms": "Chest pain"
}
```

---

## 🔄 GitHub Workflow

```bash
# Daily workflow
git checkout -b feature/<feature-name>   # New branch
# ... make changes ...
git add .
git commit -m "feat: add appointment booking"
git push origin feature/<feature-name>
# Open Pull Request → merge to main → CI runs automatically
```

---

## 🐳 Docker Commands Cheatsheet

```bash
# Build images manually
docker build -t medicare-backend ./backend
docker build -t medicare-frontend ./frontend

# Run all services
docker-compose up --build

# Run in background
docker-compose up -d

# Stop all services
docker-compose down

# Stop and remove volumes (fresh start)
docker-compose down -v

# Check running containers
docker ps

# View logs
docker logs medicare-backend
docker logs medicare-frontend
```

---

## 🔒 GitHub Actions Secrets Required

Go to your repo → Settings → Secrets and Variables → Actions → New secret

| Secret Name          | Value                        |
|----------------------|------------------------------|
| DOCKERHUB_USERNAME   | Your Docker Hub username     |
| DOCKERHUB_TOKEN      | Your Docker Hub access token |

---

## 📈 CI/CD Pipeline Flow

```
Push to GitHub
      ↓
[Job 1] 🧪 Test Backend
      ↓
[Job 2] 🐳 Build & Push Docker Images to Docker Hub
      ↓
[Job 3] 🔒 Trivy Security Scan on Docker Image
```

---

## 🗺️ DevSecOps Roadmap (Project Steps)

- [x] Step 1 — Project setup + folder structure
- [x] Step 2 — Build beautiful frontend UI
- [x] Step 3 — Write backend API (Node.js + Express)
- [x] Step 4 — MongoDB models (Appointment, Doctor)
- [x] Step 5 — Write Dockerfile for backend (multi-stage)
- [x] Step 6 — Write Dockerfile for frontend (nginx)
- [x] Step 7 — Docker Compose (all services)
- [x] Step 8 — GitHub Actions CI/CD pipeline
- [ ] Step 9 — Push Docker images to Docker Hub
- [ ] Step 10 — Deploy on AWS EC2
- [ ] Step 11 — Add Trivy security scanning
- [ ] Step 12 — LinkedIn post 🚀

---

## 👨‍💻 Author

**Ketul Shah** — DevOps Learner | #90DaysOfDevOps  
🔗 [LinkedIn](https://linkedin.com) | Mentored by [TrainWithShubham](https://trainwithshubham.com)
