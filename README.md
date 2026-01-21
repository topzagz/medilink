# Medilink – AI Healthcare Platform (Monorepo)

Medilink is a full-stack **AI-powered healthcare web application** designed to support digital health services, medical data management, and intelligent decision support systems.

The project is developed using a **monorepo architecture**, combining both frontend (React) and backend (Express.js) applications in a single repository to improve development efficiency, maintain consistency, and support scalable healthcare solutions.

---

## 📌 Project Overview

Medilink serves as a foundational platform for **AI-driven healthcare applications**, focusing on the integration of modern web technologies with artificial intelligence to support medical workflows, research activities, and data-driven decision-making.

The platform is designed to:
- Collect and manage healthcare-related data
- Integrate AI/ML models for analysis and prediction
- Provide a clean and intuitive user interface for healthcare systems
- Support future expansion into clinical, research, or operational use cases

---

## 🎯 Project Objectives

- Develop a maintainable and scalable full-stack healthcare platform
- Enable seamless communication between frontend, backend, and AI services
- Support AI-assisted healthcare analysis and decision support
- Provide a flexible architecture suitable for education, research, and production use

---

## 📁 Repository Background & Development Context

This repository represents the **primary working and development repository** of the Medilink project and reflects the actual engineering work performed during implementation.

The Medilink system was initially designed with a clear separation between frontend and backend responsibilities. The early architectural structure and coding patterns were referenced from the following repositories:

- Frontend reference repository  
  https://github.com/Ratanon-Thongseekaew/Medilink_frontend

- Backend reference repository  
  https://github.com/Ratanon-Thongseekaew/Medilink_backend

These repositories were used as **architectural and structural references** during the early phase of development.

---

## 🛠️ Primary Working Repository (Real Development)

All **active development, feature implementation, integration, testing, and refinement** were carried out within repositories under the following GitHub account:

- Developer workspace  
  https://github.com/topzagztop

This repository reflects **real-world development activities**, including:
- End-to-end feature implementation
- Frontend (React) and backend (Express.js) integration
- API design, iteration, and refinement
- Integration of AI-related logic within healthcare workflows
- Continuous testing, debugging, and problem-solving

---

## 🎯 Purpose of This Repository

While the reference repositories demonstrate the **initial project structure and separation of concerns**, this repository serves as the most accurate representation of:

- Hands-on full-stack development experience
- Practical engineering decision-making during implementation
- Integration of multiple system components into a working application
- A production-oriented development mindset rather than a conceptual or template-based project

For portfolio, academic review, and professional evaluation, this repository is intended to showcase **actual engineering contribution**, implementation depth, and system-level understanding.

---

## 🏗️ System Architecture

Medilink follows a **client-server architecture**:


### Architecture Explanation

- **Client (React)**  
  Handles user interface, user interaction, and data visualization.  
  Communicates with the backend via RESTful APIs.

- **REST API (Express.js)**  
  Acts as the core application layer responsible for:
  - Authentication and authorization
  - Business logic
  - API orchestration
  - AI model integration and inference handling

- **Database / AI Services**  
  Stores healthcare-related data and supports AI-driven features such as:
  - Data analysis and prediction
  - AI-assisted decision support
  - Future integration with external healthcare systems or IoT devices


AI components can be integrated directly within the backend or accessed as independent services through APIs.

---

## 🔌 API Overview

### Service User

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/auth/register` | post | - | - | - | `{ email, password, firstName, lastName, phone? }` |
| `/auth/login` | post | - | - | - | `{ email, password }` |
| `/auth/logout` | post | y | - | - | - |
| `/user/me` | get | y | - | - | - |

#### Programs / Online Store

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/programs` | get | y | - | `{ category?, keyword?, page?, limit? }` | - |
| `/orders/buy` | post | y | - | - | `{ productId, scheduleId? }` |
| `/payments/submit` | post | y | - | - | `{ orderId, method, slipImage?(file), note? }` |
| `/orders/:orderId` | get | y | `:orderId` | - | - |

#### Appointments

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/appointments` | post | y | - | - | `{ doctorId, hospitalId?, date, timeSlot, reason? }` |
| `/appointments/my` | get | y | - | `{ status?, page?, limit? }` | - |
| `/doctors/available` | get | y | - | `{ date, hospitalId?, specialtyId? }` | - |

#### AI

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/ai/brief-filter` | post | y | - | - | `{ text, purpose?, language? }` |

---

### Admin Dashboard

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/admin/users` | get | y | - | `{ keyword?, role?, page?, limit? }` | - |
| `/admin/users` | post | y | - | - | `{ email, password?, firstName, lastName, role }` |
| `/admin/users/:id` | get | y | `:id` | - | - |
| `/admin/users/:id` | patch | y | `:id` | - | `{ firstName?, lastName?, role?, status? }` |
| `/admin/users/:id` | delete | y | `:id` | - | - |

#### Products / Orders

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/admin/products` | get | y | - | `{ keyword?, page?, limit? }` | - |
| `/admin/products` | post | y | - | - | `{ name, price, description?, type?, image?(file) }` |
| `/admin/products/:id` | patch | y | `:id` | - | `{ name?, price?, description?, type?, image?(file) }` |
| `/admin/products/:id` | delete | y | `:id` | - | - |
| `/admin/orders` | get | y | - | `{ status?, page?, limit? }` | - |

#### Appointments

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/admin/appointments` | get | y | - | `{ date?, status?, page?, limit? }` | - |
| `/admin/appointments/:id` | delete | y | `:id` | - | - |

#### Doctors / Specialty

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/admin/doctors` | get | y | - | `{ keyword?, specialtyId?, hospitalId? }` | - |
| `/admin/doctors` | post | y | - | - | `{ name, specialtyId, hospitalId, bio?, photo?(file) }` |
| `/admin/doctors/:id` | patch | y | `:id` | - | `{ name?, specialtyId?, hospitalId?, bio?, photo?(file) }` |
| `/admin/doctors/:id` | delete | y | `:id` | - | - |
| `/admin/specialties` | post | y | - | - | `{ specialtyName }` |

#### Hospitals / Locations

| path | method | authen | params | query | body |
|:--|:--|:--:|:--|:--|:--|
| `/admin/hospitals` | get | y | - | `{ keyword? }` | - |
| `/admin/hospitals` | post | y | - | - | `{ name, address?, phone?, locationId? }` |
| `/admin/hospitals/:id` | patch | y | `:id` | - | `{ name?, address?, phone?, locationId? }` |
| `/admin/hospitals/:id` | delete | y | `:id` | - | - |
| `/admin/locations` | post | y | - | - | `{ locationName }` |

---

## 📌 Additional Notes

- This project uses a **monorepo-style workflow** for development efficiency.
- The codebase reflects real implementation and iterative improvement.
- Reference repositories are preserved to maintain transparency regarding architectural origins.



## 🎥 Demo Video
[![Medilink AI Healthcare Demo](https://vumbnail.com/1156746818.jpg)](https://vimeo.com/1156746818)

This video demonstrates the AI-powered healthcare workflow, including user registration,
AI-assisted analysis, and admin management features.

