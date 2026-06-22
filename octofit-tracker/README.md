# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port 5173)
├── backend/           # Node.js + Express + TypeScript (Port 8000)
└── database/          # MongoDB (Port 27017)
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB running locally on port 27017

### Frontend Setup
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```
Frontend runs on http://localhost:5173

### Backend Setup
```bash
cd octofit-tracker/backend
npm install
npm run dev
```
Backend runs on http://localhost:8000

### MongoDB
Ensure MongoDB is running on port 27017
```bash
mongod --port 27017
```

## Port Configuration
- **Frontend**: 5173
- **Backend**: 8000
- **MongoDB**: 27017
