function getHTML(name, email, selectedEmail) {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="color-scheme" content="light dark">
     <meta name="supported-color-schemes" content="light dark">
     <style type="text/css">
       @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        table {
        border-spacing: 0;
      }
        td {
           padding: 0;
        }
        p {
           font-size: 15px;
        }
        img {
           border: 0;
        }
        a {
           text-decoration: none;
           color: #e8fbfa;
           font-size: 16px;
        }
        .content {
           line-height: 20px;
           font-size: 15px;
        }
  
        @media screen and (max-width: 560px) {
           .two-columns .padding {
              padding-right: 0!important;
              padding-left: 0!important;
           }
           img.two-col-img {
              width: 300px!important;
              max-width: 300px!important;
           }
           .two-third-columns .padding {
              padding-right: 0!important;
              padding-left: 0!important;
           }
           .two-third-columns .padding.first {
              padding-bottom: 0!important;
           }
           .two-third-columns .padding.last {
              padding-top: 0!important;
           }
           img.one-third-col-img {
              width: 200px!important;
              max-width: 200px!important;
           }
           .two-third-columns .content {
              text-align: center!important;
           }
           img.three-col-img-last {
              width: 200px!important;
              max-width: 200px!important;
           }
           .three-columns .padding {
              padding-right: 0!important;
              padding-left: 0!important;
           }
           .fmcsa {
              width: 400px;
              height: 200px;
           }
           .about-us-h1 {
              font-size: 26px;
              padding: 20px 0;
           }
           .footer-text[style] {
              line-height: 2.5!important;
              font-size: 20px!important;
           }
           .footer-text[style] a {
              font-size: 20px !important;
           }
           
           .footer[style] {
              padding: 20px!important;
           }
        }
        @media screen and (max-width: 425px) {
           img.three-col-img {
              width: 200px!important;
              max-width: 200px!important;
           }
           .fmcsa {
              width: 350px;
              height: 175px;
           }
        }
  
        /* Custom Dark Mode Colors */
        :root {
           color-scheme: light dark;
           supported-color-schemes: light dark;
        }
        @media (prefers-color-scheme: dark) {
           body, center, table, .darkmode-bg {
              background: #222!important;
              color: #ffffff!important;
           }
		   .footer, .header, table {
			background-color: #333!important;
		   }
           .darkmode-transparent {
              background-color: transparent!important;
           }
        }
     </style>
     
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {border-collapse: collapse !important;}
      </style>
    <![endif]-->
    
  </head>
  <body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">
  
     <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
           body {background-color: #dde0e1!important;}
           body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
        </style>
     <![endif]-->
  
     <center style="width: 100%;table-layout:fixed;background-color: #dde0e1;padding-bottom: 40px;">
        <div style="max-width: 600px;background-color: #fafdfe;box-shadow: 0 0 10px rgba(0, 0, 0, .2);">
  
           <div style="font-size: 0px;color: #fafdfe;line-height: 1px;mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
              Hi ${name}, this is ${process.env.CURR_USER} with Dougherty Brothers Moving. We are a Veteran-founded, family owned and operated company that facilitate full-service moves. With decades of combined experience, our team is best suited to fit your out-of-state moving needs. Give me a call: ${process.env.USER_PHONE} 
           </div>
        
           <!--[if (gte mso 9)|(IE)]>
              <table width="600" align="center" style="border-spacing:0;color:#565656;" role="presentation">
              <tr>
              <td style="padding:0;">
           <![endif]-->
  
           <table align="center" style="border-spacing:0;color:#565656;font-family: 'Lato',sans-serif, Arial, Helvetica;background-color: #fafdfe;Margin:0;padding:0;width: 100%;max-width: 600px;" role="presentation">
  
  
              <tr>
                 <td style="padding:0;border: 0px;">
                    <table width="100%" style="border-spacing:0;" role="presentation">
                    
                       <tr>
                          <td height="10" style="border: 0px;">
                             <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                   <td style="padding:0;text-align: center;border: 0px;background-color: #2d2d2d;padding: 10px;" class="header">
                                      <a href="https://doughertybrothersmoving.com/"  target="_blank"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/DBM-Email-Logo-White.png" border="0" title="Dougherty Brothers Moving Logo" alt="Dougherty Brothers Moving" width="300"></a>
                                   </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding: 0;border: 0px;">
                             <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                   <td style="padding: 7.5px;text-align: center;border: 0px;">
                                      <h1 class="about-us-h1" style="padding: 7px 5px 5px 5px;"><br>About Us</h1>
                                   </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding: 0;border: 0px;">
                             <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                   <td style="text-align: left;padding: 0px 40px 10px 40px;border: 0px;">
                                      <p style="font-size: 20px;margin: 0;padding: 10px 0 20px;">
                                      We are a veteran-founded, family owned and operated company that facilitates full-service moves. With decades of combined experience, our team is best suited to fit your out of state moving needs.
                                         <span style="display: block;font-size: 20px;color: #6bb9f2;padding: 50px 0 0 0;text-align: center;">Our quotes include the following:</span>
                                         <ul style="line-height: 30px;font-weight: bold;">
                                            <li>disassembly/reassembly of all standard furniture</li>
                                            <li>wrapping of items in quilted moving blankets</li>
                                            <li>loading/unloading of the truck</li>
                                            <li>transport, mileage included</li>
                                            <li>taxes and fuel charges included</li>
                                            <li>tariff discounts available</li>
                                         </ul>
                                      </p>
                                   </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                       
                       <tr>
                          <td height="10" style="border: 0px;">
                             <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                   <td style="padding:0 0 50px;text-align: center;border: 0px;">
                                      <a href="https://doughertybrothersmoving.com/get-a-quote-online"  target="_blank"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/09/DoughertyBrothersMoving.com-_-888-462-9526_GIF.gif" border="0" title="Click to get a quote online" alt="www.doughertybrothersmoving.com" width="500" height="250" class="fmcsa" style="padding: 20px;"></a>
                                   </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                       <tr>
                          <td style="padding: 0;border: 0px;">
                             <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                   <td style="text-align: left;padding: 0px 40px 40px 50px;border: 0px;">
                                      <p style="font-size: 20px;margin: 0;padding: 20px 5px;">
                                         We are <em>fully licensed, bonded, and insured with the United States Department of Transportation.</em> Our team is up for every job. Whether it is a military, residential,  or corporate move - <strong>we've got you covered. </strong>
                                         <br><br><br>
                                            Moving long-distance is not typically something you associate with the word, “easy”. We remove the time-consuming tasks and complexity out of the equation by offering you best-in-class service for your long-haul move. 
                                      </p>
                                   </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                       <tr>
                          <td class="footer" height="10" style="padding: 0;text-align: center;font-size: 0;border: 0px;background-color: #2d2d2d">
                             <table width="100%" style="border-spacing:0;display: inline-block;vertical-align:top;width: 100%; max-width: 300px;text-align: center;" role="presentation">
                                <tr>
                                   <td style="padding:0;text-align: center;height: 164px;border: 0px;">
                                      <a href="https://doughertybrothersmoving.com/" target="_blank"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/DBM-Letter-Logo.png" border="0" title="Dougherty Brothers Moving Logo" alt="Dougherty Brothers Moving" width="300"></a>
                                   </td>
                                </tr>
                             </table>
                             <table width="100%" style="border-spacing:0;display: inline-block;vertical-align: top;width: 100%; max-width: 300px;text-align: center;" role="presentation">
                                <tr>
                                   <td style="padding: 10px 10px;text-align: center;color: white;width: 300px;border: 0px;">
                                      <p class="footer-text" style="color: white;font-size: 16px;font-weight: 600;line-height: 1.75;">
                                         ${process.env.CURR_USER}
                                         <br>
                                         <a href="tel:${process.env.USER_PHONE}" title="Call Now" style="font-weight: 800;text-decoration: underline;color: white;">${process.env.USER_PHONE}</a>
                                         <br>
                                         &copy;Dougherty Brothers Moving
                                         <br>
                                         DOT: 3397306 &nbsp; &nbsp; MC: 1092930
                                      </p>
                                  </td>
                                </tr>
                             </table>
                          </td>
                       </tr>
                    </table>
                 </td>
              </tr>
  
  
           </table>
  
           <!--[if (gte mso 9)|(IE)]>
           </td>
           </tr>
           </table>
           <![endif]-->
        
        </div>

        <img src="https://koreanbeefjerky.com/track?name=${name}&email=${email}" alt="" width="0" height="0" style="width:2px;max-height:0;overflow:hidden;">

     </center>
  
  </body>
  </html>
  `;
}


module.exports = getHTML;