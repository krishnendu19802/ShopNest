const nodemailer = require('nodemailer');
require('dotenv').config()

if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error('Missing EMAIL or PWD environment variables.');
    
}
else{
    console.log({
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    })
}
const transporter = nodemailer.createTransport({

    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('SMTP server is ready to send emails');
    }
});

const sendMail = (user, tp,order) => {
    let mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: '',
        text: 'Thank you for subscribing!',
        html: ''
    };

    if (tp == 0) {
        mailOptions[`subject`]='Thank You for reaching out'
        mailOptions['html'] = `
        <!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
            width: 100%;
        }
        .content {
            background-color: white;
            padding: 20px;
            margin: 10px auto;
            max-width: 600px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;
            color: #aaa;
        }
    </style>
</head>
<body>
    <div class="container" style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; color: #333; width: 100%;">
        <div class="content" style="background-color: white; padding: 20px; margin: 10px auto; max-width: 600px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
            <p>Dear ${user.name},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
            <p>Best regards,<br>ShopNest</p>
        </div>
        <div class="footer" style="margin-top: 20px; font-size: 12px; text-align: center; color: #aaa;">
            <p>&copy; 2023 ShopNest. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
    }

    else{
        mailOptions[`subject`]='Order confirmed'

        mailOptions['html']=`
        <!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
            width: 100%;
        }
        .content {
            background-color: white;
            padding: 20px;
            margin: 10px auto;
            max-width: 600px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;
            color: #aaa;
        }
        .highlight {
            color: #007bff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container" style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; color: #333; width: 100%;">
        <div class="content" style="background-color: white; padding: 20px; margin: 10px auto; max-width: 600px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
            <p>Dear ${user.name},</p>
            <p>Thank you for your order!</p>
            <p>Your order with the details below is confirmed:</p>
            <ul>
                <li>Product Name: <span class="highlight" style="color: #007bff; font-weight: bold;">${order.name}</span></li>
                <li>Quantity: <span class="highlight" style="color: #007bff; font-weight: bold;">${order.quantity}</span></li>
                <li>Total Price: <span class="highlight" style="color: #007bff; font-weight: bold;">${order.price}</span></li>
            </ul>
            <p>Your order will be delivered within 3 working days.</p>
            <p>Best regards,<br>ShopNest</p>
        </div>
        <div class="footer" style="margin-top: 20px; font-size: 12px; text-align: center; color: #aaa;">
            <p>&copy; 2023 ShopNest. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('error: ',error)
        }
        console.log('Mail sent')
    });
}

module.exports=sendMail