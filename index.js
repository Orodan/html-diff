const targetElement = document.getElementById('destination-elem-id');
const configuration = { };
const diffString = `diff --git a/sample.js b/sample.js
index 0000001..0ddf2ba
--- a/sample.js
+++ b/sample.js
@@ -1 +1 @@
-console.log("Hello World!")
+console.log("Hello from Diff2Html!")`;

const diff2htmlUi = new Diff2HtmlUI(targetElement, diffString, configuration);
// or
// const diff2htmlUi = new Diff2HtmlUI(targetElement, diffJson, configuration);

diff2htmlUi.draw();