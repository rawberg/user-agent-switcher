(function(b){var g=b("body");b.confirm=function(h,e){var a=b.extend(b.confirm.options,{confirm:function(a){if(a=e&&("string"===typeof e&&e||e.currentTarget&&e.currentTarget.attributes.href.value))h.post?(a=b('<form method="post" class="hide" action="'+a+'"></form>'),g.append(a),a.submit()):window.location=a},cancel:function(a){},button:null},h),f=b("div.fb-overlay");f[0]||(f=b('<div class="fb-overlay"></div>').appendTo(g));f.show();var c="";""!==a.title&&(c='<div class=modal-header><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+
a.title+"</h4></div>");c='<div class="confirm-modal modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content">'+c+'<div class="modal-body">'+a.text+'</div><div class="modal-footer"><button class="confirm gh-button primary" type="button" data-dismiss="modal">'+a.confirmButton+"</button>";a.cancelButton&&(c+='<button class="cancel gh-button default" type="button" data-dismiss="modal">'+a.cancelButton+"</div>");var d=b(c+"</div></div></div></div>");d.find(".confirm").click(function(){a.confirm(a.button);
f.hide();d.remove()});d.find(".cancel").click(function(){a.cancel(a.button);f.hide();d.remove()});g.append(d);c=d.outerHeight();d.show().css({top:0.5*(g.height()-c)})};b.confirm.options={text:"Are you sure?",title:"",confirmButton:"Yes",cancelButton:"Cancel",post:!1}})(jQuery);
