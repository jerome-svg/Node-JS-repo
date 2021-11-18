const express = require('express');

const router = express.Router();


router.get('/getdata', (request, response) => {
    response.json({
        "Name": "Jerome",
        "Age": "25",
        "Gender": "Male",
        "Address": "Imelda"
     });
});

module.exports = router;