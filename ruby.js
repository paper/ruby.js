;(function(window, undefined){

/**
  //----ruby----
  5.times { puts "Odelay!" }  # Prints 5 "Odelay!"s
 
  //----javascript----
  5..times(function(){
    console.log("Odelay!");
  });
*/
Number.prototype.times = function(fn){
  var i = 0,
      l = +this;
  
  for(; i < l; i++){
    fn(i);
  }
};


/**
  //----ruby----
  95.upto(100) { |num| print num, " " } # Prints 95 96 97 98 99 100
  95.downto(90) { |num| print num, " " } # Prints 95 94 93 92 91 90
  
  //----javascript----
  95..upto(100, function(i){
   console.log(i)
  });
  95..downto(90, function(i){
   console.log(i)
  });
*/
Number.prototype.upto = function(end, fn){
  var start = +this;
  
  while( start <= end ){
    fn(start);
    start+=1;
  }
};


Number.prototype.downto = function(end, fn){
  var start = +this;
  
  while( start >= end ){
    fn(start);
    start-=1;
  }
};




/**
  //----ruby----
  [1, 2, 3].each { |x| puts x * 10 }

  //----javascript----
  [1, 2, 3].each(function(x){
    console.log(x*10);
  });
*/

if( Array.prototype.forEach ){
  Array.prototype.each = Array.prototype.forEach;
}else{
  Array.prototype.each = function(fn, scope){
    var i = 0,
        l = this.length;
    
    for(;i<l;i++){
      fn.call(scope, this[i], i, this);
    }
  };
};


/**
  //----ruby----
  [1, 2, 3].respond_to?(:push) # true
  [1, 2, 3].respond_to?(:to_sym) # false

  //----javascript----
  "abcdef".respond_to("?slice") // true
  [1, 2, 3].respond_to("?push") // true
  [1, 2, 3].respond_to("?hello") // false
*/
Object.prototype.respond_to = function(fnname){
  var name = fnname.slice(1); 
  return this[name] !== undefined;
}

})(this)











