// i/p = s = 'abcabcbb';
//o/p= 3

function longestSubstring(s){
  
    let n = s.length;
    let maxlength= 0;
   

for (let i =0;i<n ;i++){
    let length=0;
    const k = new Set();
    for (let j = i;j<n;j++){
        
        if(!k.has(s[j])){
            k.add(s[j]);
            length++;
            maxlength = Math.max(maxlength,length);
        } else {
            break;
        }
    }
}
console.log(maxlength) ;
return maxlength;

}

let s = 'abcabcbbccc'
longestSubstring(s);
