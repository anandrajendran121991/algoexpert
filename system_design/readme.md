Here’s a curated list of **real-world system design + modeling questions** that are often used in live coding or design interviews for backend or full-stack roles — especially at startups or product companies like Neo.

These can **all be implemented in a single file** using JavaScript, TypeScript, Python, or Java.

---

### 🛒 E-Commerce & Marketplace Style

1. **Design a Shopping Cart System**
   Track items, apply discounts, validate inventory, checkout.

2. **Design an Order Management System**
   Orders have statuses (`pending`, `shipped`, `cancelled`), can be updated, and should emit events (Observer pattern).

3. **Design a Payment Processor**
   Support multiple payment gateways (Stripe, PayPal), use Strategy pattern for handling.

---

### 📅 Scheduling & Booking

4. **Calendar Booking System**
   Users can book 1-hour slots, and double-booking must be prevented.

5. **Meeting Scheduler with Time Zone Support**
   Store available times in UTC, convert for users in different time zones.

6. **Airline Seat Reservation System**
   Choose seats, check if available, lock them for 5 minutes during payment.

---

### 📦 Logistics & Inventory

7. **Warehouse Inventory System**
   Products are stored in locations (e.g. bins/shelves). Allow stock-in/out, transfer between locations.

8. **Multi-vendor Marketplace**
   Products belong to vendors, and you need to calculate commissions, fees, and payouts.

---

### 💬 Messaging / Feed Systems

9. **Design a Notification System**
   Send notifications via SMS, Email, or In-App using Strategy or Observer pattern.

10. **Comment Threading System**
    Add, reply, and delete threaded comments (recursive tree or flat with parentId).

11. **Rate Limiter**
    Allow 5 requests per second per user — implement using token bucket or sliding window logic.

---

### 🎮 Games & Simulation

12. **Design a Snake Game Engine**
    Grid-based, handle movement, collisions, and food pickup.

13. **Tic-Tac-Toe or Chess Validator**
    Track board state, check for win/loss, alternate turns.

---

### 🛠 Systems Style (for Backend Engineers)

14. **Logging Framework**
    Allow multiple output strategies: console, file, remote server.

15. **Job Queue System**
    Push jobs to a queue, workers process them with retry logic.

16. **Configuration System with Fallback**
    Environment-based configuration with fallback to defaults.

---

### How to Practice:

1. Pick one daily.
2. Spend 10–15 mins planning: draw classes, flows, methods.
3. Code the core logic in 45–60 mins in one file.
4. Practice explaining your approach and trade-offs out loud.
