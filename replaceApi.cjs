const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace fetch('/api/...
  content = content.replace(/fetch\('\/api/g, "fetch(import.meta.env.VITE_API_URL + '/api");
  
  // Replace `fetch(`/api/...
  content = content.replace(/fetch\(`\/api/g, "fetch(import.meta.env.VITE_API_URL + `/api");
  
  // Specific for Auth.jsx
  content = content.replace(/isLogin \? '\/api\/auth\/login' : '\/api\/auth\/register'/g, 
    "isLogin ? import.meta.env.VITE_API_URL + '/api/auth/login' : import.meta.env.VITE_API_URL + '/api/auth/register'");

  fs.writeFileSync(file, content);
});

console.log('Replaced API paths successfully.');
