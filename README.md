# ✦ FeedbackIQ — Customer Feedback Analysis System

A professional, modern **Customer Feedback Analysis and Sentiment Analytics Dashboard** built using **HTML5, CSS3, Vanilla JavaScript (ES6+), and Chart.js**.

Designed specifically for **college presentations, major/minor academic projects, and portfolio demonstrations**, this application features a complete analytics suite, real-time sentiment detection as the user types, persistent browser storage via `LocalStorage`, interactive charts, and CSV report exports.

---

## 📌 Project Overview

Customer feedback is critical for product and service quality. This system bridges the gap between raw customer opinions and actionable business insights by:
1. **Capturing Feedback**: Collecting customer name, contact, department/category, star rating (1–5), and written text.
2. **Real-time Sentiment Analysis**: Classifying comments into **Positive**, **Neutral**, or **Negative** using a rule-based Natural Language Processing (NLP) heuristic with **negation handling** (e.g., distinguishing *"good"* from *"not good"*).
3. **Executive Dashboard**: Visualizing metrics such as Average Star Rating, Positive/Negative percentages, Net Promoter Score (NPS), and sentiment distributions with dynamic Chart.js visualizations.
4. **Data Management**: Persisting all submissions locally in browser `localStorage`, allowing searching, filtering, CSV export, and demo dataset restoration.

---

## 🚀 Key Features

| Feature | Description |
| :--- | :--- |
| **Executive Dashboard** | Summary KPI cards for Total Submissions, Average Rating (out of 5.0), Positive %, and Critical Attention items. |
| **Live Sentiment Engine** | Real-time sentiment pill preview as you type with detected keyword tags, sentiment polarity meter, and star-rating compensation. |
| **Bilingual Lexicon** | Supports English and popular Hinglish feedback expressions (e.g., *mast*, *badhiya*, *bekar*, *kharab*, *shandar*). |
| **Interactive Visualizations** | Chart.js Donut chart for sentiment split, Bar chart for star distributions (1★ to 5★), Category averages, and Sentiment trend timeline. |
| **Data Explorer & Filters** | Real-time search across customer names, comments, and categories; filter by sentiment, rating, or department. |
| **Net Promoter Score (NPS)** | Automatically calculates customer loyalty metric (`% Promoters [4-5★] - % Detractors [1-2★]`). |
| **Word Cloud / Trigger Analysis** | Identifies top positive qualities and common pain points / negative triggers from reviews. |
| **Zero-Configuration Storage** | Saved in browser `window.localStorage` — persists across refreshes without requiring a backend database. |
| **One-Click CSV & JSON Export** | Download clean spreadsheet reports (`.csv`) with RFC 4180 escaping and formula-injection protection. |
| **College Viva Cheatsheet** | Built-in Viva guide tab with project architecture diagrams, algorithmic explanations, and top examiner questions. |
| **Dark & Light Mode** | Sleek executive UI with smooth theme switching and persistent theme memory. |

---

## 📂 Project Structure

```text
feedback project/
├── index.html         # Complete self-contained single-page web application
├── feedback-logo.png  # Official branding icon & favicon
└── README.md          # Full documentation, setup instructions & Viva guide
```

> **Zero Dependencies Needed**: All styles and scripts are neatly contained inside `index.html`. Chart.js is loaded dynamically via secure CDN. You can run the project on any computer by simply opening `index.html`.

---

## 💻 How to Run on Your Computer

### Method 1: Direct Double Click (Simplest — 5 Seconds)
1. Navigate to the project folder on your computer.
2. Double-click on `index.html`.
3. It will immediately open in your default browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave).

---

### Method 2: Using VS Code & Live Server (Recommended for Development)
1. Open **Visual Studio Code**.
2. Go to **File → Open Folder...** and select the `feedback project` folder.
3. Install the **Live Server** extension (by *Ritwick Dey*) from the Extensions panel (`Ctrl + Shift + X`).
4. Right-click on `index.html` and choose **"Open with Live Server"**.
5. Your browser will open `http://127.0.0.1:5500/index.html` with hot reloading enabled.

---

### Method 3: Using Python Local Server
If you have Python installed, open terminal/PowerShell in the project folder and run:
```bash
# Python 3.x
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

---

## 🌐 How to Host Online for FREE

### Option 1: GitHub Pages (Recommended for College Presentations)
1. Create a free account on [GitHub.com](https://github.com) if you haven't already.
2. Click **New Repository** and name it `customer-feedback-analysis`. Set it to **Public**.
3. Upload `index.html` and `README.md` to the repository.
4. Go to **Settings → Pages** in your repository.
5. Under **Build and deployment → Branch**, choose `main` (or `master`) and folder `/ (root)`, then click **Save**.
6. Within 1–2 minutes, your live site will be ready at:
   `https://<your-username>.github.io/customer-feedback-analysis/`

---

