window.addEventListener('load', () => {
  const profile = document.querySelector('#profile');
  const shareLinks = document.querySelector('#share-links');
  const footer = document.querySelector('#footer');
  const shareButton = document.querySelector('#share');
  const iconShare = document.querySelector('#icon-share');

  shareButton.addEventListener('click', () => {
    if (profile.style.display == 'none') {
      profile.style.display = 'flex';
      shareLinks.style.display = 'none';
      footer.style.background = '';
      iconShare.style.color = 'hsl(217, 19%, 35%)';
      shareButton.style.background = '';
    } else {
      profile.style.display = 'none';
      shareLinks.style.display = 'flex';
      footer.style.background = 'hsl(217, 19%, 35%)';
      iconShare.style.color = '#FFF';
      shareButton.style.background = 'hsl(212, 23%, 69%)';
    }
  });
});
