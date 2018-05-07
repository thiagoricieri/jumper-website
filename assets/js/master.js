var api = "save.json";
var modals = ['idea', 'investor', 'innovator'];
var clickFun = function(modal){
  return function(e) {
    e.preventDefault();
    var al = $('#'+modal+'Modal .alert');
    al.removeClass('d-none');
    al.fadeIn();
    al.alert();
  }
};
var sendingState = function(btn) {
  $(btn).attr('disabled', true);
  $(btn).html('Enviando...');
};
var sentState = function(btn) {
  $(btn).attr('disabled', false);
  $(btn).html('Enviar');
};

var applyActions = function() {
  for(var i = 0; i<modals.length; i++) {
    var modal = modals[i];
    $('#'+modal+'Modal .btn').click(clickFun(modal));
  }
};

applyActions();
