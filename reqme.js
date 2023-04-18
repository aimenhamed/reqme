#!/usr/bin/env node

import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { parseReqmeFolderFromRoot } from "./common/parser.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "dist")));
app.get("/assets/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/packs", (req, res) => {
  const packs = parseReqmeFolderFromRoot();
  res.json(packs);
});

app.listen(7070, () => {
  console.log("Server listening on port 7070");
});
