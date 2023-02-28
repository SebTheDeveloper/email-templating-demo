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
    <title>Get a Quote Online - DBM</title>
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
        border-width:0;
      }
      a {
        color: #277fd2;
        text-decoration: none;
      }
      @media screen and (max-width: 599.98px) { 
        .px-600-0 {
          padding-left: 0!important;
          padding-right: 0!important;
        }
        .pt-600-0 {
          padding-top: 0!important;
        }
        img.third-img-last {
          width: 200px!important;
          max-width: 200px!important;
        }
        .d-600-none {
          display: none!important;
        }
        .pr-large {
          padding-right: 140px!important;
        }
        .center-text-mobile {
          text-align: center!important;
        }
      }
      @media screen and (max-width: 549.98px) { 
        .pt-550-0 {
          padding-top: 0!important;
        }
        .pr-large {
          padding-right: 100px!important;
        }
      }
      @media screen and (max-width: 499.98px) { 
        .pt-500-0 {
          padding-top: 0!important;
        }
        .pr-large {
          padding-right: 60px!important;
        }
      }
      @media screen and (max-width: 399.98px) {
        .banner {
              height: auto!important;
              padding-top: 20px!important;
              padding-bottom: 30px!important;
           }
        .px-sm-0 {
          padding-left: 0!important;
          padding-right: 0!important;
        }
        .pt-400-0 {
          padding-top: 0!important;
        }
        img.third-img {
          width: 200px!important;
          max-width: 200px!important;
        }
        .pr-large {
          padding-right: 25px!important;
        }
      }
  
      /* Custom Dark Mode Colors */
        :root {
           color-scheme: light dark;
           supported-color-schemes: light dark;
        }
        @media (prefers-color-scheme: dark) {
           body, center, table, .darkmode-bg {
              background: #2d2d2d!important;
              color: #ffffff!important;
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
  <body style="Margin:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;min-width:100%;background-color:#F6F9FC;">
  
     <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
           body {background-color: #F6F9FC!important;}
           body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
        </style>
     <![endif]-->
  
    <center style="width: 100%;table-layout:fixed;background-color: #F6F9FC;padding-bottom: 40px;">
      <div style="max-width: 600px;background-color: #ffffff;box-shadow: 0 0 10px rgba(0, 0, 0, .2);">
  
           <div style="font-size: 0px;color: #fafdfe;line-height: 1px;mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
              Hi ${name}, if you'd prefer to get a quote online rather than on the phone, you can enter your inventory list at - https://doughertybrothersmoving.com/get-a-quote-online/
           </div>
  
        <!--[if (gte mso 9)|(IE)]>
          <table width="600" align="center" style="border-spacing:0;color:#3d3d3d;" role="presentation">
          <tr>
          <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
        <![endif]-->
  
        <table align="center" style="border-spacing:0;color:#3D3D3D;font-family: 'Lato',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding-top: 0;padding-right: 0;padding-bottom: 0;padding-left: 0;width: 100%;max-width: 600px;" role="presentation">
  
  <!-- START HEADER -->
          <tr>
            <td class="three-columns" style="padding-top:15px;padding-right:0;padding-bottom:6px;padding-left:0;text-align:center;font-size:0;background-color: #277fd2;">
  
              <!--[if (gte mso 9)|(IE)]>
                <table width="100%" style="border-spacing:0;color:#4F5557;" role="presentation">
                <tr>
                <td width="200" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
  
              <table class="column" style="border-spacing:0;color:#ffffff;width:100%;max-width:200px;display:inline-block;" role="presentation">
                <tr>
                  <td class="padding px-600-0" style="padding-top:0;padding-right:0;padding-bottom:12px;padding-left:10px;background-color:#277fd2;">
                    <table class="content" style="border-spacing:0;color:#ffffff;width:100%;font-size:14px;text-align:center;" role="presentation">
                      <tr>
                        <td style="background-color: #277fd2;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;width: 200px;">
                          <a href="mailto:${process.env.CURR_USER}@doughertybrothersmoving.com"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-email-1.png" width="19" alt="" style="border-width:0;width:100%;max-width:19px;height:auto;vertical-align:middle;"></a>
                          <a href="mailto:${process.env.CURR_USER}@doughertybrothersmoving.com" target="_blank" style="font-size: 10px;color: #ffffff; text-decoration: none; display: inline-block;">${process.env.CURR_USER}@doughertybrothersmoving.com</a>
                        </td>
                      </tr>
  
                    </table>
                  </td>
                </tr>
              </table>
              
              <!--[if (gte mso 9)|(IE)]>
                </td><td width="200" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
              
              <table class="column" style="border-spacing:0;color:#4D5358;width:100%;max-width:200px;display:inline-block;" role="presentation">
                <tr>
                  <td class="padding remove-padding-600 pt-400-0" style="padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0;background-color: #277fd2;">
                    <table class="content" style="border-spacing:0;color:#ffffff;width:100%;font-size:14px;text-align:center;" role="presentation">
                      <tr>
                        <td style="background-color: #277fd2;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;width: 200px;">
                          <a href="tel:1-${process.env.USER_PHONE}"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-phone-1.png" width="19" alt="" style="border-width:0;width:100%;max-width:19px;height:auto;vertical-align:bottom;"></a>
                          <a href="tel:1-${process.env.USER_PHONE}" target="_blank" style="font-size: 10px;color: #ffffff; text-decoration: none; display: inline-block;">1-${process.env.USER_PHONE}</a>
                        </td>
                      </tr>
  
                    </table>
                  </td>
                </tr>
              </table>
  
              <!--[if (gte mso 9)|(IE)]>
                </td><td width="40" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
              
              <table class="column d-600-none" style="border-spacing:0;color:#ffffff;width:100%;max-width:40px;display:inline-block;vertical-align:top;" role="presentation">
                <tr>
                  <td class="padding d-600-none" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;background-color: #277fd2;">
                    <table class="content" style="border-spacing:0;width:100%;" role="presentation">
                      <tr>
                        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            
              <!--[if (gte mso 9)|(IE)]>
                </td><td width="160" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
  
              <table class="column d-600-none" style="border-spacing:0;color:#ffffff;width:100%;max-width:160px;display:inline-block;" role="presentation">
                <tr>
                  <td class="padding d-600-none" style="padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0; background-color: #277fd2;">
                    <table class="content" style="border-spacing:0;color:#ffffff;width:100%;font-size:14px;text-align:center;" role="presentation">
                      <tr>
                        <td style="background-color: #277fd2;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;width: 200px;">
                          <a href="https://www.doughertybrothersmoving.com" target="_blank" style="font-size: 10px;color: #ffffff; text-decoration: none; display: inline-block;">View online</a>
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
  
            </td>
          </tr>
  <!-- END HEADER -->
  
  <!-- START LOGO & MENU -->
          <tr>
            <td class="three-columns" style="padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0;text-align:center;font-size:0;">
  
              <!--[if (gte mso 9)|(IE)]>
                <table width="100%" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                <tr>
                <td width="250" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
  
              <table class="column" style="border-spacing:0;color:#4D5358;width:100%;max-width:250px;display:inline-block;" role="presentation">
                <tr>
                  <td class="padding px-600-0" style="padding-top:10px;padding-right:0px;padding-bottom:0;padding-left:40px;">
                    <table class="content" style="border-spacing:0;color:#3d3d3d;width:100%;text-align:center;" role="presentation">
                      <tr>
                        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;width:100%;text-align:center; width:250px;">
                          <a href="https://www.doughertybrothersmoving.com"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/DBM-Email-Logo-Blue-1.png" alt="logo" width="155" style="border-width:0;max-width: 155px;"></a>
                        </td>
                      </tr>
  
                    </table>
                  </td>
                </tr>
              </table>
  
              <!--[if (gte mso 9)|(IE)]>
                </td><td width="50" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
              
              <table class="d-600-none" style="border-spacing:0;width:100%;max-width:50px;display:inline-block;" role="presentation">
                <tr>
                  <td class="padding px-600-0" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <table class="content" style="border-spacing:0;" role="presentation">
                      <tr>
                        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            
              <!--[if (gte mso 9)|(IE)]>
                </td><td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <![endif]-->
  
              <table class="column" style="border-spacing:0;color:#4D5358;width:100%;max-width:300px;display:inline-block;vertical-align:top;" role="presentation">
                <tr>
                  <td class="padding px-600-0 pt-550-0" style="padding-top:18px;padding-right:15px;padding-bottom:0;padding-left:0;">
                    <table class="content" style="border-spacing:0;color:#868686;font-size:15px;font-weight:bold;text-align:center;" role="presentation">
                      <tr>
                        <td class="padding content" style="padding-top:10px;padding-right:0;padding-bottom:0;padding-left:0;width:100%;text-align:center; width:100px;color:#868686; font-size:15px;font-weight: bold;">
                          <p style="font-size:15px;font-weight:bold;Margin:0;display: inline;"><a href="https://doughertybrothersmoving.com/about-us/" target="_blank" style="text-decoration: none;color: #868686;">ABOUT US</a></p>
                        </td>
  
                        <td class="padding content" style="padding-top:10px;padding-right:0;padding-bottom:0;padding-left:0;width:100%;text-align:center; width:100px;color:#868686; font-size:15px;font-weight: bold;">
                          <p style="font-size:15px;font-weight:bold;Margin:0;display: inline;"><a href="https://doughertybrothersmoving.com/services/" target="_blank" style="text-decoration: none;color: #868686;">SERVICES</a></p>
                        </td>
  
                        <td class="padding content" style="padding-top:10px;padding-right:0;padding-bottom:0;padding-left:0;width:100%;text-align:center; width:100px;color:#868686; font-size:15px;font-weight: bold;">
                          <p style="font-size:15px;font-weight:bold;Margin:0;display: inline;"><a href="https://doughertybrothersmoving.com/contact/" target="_blank" style="text-decoration: none;color: #868686;">CONTACT</a></p>
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
  
            </td>
          </tr>
  <!-- END LOGO & MENU -->
  
  <!-- START BANNER -->
          <tr>
            <td class="banner" background="" width="600" height="380" style="background-position: center top;padding-right: 0;padding-left: 0;">
  
              <!--[if (gte mso 9)|(IE)]>
              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:380px;">
                <v:fill type="tile" src="" />
                <v:textbox inset="0,0,0,0">
              <![endif]-->
  
              <table class="darkmode-transparent" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td width="600" align="center" valign="middle">
                    <table class="darkmode-transparent" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td align="center">
                          <table class="darkmode-transparent" role="presentation">
                            <tr>
  
                            <!--[if (gte mso 9)|(IE)]>
                                            <td style="padding-top:70px;"></td>
                                         <![endif]-->
  
                              <td class="pr-large" valign="middle" align="left" style="padding-top:5px;padding-right:25px;padding-bottom:18px;padding-left:25px; vertical-align:middle; font-size: 28px; line-height: 28px;">
  
                                <p align="left" style="font-size: 28px; line-height: 28px; font-weight:bold;">Hi ${name},</p>
  
                                <p align="left" style="font-size:18px; line-height: 28px;font-weight:400">Want a quote but don't want to speak to anyone? No problem! Click on the link below to get a quote online.</p>
                              </td>
                            </tr>
                          </table>
                         </td>
                      </tr>
                      <tr>
                        <td align="left" style="padding-left: 25px;">
                          <table class="darkmode-transparent" align="left" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
  
                              <td align="left" style="border-radius:4px;" bgcolor="#277fd2">
                                <a href="https://doughertybrothersmoving.com/get-a-quote-online/" target="_blank" style="font-size: 15px;font-weight: bold;text-decoration: none;color: #ffffff;background-color: #277fd2;border:1px solid #277fd2;border-radius:4px;padding:12px 17px;display: inline-block;">GET A QUOTE ONLINE
                                </a>
                              </td>
  
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="25"> </td>
                </tr>
              </table>
  
              <!--[if (gte mso 9)|(IE)]>
              </v:textbox>
              </v:rect>
              <![endif]-->
  
            </td>
          </tr>
  <!-- END BANNER -->
  
  <!-- START CENTERED CONTENT -->
          <tr>
            <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;background-color: #e8e8e8;">
              <table width="100%" style="border-spacing:0;" role="presentation">
                <tr>
                  <td class="padding content" style="padding-top:15px;padding-right:20px;padding-bottom:0;padding-left:20px;width:100%;text-align:center;font-size:20px;">
                    <p style="font-size:22px; font-weight:bold;line-height: 30px;padding-bottom: 5px;">Why Choose DBM?</p>
                    
                    <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td align="center">
                          <table width="150" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
  
                            <!--[if (gte mso 9)|(IE)]>
                              <td style="padding-top:15px;padding-bottom:15px;">
                            <![endif]-->
  
                            <td width="150" align="center" style="border-top:4px solid #2cbc8c;"></td>
  
                            <!--[if (gte mso 9)|(IE)]>
                                            </td>
                            <![endif]-->
                            
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="padding content" style="padding-right:20px;padding-bottom:30px;padding-left:20px;width:100%;text-align:center;font-size:20px;">
                    <p style="font-size:15px;line-height:22px;padding-top:10px;padding-bottom:10px;line-height: 23px;">We are a Veteran-founded, family owned & operated company that facilitate full-service moves. With decades of combined experience, our team is best suited to fit your out-of-state moving needs.</p>
  
                    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td align="center" style="padding-top:15px;">
                          <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
  
                              <td align="center" style="border-radius:4px;" bgcolor="#2cbc8c">
                                <a href="tel:${process.env.USER_PHONE}" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #ffffff;background-color: #2cbc8c;border:1px solid #2cbc8c;border-radius:4px;padding:10px 20px;display: inline-block;">Click to Call
                                </a>
                              </td>
  
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  <!-- END CENTERED CONTENT -->
  
  <!-- START TWO COLUMNS -->
          <tr>
            <td style="padding-top:30px;padding-right:0;padding-bottom:30px;padding-left:0;">
              <table width="100%" style="border-spacing:0;" role="presentation">
                <tr>
                  <td class="two-columns" style="padding-left:0;padding-right:0;font-size:0;text-align: center;">
  
                    <!--[if (gte mso 9)|(IE)]>
                      <table width="100%" style="border-spacing:0;" role="presentation">
                      <tr>
                      <td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;border-spacing: 0;" role="presentation">
                      <tr>
                        <td class="padding" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                          <table class="content" style="border-spacing:0;text-align:center;" role="presentation">
                            <tr>
                              <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                <img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/Full-Service-580x320-1.png" width="260" alt="" style="border-width:0;width:100%;max-width:260px;height:auto;display:block;">
                              </td>
                            </tr>
                            <tr>
                              <td align="left" valign="middle" style="padding-top:15px;padding-right:0;padding-bottom:5px;padding-left:0;">
                                <p style="Margin:0;font-size:19px;font-weight:bold;">Full-Service </p>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" valign="middle" style="padding-top:5px;padding-right:0;padding-bottom:10px;padding-left:0;">
                                <p style="Margin:0;font-size:15px;">The disassembly/reassembly of standard furniture, pad-wrapping, loading, transport and unloading at delivery is all included in your quote.</p>
                              </td>
                            </tr>
                            <tr>
                                            <td align="left" style="padding-top: 15px;">
                                               <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-spacing:0;text-align:center;">
                                                  <tr>
  
                                    <td align="left" style="border-radius:4px;" bgcolor="#277fd2">
                                      <a href="https://doughertybrothersmoving.com/services/" target="_blank" style="font-size: 16px;font-weight: bold;text-decoration: none;color: #ffffff;background-color: #277fd2;border:1px solid #277fd2;border-radius:4px;padding:10px 14px;display: inline-block;">Read more
                                      </a>
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
                      </td><td width="300" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;border-spacing:0;" role="presentation">
                      <tr>
                        <td class="padding" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                          <table class="content" style="border-spacing:0;text-align:center;" role="presentation">
                            <tr>
                              <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                <img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/Map-Pin-580x320-1.png" width="260" alt="" style="border-width:0;width:100%;max-width:260px;height:auto;display:block;">
                              </td>
                            </tr>
                            <tr>
                              <td align="left" valign="middle" style="padding-top:15px;padding-right:0;padding-bottom:5px;padding-left:0;">
                                <p style="Margin:0;font-size:19px;font-weight:bold;">Move Anywhere in the USA</p>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" valign="middle" style="padding-top:5px;padding-right:0;padding-bottom:10px;padding-left:0;">
                                <p style="Margin:0;font-size:15px;">We have a vast network of carriers across the Continental US, which means we can accommodate for almost any interstate move in the states.</p>
                              </td>
                            </tr>
                            <tr>
                                            <td align="left" style="padding-top: 15px;">
                                               <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-spacing:0;text-align:center;">
                                                  <tr>
  
                                    <td align="left" style="border-radius:4px;" bgcolor="#277fd2">
                                      <a href="https://doughertybrothersmoving.com/services/" target="_blank" style="font-size: 16px;font-weight: bold;text-decoration: none;color: #ffffff;background-color: #277fd2;border:1px solid #277fd2;border-radius:4px;padding:10px 14px;display: inline-block;">Read more
                                      </a>
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
  
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  <!-- END TWO COLUMNS -->
  
  <!-- START TWO COLUMNS TEXT & BUTTON -->
          <tr>
            <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;background-color: #e8e8e8;">
              <table width="100%" style="border-spacing:0;" role="presentation">
                <tr>
                  <td class="three-columns" style="padding-top:15px;padding-right:0;padding-bottom:20px;padding-left:0;text-align:center;font-size:0;">
  
                    <!--[if (gte mso 9)|(IE)]>
                      <table width="100%" style="border-spacing:0;" role="presentation">
                      <tr>
                      <td width="435" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="border-spacing:0;width:100%;max-width:435px;display:inline-block;" role="presentation">
                      <tr>
                        <td class="padding px-sm-0" style="padding-top:0;padding-right:10px;padding-bottom:0;padding-left:10px;">
                          <table class="content" style="border-spacing:0;width:100%;font-size:18px;text-align:center;" role="presentation">
                            <tr>
  
                              <!--[if (gte mso 9)|(IE)]>
                                <td style="padding-top:20px;"> </td> 
                              <![endif]-->
  
                              <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                                <p style="font-weight: bold;font-size: 18px;line-height: 24px;">Get a quote online by submitting your inventory list. You only pay for the space you use.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  
                    <!--[if (gte mso 9)|(IE)]>
                      </td><td width="165" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="border-spacing:0;color:#3d3d3d;width:100%;max-width:165px;display:inline-block;vertical-align:bottom;" role="presentation">
                      <tr>
                        <td class="padding px-600-0" style="padding-top:0;padding-right:10px;padding-bottom:0px;padding-left:10px;">
                          <table class="content" style="border-spacing:0;color:#3d3d3d;width:100%;font-size:16px;text-align:center;" role="presentation">
                            <tr>
                              <td style="padding-top:0;padding-right:0;padding-bottom:15px;padding-left:0;width: 165px;">
  
                                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center">
                                      <table border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tr>
              
                                          <td align="center" style="border-radius:4px;" bgcolor="#2cbc8c">
                                            <a href="https://doughertybrothersmoving.com/get-a-quote-online/" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #ffffff;background-color: #2cbc8c;border:1px solid #2cbc8c;border-radius:4px;padding:10px 20px;display: inline-block;">Get a Quote
                                            </a>
                                          </td>
              
                                        </tr>
                                      </table>
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
  
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  <!-- END TWO COLUMNS TEXT & BUTTON -->
  
  <!-- START FOOTER -->
          <tr>
            <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;background-color: #585858;">
              <table width="100%" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                <tr>
                  <td class="three-columns" style="padding-top:20px;padding-right:0;padding-bottom:15px;padding-left:0;text-align:center;font-size:0;">
  
                    <!--[if (gte mso 9)|(IE)]>
                      <table width="100%" style="border-spacing:0;color:#3d3d3d;" role="presentation">
                      <tr>
                      <td width="240" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="border-spacing:0;color:#3d3d3d;width:100%;max-width:240px;display:inline-block;vertical-align:top;" role="presentation">
                      <tr>
                        <td width="240" class="padding px-sm-0" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <table class="content" style="border-spacing:0;color:#3d3d3d;width:100%;font-size:15px;text-align:center;" role="presentation">
                            <tr>
                              <td class="padding content" style="padding-top:10px;padding-right:0;padding-bottom:8px;padding-left:0;width:100%;text-align:center;">
                                <a href="https://doughertybrothersmoving.com/"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/DBM-Email-Logo-White.png" alt="footer logo" width="160" style="border-width:0;width: 160px;"></a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-top:5px;padding-right:0;padding-bottom:5px;padding-left:0;width:100%;text-align:center;">
                                <a href="https://www.facebook.com/DoughertyBrothersMoving/?view_public_for=101369074847164"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-facebook.png" alt="facebook" width="28" style="border-width:0;padding-right:1px;max-width:28px;"></a>
                                <a href="mailto:${process.env.CURR_USER}@doughertybrothersmoving.com"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-email.png" alt="twitter" width="28" style="border-width:0;padding-right:1px;max-width:28px;"></a>
                                <a href="https://www.youtube.com/channel/UCuglZ8-DHovM5S3Uyiyi2_A"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-youtube.png" alt="youtube" width="28" style="border-width:0;padding-right:1px;max-width:28px;"></a>
                                <a href="https://www.instagram.com/doughertybrothersmoving/"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-instagram.png" alt="linkedin" width="28" style="border-width:0;padding-right:1px;max-width:28px;"></a>
                                <a href="tel:${process.env.USER_PHONE}"><img src="https://doughertybrothersmoving.com/wp-content/uploads/2022/08/white-phone.png" alt="instagram" width="28" style="border-width:0;padding-right:1px;max-width:28px;"></a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-top:5px;padding-right:0;padding-bottom:5px;padding-left:0;">
                                <p style="font-size:15px;color:#ffffff;">Dougherty Brothers Moving</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!--[if (gte mso 9)|(IE)]>
                      </td><td width="180" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
                    
                    <table class="column" style="border-spacing:0;width:100%;max-width:180px;display:inline-block;vertical-align:top;" role="presentation">
                      <tr>
                        <td width="180" class="padding px-sm-0" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <table class="content" style="border-spacing:0;width:100%;font-size:15px;text-align:center;" role="presentation">
                            <tr>
                              <td>
                                <p style="font-size:16px;color:#ffffff;font-weight: bold;padding-bottom: 4px;">Full-Service Moves</p>
                                <p style="font-size:15px;color:#ffffff;padding-bottom: 4px;">Taxes and Fuel Included</p>
                                <p style="font-size:15px;color:#ffffff;padding-bottom: 4px;">Free Storage Available</p>
                                <p style="font-size:15px;line-height:20px;color:#ffffff;"><a href="tel:1-${process.env.USER_PHONE}" style="color: #ffffff;text-decoration: none;">1-${process.env.USER_PHONE}</a></p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  
                    <!--[if (gte mso 9)|(IE)]>
                      </td><td width="180" valign="top" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                    <![endif]-->
  
                    <table class="column" style="border-spacing:0;color:#3d3d3d;width:100%;max-width:180px;display:inline-block;vertical-align:top;" role="presentation">
                      <tr>
                        <td width="180" class="padding px-600-0" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                          <table class="content" style="border-spacing:0;color:#3d3d3d;width:100%;font-size:15px;text-align:center;" role="presentation">
                            <tr>
                              <td style="padding-top:0;padding-right:10px;padding-bottom:0;padding-left:10px;">
                                <p style="font-size:16px;color:#ffffff;font-weight: bold;padding-bottom: 4px;">Have Questions?</p>
                                <p style="font-size:15px;color:#ffffff;padding-bottom: 4px;"><a href="https://doughertybrothersmoving.com/contact/" target="_blank" style="text-decoration: none;color: #ffffff;">Contact Us</a></p>
                                <p style="font-size:15px;color:#ffffff;padding-bottom: 4px;"><a href="https://doughertybrothersmoving.com" target="_blank" style="text-decoration: none;color: #ffffff;">Visit Our Website</a></p>
                                <p style="font-size:15px;color:#ffffff;padding-bottom: 4px;"><a href="https://doughertybrothersmoving.com/discounts/" target="_blank" style="text-decoration:none;color: #ffffff;">View Discounts</a></p>
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
  
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  <!-- END FOOTER -->				
  <!-- START SOCKET -->
          <tr>
            <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
              <table width="100%" style="border-spacing:0;background-color:#585858;" role="presentation">
                <tr>
                  <td class="padding content" style="background-color:#585858;padding-top:10px;padding-right:0;padding-bottom:13px;padding-left:0;width:100%;text-align:center;font-size: 16px;color: #ffffff;width:600px;border-top: 2px solid #C4C7C9;">
                    <p style="font-size:16px;line-height:22px;padding-top: 2px;padding-bottom: 2px;"><a href="https://doughertybrothersmoving.com/" target="_blank" style="text-decoration: none;color: #ffffff;">&copy; DoughertyBrothersMoving.com</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  <!-- END SOCKET -->
  
  
        </table>
  
        <!--[if (gte mso 9)|(IE)]>
          </td>
          </tr>
          </table>
        <![endif]-->
  
      </div>

      <img src="https://goodnoodle.xyz/viewed-email?name=${name}&email=${email}&sentEmail=${selectedEmail}" alt="" width="0" height="0" style="width:2px;max-height:0;overflow:hidden;">

    </center>
  </body>
  </html>
  `;
}


module.exports = getHTML;