var limitBookmark = 100;
var bookmark = (function(){
list = [];

//Structure Push to Object New Item
function Item(id,name,status,type,link,img){
  this.id = id;
  this.name = name;
    this.status = status;
  this.type = type;
    this.link = link;
  this.img = img;
}

//Event Saving to Local Storage
function setBookmark(){
  localStorage.setItem('bookmark', JSON.stringify(list));
}

function loadBookmark() {
    list = JSON.parse(localStorage.getItem('bookmark'));
}

if (localStorage.getItem("bookmark") != null) {
    loadBookmark();
}

obj = {};
//Add New Item Object to Array
obj.addItemTobookmark = function(id,name,status,type,link,img) {
    var item = new Item(id,name,status,type,link,img),
    itemList = list;
    if(itemList != null){
    same = itemList.find(item =>{return item.id == id;});
    if(list.length<limitBookmark){
     if(!same){
      list.push(item);
      setBookmark();
      }
     }
    }else{
      list.push(item);
      setBookmark();
    }
}

//Remove Bookmark    
obj.removeThisItem = function(id) {
    for(var item in list) {
      if(list[item].id === id) {
        list.splice(item, 1);
        break;
      }
    }
    setBookmark();
  }
  
  return obj;
})();

$('.bookmark').each(function(event) {
const getData = JSON.parse(localStorage.getItem('bookmark'));
for(var i in getData){
  if(getData[i].id == $(this).data('id')){
     $(this).html('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg> Đã theo dõi')
     $(this).addClass('bookmarked')
    }
}
  $(this).click(function(){
const list = JSON.parse(localStorage.getItem('bookmark'));
  //Retrieve Data From Post
    const id = $(this).data('id'),
    name = $('article.oh.a2 header h1.mb-6').text().replace('\n',''),
    link = location.protocol + '//' + location.hostname +  location.pathname,
    img = $('div.grid div.a1 figure img').attr('src'),
    status = $('aside.s1 div.y6x11p:nth-child(1) span.dt a').text().replace('\n',''),
    type = $('aside.s1 div.y6x11p:nth-child(2) span.dt a').text().replace('\n','');
    
  //Set To Function Bookmark
if(list == null){
  if(!$(this).hasClass('bookmarked')){
      bookmark.addItemTobookmark(id,name,status,type,link,img);
      $(this).addClass('bookmarked')
      $(this).html('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg> Đã theo dõi')
  }else{
    bookmark.removeThisItem(id);
    $(this).html('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg> Đã theo dõi')
    $(this).removeClass('bookmarked')
  }
}else{
  if(!$(this).hasClass('bookmarked')){
if(list.length<limitBookmark){
      bookmark.addItemTobookmark(id,name,status,type,link,img);
      $(this).addClass('bookmarked')
      $(this).html('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg> Đã theo dõi')
}
  }else{
    bookmark.removeThisItem(id);
    $(this).html('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"></path></svg> Theo dõi')
    $(this).removeClass('bookmarked')
  }
}
  })
});
