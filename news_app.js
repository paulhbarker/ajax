// JavaScript Document
// NY TIMES API KEY: d62348a6efc4009d60b21c3372ff2605:18:70186294

var init = function(){
  var input = document.querySelector('#search');
  
  input.addEventListener('keypress', function(event){
    if( event.keyCode == 13 ) {
      var searchTerm = input.value.split(' ').join('+');
      articleSearch( searchTerm ); 
      this.blur();
    }
  }, false);
  
  input.addEventListener('focus', function(){
    this.value = "";
    var container = document.querySelector('.container');
    if( container != null ) {
      document.body.removeChild( container ); 
    }
  });

};
window.addEventListener('DOMContentLoaded', init, false);

function articleSearch( searchTerm ) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if( xmlHttp.readyState == 4 ) {
      if( xmlHttp.status == 200 ) {
          var response = JSON.parse( xmlHttp.responseText );
          console.log( response );
          
          constructResultSet( response );
          
      }
    }
  }

  xmlHttp.open("GET", "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&fq=document_type:(\"article\")&api-key=d62348a6efc4009d60b21c3372ff2605:18:70186294", true); 
  xmlHttp.send();
}

function constructResultSet( result ){
  var container = document.createElement('div');
  container.setAttribute('class','container');
  var length = result.response.docs.length;
  
  for (var i = 0; i < length; i++){
    var h2 = document.createElement('h2'),
        a = document.createElement('a'),
        node = document.createTextNode( result.response.docs[i].headline.main );
    a.setAttribute('href', result.response.docs[i].web_url );
    a.setAttribute('target','_blank');
    a.appendChild( node );
    h2.appendChild( a );
    
    var category = document.createElement('span');
    category.setAttribute('class','article-category');
    node = document.createTextNode( result.response.docs[i].section_name );
    category.appendChild( node );
    
    var date = document.createElement('span');
    var d = new Date(result.response.docs[i].pub_date);
    date.setAttribute('class','article-date');
    node = document.createTextNode( d.toLocaleDateString() );
    date.appendChild( node );
    
    var snippet = document.createElement('p');
    snippet.setAttribute('class','article-snippet');
    node = document.createTextNode( result.response.docs[i].snippet );
    snippet.appendChild( node );
    
    var hr = document.createElement('hr');
    
    
    container.appendChild( h2 );
    container.appendChild( category );
    container.appendChild( date );
    container.appendChild( snippet );
    container.appendChild( hr );
  }
  
  document.body.appendChild( container );
}

