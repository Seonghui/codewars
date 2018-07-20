function songDecoder(song){
  var arr = [];
  //WUB을 기준으로 문자열 자르기
  song = song.split("WUB");
  for (var i in song) {
    //만약 공백이 아니면
    if (song[i] != "") {
      //arr에 push
      arr.push(song[i]);
    }
  }
  //arr를 " " 넣어서 합치기
  return arr.join(" ");
}