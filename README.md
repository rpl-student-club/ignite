## 🛠 Installation Guide

Follow the steps below to set up the project locally.

### 1️⃣ Clone this Repository

```bash
git clone https://github.com/rpl-student-club/ignite.git
cd ignite
```

### 2️⃣ Copy Environment File

Create your `.env` file from the example file:

```bash
cp .env.example .env
```

Then configure your database and other environment variables inside the `.env` file.

### 3️⃣ Install Backend Dependencies

```bash
composer install
```

### 4️⃣ Install Frontend Dependencies

```bash
npm install
```

### 5️⃣ Generate Application Key

```bash
php artisan key:generate
```

### 6️⃣ Run Database Migration & Seeder

```bash
php artisan migrate --seed
```

Make sure your database has been created before running this command.

### 7️⃣ Activate Wayfinder
```bash
php artisan wayfinder:generate
```

## ▶️ Running the Project

You need to run both the backend and frontend development servers.

### Start Laravel Development Server

```bash
php artisan serve
```

### Start Vite Development Server

```bash
npm run dev
```

The application will be available at:

```
http://127.0.0.1:8000
```