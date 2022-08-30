(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"",effect:"fadeIn",threshold:"-50"})});
window.addEventListener('load', function () {
    (function (_0x6093x1) {
        var _0x6093x2 = {
            items: {},
            container: null,
            totalPages: 1,
            perPage: 3,
            currentPage: 0,
            createNavigation: function () {
                this.totalPages = Math.ceil(this.items.length / this.perPage);
                _0x6093x1('.pagination', this.container.parent()).remove();
                var _0x6093x3 = _0x6093x1('<div class="pagination cdp"></div>').append('<a class="nav prev disabled" data-next="false">«</a>');
                for (var _0x6093x4 = 0; _0x6093x4 < this.totalPages; _0x6093x4++) {
                    var _0x6093x5 = 'page';
                    if (!_0x6093x4) {
                        _0x6093x5 = 'page current'
                    };
                    var _0x6093x6 = '<a class="cdp_i ' + _0x6093x5 + '" data-page="' + (_0x6093x4 + 1) + '">' + (_0x6093x4 + 1) + '</a>';
                    _0x6093x3.append(_0x6093x6)
                };
                _0x6093x3.append('<a class="nav next" data-next="true">»</a>');
                this.container.after(_0x6093x3);
                var _0x6093x7 = this;
                _0x6093x1('body').off('click', '.nav');
                this.navigator = _0x6093x1('body').on('click', '.nav', function () {
                    var _0x6093x8 = _0x6093x1(this);
                    _0x6093x7.navigate(_0x6093x8.data('next'))
                });
                _0x6093x1('body').off('click', '.page');
                this.pageNavigator = _0x6093x1('body').on('click', '.page', function () {
                    var _0x6093x8 = _0x6093x1(this);
                    _0x6093x7.goToPage(_0x6093x8.data('page'))
                })
            },
            navigate: function (_0x6093x9) {
                if (isNaN(_0x6093x9) || _0x6093x9 === undefined) {
                    _0x6093x9 = true
                };
                _0x6093x1('.pagination .nav').removeClass('disabled');
                if (_0x6093x9) {
                    this.currentPage++;
                    if (this.currentPage > (this.totalPages - 1)) {
                        this.currentPage = (this.totalPages - 1)
                    };
                    if (this.currentPage == (this.totalPages - 1)) {
                        _0x6093x1('.pagination .nav.next').addClass('disabled')
                    }
                } else {
                    this.currentPage--;
                    if (this.currentPage < 0) {
                        this.currentPage = 0
                    };
                    if (this.currentPage == 0) {
                        _0x6093x1('.pagination .nav.prev').addClass('disabled')
                    }
                };
                this.showItems()
            },
            updateNavigation: function () {
                var _0x6093xa = _0x6093x1('.pagination .page');
                _0x6093xa.removeClass('current');
                _0x6093x1('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass('current')
            },
            goToPage: function (_0x6093xb) {
                this.currentPage = _0x6093xb - 1;
                _0x6093x1('.pagination .nav').removeClass('disabled');
                if (this.currentPage == (this.totalPages - 1)) {
                    _0x6093x1('.pagination .nav.next').addClass('disabled')
                };
                if (this.currentPage == 0) {
                    _0x6093x1('.pagination .nav.prev').addClass('disabled')
                };
                this.showItems()
            },
            showItems: function () {
                this.items.hide();
                var _0x6093xc = this.perPage * this.currentPage;
                this.items.slice(_0x6093xc, _0x6093xc + this.perPage).show();
                this.updateNavigation()
            },
            init: function (_0x6093xd, _0x6093xe, _0x6093xf) {
                this.container = _0x6093xd;
                this.currentPage = 0;
                this.totalPages = 1;
                this.perPage = _0x6093xf;
                this.items = _0x6093xe;
                this.createNavigation();
                this.showItems()
            }
        };
        _0x6093x1.fn.pagify = function (_0x6093xf, _0x6093x10) {
            var _0x6093x8 = _0x6093x1(this);
            var _0x6093xe = _0x6093x1(_0x6093x10, _0x6093x8);
            if (isNaN(_0x6093xf) || _0x6093xf === undefined) {
                _0x6093xf = 3
            };
            if (_0x6093xe.length <= _0x6093xf) {
                return true
            };
            _0x6093x2.init(_0x6093x8, _0x6093xe, _0x6093xf)
        }
    })(jQuery);
    $('#Update').pagify(10, 'div.bookItem') //change post impressions on a page
})
if("undefined"!=typeof jQuery&&document.getElementById("search_settings"))if("true"!=live_search_settings.visible&&"false"!=live_search_settings.visible)alert("Bạn phải cài đặt giá trị true hoặc false");else if("true"==live_search_settings.visible){var typingTimer;function live_search(e){clearTimeout(typingTimer);var s=$(this),t=s.parent().parent(),i=t.find(".bg_sl"),r=t.find(".results");function a(){typingTimer=setTimeout(function(){var e=s.val(),t=e.replace(/ /gi,"+");if(i.length)var a=i.val();""!=e?(s.parent().find(".bg_su").addClass("searching"),$.ajax({type:"GET",url:live_search_settings.homepageUrl+"/feeds/posts/default",data:{alt:"json","max-results":0},dataType:"jsonp",success:function(e){var i,n,l=e.feed.openSearch$totalResults.$t;if(l%150==0)var c=l/150-1;else c=Math.floor(l/150);i=jQuery,n=i({}),i.ajaxQueue=function(e){function s(s){i.ajax(e).done(t.resolve).fail(t.reject).then(s,s)}var t=i.Deferred(),r=t.promise();return n.queue(s),r.abort=function(a){var l=n.queue(),c=i.inArray(s,l);return c>-1&&l.splice(c,1),t.rejectWith(e.context||e,[r,a,""]),r},r};for(var d=0;d<=c;d++)$.ajaxQueue({type:"GET",url:live_search_settings.homepageUrl+"/feeds/posts/default",data:{q:t,alt:"json","start-index":150*d+1,"max-results":150},dataType:"jsonp",success:function(e){if(s.parent().parent().find(".bg_co,.bg_re").removeClass("hidden"),s.parent().parent().find(".results").empty(),e.feed.entry)for(var t=0;t<e.feed.entry.length;t++){for(var i=e.feed.entry[t],n=t+1,l="",c=0;c<i.link.length;c++)if("alternate"==i.link[c].rel){var d=i.link[c].href;break}if("media$thumbnail"in i)var f=i.media$thumbnail.url.replace("s72-c","s50-c");else{var g=i.content.$t,o=g.indexOf("<img"),u=g.indexOf('src="',o),h=g.indexOf('"',u+5),v=g.substr(u+5,h-u-5);f=-1!=o&&-1!=u&&-1!=h&&""!=v?v:live_search_settings.thumbUrl}var _=i.title.$t;if("category"in i)for(var p="",m=0;m<i.category.length;m++){p+=i.category[m].term;var b=i.category[0].term;function y(){l="<li data-index="+n+'><a class="bg_fo" href='+d+' title="'+_+'"><div class="searching_img"><img alt="'+_+'" src='+f+'></div><div class="searching_title">'+_+'</div><div class="searching_cate">'+b+"</div></a></li>"}if(a&&""!=a)-1!=p.indexOf(a)&&y();else if(""!=live_search_settings.filter){var x=p.indexOf(live_search_settings.filter);p.slice(x,Number(x)+live_search_settings.filter.length)!=live_search_settings.filter&&y()}else y()}else r='<li class="no_results">'+live_search_settings.noresults+"</li>";$(r).append(l),$(".searching").removeClass("searching")}else $(".searching").removeClass("searching"),$(r).html('<li class="no_results">'+live_search_settings.noresults+"</li>")}})}})):(s.parent().parent().find(".bg_co,.bg_re").addClass("hidden"),$(".searching").removeClass("searching"))},500)}s.parent().find(".bg_re").removeClass("hidden"),a(),i.on("change",a)}$(".bg_se .bg_in").on("keyup",live_search),$(".bg_se .bg_re").click(function(){$(this).addClass("hidden"),$(".bg_co").addClass("hidden"),$(".bg_co>.bg_ra ul").empty()})}
$(function() {
  
  // Vars
  var modBtn  = $(&#39;#modBtn&#39;),
      modal   = $(&#39;#modal&#39;),
      close   = modal.find(&#39;.close&#39;),
      modContent = modal.find(&#39;.modal-content&#39;);
  
  // open modal when click on open modal button 
  modBtn.on(&#39;click&#39;, function() {
    modal.css(&#39;display&#39;, &#39;block&#39;);
    modContent.removeClass(&#39;modal-animated-out&#39;).addClass(&#39;modal-animated-in&#39;);
  });
  
  // close modal when click on close button or somewhere out the modal content 
  $(document).on(&#39;click&#39;, function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass(&#39;modal-animated-in&#39;).addClass(&#39;modal-animated-out&#39;).delay(300).queue(function(next) {
        modal.css(&#39;display&#39;, &#39;none&#39;);
        next();
      });
    }
  });
  
});
