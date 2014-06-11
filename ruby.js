/**
  说明：
  1. 只针对高级现代浏览器
  2. log = console.log
*/
;(function(window, undefined){

/**
  //--------   ruby   --------
  5.times { puts "Odelay!" }  # Prints 5 "Odelay!"s
 
  //--------javascript--------
  5..times(function(){
    log("Odelay!");
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
  //--------   ruby   --------
  95.upto(100) { |num| print num, " " } # Prints 95 96 97 98 99 100
  95.downto(90) { |num| print num, " " } # Prints 95 94 93 92 91 90
  
  //--------javascript--------
  95..upto(100, function(i){
   log(i)
  });
  95..downto(90, function(i){
   log(i)
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
  //--------   ruby   --------
  [1, 2, 3].each { |x| puts x * 10 }

  //--------javascript--------
  [1, 2, 3].each(function(x){
    log(x*10);
  });
*/
Array.prototype.each = Array.prototype.forEach;

/**
  //--------   ruby   --------
  x = [1, 2, 3]
  x.collect { |num| num ** 2 } # ==> [1, 4, 9] 
  x # ==> [1, 2, 3]
  
  x.collect! { |num| num ** 2 } # ==> [1, 4, 9]
  x # ==> [1, 4, 9]

  //--------javascript--------
  var x = [1,2,3];
  var y = x.collect(function(x){
    return Math.pow(x,2);
  });
  log(x) // [1, 2, 3]
  log(y) // [1, 4, 9]
  
  var z = x.collect("!", function(x){
    return Math.pow(x,2);
  });
  
  log(x) // [1, 4, 9]
  log(z) // [1, 4, 9]
*/
Array.prototype.collect = function(fn){
  var sign = '',
      result = [],
      that = this.concat();
  
  if(arguments.length == 2){
    sign = fn;
    fn = arguments[1];
    
    if( sign !== "!" ) throw Error("not '!'");
    
    result = this;
  }
  
  that.forEach(function(v, k, r){
    result[k] = fn(v);
  });
  
  return result;
};

/**
  //--------   ruby   --------
  [1, 2, 3].respond_to?(:push) # true
  [1, 2, 3].respond_to?(:to_sym) # false

  //--------javascript--------
  "abcdef".respond_to("?slice") // true
  [1, 2, 3].respond_to("?push") // true
  [1, 2, 3].respond_to("?hello") // false
*/
Object.prototype.respond_to = function(fnname){
  var name = fnname.slice(1); 
  return this[name] !== undefined;
}

})(this)











