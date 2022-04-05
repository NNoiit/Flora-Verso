function alteracorAlmbUm(){

  //mudança das cores do texto central e navbar
  let div = document.getElementsByClassName("text-center");
  div[0].style.backgroundColor = 'rgb(255, 75, 136)';

  div = document.getElementsByClassName("navbar");
  div[0].style.backgroundColor = 'rgb(255, 75, 136)';

  //Mudança de estatos disblay div video-album-um
  div = document.getElementsByClassName("video-album-um");
  div[0].style.display = 'block';

  div = document.getElementsByClassName("video-album-dois");
  div[0].style.display = 'none';

  div = document.getElementsByClassName("video-album-tres");
  div[0].style.display = 'none';

  //mudança na cor do texto central
  div = document.getElementsByClassName("text-center");
  div[0].style.color = 'black';
}

function alteracorAlmbDois(){

  //mudança das cores do texto central e navbar
  let div = document.getElementsByClassName("text-center");
    div[0].style.backgroundColor = 'rgb(17, 71, 77)';

    div = document.getElementsByClassName("navbar");
    div[0].style.backgroundColor = 'rgb(17, 71, 77)';

    //Mudança de estatos disblay div video-album-dois
    div = document.getElementsByClassName("video-album-dois");
    div[0].style.display = 'block';

    div = document.getElementsByClassName("video-album-um");
    div[0].style.display = 'none';

    div = document.getElementsByClassName("video-album-tres");
    div[0].style.display = 'none';

    //mudança na cor do texto central
    div = document.getElementsByClassName("text-center");
    div[0].style.color = 'aliceblue';
}

function alteracorAlmbTres(){

  //mudança das cores do texto central e navbar
  let div = document.getElementsByClassName("text-center");
  div[0].style.backgroundColor = 'rgb(79, 157, 230)';
  
  let bar = document.getElementsByClassName("navbar");
  bar[0].style.backgroundColor = 'rgb(79, 157, 230)';

  //Mudança de estatos disblay div video-album-tres
  div = document.getElementsByClassName("video-album-tres");
  div[0].style.display = 'block';

  div = document.getElementsByClassName("video-album-um");
    div[0].style.display = 'none';

    div = document.getElementsByClassName("video-album-dois");
    div[0].style.display = 'none';

    //mudança na cor do texto central
    div = document.getElementsByClassName("text-center");
    div[0].style.color = 'black';
} 