window.addEventListener("load",function(){(function(b){var a={items:{},container:null,totalPages:1,perPage:3,currentPage:0,createNavigation:function(){this.totalPages=Math.ceil(this.items.length/this.perPage);b(".pagination",this.container.parent()).remove();var c=b('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false" href="#Previous" onclick="topFunction()">❮ Trước</a>');for(var d=0;d<this.totalPages;d++){var e="page";if(!d){e="page current"}var g='<span class="'+e+'" data-page="'+(d+1)+'" >Trang '+(d+1)+"</span>";c.append(g)}c.append('<a class="nav next" data-next="true" href="#Next" onclick="topFunction()">Sau ❯</a>');this.container.after(c);var f=this;b("body").off("click",".nav");this.navigator=b("body").on("click",".nav",function(){var h=b(this);f.navigate(h.data("next"))});b("body").off("click",".page");this.pageNavigator=b("body").on("click",".page",function(){var h=b(this);f.goToPage(h.data("page"))})},navigate:function(c){if(isNaN(c)||c===undefined){c=!0}b(".pagination .nav").removeClass("disabled");if(c){this.currentPage++;if(this.currentPage>(this.totalPages-1)){this.currentPage=(this.totalPages-1)}if(this.currentPage==(this.totalPages-1)){b(".pagination .nav.next").addClass("disabled")}}else{this.currentPage--;if(this.currentPage<0){this.currentPage=0}if(this.currentPage==0){b(".pagination .nav.prev").addClass("disabled")}}this.showItems()},updateNavigation:function(){var c=b(".pagination .page");c.removeClass("current");b('.pagination .page[data-page="'+(this.currentPage+1)+'"]').addClass("current")},goToPage:function(c){this.currentPage=c-1;b(".pagination .nav").removeClass("disabled");if(this.currentPage==(this.totalPages-1)){b(".pagination .nav.next").addClass("disabled")}if(this.currentPage==0){b(".pagination .nav.prev").addClass("disabled")}this.showItems()},showItems:function(){this.items.hide();var c=this.perPage*this.currentPage;this.items.slice(c,c+this.perPage).show();this.updateNavigation()},init:function(c,d,e){this.container=c;this.currentPage=0;this.totalPages=1;this.perPage=e;this.items=d;this.createNavigation();this.showItems()}};b.fn.pagify=function(e,d){var f=b(this);var c=b(d,f);if(isNaN(e)||e===undefined){e=3}if(c.length<=e){return !0}a.init(f,c,e)}})(jQuery);$("#Update").pagify(16,"div.bookItem")});
var timeString=function(t){if(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(t)){var e=t,i=e.substring(0,4),n=e.substring(5,7),r=e.substring(8,10),o=new Array;return o[1]="Jan",o[2]="Feb",o[3]="Mar",o[4]="Apr",o[5]="May",o[6]="Jun",o[7]="Jul",o[8]="Aug",o[9]="Sep",o[10]="Oct",o[11]="Nov",o[12]="Dec",r+" "+o[parseInt(n,10)]+" "+i}
return!1},imageString=function(t){var e=t.indexOf("<img"),i=t.indexOf('src="',e),n=t.indexOf('"',i+5),r=t.substr(i+5,n-i-5);return-1!=e&&-1!=i&&-1!=n&&""!=r?r:"https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png"},update={mainItemArr:new Array,subItemArr:new Array,compile:function(t){var e=t.feed.entry;if(!e)return!1;var i=document.getElementById("Update");if(!i)return!1;if(i.dataset.created="Dagruel",e.forEach(function({category:t,content:e,link:i,title:n,published:r,media$thumbnail:o}){var a=n.$t,s=t.map(function(t){return t.term}),u=i.find(function(t){if("alternate"===t.rel)return t}).href,c="function"==typeof timeAgo?timeAgo(new Date(r.$t)):timeString(r.$t),l=e.$t&&e.$t.length>0?e.$t:"Nothing",m=o?o.url.replace("s72","w175-h235"):imageString(l);s=s.filter(function(t){if("Project"!==t)return t}),update.mainItem.filter(function(t){s.join(", ").includes(t)&&update.mainItemArr.push({title:a,link:u,image:m,category:s})}),update.subItem.filter(function(t){s.join(", ").includes(t)&&update.subItemArr.push({titleSub:a,linkSub:u,publishedSub:c,categorySub:s})})}),update.mainItemArr.length>0){var n="";update.mainItemArr.forEach(function({title:t,link:e,image:i,category:r}){var o="";var lang="";var label=r.find(i=>"Hot, New".includes(i));if("Hot"==label){lang="<strong class='hot absolute r-5 t-3'></strong>"}else if("New"==label){lang="<strong class='new absolute r-5 t-3'></strong>"}else lang="";var typ="";var label2=r.find(i=>"Manga, Manhua, Manhwa, Light Novel".includes(i));if("Manga"==label2){typ="<span class='manga-post'>Manga</span>"}else if("Manhua"==label2){typ="<span class='manhua-post'>Manhua</span>"}else if("Manhwa"==label2){typ="<span class='manhwa-post'>Manhwa</span>"}else if("Light Novel"==label2){typ="<span class='lightnovel-post'>Light novel</span>"}else typ="";console.log(`${label} & ${lang}`);update.subItemArr.length>0&&update.subItemArr.forEach(function({titleSub:t,linkSub:e,publishedSub:i,categorySub:n}){var a=t;update.settingTitle.forEach(function({name:e,news:i}){a.includes(e)&&(a=i+" "+t.split(e)[1].replace(/[^0-9\.-]+/g,""))}),n.filter(function(n){r.join(", ").includes(n)&&(o+='<li class="char"><div class="chpName"><a href="'+e+'" title="'+t+'">'+a+'<span class="new-tag">new</span></a></div><time class="chpDate">'+i+"</time></li>")})}),n+='<div class="bookItem bb-1pxsf"><a href="'+e+'" title="'+t+'"><div class="snippet-thumbnail"><img class="lazyload" data-src="'+i+'"/>'+lang+typ+'</div></a><div class="data"><div class="tieude" style="padding: 10px 0px 10px 0px"><a class="oh fw-600" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical" href="'+e+'" title="'+t+'">'+t+'</a></div><ul class="subItem">'+o+"</ul></div></div></div>"}),i.innerHTML=n}},run:function(t,e){var i=document.createElement("script");i.src="/feeds/posts/default/-/"+t+"?orderby=published&alt=json-in-script&max-results="+e+"&callback=update.compile",document.body.appendChild(i)}};update.subItem=['Chapter'];update.settingTitle=[{name:'Chapter',news:'Chapter'},{name:'chap',news:'chap'}]