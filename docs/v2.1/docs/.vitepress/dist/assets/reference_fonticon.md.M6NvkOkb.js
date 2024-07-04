import{_ as s,c as n,o as e,a3 as i,j as a,a as t}from"./chunks/framework.C16dpgHr.js";const E=JSON.parse('{"title":"字体图标库","description":"","frontmatter":{},"headers":[],"relativePath":"reference/fonticon.md","filePath":"reference/fonticon.md","lastUpdated":1692862703000}'),l={name:"reference/fonticon.md"},o=i(`<h1 id="字体图标库" tabindex="-1">字体图标库 <a class="header-anchor" href="#字体图标库" aria-label="Permalink to &quot;字体图标库&quot;">​</a></h1><p>本主题使用的图标库为阿里巴巴矢量图标库 <a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">iconfont</a>。</p><h2 id="拓展图标" tabindex="-1">拓展图标 <a class="header-anchor" href="#拓展图标" aria-label="Permalink to &quot;拓展图标&quot;">​</a></h2><p>大家可以在 iconfont 生成自己的图标库，生成方法参考<a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.13&amp;helptype=about" target="_blank" rel="noreferrer">官方教程</a>。</p><p>获取样式地址后按照下面示例方式添加到配置中</p><div class="danger custom-block"><p class="custom-block-title">注意</p><ol><li>v2.1.3 版本后内置图标库的 class 前缀使用 &quot;simple-memory-&quot; 防止硬编码的图标被异常覆盖。在配置项中的可配置图标：同名自定义图标优先级大于内置图标</li><li>拓展图标库不要修改 FontClass/ Symbol 前缀，使用默认的 &quot;icon-&quot;</li></ol></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.cnblogsConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fontIconExtend: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//at.alicdn.com/t/font_xxxxxxxxx.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用教程" tabindex="-1">使用教程 <a class="header-anchor" href="#使用教程" aria-label="Permalink to &quot;使用教程&quot;">​</a></h3><p>比如说在侧边栏配置中，这时候就可以愉快的使用自己拓展图标的图标进行配置了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.cnblogsConfig = {</span></span>
<span class="line"><span>    sidebar: { // 列表数据 [&#39;导航名称&#39;, &#39;链接&#39;, &#39;icon&#39;]</span></span>
<span class="line"><span>        navList: [</span></span>
<span class="line"><span>            [&#39;我的博客1&#39;, &#39;https://www.cnblogs.com/bndong/&#39;, &#39;icon-xxx&#39;],</span></span>
<span class="line"><span>            [&#39;我的博客2&#39;, &#39;https://www.cnblogs.com/bndong/&#39;, &#39;icon-xxx&#39;],</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="内置图标" tabindex="-1">内置图标 <a class="header-anchor" href="#内置图标" aria-label="Permalink to &quot;内置图标&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>内置图标分为基本图标和文章图标，两者加载的文件和位置均不同；</p></div><h3 id="基本图标" tabindex="-1">基本图标 <a class="header-anchor" href="#基本图标" aria-label="Permalink to &quot;基本图标&quot;">​</a></h3><p>用于主题基本图标的配置，默认以CSS方式进行加载，主题初始化时就会加载；</p><p><a href="https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v2/iconfontDemo/demo_index.html" target="_blank" rel="noreferrer">预览页面&gt;&gt;</a></p>`,15),r=a("iframe",{height:"850",width:"100%",src:"https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v2/iconfontDemo/demo_index.html",frameborder:"0",allowfullscreen:""},null,-1),p=a("h3",{id:"文章标题图标",tabindex:"-1"},[t("文章标题图标 "),a("a",{class:"header-anchor",href:"#文章标题图标","aria-label":'Permalink to "文章标题图标"'},"​")],-1),c=a("p",null,"用于文章标题前的修饰，以 JS 方式进行加载，开启相应的配置后只会在文章页进行加载；",-1),h=a("p",null,[a("a",{href:"https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v2/iconfontDemo/posts_index.html",target:"_blank",rel:"noreferrer"},"预览页面>>")],-1),d=a("iframe",{height:"850",width:"100%",src:"https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v2/iconfontDemo/posts_index.html",frameborder:"0",allowfullscreen:""},null,-1),b=[o,r,p,c,h,d];function m(u,g,f,_,k,x){return e(),n("div",null,b)}const w=s(l,[["render",m]]);export{E as __pageData,w as default};
