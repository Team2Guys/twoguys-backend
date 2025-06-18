import { createAppointments } from 'general/dto/create-general.input';
import nodemailer from 'nodemailer';
import { contactUsEmailInput, orderEmailInput } from 'sales-products/dto/create-sales-product.input';



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
 
             <p>We will contact you shortly. If you need to make changes or have any questions, please reply to this email or contact us at 052 933 2833.</p>
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



export const contactusEmail = async (data: contactUsEmailInput) => {
   const { name, email, phoneNumber, message, questionFlag } = data;

   const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .container {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 5px;
         color: #777;
          }
          .header {
            background-color: #2b2e2b;
            padding: 10px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
          }
          .field {
            margin: 10px 0;
          }
          .label {
            font-weight: bold;
            color: #777;
          }
          .footer {
            text-align: center;
            color: #777;
            font-size: 12px;
            padding: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${questionFlag ? "Question" : "New Contact Us"} Submission</h2>
          </div>
          <div class="content">

            <div class="field">
              <span class="label">Last Name:</span> ${name}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="label">Phone Number:</span> ${phoneNumber}
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <p>${message}</p>
            </div>
          </div>
          <div class="footer">
            This message was sent from your website's contact form
          </div>
        </div>
      </body>
    </html>
  `;

   await transporter.sendMail({
      from: `${questionFlag ? "Question Sumitted " : "Contact us form Submbission"} TG ${process.env.EMAIL_USER}`,
      to: process.env.CONTACT_US_EMAIL,
      subject: `${questionFlag ? "Question Sumitted " : "Contact us form Submbission"} ${name} `,
      html: htmlTemplate,
   });
};


export const sendEmailHandler = async (orderDetails: orderEmailInput, CustomerEmail?: string,) => {
   const { products, firstName, lastName, orderId, email, phone, address, emirate, totalPrice, shipmentFee } = orderDetails;

   console.log(products, "products")

   const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
   }).toUpperCase();
   const mailOptions = {
      from: `Order Confirmation @TG ${process.env.FROMMAIL}`,
      to: CustomerEmail ? CustomerEmail : `${process.env.FROMMAIL},${process.env.ORDER_MAIL1},${process.env.ORDER_MAIL2}`,
      subject: `Order has been confirmed @TG against Order # ${orderId}`,

      html: `<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Order Confirmation</title>
 <style>
    body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
       background-color: #f4f4f4;
    }

    .container {
       max-width: 500px;
       margin: 20px auto;
       background-color: #fff;
   
    }

    .main-container {
       padding: 20px;
       background-color:rgb(255, 255, 255) !important;
    }

    .header {
       text-align: center;
       padding: 20px 0;
    }

    .header img {
       max-width: 250px;
    }

    .status {
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 20px 0;
    }

    .status div {
       padding: 10px 20px;
       border-radius: 20px;
       margin: 0 5px;
       display: flex;
       align-items: center;
       justify-content: center;
       width: 120px;
       font-weight: bold;
    }

    .confirmed {
       background-color: #BF6933;
       color: #fff;
    }

    .shipping,
    .received {
       background-color: #ddd;
       color: #333;
    }

    .order-button {
       display: block;
       width: 200px;
       text-align: center;
       background-color: #2b2e2b;
       color: white !important;
       padding: 10px;
       margin: 20px auto;
       text-decoration: none;
       border-radius: 1px;
    }

    .table-font{
       font-size: 13px;
       color: black;
    }
      
    .order-para{
      color: black;
    }
    
    .purchase-details {
       background-color: #FFF9F5;
       padding: 15px;
       margin-top: 20px;
    }

    .purchase-table {
       width: 100%;
       border-collapse: collapse;
       text-align: center;
    }

    .purchase-table th,
    .purchase-table td {
       padding: 10px;
       text-align: left;
       border-bottom: 1px solid #ddd;
    }

    .footer {
       background-color: #BF6933;
       color: white;
       text-align: center;
       padding: 15px 0;
       margin-top: 20px;
    }

    .social-icons {
       text-align: center;
       margin-top: 10px;
    }

    .social-icons a {
       margin: 0 10px;
       text-decoration: none;
       font-size: 18px;
       color: #333;
    }

    .features {
       background-color: #ff6600;
       color: white;
       padding: 20px;
       display: flex;
       justify-content: space-around;
    }

    .feature {
       text-align: center;
    }

    .feature img {
       width: 40px;
       height: 40px;
    }

    .social-icons {
       padding: 15px;
    }

    .social-icons a {
       margin: 0 10px;
       text-decoration: none;
       font-size: 20px;
       color: black;
    }

    .features {
       background-color: #ff6600;
       color: white;
       width: 100%;
       align-items: center;
       padding: 30px;
    }

    .feature {
       text-align: center;
    }

    .feature img {
       width: 30px;
       height: auto;
    }

    .categories {
       margin-top: 5px;
       padding: 15px 0px;
       border-top: 2px solid #ccc;
       border-bottom: 2px solid #ccc;
       text-align: center;
    }

    .categories a {
       font-size: 11px;
       font-weight: 100;
       margin-top: 5px;
       text-decoration: none;
       color: rgb(255, 255, 255);
       padding: 10px 15px;
       background-color: #2b2e2b;
       display: inline-block;
    }

    .social-icons {
       padding: 15px;
    }

    .social-icons a {
       margin: 0 10px;
       text-decoration: none;
       font-size: 20px;
       color: black;
    }

    .progress-container {
       align-items: center;
       justify-content: center;
       margin-top: 50px;
       margin-bottom: 50px;
       width: 100%;
    }

    .step {
       display: flex;
       flex-direction: column;
       align-items: center;
       position: relative;
    }

    .step:not(:last-child)::after {
       content: "";
       position: absolute;
       width: 80px;
       height: 2px;
       background-color: black;
       top: 25px;
       left: 100%;
       transform: translateX(-40%);
    }

    .icon {
       width: 50px;
       height: 50px;
       border-radius: 50%;
       display: flex;
       align-items: center;
       justify-content: center;
       background-color: white;
       border: 2px solid black;
       font-size: 24px;
    }

    .completed .icon {
       background-color: #ff6600;
       color: white;
       border: none;
    }

    .step p {
       margin-top: 8px;
       font-size: 14px;
       font-weight: bold;
    }

@media (max-width: 450px) {
       .main-container{
          padding: 20px 5px;
       }
       .purchase-details{
          padding: 15px 5px;
       }
       .table-font.user-info{
          padding: 0px !important;
       }
       .user-info-wrapper{
          padding-right: 5px !important;
       }
       .total-wrapper{
          padding-right: 5px !important;
          padding-left: 5px !important;
       }
    }
    @media (max-width: 400px) {
       .table-font{
          font-size: 11px;
       }
       .purchase-details{
          padding: 15px 5px;
       }
    }
    @media (max-width: 350px) {
       .main-container{
          padding: 20px 5px;
       }
       .purchase-details{
          padding: 15px 5px;
       }
       .table-font{
          font-size: 10px;
       }
       .product-title-wrapper{
          width: 170px !important;
       }
       .product-title-wrapper .table-font {
          margin-left: 0px !important;
       }
       .purchase-details h3 {
          font-size: 16px !important;
       }
       .order-para {
          font-size: 14px !important;
       }
        .product-title-wrapper .product-img {
          width: 60px !important;
          height: 60px !important;
       }
      .categories a {
       padding: 10px;
      }
    }
 </style>
</head>

<body>
 <div class="container">
    <div class="main-container">
       <div class="header" style="text-align:center;">
          <img
             src="https://res.cloudinary.com/dsnhtfuef/image/upload/v1750153657/logo_dfk3ub.png"
             alt="Brand Logo">
       </div>
       <h3 style="text-align:center; margin:0; padding:0; color: black;">ORDER#${orderId}</h3>
       <p style="text-align:center;margin:0;padding:0; color: black;">${formattedDate}</p>
       <h1 style="text-align:center; color: black;">Order Confirmed</h1>

       <div class="progress-container" style="text-align:center;">
          <img src="https://res.cloudinary.com/dsnhtfuef/image/upload/v1750153703/order_jyuuas.png"
             alt="Progress Status" style="width: 100%;">
       </div>
       <p style="text-align:center;" class="order-para">Dear <b>Customer,</b></p>
       <p style="text-align:center;" class="order-para">Thank you very much for the order <br> you placed with <a
             href="https://www.twoguys.ae/">https://www.twoguys.ae/</a></p>
       <a href="https://twoguys.ae/track-order/${orderId}/" class="order-button">View Your Order</a>
       <p style="text-align:center;" class="order-para">Your ${orderDetails.isfreesample ? "Free Sample order" : "order"} has now been sent to the warehouse to prepare for packing and
          dispatch.</p>
       <p style="text-align:center;" class="order-para">Our team will be in touch soon to arrange the delivery with you.</p>
       <p style="text-align:center;" class="order-para">All The Best,</p>
       <p style="text-align:center;" class="order-para">The Team at<strong> @"Two Guys"</strong></p>
       <div class="purchase-details">
          <h3>Purchase Details</h3>
          <table class="purchase-table">
             <thead>
                <tr>
                   <th style="padding: 10px 2px; width: 60%" class="table-font">Product</th>
                   <th style="padding: 10px 2px;  width: 25%; text-align: center;" class="table-font">Product Price</th>
                   <th style="padding: 10px 2px;  width: 15%; text-align: center;" class="table-font">Price</th>
                </tr>
             </thead>


                  <tbody>
                ${products?.map((product, index) => `
                <tr key="${index}">
                   <td style="padding: 10px 2px;" class="product-title-wrapper">
                      <div style="display:flex; gap:5px; align-items:center; justify-content:center;">
                         <img
                            src="${product?.image?.imageUrl}"
                            alt="${product?.name}" style="height:70px; width:70px;" class="product-img">
                         <div>
                            <p class="table-font" style="margin-left: 5px; margin-bottom: 0px; margin-top: 0px; color: black; font-weight: 600;">
                            ${product?.name}</p>
                  <p class="table-font" 
                  style="margin-left: 5px; margin-bottom: 0px; margin-top: 8px; color: black;">
                  <b>Quantity 
                  :</b>
                     ${product?.quantity}
                              
                             </p>

                           

         ${
            product?.variant ?
            `  <p class="table-font" 
                            style="margin-left: 5px; margin-bottom: 0px; margin-top: 8px; color: black;">
                              <b>Variant</b>
                     ${product?.variant}
                              
                             </p>` : ""
   }




         

               ${
               product?.sizes ?
               `  <p class="table-font" 
                            style="margin-left: 5px; margin-bottom: 0px; margin-top: 8px; color: black;">
                              <b>Size</b>
                     ${product?.sizes || ""})
                              
                             </p>` 
                             
                             : ""





         }


         
                             
                         </div>
                      </div>
                   </td>
                   <td class="table-font" style="text-align:center; padding: 10px 2px;">${product.discountPrice || product.price || "Free"}</td>
                   <td class="table-font" style="text-align:center; padding: 10px 2px;">${product.totalPrice || "Free"}</td>
                </tr>
                `).join('')}
             </tbody>
        


          </table>

          <body style="font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0;">
             <table style="width: 100%; border-collapse: collapse; text-align: left; margin: auto;">
                <tr>
                   <td style="width: 50%; vertical-align: top; padding: 10px  10px 10px 0px ; border-right: 2px solid #ccc;" class="user-info-wrapper">
                      <table>
                         <tr>
                            <th style="padding: 5px 5px 0px 5px;" class="table-font">Name:</th>
                         </tr>
                         <tr>
                            <td style="padding: 0px 5px 5px 5px; width: 100%;" class="table-font">${(firstName || "") + "" + lastName}</td>
                         </tr>
                         <tr>
                            <th style="padding: 5px 5px 0px 5px;" class="table-font">Email:</th>
                         </tr>
                         <tr>
                            <td style="padding: 0px 5px 5px 5px; width: 100%;" class="table-font">${email}</td>
                         </tr>
                         <tr>
                            <th style="padding: 5px 5px 0px 5px;" class="table-font">Phone:</th>
                         </tr>
                         <tr>
                            <td style="padding: 0px 5px 5px 5px; width: 100%;" class="table-font">${phone}</td>
                         </tr>
                         <tr>
                            <th style="padding: 5px 5px 0px 5px;" class="table-font">Address:</th>
                         </tr>
                         <tr>
                            <td style="padding: 0px 5px 5px 5px; width: 100%;" class="table-font">${address}, ${emirate}</td>
                         </tr>

                          <tr>
                            <th style="padding: 5px 5px 0px 5px;" class="table-font">Shipping Type:</th>
                         </tr>
                         <tr>
                            <td style="padding: 0px 5px 5px 5px; width: 100%;" class="table-font">${orderDetails?.shippingMethod?.name}</td>
                         </tr>



                      </table>
                   </td>

                   <td style="width: 30%;  padding: 10px 5px;" class="total-wrapper">
                      <table style="border-collapse: collapse;">
                         <tr>
                            <td colspan="5" style="padding: 8px;" class="table-font">Subtotal</td>
                            <td style="padding: 8px;" class="table-font">${(totalPrice && shipmentFee) ? totalPrice - shipmentFee : totalPrice || "Free"}</td>
                         </tr>
                         <tr style="border-bottom: 2px solid #ccc;">
                            <td colspan="5" style="padding: 8px;" class="table-font">Shipment</td>
                            <td style="padding: 8px;" class="table-font">${shipmentFee === 0 ? "Free" : shipmentFee}</td>
                         </tr>
                         <tr>
                            <td colspan="5" style="padding: 8px; font-weight: bold; " class="table-font">Total Incl. VAT</td>
                            <td style="padding: 8px; font-weight: bold;" class="table-font">${(totalPrice) || "Free"}</td>
                         </tr>
                      </table>
                   </td>
                </tr>
             </table>
             </td>
             </tr>
             </table>
       </div>

       <div style="text-align: center; margin-top: 20px; background-color: #2B2E2B; padding: 14px;">
          <img src="https://res.cloudinary.com/dgwsc8f0g/image/upload/v1739185483/features_lbnmr6.png" alt="features"
             style="display: block; margin: auto; max-width: 100%; height: auto;">
       </div>
</body>
<div class="categories">
 <a target="_blank" href=https://twoguys.ae/window-coverings/>Window Covering</a>
 <a target="_blank" href=https://twoguys.ae/flooring/>Flooring</a>
 <a target="_blank" href=https://twoguys.ae/wall-decor/>Wall Decor  </a>
 <a target="_blank" href=https://twoguys.ae/furniture/>Furniture </a>

</div>
<div class="social-icons">
 <a href="https://www.facebook.com/twoguysuae/" target="_blank"> <img
       src="https://res.cloudinary.com/dsnhtfuef/image/upload/v1750157134/icon_nss4rt.png"></a>

 <a href="https://www.instagram.com/twoguysuae/" target="_blank"> <img
       src="https://res.cloudinary.com/dsnhtfuef/image/upload/v1750157229/Black_l6a8cj.png"></a>

       <a href="https://www.pinterest.com/twoguysuae/" target="_blank"> <img
       src="https://res.cloudinary.com/dsnhtfuef/image/upload/v1750157131/Vector-1_xpouvt.png"
       alt="pinterest"></a>
</div>
</div>
</body>

</html>`
   };


   try {
      transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
            console.error('Error sending email:', error);
            throw new Error(error.message || JSON.stringify(error))

         } else {
            console.log('Email sent:', info.response);
            return info.response
         }
      });
   } catch (error) {
      throw new Error(error.message)
   }


};
