function playgame(){
    const genreQuiz = new Map([
      ["What music genre features fast-paced beats and rapping?", ["Hip-hop","Pop", "Rock", "Country"]],
      ["What genre of music is often associated with cowboys and features acoustic guitars?", ["Country","Hip-hop", "Jazz", "Reggae"]],
      ["What genre of music is characterized by its upbeat tempo and catchy melodies?", ["Pop","Blues", "Classical", "R&B"]],
      ["What genre of music originated in the 1950s and is known for its energetic dance rhythms?", ["Rock 'n' roll","Soul", "Folk", "Reggae"]],
      ["What genre of music combines elements of reggae and hip-hop and originated in the 1990s?", ["Dancehall","Country", "Jazz", "Blues"]]
    ]);
    const musicianQuiz = new Map([
      ["Who is the lead vocalist of the band Coldplay?", ["Chris Martin","Adele", "Bruce Springsteen", "Freddie Mercury"]],
      ["Which British singer is known for hits like 'Someone Like You' and 'Rolling in the Deep'?", ["Adele","Madonna", "Taylor Swift", "Ed Sheeran"]],
      ["Who is the pop icon known for songs like 'Like a Prayer' and 'Material Girl'?", ["Madonna","Beyoncé", "Rihanna", "Katy Perry"]],
      ["Which musician is often referred to as 'The Boss' and is known for songs like 'Born in the USA'?", ["Bruce Springsteen","Elvis Presley", "Bob Dylan", "Mick Jagger"]],
      ["Who is the lead singer of the band Queen?", ["Freddie Mercury","Michael Jackson", "Elton John", "David Bowie"]]
    ]);
    const instrumentQuiz = new Map([
      ["Which instrument is played by blowing air through a series of keys and is commonly used in orchestras?", ["Clarinet","Drums", "Guitar", "Piano"]],
      ["Which percussion instrument is played by striking it with sticks or mallets?", ["Drums","Flute", "Trumpet", "Violin"]],
      ["Which instrument is played by plucking its strings and is commonly used in flamenco music?", ["Spanish guitar","Accordion", "Harp", "Saxophone"]],
      ["Which instrument is a small keyboard played with the hands and often used in electronic music?", ["Synthesizer","Trombone", "Cello", "Flute"]],
      ["Which instrument is a member of the brass family and is often used in marching bands?", ["Trombone","Clarinet", "Violin", "Piano"]]
    ]);


    const questions = [genreQuiz,musicianQuiz,instrumentQuiz]
    let points = 0;
    let badge;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const chosen_quiz = questions[randomNumber];


    for(let i=0;i<5;i++){

      const Question = Array.from(chosen_quiz.keys())[i];
      let Answer = chosen_quiz.get(Question);

      let randomAnswer = Math.floor(Math.random() * 4);
      [Answer[0],Answer[randomNumber]] = [Answer[randomNumber],Answer[0]]

      const input = prompt(Question+`\n1.${Answer[0]}\n2.${Answer[1]}\n3.${Answer[2]}\n4.${Answer[3]}`);

      if(input==null){
        break;
      }

      if(Answer[randomAnswer] == Answer[input-1]){
        console.log("Correct Answer");
        points+=2;
      }else{
        console.log("Wrong Answer");
        points-=1;
      }
    }
    console.log(points);

    if(points>7){
      badge='Gold'
      document.getElementById("badge").style.display="block";
      document.getElementById("badge").style.backgroundColor="#FFD700";
      document.getElementById("badge").innerHTML="Gold";
      document.getElementById("points").style.display="block";
      document.getElementById("points").innerHTML=`Points : ${points}`;
      showPopup(`\"Congratulation! You have earned ${points} points with a ${badge} badge\"<br> please claim the points in your next purchase`);
    }else if(points>5){
      badge='Silver'
      document.getElementById("badge").style.display="block";
      document.getElementById("badge").style.backgroundColor="#C0C0C0";
      document.getElementById("badge").innerHTML="Silver";
      document.getElementById("points").style.display="block";
      document.getElementById("points").innerHTML=`Points : ${points}`;
      showPopup(`\"Congratulation! You have earned ${points} points with a ${badge} badge\"<br> please claim the points in your next purchase`);
    }else if(points>3){
      badge='Bronze'
      document.getElementById("badge").style.display="block";
      document.getElementById("badge").style.backgroundColor="#CD7F32";
      document.getElementById("badge").innerHTML="Bronze";
      document.getElementById("points").style.display="block";
      document.getElementById("points").innerHTML=`Points : ${points}`;
      showPopup(`\"Congratulation! You have earned ${points} points with a ${badge} badge\"<br> please claim the points in your next purchase`);
    }else{
      badge='No'
      document.getElementById("badge").style.display="block";
      document.getElementById("badge").style.backgroundColor="#000";
      document.getElementById("badge").innerHTML="None";
      document.getElementById("points").style.display="block";
      document.getElementById("points").innerHTML=`Points : ${points}`;
      showPopup(`\"Sorry! You have earned ${points} points with a ${badge} badge\"<br> Better luck next time`);
    }
  }

  // Get references to the popup elements
const popupBox = document.getElementById('popupBox');
const message = document.getElementById("popUpMsg");
const overlay = document.getElementById('overlay');

// Function to show the popup
function showPopup(sentence) {
  message.innerHTML = sentence;
  popupBox.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
  popupBox.style.display = 'none';
  overlay.style.display = 'none';
}