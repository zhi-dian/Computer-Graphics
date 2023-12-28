let s = '';
let button = name => s += '<button'
		        + ' onClick = \'window.location.href="' + name + '.html"\''
                        + ' style = "width:22px"'
		        + '>'
		        + name
		        + '</button>';

let names = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0 ; i < names.length ; i++)
   button(names.charAt(i));

buttons.innerHTML += '<table width=300><tr><td>' + s + '</table>';
