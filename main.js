function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nn-fSVLCA/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}       

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = 'Posso ouvir: '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão: '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById('cachorro.png') 
    img1 = document.getElementById('gato.png')
    img2 = document.getElementById('leao.png')
    img3 = document.getElementById('vaca.jpg')

    if (results[0].label == "Latido") {
      img.src = 'cachorro.png';      
    } else if (results[0].label == "Miado") {      
      img1.src = 'gato.png';      
    } else if (results[0].label == "Rugido") {      
      img2.src = 'leao.png';      
    }else if (results[0].label == "Mugido") {      
      img3.src = 'vaca.jpg';
    }
  }
}