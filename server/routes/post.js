import express from 'express';

const router = express.Router();

// The '/' is the currect directory. IE the landing page. 
router.get('/', (req, res) => {
    res.send("This works!");
});

export default router;