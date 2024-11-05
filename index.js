// require module
var connect = require('connect')
 
// create app
var app = connect()

function homePage(req,res,next)
{
  res.setHeader('Content-Type','text/plain');
  res.end('Homepage');
}
function projectsPage(req,res,next)
{
  res.setHeader('Content-Type','text/plain');
  res.end('Projects');
}
function aboutPage(req,res,next)
{
  res.setHeader('Content-Type','text/plain');
  res.end('About');
}
function contactPage(req,res,next)
{
  res.setHeader('Content-Type','text/plain');
  res.end('contact');
}
app.use('/home',homePage);
app.use('/projects',projectsPage);
app.use('/about',aboutPage);
app.use('/contact',contactPage);
app.listen(3000);
console.log('Server is running on host')