var vid = document.getElementById('butwehavethepower');
var lyrics = ['Lisa: Come gather round, children,', "It's high time ye learned",
              "'Bout a hero named Homer","And a devil named Burns.","We'll march 'till we drop ",
              "The girls and the fellas.","We'll fight 'till the death ",
              "Or else fold like umbrellas.","So we'll march day and night",
              "By the big cooling tower.","They have the plant","But we have the power.",
              'Lenny: Now do "Classical Gas!"',"So we'll march day and night","By the big cooling tower.",
              "They have the plant","But we have the power."];
var times = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85];
var count = 0;

function dispLyrics()
{
  if(vid.currentTime > times[count] && vid.currentTime <= times[count + 1])
  {
    document.getElementById('lyrics').innerText = lyrics[count];
    count++;
  }
}

vid.ontimeupdate = dispLyrics;