function getHTML(name, email, selectedEmail) {
  return `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Upcoming Move - Dougherty Brothers Moving</title>
      </head>
      <body>
          
          <div marginwidth="0" marginheight="0">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;min-width:100%"> 
                  <tbody><tr>
                      <td width="100%" valign="top" bgcolor="#ffffff" align="center">
                          
                          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="Margin:0 auto;max-width:600px">
                              <tbody><tr>
                                  <td width="100%" bgcolor="#ffffff">
                                      
                                      <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#1f212d" style="border-bottom:2px solid #7ac043">
                                          <tbody><tr>
                                              <td style="background-color:#1f212d" bgcolor="#1f212d">
                                                  <table style="width:100%;border-bottom:1px solid #2d3039">
                                                      <tbody>
                                                          <tr>
                                                              <td align="center">
                                                                  <center>
                                                                      <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" style="Margin:0 auto">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td>
                                                                                      <table border="0" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                                          <tbody>
                                                                                          <tr>
                                                                                              
                                                                                              <td style="width:100%;font-size:1px;color:#1f212d;line-height:1px;max-height:1px;opacity:0;overflow:hidden">
                                                                                                  Hi ${name}, this is ${process.env.CURR_USER} with Dougherty Brothers Moving. I wanted to follow-up with you about your move. Are you still in need of full-service movers?         </td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                              <td align="center">
                                                                                              <table border="0" cellpadding="0" cellspacing="0" align="center">
                                                                                                  <tbody>
                                                                                                  <tr>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                      
                                                                                                      <td align="center" style="padding-left:20px">
                                                                                                          <a href="https://doughertybrothersmoving.com/get-a-quote-online/" style="display:block;border:0px!important" target="_blank">
                                                                                                              <img height="72" width="209" border="0" style="display:block;padding-left:20px" src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/DBM-Email-Logo-White.png" alt="Dougherty Brothers Moving">
                                                                                                          </a>
                                                                                                      </td>
                                                                                                  </tr>
                                                                                                  </tbody>
                                                                                              </table>
                                                                                              </td>
                                                                                          </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  <table border="0" align="left" width="5" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                                      <tbody>
                                                                                      <tr>
                                                                                          <td height="40" width="5" style="font-size:40px;line-height:40px">
                                                                                          &nbsp;
                                                                                          </td>
                                                                                      </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                                  <table border="0" align="right" cellpadding="0" width="320" cellspacing="0" style="border-collapse:collapse">
                                                                                      <tbody>
                                                                                      <tr>
                                                                                          <td height="5" width="100%" style="font-size:20px;line-height:15px">
                                                                                              &nbsp;
                                                                                          </td>
                                                                                      </tr>
                                                                                      <tr>
                                                                                          <td>
                                                                                              <table border="0" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                                                  <tbody>
                                                                                                      <tr>
                                                                                                          <td align="center">
                                                                                                              <table border="0" cellpadding="10" cellspacing="0" width="150" style="font-family:Calibri,sans-serif,'Open Sans'">
                                                                                                                  <tbody><tr>
                                                                                                                      <td align="center" style="background:#1f212d;border:1px solid #1f212d" valign="top">
                                                                                                                          <a href="https://doughertybrothersmoving.com/services" style="text-decoration:none;font-size:15px;line-height:15px;color:#ffffff" target="_blank">
                                                                                                                              Services
                                                                                                                          </a>
                                                                                                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                                          <a href="https://doughertybrothersmoving.com/about" style="text-decoration:none;font-size:15px;line-height:15px;color:#ffffff" target="_blank">
                                                                                                                              About
                                                                                                                          </a>
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                              </tbody></table>
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                  </tbody>
                                                                                              </table>
                                                                                              <table border="0" align="left" width="2" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                                                  <tbody>
                                                                                                      <tr>
                                                                                                          <td height="4" width="20" style="font-size:4px;line-height:4px">
                                                                                                              &nbsp;
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                  </tbody>
                                                                                              </table>
                                                                                              <table border="0" align="right" width="20" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                                                  <tbody>
                                                                                                      <tr>
                                                                                                          <td height="20" width="20" style="font-size:20px;line-height:20px">
                                                                                                              &nbsp;
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                  </tbody>
                                                                                              </table>
                                                                                              <table border="0" cellpadding="0" cellspacing="0" align="right" style="border-collapse:collapse">
                                                                                                  <tbody>
                                                                                                      <tr>
                                                                                                          <td align="center">
                                                                                                              <table border="0" cellpadding="10" cellspacing="0" width="120">
                                                                                                                  <tbody><tr>
                                                                                                                      <td align="center" style="background:#1f212d;border:1px solid #ffffff;border-radius:4px" valign="top">
                                                                                                                          <a href="tel:1-${process.env.USER_PHONE}" style="color:#ffffff;display:block;font-size:15px;font-weight:bold;text-align:center;text-decoration:none;font-family:Calibri,sans-serif,'Open Sans'" target="_blank">Call Me</a>
                                                                                                                      </td>
                                                                                                                  </tr>
                                                                                                              </tbody></table>
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                  </tbody>
                                                                                              </table>
  
                                                                                          </td>
                                                                                      </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </center>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody></table>
                                                                  <table border="0" cellpadding="20" cellspacing="0" align="center" bgcolor="#ffffff">
                                          <tbody>
                                              <tr>
                                                  <td style="font-size:16px;color:#333;font-weight:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;line-height:20px;vertical-align:top" bgcolor="#ffffff">
                                                      <div>
                                                          <strong>Hi ${name},</strong><br><br>
                                                          This is ${process.env.CURR_USER} with Dougherty Brothers Moving. <br><br>I wanted to follow-up with you about your move. Have you already hired a moving company?<br><br><br>
                                                           <i style="font-size:13px;">We are a veteran-founded company that facilitates full-service moves (loading/unloading, pad wrapping, furniture disassembly, transport, etc.) and our estimates include taxes, fuel, mileage and labor.</i>
                                                           <br><br>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>                                
                                          <table border="0" cellpadding="20" cellspacing="0" bgcolor="#313743">
                                              <tbody>
                                                  <tr>
                                                      <td align="center">
                                                          <table border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#313743">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="600">
                                                                          <table border="0" width="300" align="left" cellpadding="0" cellspacing="0" bgcolor="#313743" style="border-spacing:0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" style="color:#e8e8e8;font-size:18px;font-family:Calibri,sans-serif,'Open Sans';font-weight:500;line-height:22px">
                                                                                          You can reach me at <a href="tel:${process.env.USER_PHONE}" style="color: #3498DB;text-decoration: none;">${process.env.USER_PHONE}</a>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td height="20" style="font-size:20px;line-height:20px">
                                                                                          &nbsp;
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="left" style="color:#bebebe;font-size:16px;font-family:Calibri,sans-serif,'Open Sans';line-height:20px">
                                                                                          Also, you can <a href="https://doughertybrothersmoving.com/services" target="_blank" style="color: #bebebe;">learn more</a> about us on our website. 
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td height="20" style="font-size:20px;line-height:20px">
                                                                                          &nbsp;
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="left">
                                                                                          <table border="0" align="left" cellpadding="0" cellspacing="0">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td>
                                                                                                          <a href="https://www.facebook.com/DoughertyBrothersMoving/?view_public_for=101369074847164" style="display:block;width:30px;height:30px;color:#3498db;border:0px!important" target="_blank">
                                                                                                              <img width="30" height="30" border="0" style="display:block;width:30px;height:30px" src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-facebook.png" alt="facebook">
                                                                                                          </a>
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          <a href="mailto:${process.env.CURR_USER}@doughertybrothersmoving.com" style="display:block;width:30px;height:30px;color:#3498db;border:0px!important" target="_blank">
                                                                                                              <img width="30" height="30" border="0" style="display:block;width:30px;height:30px" src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-email.png" alt="email">
                                                                                                          </a>
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          <a href="https://www.instagram.com/doughertybrothersmoving/"display:block;width:30px;height:30px;color:#3498db;border:0px!important" target="_blank">
                                                                                                              <img width="30" height="30" border="0" style="display:block;width:30px;height:30px" src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-instagram.png" alt="instagram">
                                                                                                          </a>
                                                                                                      </td>
                                                                                                      <td>
                                                                                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                                      </td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                          <table border="0" width="2" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td width="2" height="30" style="font-size:30px;line-height:30px">
                                                                                          &nbsp;
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                          <table border="0" width="200" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" style="color:#e8e8e8;font-size:20px;font-family:Calibri,sans-serif,'Open Sans';font-weight:500;line-height:22px">
                                                                                          Contact Me
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td height="20" style="font-size:20px;line-height:20px">
                                                                                          &nbsp;
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="left" style="color:#848484;font-size:14px;font-family:Calibri,sans-serif,'Open Sans';line-height:18px">
                                                                                          <div>
                                                                                              <a href="mailto:${process.env.CURR_USER}@DoughertyBrothersMoving.com" style="color: #848484;">Send me an email</a><br>
                                                                                              US DOT: 3397306 &nbsp &nbsp MC: 1092930<br>
                                                                                              Dougherty Brothers Moving LLC<br>
                                                                                          </div>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                          <table border="0" cellpadding="10" cellspacing="0" bgcolor="#ffffff">
                                              <tbody>
                                                  <tr>
                                                      <td height="10" width="600" style="font-size:10px;line-height:10px">
                                                          &nbsp;
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td height="4" style="font-size:4px;line-height:4px">
                                                          &nbsp;
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="color:#848484;font-size:14px;font-family:Calibri,sans-serif,'Open Sans';line-height:18px;text-align:center;">
                                                                                                                  
                                                                  Don't want to receive any more emails? <a href="https://doughertybrothersmoving.com/email-opt-out/" style="color:#999;text-decoration:underline;" target="_blank">Click here</a> to opt out.
                                                                                                          </td>
                                                  </tr>
                                                  <tr>
                                                      <td height="10" style="font-size:10px;line-height:10px">
                                                          &nbsp;
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                  </td>
                              </tr>
                      </tbody></table>
                  </td>
              </tr>
          </tbody></table> 
          <div style="display:none;white-space:nowrap;font:15px courier;color:#ffffff">

        <img src="https://goodnoodle.xyz/viewed-email?name=${name}&email=${email}&sentemail=${selectedEmail}" alt="" width="0" height="0" style="width:2px;max-height:0;overflow:hidden;">
    
      </body>
  
  </html>
  `;
}


module.exports = getHTML;