//sw registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function() {
    console.log('Registration of sw ok!');
  }).catch(function() {
    console.log('Registration of sw not ok!');
  });
}