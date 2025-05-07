import { createAppointments } from 'general/dto/create-general.input';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    host: 'mail.blindsandcurtains.ae',
    port: 587,
    secure: false,
    auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
    },
 });
 
 

 export const sendAppointmentEmail = async (appointmentData: createAppointments) => {
    const {
       name,
       email,
       phoneNumber,
       whatsApp,
       location,
       subCategories,
    } = appointmentData;
 
    const htmlTemplate = `<!DOCTYPE html>
     <html>
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <style>
           body {
             font-family: Arial, sans-serif;
             color: #333;
           }
           .container {
             max-width: 600px;
             margin: 0 auto;
             padding: 20px;
             border: 1px solid #eee;
             border-radius: 5px;
             background-color: #f9f9f9;
           }
           .header {
             background-color: #222;
             color: white;
             padding: 15px;
             text-align: center;
             border-radius: 5px 5px 0 0;
           }
           .content {
             padding: 20px;
             background-color: #fff;
           }
           .field {
             margin: 15px 0;
           }
           .label {
             font-weight: bold;
           }
           .footer {
             text-align: center;
             color: #777;
             font-size: 12px;
             padding: 10px;
             border-top: 1px solid #eee;
           }
         </style>
       </head>
       <body>
         <div class="container">
           <div class="header">
             <h2>Appointment Confirmation</h2>
             <p>Two Guys</p>
           </div>
           <div class="content">
             <p>Dear ${name},</p>
             <p>Thank you for booking an appointment with <strong>Two Guys</strong>. Here are your submitted details:</p>
 
             <div class="field">
               <span class="label">Name:</span> ${name}
             </div>
 
             <div class="field">
               <span class="label">Email:</span> ${email}
             </div>
 
             <div class="field">
               <span class="label">Phone Number:</span> ${phoneNumber}
             </div>
 
             ${whatsApp ? `
               <div class="field">
                 <span class="label">WhatsApp Number:</span> ${whatsApp}
               </div>
             ` : ""}
 
             <div class="field">
               <span class="label">Location:</span> ${location}
             </div>
 
             ${subCategories?.length ? `
               <div class="field">
                 <span class="label">Sub Categories:</span>
                 <ul>
                   ${subCategories.map((cat: any) => `<li>${JSON.stringify(cat)}</li>`).join("")}
                 </ul>
               </div>
             ` : ""}
 
             <p>We will contact you shortly. If you need to make changes or have any questions, please reply to this email or contact us at +971 50 597 4385.</p>
           </div>
           <div class="footer">
             <p>&copy; ${new Date().getFullYear()} Two Guys. All rights reserved.</p>
             <p>This is an automated email. Please do not reply directly.</p>
           </div>
         </div>
       </body>
     </html>
    `;
 
    try {
       await transporter.sendMail({
          from: `Appointment Confirmation ${process.env.EMAIL_USER}`,
          to: email,
          subject: `Appointment Confirmation - Two Guys`,
          html: htmlTemplate,
       });
    } catch (error) {
       console.error("Error sending appointment email:", error);
       throw new Error("Failed to send appointment confirmation email");
    }
 };
 