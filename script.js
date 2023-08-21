const strings=["Modern","furniture","with","a","twist"];
let typed=new Typed(".heading",{
    strings:strings,
    typeSpeed:150,
    loop:false,
    onStringTyped: function(arrayPos, self) {
        if (arrayPos === strings.length - 1) {
          // Append the SVG after the last word is typed
          const span = document.createElement('span');
          span.appendChild(document.createTextNode(strings[arrayPos]));
          span.appendChild(document.getElementById('svg'));
          self.el.innerHTML = '';
          self.el.appendChild(span);
        }
      }
})