import{_ as n,o as s,c as a,d as t}from"./app.1b85994b.js";var p="/note/images/css/first-letter.png",e="/note/images/css/shape-outside.png",c="/note/images/css/drop-shadow.png";const o={},l=t(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> background-image</h2><p>\u5F53background-image\u8DEF\u5F84\u5B58\u5728\u7A7A\u683C\uFF0C\u80CC\u666F\u56FE\u65E0\u6CD5\u5C55\u793A</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="first-letter-drop" tabindex="-1"><a class="header-anchor" href="#first-letter-drop" aria-hidden="true">#</a> First letter drop</h2><p>\u53EF\u4EE5\u4F7F\u7528<code>:first-letter</code>\u9009\u62E9\u5668\uFF0C\u7ED9\u7B2C\u4E00\u4E2A\u6587\u5B57\uFF08\u5B57\u6BCD\u3001\u6C49\u5B57\uFF09\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p:first-letter</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #8A2BE2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span:first-letter</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #3329b3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u8BE5\u9009\u62E9\u5668\u53EA\u5BF9<strong>\u5757\u7EA7\u5143\u7D20</strong>\u6709\u6548\uFF08\u8BBE\u7F6E<code>display: block;</code>\u4E5F\u6CA1\u6709\u6548\u679C\uFF09\u3002</p><p><img src="`+p+`" alt="first-letter"></p><h2 id="image-text-wrapping" tabindex="-1"><a class="header-anchor" href="#image-text-wrapping" aria-hidden="true">#</a> Image text wrapping</h2><p><code>shape-outside</code>\u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u975E\u77E9\u5F62\u7684\u533A\u57DF\uFF0C\u5B9A\u4E49\u6587\u672C\u6D41\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left,
.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 12ex<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">-webkit-clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>100% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>100% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">-webkit-clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>100% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>100% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    Sometimes a web page&#39;s text content appears to be
    funneling your attention towards a spot on the page
    to drive you to follow a particular link. Sometimes
    you don&#39;t notice.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="shape-outside"></p><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> :where()</h2><p>\u4F7F\u7528<code>:where</code>\u4F2A\u7C7B\u7B80\u5316CSS\uFF0C<code>:where</code>\u4F2A\u7C7B\u51FD\u6570\u63A5\u6536\u9009\u62E9\u5668\u5217\u8868\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4E3A\u53C2\u6570\u4E2D\u7684\u5143\u7D20\u8BBE\u7F6E\u6837\u5F0F\u3002 \u4F8B\u5982\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.page div, 
.page .title,
.page #article</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u4F7F\u7528where */</span>
<span class="token selector">.page :where(div, .title, #article)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shadow-for-transparent-images" tabindex="-1"><a class="header-anchor" href="#shadow-for-transparent-images" aria-hidden="true">#</a> Shadow for transparent images</h2><p>\u6211\u4EEC\u90FD\u5C1D\u8BD5\u8FC7\u4F7F\u7528box-shadow\u7ED9\u56FE\u7247\u8FB9\u6846\u6DFB\u52A0\u9634\u5F71\uFF0C\u90A3\u4F60\u662F\u5426\u60F3\u8FC7\u8981\u7ED9\u900F\u660E\u56FE\u7247\u4E2D\u7684\u5185\u5BB9\u6DFB\u52A0\u9634\u5F71\u5462\uFF0Cdrop-shadow\u5C31\u53EF\u4EE5\u5B9E\u73B0\uFF0Cdrop-shadow\u5C5E\u6027\u9075\u5FAA\u56FE\u50CF\u7684alpha\u901A\u9053\uFF0C\u6240\u4EE5\u9634\u5F71\u57FA\u4E8E\u56FE\u50CF\u5185\u90E8\u7684\u5F62\u72B6\uFF0C\u800C\u4E0D\u662F\u5728\u5916\u90E8\u663E\u793A\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box-shadow</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px 4px 8px #3723a1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.drop-shadow</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>2px 4px 8px #3723a1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="drop-shadow"></p><h2 id="typing-effect-for-text" tabindex="-1"><a class="header-anchor" href="#typing-effect-for-text" aria-hidden="true">#</a> Typing effect for text</h2><p>\u4F7F\u7528<code>@keyframes</code>\u5B9E\u73B0\u6253\u5B57\u673A\u6548\u679C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.typing-effect</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 22ch<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 3px solid<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> typing 2s <span class="token function">steps</span><span class="token punctuation">(</span>22<span class="token punctuation">)</span><span class="token punctuation">,</span> effect .5s step-end infinite alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> typing</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> effect</span> <span class="token punctuation">{</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>typing-effect<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Typing effect for text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-a-custom-cursor" tabindex="-1"><a class="header-anchor" href="#set-a-custom-cursor" aria-hidden="true">#</a> Set a custom cursor</h2><p>\u81EA\u5B9A\u4E49\u5149\u6807</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.image-cursor</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://cdn-images-1.medium.com/fit/c/80/80/1*AmBIV4haXTWPO--EhE0Q1A.jpeg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.emoji-cursor</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39;  width=&#39;48&#39; height=&#39;48&#39; viewport=&#39;0 0 100 100&#39; style=&#39;fill:black;font-size:24px;&#39;&gt;&lt;text y=&#39;50%&#39;&gt;\u{1F680}&lt;/text&gt;&lt;/svg&gt;&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checklist-in-pure-css" tabindex="-1"><a class="header-anchor" href="#checklist-in-pure-css" aria-hidden="true">#</a> Checklist in pure CSS</h2><p>\u4F7F\u7528CSS\u5B9E\u73B0checklist\uFF0C\u4F7F\u7528<code>:checked</code>\u4F2A\u7C7B\u5B9E\u73B0checklist</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.checklist</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #043b3e<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid #03a2f4<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 4px solid #f3f3f3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist label</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 40px 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist input[type=&quot;checkbox&quot;]</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist i</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist input[type=&quot;checkbox&quot;]:checked ~ i</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist span</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist span:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.5s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist input[type=&quot;checkbox&quot;]:checked ~ span:before</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.5s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.checklist input[type=&quot;checkbox&quot;]:checked ~ span</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #154e6b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checklist<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Item Checklist with CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Item #1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Item #2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Item #3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),i=[l];function u(r,k){return s(),a("div",null,i)}var v=n(o,[["render",u],["__file","css.html.vue"]]);export{v as default};
