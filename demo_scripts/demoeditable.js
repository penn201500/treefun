var treeentry = document.getElementById("treeentry");
var options = document.getElementById("options");

function draw() {
  var tree = textToTree(treeentry.value);
  var diagramhere = document.getElementById("diagramhere");
  while (diagramhere.children.length > 0)
    diagramhere.removeChild(diagramhere.children[0]);

  treeToDiagram(tree, diagramhere, false, JSON.parse(options.value));
}

treeentry.addEventListener("input", draw);
options.addEventListener("input", draw);

// Allow tab.
treeentry.addEventListener("keydown",
    function (evt) {
      if (evt.keyCode != 9 && evt.which != 9)
        return;
      var selectionStart = this.selectionStart;
      this.value = this.value.substring(0, selectionStart) + "\t" +
          this.value.substring(this.selectionEnd);
      this.selectionEnd = selectionStart + 1;
      draw();
      evt.preventDefault();
    }
);

window.addEventListener("load", draw);