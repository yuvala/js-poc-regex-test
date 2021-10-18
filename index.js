// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1> \n`;

checkDomain('http://avi-online5.com?ss=555');
checkDomain('http://www.moshe.co.il');
checkDomain('https://moshe.com');
checkDomain('file://yuval.github.com');
checkDomain(window.location.href);
console.log('sss',window.location.hostname)
 
function checkDomain(url) {
 const protocol = url.match(/^(https?:\/\/)/g)
  appDiv.innerHTML += `<div>`;
  const domain = url.match(/^(https?:\/\/(www\.)?[\w-]+)\.\w{2,4}/g)
   

  appDiv.innerHTML += `<div class="cont">
    ${url}
    <div class="r">
      <span class="label">URL</span>: ${url}
    </div> 
    <div class="r">
      <span class="label">Protocol</span>: ${protocol}
      </div> 
      <div class="r">
      <span class="label">domain</span>: ${domain}
    </div> 
    <div class="r">
      <span class="label">domain</span>: ${domain}
    </div> 
    ${domain} ${url}</div>`;
 
}
