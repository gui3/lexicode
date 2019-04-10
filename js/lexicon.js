
function _loadList (min,max) { //big max = 10ffff
  console.log("filling _lexicon...")
  let code10 = parseInt(min,16),
    max10 = parseInt(max,16),
    list = []
  while ((code10 ++) < max10) {
    let code16 = code10.toString(16).rJust(4,"0");
    list.push(code16)
  }
  console.log("... _lexicon full")
  return list
};

function _charDiv (code16) {
  lex = {
    h:"&#x" + code16,
    c:"\\0" + code16,
    j:"0x" + code16,
    u:"\\u" + code16
  };
  div = "<div class=\"charBtn\" onclick=\"alert(\'"+
    code16+"\')\">"+"<span class=\"char\">"+
    lex["h"]+"</span> "+code16+"</div> ";
  return div
}
