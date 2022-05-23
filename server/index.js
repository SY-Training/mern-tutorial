// Newest version of JS allows to import modules rather than use const-require.
// Just need to add the "type" key-value in package.json.

// Also removed "test" from package.json and added start script for nodemon.
import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';