const express = require('express');
const path = require('path');
const app = express();
const port = 80; // רק פעם אחת

// שירות קבצים סטטיים מהתיקייה הראשית
app.use(express.static(__dirname));

// דיפולטית - כשנכנסים ל- "/" תגיש את index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// (לא חובה) אם תרצה לכסות גם עמודים נוספים:
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/join', (req, res) => {
    res.sendFile(path.join(__dirname, 'join.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/memory', (req, res) => {
    res.sendFile(path.join(__dirname, 'memory.html'));
});

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});


// וכן הלאה...

// האזנה לפורט
app.listen(port, () => {
    console.log(`Server running at http://amuta-eliran-happiness.co.il`);
});
