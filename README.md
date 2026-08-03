# Business Listing Dashboard

A full-stack Business Listing Dashboard built using FastAPI, MySQL, React, and Recharts. The dashboard displays business listings with interactive charts and summary statistics.

## Features

- Business listing dashboard
- Interactive charts
- Business category analysis
- Source distribution
- City-wise business count
- Business growth visualization
- Latest business listings table
- Responsive dark-themed UI

## Tech Stack

### Frontend
- React.js
- Recharts
- CSS

### Backend
- FastAPI
- Python

### Database
- MySQL

## Project Structure

```
Business-Listing-Dashboard/
│
├── backend/
│   ├── main.py
│   ├── scrape_data.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── business_dashboard.sql
├── README.md
└── LICENSE
```

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend runs on:

```
http://localhost:3000
```

The backend runs on:

```
http://127.0.0.1:8000
```

## Screenshots

(Add screenshots of your dashboard here.)

## Author

Kirti Thakur
