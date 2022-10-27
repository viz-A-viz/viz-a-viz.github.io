function changeTheme() {
  const lightTheme = '/css/light.css';
  const darkTheme = '/css/dark.css';
  const currentTheme = document.getElementById('theme');
  const switchButton = document.getElementById('switchButton');

  if (currentTheme.getAttribute('href') === lightTheme) {
    currentTheme.setAttribute('href', darkTheme);

    switchButton.animate([
      { right: '30px' }, { right: '0px' },
    ], { duration: 400, easing: 'ease' });
    switchButton.style.right = '0px';
  } else {
    currentTheme.setAttribute('href', lightTheme);

    switchButton.animate([
      { right: '0px' }, { right: '30px' },
    ], { duration: 400, easing: 'ease' });
    switchButton.style.right = '30px';
  }
}
