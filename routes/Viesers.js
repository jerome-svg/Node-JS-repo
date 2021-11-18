const express = require('express');

const router = express.Router();


router.get('/getdata', (request, response) => {
    response.send(request.query);
});

router.post('/select', (request, response) => {
    response.json({
        "Name": "Jerome",
        "Age": "25",
        "Gender": "Male",
        "Address": "Imelda"
     });
});

module.exports = router;