var vid = document.getElementById('butwehavethepower');
var lyrics = ['Lisa: Come gather round, children,', "It's high time ye learned",
              "'Bout a hero named Homer","And a devil named Burns.","We'll march 'till we drop ",
              "The girls and the fellas.","We'll fight 'till the death ",
              "Or else fold like umbrellas.","So we'll march day and night",
              "By the big cooling tower.","They have the plant","But we have the power.",
              'Lenny: Now do "Classical Gas!"',"Lisa: So we'll march day and night","Lisa and Homer: By the big cooling tower.",
              "Everyone: They have the plant","But we have the power.","So we'll march day and night","By the big cooling tower.",
              "They have the plant","But we have the power."];
var times = [5.85, 7.95, 10.6, 12.8, 16.9, 18.85, 21.4, 23.15, 38.1, 40.5, 42.95, 44.85, 52.6, 72.6, 74.9, 77.5, 79.65,
             82.2, 83.8, 87.1, 89.0, 120];
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