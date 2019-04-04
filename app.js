const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

let flag = 0;
app.use('/', (req, res, next) => {
    console.log(req.query.data, typeof req.query.data)
    if (typeof req.query.data !== 'undefined') {
        if (req.query.sid == '12') {
            if (req.query.data == '1') {
                res.send(`
                <response sid="34">
                        <collectdtmf>
                        <playtext type="ggl"  quality="best">Please choose your age group.</playtext>
                        <playtext type="ggl"  quality="best">Press 1 if you are above 21</playtext>
                        <playtext type="ggl"  quality="best">Otherwise Press 2</playtext>
                        </collectdtmf>
                </response>
            `)
            }
            else if (req.query.data == '2') {
                res.send(`
                <response sid="34">
                <collectdtmf>
                        <playtext type="ggl"  quality="best">Please choose your age group.</playtext>
                        <playtext type="ggl"  quality="best">Press 1 if you are above 18</playtext>
                        <playtext type="ggl"  quality="best">Otherwise Press 2</playtext>
                </collectdtmf>
                </response>
            `)
            }
            else {
                res.send(`
                <response sid="34">
                        <playtext  type="ggl"  quality="best">You have entered a wrong choice.</playtext>
                </response>
            `)
            }
        }
        else if (req.query.sid == '34') {
            if (req.query.data == '1')
                res.send(`
                    <response>
                            <playtext  type="ggl"  quality="best">You are an Adult.</playtext>
                    </response>
                `)
            else if (req.query.data = '2')
                res.send(`
                    <response>
                            <playtext  type="ggl"  quality="best">Minors are not allowed</playtext>
                    </response>
                `)
            else
                res.send(`
                <response>
                            <playtext  type="ggl"  quality="best">You entered a wrong choice</playtext>
                </response>`)
        }

    }

    else
        res.send(`
    <?xml version="1.0" encoding="UTF-8"?>     
        <response sid="12">
            <collectdtmf l="1" t="#" o="5000">     
                <playtext type="ggl"  quality="best">Please Select your gender</playtext>
                <playtext type="ggl"  quality="best">For Male Press 1</playtext>     
                <playtext type="ggl"  quality="best">For Female Press 2</playtext>     
            </collectdtmf>    
        </response>    
    `)
})

app.listen(8080, () => {
    console.log('Server started')
})
