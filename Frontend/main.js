function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  document.getElementById('boutonlogin').addEventListener('click', function () {
    window.location.href = 'login.html';
  });
  
  document.getElementById('boutonregister').addEventListener('click', function () {
    window.location.href = 'register.html';
  });
  
  document.getElementById('gameButton').addEventListener('click', function () {
    window.location.href = 'game.html';
});
  