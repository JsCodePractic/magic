var push = document.getElementById("Push").onclick = res;
function answer(){
    document.getElementById('answer' ).style.display = 'inline'
    document.getElementById('bgvideo' ).style.display = 'none'
    document.getElementById('ask' ).style.display = 'none'
    document.getElementById('knopka' ).style.display = 'none'
    document.getElementById('restart' ).style.display = 'inline'
    document.getElementById('divdiv').style.display = 'none'
    document.getElementById('answerBoll').style.display = 'inline'
    document.getElementById('Da' ).style.display = 'inline'
    document.getElementById('Net' ).style.display = 'Inline'
}
      
var end = document.getElementById("Net").onclick = finish;
function finish(){
    document.getElementById('Push' ).style.display = 'inline'
    document.getElementById('finish' ).style.display = 'inline'
    document.getElementById('answer' ).style.display = 'none'
    document.getElementById('bgvideo' ).style.display = 'none'
    document.getElementById('ask' ).style.display = 'none'
    document.getElementById('knopka' ).style.display = 'none'
    document.getElementById('restart' ).style.display = 'inline'
    document.getElementById('divdiv').style.display = 'none'
    document.getElementById('answerBoll').style.display = 'none'
    document.getElementById('Da' ).style.display = 'none'
    document.getElementById('Net' ).style.display = 'none'
    document.getElementById('restart' ).style.display = 'none'

}


var resApl = document.getElementById("Da").onclick = res;
function res(){
    
    document.getElementById('answer' ).style.display = 'none'
    document.getElementById('bgvideo' ).style.display = 'inline'
    document.getElementById('ask' ).style.display = 'inline'
    document.getElementById('knopka' ).style.display = 'inline'
    document.getElementById('restart' ).style.display = 'none'
    document.getElementById('divdiv').style.display = 'inline'
    document.getElementById('divdiv').innerHTML =" Задайте новый вопрос "
    document.getElementById('answerBoll' ).style.display = 'none'
    document.getElementById('finish' ).style.display = 'none'
    document.getElementById('Da' ).style.display = 'none'
    document.getElementById('Net' ).style.display = 'none'
    document.getElementById('Push' ).style.display = 'none'
}
    



document.getElementById('divdiv').innerHTML ="Ответ на какой вопрос ты хочешь узнать?..";

 var os = document.getElementById("knopka").onclick = all;
function all(){
  textask()
   answer()
  

    
}

 function textask (){
       
    do {
        if ((Math.random() * 26) <= 0) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value +"<br />" +"__________________" + "<br />" + ' Бесспорно' ;
            break;
        }
        if ((Math.random() * 26) <= 1) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />"+ document.getElementById("ask").value  +"<br />" +"__________________" + "<br />" + 'Предрешено';
            break;
        }
        if ((Math.random() * 26) <= 2) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value  +"<br />" +"__________________" + "<br />" +  'Никаких сомнений';
            break;
        }
        if ((Math.random() * 26) <= 3) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +  "<br />"+ document.getElementById("ask").value   + "<br />" +"__________________" + "<br />" +'Определённо да';
             break;
        }
        if ((Math.random() * 26) <= 4) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Я не уверен что это хорошая идея, но стоит попытаться';
            
            
            
            break;
        }if ((Math.random() * 26) <= 5) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  + 'Думаю это не лучшее решение сейчас!';
            
            break;
        }
        if ((Math.random() * 26) <= 6) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value   + "<br />" +"__________________" + "<br />" +'Стоит еще раз подумать над этим!';
            
            break;
        }
        if ((Math.random() * 26) <= 7) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +  "<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Бесспорно';
            
            break;
        }
        if ((Math.random() * 26) <= 8) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +  "<br />" + document.getElementById("ask").value   +"<br />" +"__________________" + "<br />" + 'Предрешено';
            
            break;
        }
        if ((Math.random() * 26) <= 9) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Никаких сомнений';
           
            break;
        }
        if ((Math.random() * 26) <= 10) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />" +"__________________" + "<br />" + 'Определённо да';
           
            break;
        }
        if ((Math.random() * 26) <= 11) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Можешь быть уверен в этом';
            
           break;
        }
        if ((Math.random() * 26) <= 12) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" +document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Мне кажется — «да»';
            
            break;
        }
        if ((Math.random() * 26) <= 13) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" +document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Вероятнее всего';
            
            break;
        }
        if ((Math.random() * 26) <= 14) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  +  'Хорошие перспективы';
          
            break;
        }
        if ((Math.random() * 26) <= 15) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Знаки говорят — «да»';
            
            break;
        }
        if ((Math.random() * 26) <= 16) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" +document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Пока не ясно, попробуй снова';
            
            break;
        }
        if ((Math.random() * 26) <= 17) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" +document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Спроси позже';
            
            break;
        }
        if ((Math.random() * 26) <= 18) {
            document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" +document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Лучше не рассказывать';
           
            break;
        }
            if ((Math.random() * 26) <= 19) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'Сейчас нельзя предсказать';
                
                break;
            }
            if ((Math.random() * 26) <= 20) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " + "<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + ' Сконцентрируйся и спроси опять';
                
                break;
            }
            if ((Math.random() * 26) <= 21) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Даже не думай';
                
                break;
            }
            if ((Math.random() * 26) <= 22) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  + 'Мой ответ — «нет»';
                
                break;
            }
            if ((Math.random() * 26) <= 23) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   + "<br />"+"__________________" + "<br />"  +'По моим данным — «нет»';
                
                break;
            }
            if (((Math.random() * 26) <= 24))  {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   +"<br />"+"__________________" + "<br />"  +  'Перспективы не очень хорошие';
                break;
            }
            if ((Math.random() * 26) <= 25) {
                document.getElementById('answerBoll').innerHTML ="И ответ на ваш вопрос: " +"<br />" + document.getElementById("ask").value   + "<br />" +"__________________" + "<br />" + 'Весьма сомнительно';
                 break;
            }
            
        
        
    } while ( true);
 }
