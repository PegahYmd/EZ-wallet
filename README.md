
# 💰 EZWallet

**EZWallet** is a web application designed to help individuals and families manage and track their expenses.
It allows users to enter, categorize, and monitor their financial activities, offering a clear view of spending habits and helping promote smarter, more informed financial decisions.



## 📌 Project Overview

Originally provided as a codebase + API by instructors, this project was approached in two main phases:

- 🔍 **Step 1.1 – Reverse Documentation**
  - Analyze existing codebase and APIs
  - Produce Requirement Document v1, GUI Prototype v1, and Estimation v1

- 🚀 **Step 1.2 – Evolution Proposal**
  - Extend the system with new features
  - Deliver Requirement Document v2, GUI Prototype v2, and Estimation v2



## 🛠️ Features

- 📊 Add, edit, and categorize expense entries
- 👨‍👩‍👧 Support for individual or family use
- 📁 View all expense data in a structured, readable format
- 🔧 Extensible backend with modular architecture for new features

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (via Docker)
- **Frontend**: Planned via GUI prototypes (React/HTML-based mockups)
- **Containerization**: Docker, Docker Compose
- **Authentication**: (Optional future feature)
- **Documentation**: Markdown-based, includes reverse engineering output and improved design

## 📁 Project Structure

```txt
EZWallet/
├── code/                   # Core backend and APIs
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   └── server.js
├── images/                 # Optional assets
├── docker-compose.yml      # Container orchestration
├── app.Dockerfile          # App container
├── mongo.Dockerfile        # MongoDB container
├── .env                    # Environment variables
├── README.md
├── EstimationV1.md
├── EstimationV2.md
├── GUIPrototypeV1.md
├── GUIPrototypeV2.md
├── RequirementsDocumentV1.md
├── RequirementsDocumentV2.md
└── TestDocument.md



