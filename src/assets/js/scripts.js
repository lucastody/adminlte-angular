//receive calls from typescript code to update the layouts
var AdminLTE = (function() {
  return {
    init: function() {
      $(function() {
        $('body').layout('fix');
        $('body').layout('fixSidebar');
        $('.dropdown').boxWidget('toggle');
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
        //$('.notification-menu').toggle();
      });
    }
  }
})(AdminLTE||{});