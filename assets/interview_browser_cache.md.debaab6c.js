import{_ as a,o as e,c as i,U as o}from"./chunks/framework.0f008bc5.js";const m=JSON.parse('{"title":"浏览器缓存相关面试题总结","description":"","frontmatter":{"author":"Kano"},"headers":[],"relativePath":"interview/browser/cache.md","filePath":"interview/browser/cache.md","lastUpdated":1690359404000}'),t={name:"interview/browser/cache.md"},l=o('<h1 id="浏览器缓存相关面试题总结" tabindex="-1">浏览器缓存相关面试题总结 <a class="header-anchor" href="#浏览器缓存相关面试题总结" aria-label="Permalink to &quot;浏览器缓存相关面试题总结&quot;">​</a></h1><p>浏览器缓存在浏览器这一块也算是一个常考的点了，他也会出现在一些项目优化的问题上，比如说访问网页时，会将网站上的图片和数据缓存下来，再次访问时就能直接加载出来。</p><h2 id="浏览器缓存过程" tabindex="-1">浏览器缓存过程 <a class="header-anchor" href="#浏览器缓存过程" aria-label="Permalink to &quot;浏览器缓存过程&quot;">​</a></h2><p>缓存命中机制流程（缓存过程）：</p><ol><li>发送请求，根据请求头的 Expires 和 cache-control（强缓存）判读是否命中（过期），如果命中则直接从缓存获取资源，否则进入下一步：</li><li>没有命中强缓存，则根据请求头的 last-modified 和 etag 判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步：</li><li>如果前两步都没有命中，则直接从服务端获取资源</li></ol><p><img src="https://pic3.zhimg.com/80/v2-28160195deb51a7ff988ce0e6fe47996_720w.webp" alt=""></p><h2 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h2><p>当我们访问 URL 时，强制从缓存中读取数据（前提是带强缓存标识，不然就是直接向服务器发送请求），不会向浏览器发送请求，会返回 <code>200</code> 状态码。</p><p>强缓存流程图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca00bff3081e4cfd993a8f252f4fa23a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>图中已经比较详细了，就不--详细解读了。</p><h2 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h2><p>取值包括一下：</p><ul><li><p>public：资源客户端和服务器都可以缓存。</p></li><li><p>privite：资源只有客户端可以缓存。</p></li><li><p>no-cache：客户端缓存资源，但是是否缓存需要经过协商缓存来验证。</p></li><li><p>no-store：不使用缓存。</p></li><li><p>max-age：缓存保质期。</p></li></ul><blockquote><p>需要注意的是，设置了 no-cache 之后，并不是说浏览器就不再缓存数据，只是浏览器在使用缓存数据时，需要先确认一下数据是否还跟服务器保持一致，也就是协商缓存。而 no-store 才表示不会被缓存，即不使用强制缓存，也不使用协商缓存</p></blockquote><h2 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h2><p>缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。在响应 http 请求时告诉浏览器在过期时间前，浏览器可以直接从浏览器缓存取数据，而无需再次请求。</p><blockquote><p>Expires 是 HTTP/1 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效</p></blockquote><h2 id="cache-control-与-expires-的区别" tabindex="-1">Cache-Control 与 Expires 的区别 <a class="header-anchor" href="#cache-control-与-expires-的区别" aria-label="Permalink to &quot;Cache-Control 与 Expires 的区别&quot;">​</a></h2><ul><li>Expires 设置是以分钟为单位的绝对过期时间，设置相对过期时间。Cache-Control 的 max-age 是指明以秒为单位的缓存时间。</li><li>优先级： Expires 优先级比 Cache-Control 低，同时设置的话， Cache-Control 生效。</li></ul><h2 id="如何在浏览器中判断强制缓存是否生效" tabindex="-1">如何在浏览器中判断强制缓存是否生效？ <a class="header-anchor" href="#如何在浏览器中判断强制缓存是否生效" aria-label="Permalink to &quot;如何在浏览器中判断强制缓存是否生效？&quot;">​</a></h2><p>关注 Chrome 网络请求的 Size，可能会出现三种情况：</p><ul><li>from disk cache(磁盘缓存)：不请求网络，资源在磁盘中，一般非脚本会存放在内存中，如 css 等。</li><li>from memory cache(内存缓存)：不请求网络，资源在内存中，一般脚本、字体、图片会存在内存中。</li><li>以及资源大小数值：从服务器下载最新资源。</li></ul><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><p>协商缓存就是在强缓存失效的后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识决定是否使用缓存的过程。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f26ab979fcd4df6906a2e9d5e28f56a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h2 id="last-modified-和-if-modified-since" tabindex="-1">Last-Modified 和 If-Modified-Since <a class="header-anchor" href="#last-modified-和-if-modified-since" aria-label="Permalink to &quot;Last-Modified 和 If-Modified-Since&quot;">​</a></h2><ul><li>Last-Modified 是服务器响应请求时，返回该资源文件在服务器最后被修改的时间。</li><li>If-Modified-Since 则是客户端再次发起该请求时，携带上次请求返回的 Last-Modified 值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。</li></ul><p>流程：服务器收到请求，发现请求头含有 If-Modified-Since 字段则会对比 If-Modified-Since 字段值与 Last-Modified （最后修改时间），若服务器资源 Last-Modified （最后修改时间）大于 If-Modified-Since 的字段值，则重新返回资源，状态码为 200，否则返回 304 代表资源无更新，使用缓存文件。</p><p>详细流程图可见<a href="#浏览器缓存过程">浏览器缓存机制</a></p><h2 id="etag-和-if-none-match" tabindex="-1">ETag 和 If-None-Match <a class="header-anchor" href="#etag-和-if-none-match" aria-label="Permalink to &quot;ETag 和 If-None-Match&quot;">​</a></h2><ul><li>Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)。</li><li>If-None-Match 是客户端再次发起该请求时，携带上次请求返回的唯一标识 Etag 值，通过此字段值告诉服务器该资源上次请求返回的唯一标识值。</li></ul><p>流程: 服务器收到请求，发现请求头含有 If-None-Match ，则会根据 If-None-Match 的值与该资源所在服务器的 Etag 值做对比，一致则返回状态码 304（代表资源无更新，使用缓存文件），不一致则重新返回新资源，状态码为 200。</p><p>详细流程图可见<a href="#浏览器缓存过程">浏览器缓存机制</a></p><h2 id="etag-和-last-modified-的区别" tabindex="-1">ETag 和 Last-Modified 的区别 <a class="header-anchor" href="#etag-和-last-modified-的区别" aria-label="Permalink to &quot;ETag 和 Last-Modified 的区别&quot;">​</a></h2><ul><li>精确度上：Last-Modified 的时间单位是秒，如果某个文件在 1 秒内改变了多次，那么他们的 Last-Modified 其实并没有体现出来修改，但是 Etag 每次都会改变确保了精度。</li><li>性能上：Last-Modified 只需要记录时间，而 Etag 需要服务器通过算法来计算出一个 hash 值。</li><li>优先级：服务器校验优先考虑 Etag。</li></ul><h2 id="强缓存和协商缓存的区别" tabindex="-1">强缓存和协商缓存的区别 <a class="header-anchor" href="#强缓存和协商缓存的区别" aria-label="Permalink to &quot;强缓存和协商缓存的区别&quot;">​</a></h2><ul><li>强缓存不会发送请求到服务器，资源更新了可能浏览器还不知道</li><li>协商缓存会发请求给服务器，通过字段，服务器能知道资源是否更新</li><li>大部分 web 浏览器默认开启协商缓存</li></ul><h2 id="普通刷新和强制刷新" tabindex="-1">普通刷新和强制刷新 <a class="header-anchor" href="#普通刷新和强制刷新" aria-label="Permalink to &quot;普通刷新和强制刷新&quot;">​</a></h2><ul><li>强制刷新，会直接从服务器获取最新资源，跳过强缓存和协商缓存。</li><li>普通刷新，跳过强缓存，但还是会检查协商缓存。</li></ul><blockquote><p>为避免有人不知道强缓存和普通缓存，可以打开任意网站的控制台，然后再网页刷新的按钮右键，即可。亦或者，通过键盘来强刷（Ctrl+F5）和普通刷新（F5）。</p></blockquote>',41),r=[l];function c(d,h,n,s,p,f){return e(),i("div",null,r)}const b=a(t,[["render",c]]);export{m as __pageData,b as default};
