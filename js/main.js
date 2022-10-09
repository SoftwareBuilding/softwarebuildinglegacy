// var array = ["./assets/images/a1.jpg","./assets/images/a2.jpg","./assets/images/a3.jpg","./assets/images/a4.jpg","./assets/images/team 2.jpg","./assets/images/a6.jpg","./assets/images/a7.png"]
//  var array2 = ["./assets/images/company1.jpg","./assets/images/company2.jpg","./assets/images/company3.jpg"]
//  setInterval(() => {
//   // var random = Math.floor((Math.random() * 10) + 1);
//   var random = Math.floor((Math.random() * 6));
//   var random2 = Math.floor((Math.random() * 2));
//   document.getElementById("change1").src = array[random]
//   document.getElementById("change2").src = array2[random2]
//        console.log(random)
//  }, 9000);

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  // Floating button
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });

// Closes login modal
$(".close-login").click(function(e){
  $(".login").hide({})
})
// Closes signup modal
$(".close-signup").click(function(e){
  $(".signup").hide({})
})
// Closes contract modal
$(".close-contract").click(function(e){
  $(".contract").hide({})
})

function checked1(e){
  sessionStorage.setItem("check",$("#check1").val())
  $('#check2').prop('checked', false);
  $("#name-signup").val("Nome completo")
  $("#document-lable").text("CPF")
    $("#choose-span").text("Adicione sua foto perfil e seu currículo")
}
function checked2(e){
  sessionStorage.setItem("check",$("#check2").val())
  $('#check1').prop('checked', false);
  $("#name-signup").val("Nome da Empresa")
  $("#document-lable").text("CNPJ")
  $("#choose-span").text("Adicione a logo da sua empresa e seu currículo pessoal")
}
sessionStorage.setItem("check",$("#check1").val())
$('#check1').prop('checked', true);
$(".open-signup").click(function(e){
$(".signup").show({})
})
// Open contract modal
$(".open-contract").click(function(e){
  $(".contract").show({})
})
// Opens the login modal
$("#interrogation").click(function(e){
  if ($("#interrogation").text() == "Desenvolvedor?") {
    $(".login").show({})
  } else {
    
  }

})
// Closes login modal and then opens signup modal
$(".btn-open-signup").click(function(e){
  $(".login").hide({})
  $(".signup").show({})
})