# Business Listing Dashboard

## Overview
A full-stack Business Listing Dashboard built using FastAPI, React.js, and MySQL.

## Features
- View business listings
- Category-wise analytics
- City-wise analytics
- Source-wise analytics
- Search businesses
- Interactive charts
- REST API

## Tech Stack
### Frontend
- React.js
- Axios
- Recharts
- CSS

### Backend
- FastAPI
- Uvicorn
- MySQL Connector

### Database
- MySQL

## API Endpoints

GET /businesses

GET /category-count

GET /city-count

GET /source-count

## Installation

### Backend

```bash
pip install fastapi uvicorn mysql-connector-python
uvicorn main:app --reload
```

### Frontend

```bash
npm install
npm start
```

## Project Structure

```
project/
│
├── backend/
│   ├── main.py
│   ├── database.py
│
├── frontend/
│   ├── src/
│   ├── App.js
│   ├── App.css
│
└── README.md
```

## Author

Kirti Thakur