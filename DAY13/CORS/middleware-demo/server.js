// Import the libraries used by this Express server.
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;

// These two lines recreate __dirname because this project uses ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Morgan logs every incoming request in the terminal.
app.use(morgan("dev"));

// Helmet adds common security headers. CSP is off because this demo uses an inline script.
app.use(helmet({ contentSecurityPolicy: false }));

// Only these origins are allowed to call this API from a browser.
const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "null",
]);

// CORS middleware checks the request origin before allowing the request.
app.use(
  cors({
    origin(origin, callback) {
      // Requests without an origin are allowed, such as same-origin or Postman requests.
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS policy does not allow requests from ${origin}`));
    },
  }),
);

// This lets Express read JSON data sent in request bodies.
app.use(express.json());

// Temporary in-memory data for the demo API.
const students = [
  {
    id: 1,
    name: "Aarav",
    course: "node js",
  },
  {
    id: 2,
    name: "priya",
    course: "Express js",
  },
  {
    id: 3,
    name: "Aarav",
    course: "Backend Development",
  },
];

// Send the HTML page when someone opens the root URL.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Return all students as JSON.
app.get("/api/students", (req, res) => {
  res.json(students);
});

// Read the JSON body and send it back as the created student data.
app.post("/api/students", (req, res) => {
  res.status(201).json({
    message: "Student created successfully",
    data: req.body,
  });
});

// Handle CORS errors and send a clear response to the browser.
app.use((err, req, res, next) => {
  if (err.message?.startsWith("CORS policy")) {
    res.status(403).json({
      err: err.message,
    });
    return;
  }
  next(err);
});

// Start the server and listen for requests.
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
