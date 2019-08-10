

//Translate function
async function translate (text,lang){
  const key = 'trnsl.1.1.20190809T190304Z.e2847c7e39a1bd65.4540cb358a217b65136cfb4287772ae03d1e2cb6';
  const [t, l] = [text,lang];
  try{
    const result = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${t}&lang=${l}`);
    const data = await result.json();
    return data;
  }catch(error){
    console.log(error);
  }
}

//Show Translation
const showTranslation = () => {
  const tag = document.querySelector('#demo1');
  translate(tag.innerHTML,'zh').then(data => {
    tag.innerHTML = data.text[0];
  })
}

var loopAlternate = anime({
  targets: '#loopAlternate .pokemon',
  translateX: 250,
  loop: 10,
  direction: 'alternate'
});