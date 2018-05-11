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
