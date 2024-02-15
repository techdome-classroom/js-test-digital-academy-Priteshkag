/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let
stack
= [];
   
let
mapping
= {
       
")":
"(",
       
"}":
"{",
       
"]":
"["
    };
   
const
stringLength
=
s.length;
   
for (let
i
=
0;
i
<
stringLength;
i++)
 {
       
let
char
=
s[i];
       
if (mapping[char])
 {
           
let
stackTop
=
stack.pop();
           
if (mapping[char]
!==
stackTop) {
               
return
false;
            }
        }
else {
           
stack.push(char);
        }
    }


   
return
stack.length
===
0;


    
};

module.exports = { isValid };