### Option 2: Netlify (Instant Drag & Drop)
1. Go to [Netlify.com](https://www.netlify.com) and sign up for free.
2. In the dashboard, click **"Add new site" → "Deploy manually"**.
3. Drag and drop your `feedback project` folder into the upload box.
4. Netlify will generate a live URL (e.g., `https://clever-feedback-app.netlify.app`) in under 10 seconds!

---

## 🎓 College Viva & Presentation Preparation Guide

### 1. High-Level Architecture
- **Frontend Presentation Layer**: Semantic HTML5, CSS3 Custom Properties (Design Tokens), Flexbox, CSS Grid.
- **Visual Analytics**: Chart.js 4.4 Canvas API.
- **Client Processing Layer**: Pure ES6+ JavaScript modules handling regex tokenization, sentiment heuristics, and DOM manipulation.
- **Persistence Layer**: Web Storage API (`window.localStorage`) storing serialized JSON payloads.

---

### 2. How the Sentiment Analysis Algorithm Works
```
Input Review Text & Star Rating
       │
       ▼
Text Normalization (Lowercase, Punctuation Stripping, Tokenization)
       │
       ▼
Lexicon Matching (Count Positive vs Negative Keywords)
       │
       ▼
Negation Detection (Check for "not", "never", "hardly" before positive words)
       │
       ▼
Score Calculation:
  Score = (Positive Matches) - (Negative Matches + Negation Offsets)
       │
       ├─► Score > 0  ──► "Positive"
       ├─► Score < 0  ──► "Negative"
       └─► Score == 0 ──► Fallback to Star Rating:
                             • Rating >= 4: "Positive"
                             • Rating <= 2: "Negative"
                             • Rating == 3: "Neutral"
```

---

### 3. Top 8 Viva Questions & Model Answers

#### Q1: Why did you use `localStorage` instead of cookies or a database?
> **Answer**: For an educational demonstration and client-side single page app, `localStorage` provides 5–10MB of persistent browser storage per origin without requiring server hosting or API keys. Unlike cookies (which are limited to 4KB and transmitted in every HTTP request), `localStorage` is fast, zero-latency, and persists across browser refreshes.

#### Q2: What is the limitation of keyword-based sentiment classification?
> **Answer**: Keyword matching analyzes word frequency rather than grammatical semantics. Therefore, it may misclassify subtle sarcasm (e.g., *"Oh fantastic, my product arrived broken again"*) or complex idioms. In an enterprise system, this would be upgraded to a Transformer-based NLP model like BERT or a fine-tuned LLM via a Python FastAPI backend.

#### Q3: What is Net Promoter Score (NPS) and how is it calculated?
> **Answer**: NPS is an industry-standard benchmark measuring customer loyalty on a scale from -100 to +100. Customers who give 4 or 5 stars are **Promoters**, 3 stars are **Passives**, and 1 or 2 stars are **Detractors**.
> $$\text{NPS} = (\% \text{Promoters}) - (\% \text{Detractors})$$

#### Q4: How do you prevent CSV injection attacks during report export?
> **Answer**: If a customer inputs a comment beginning with formula triggers like `=`, `+`, `-`, or `@`, spreadsheet applications like Excel might execute arbitrary formulas. In our code, we sanitize cell values by prepending a single quote (`'`) to any string starting with those characters and properly escape double quotes.

#### Q5: Can another computer access the feedback stored in my browser?
> **Answer**: No, `localStorage` is strictly origin-bound to the specific browser and domain on that computer. For multi-user access across different devices, a centralized backend database (like PostgreSQL, MongoDB, or Firebase Firestore) is required.

#### Q6: How does Chart.js render graphics?
> **Answer**: Chart.js uses the HTML5 `<canvas>` element. When data updates, the previous chart instance is destroyed via `.destroy()` and re-instantiated with updated coordinate vectors, preventing memory leaks and visual ghosting.

#### Q7: How does negation handling work in your sentiment script?
> **Answer**: We use regular expressions to search for negation adverbs (`not`, `never`, `hardly`, `no`) immediately followed by positive adjectives (e.g., `not good`, `never satisfied`). When detected, the positive score is decremented and negative score is incremented.

#### Q8: What future improvements can be added?
> **Answer**:
> 1. Centralized database integration (Node.js/Express + MongoDB or Supabase).
> 2. Integration with pre-trained NLP models (Hugging Face / OpenAI API).
> 3. Automated email notifications to administrators when a 1-star review is submitted.
> 4. User authentication (Admin Login vs Customer Feedback Portal).

---

## 🛠 Technology Stack

- **Markup**: HTML5 Semantic Elements
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, Grid, Glassmorphic Accents)
- **Scripting**: Pure JavaScript (ES6+ Modules, Array Methods, RegExp, DOM API)
- **Charts**: [Chart.js](https://www.chartjs.org/) (Doughnut, Bar, Line Charts)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)

---

## 📜 License & Usage
This project is open-source and created for educational purposes, college coursework, and presentations. Feel free to customize and expand it!
#   f e e d b a c k  
 