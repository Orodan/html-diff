const targetElement = document.getElementById('destination-elem-id');
// Interpredted html in content variable ?
const customGenericLineTemplate = `
    <tr>
        <td class="{{lineClass}} {{type}}">
        {{{lineNumber}}}
        </td>
        <td class="{{type}}">
            <div class="{{contentClass}} {{type}}">
                <span class="d2h-code-line-ctn">{{{ content }}}</span>
            </div>
        </td>
    </tr>
`
const configuration = { outputFormat: 'side-by-side', rawTemplates: { 
    'generic-wrapper': '<div class="my-custom-wrapper"><h1>Welcome</h1>{{{ content }}}</div>',
    'generic-line': customGenericLineTemplate
} };
const diffString = `diff --git a/sample.html b/sample.html
index 0000001..0ddf2ba
--- a/sample.html
+++ b/sample.html
@@ -1 +1 @@
-<h1>Hello World!</h1>
+<h1>Hello from Diff2Html!</h1>`;

const diff2htmlUi = new Diff2HtmlUI(targetElement, diffString, configuration);

console.log('diff2htmlUi: ', diff2htmlUi)

diff2htmlUi.draw();