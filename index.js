const targetElement = document.getElementById('destination-elem-id');
const configuration = { outputFormat: 'side-by-side', rawTemplates: { 'generic-wrapper': '<div class="my-custom-wrapper"><h1>Welcome</h1>{{{ content }}}</div>' } };
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

console.log('diff2htmlUi: ', diff2htmlUi)

diff2htmlUi.draw();