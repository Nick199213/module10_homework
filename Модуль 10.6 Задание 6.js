const listNumber = [1, 2, 1, 2];
let check = true;
for (let index = 1; index <
listNumber.length; index++) {
      const element =
listNumber[index];
  if ( element != listNumber[0]) { check = false
                         break
                        }
  
}
    console.log(check)