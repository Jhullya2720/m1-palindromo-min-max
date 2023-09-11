function isPalindrome(str){
        str = str.replace(/\s/g, '').toLowerCase();
      
        let start = 0;
        let end = str.length - 1;
    
        for (let i = 0; i < str.length; i++) {
          if (str[start] !== str[end]) {
            return false;
          }
          start++;
          end--;
        }
      
        return true;
      }


function arrayMaxMin(arr){
    /* Seu código aqui */
}
isPalindrome()