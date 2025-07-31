const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
router.post('/', async (req, res) => {
    try{
        const {name , email , message}=req.body;
        // Save to database
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        const createMail={
            from:email,
            to:EMAIL_USER,
            subject:`contact from ${email}`,
            text:message,
            html:`
            <p>You have a new contact form submission</p>
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Message: </strong> ${message}</p>
            `
        };
        await transporter.sendMail(createMail);
        res.send(201).json({message:'mail sent successfully'});
    }catch(error){
        console.error('Error:',error);
        res.send(500).json({message:'Error sending the mail'});
    }
});
module.exports=router;