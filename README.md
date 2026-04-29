# Nail Appointment Booking Website
**WEB-115 Final Project Proposal**
Student: Alex Kaulfuss | Repo: `WEB-115_FinalProject_Kaulfuss`

---

## Overview
This is a wesite designed for a nail tech (me) to manage client bookings. Clients can view available services, select a preferred date and time, and submit their info to book an appointment. 
---

## Features
Service selection
Booking form
Required fields validation
Remembers data
Google sheets integration 

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Loops iterate through an array of services (objects) and If statements will verify form data before submission.  |
| **Event Listeners** | Submit listener for data transmittion. Click listener for buttons.|
| **DOM Element Creation** | Everything is built in JS with document.createElement(). Nothing will  be hard coded in HTML.|
| **Classes & Subclasses** | A base service class will define "name"and "price" and specialtyService will extend it to include any needed aditional properties. |

---

## DLC — Additional Topics

### JSON & Local Storage
The app will save cients name and contact info locally so they don't have to type it every time. 
### Fetch & Public APIs
The program will use Fetch API to connect the website to the google sheet. This will make it possible for live updates. 

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` 
-  GitHub pages
- Google apps script
- google sheets
