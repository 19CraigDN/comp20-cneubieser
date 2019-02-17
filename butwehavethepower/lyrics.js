var vid = document.getElementById('butwehavethepower');

function dispLyrics()
{
  document.getElementById('lyrics').innerText = 'Come gather round, children,';
}

vid.ontimeupdate = dispLyrics;