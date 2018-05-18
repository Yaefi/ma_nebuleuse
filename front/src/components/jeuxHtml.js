// intro splash
const jeuxHtml = `


<div id="galaxy">
  <div class="bg"></div>
  <div class="stars-back"></div>
  <div class="stars-middle"></div>
  <div class="stars-front"></div>
  <div class="bg center"></div>
</div>




<div class="container-fluid" >
  <div class="row">
    <div class="col-lg-4" style="height:70px; background-color:green"></div>
    <div class="col-lg-4">
      <img class="logolove" src="https://sylvainkosc.github.io/LOVE.png" alt="logo"/>
    </div>
    <div class="offset-lg-2 col-lg-1" style="height:10px; background-color:green"></div>
  </div>
  <div class="row">   
    <div class="offset-6 col-lg-2" style="height:30px; background-color:green"></div>   
  </div>
  <div class="row"><div class="col-lg-4" style="height:200px"></div></div>
  <div class="row">  
    <div class="col-lg-2" id="quiz">
      <div class='button' id='next'><a href='#'>Next</a></div>
      <div class='button' id='prev'><a href='#'>Prev</a></div>
      <div class='button' id='start'> <a href='#'>Start Over</a></div>
    </div>
    <div class="col-lg-3" style="height:50px; background-color:green"></div>
  </div>
  <div class="row">
    <div class="offset-lg-8 col-lg-2" style="height:20px; background-color:green"></div>
  </div>
</div>
`

module.exports = jeuxHtml
