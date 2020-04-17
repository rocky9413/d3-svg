// html skeleton provider
const template = (title, initialState = {}, content = '') => {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="dist/client.js"></script>
                  `;
  } else {
    scripts = ` <script src="dist/bundle.js"> </script> `;
  }
  let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title> ${title} </title>
                  <link href="assets/style.css" rel="stylesheet">
                </head>
                <body>
                  <div class="content">
                     <div id="app" class="wrap-inner">
                        ${content}
                     </div>
                  </div>
  
                    ${scripts}
                </body>
                </html>
                `;

  return page;
};

export default template;
