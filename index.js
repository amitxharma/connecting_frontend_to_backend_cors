const express = require('express')
const cors = require('cors');
app = express()

app.use(express.json())
app.use(cors())
app.post('/sum', function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json(
        {
            sum: a + b
        }
    )
})
app.listen(3000)