<<<<<<<< HEAD:dist/script/page-books.de41db73.js
"use strict";(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[8111],{5023:function(e,i,o){o.r(i),o.d(i,{default:function(){return r}});var a='<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="simple-memory-iconfont simple-memory-icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="simple-memory-iconfont simple-memory-icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>',t=o(6952),s=o(7992);function r(e){(0,s.default)(e),(()=>{if(e.__config.bookList.length){let i=$("#cnblogs_post_body"),o="";$.each(e.__config.bookList,(i=>{let t=e.__config.bookList[i];t.title&&(o+="<h1>"+t.title+"</h1>"),o+='<div class="book-cards">',$.each(t.books,(i=>{let s=a,r=t.books[i],n="";void 0!==r.score&&r.score>0?(n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingquanxing"></i>'.repeat(parseInt(r.score)),r.score>parseInt(r.score)&&(n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingbanxing"></i>'),n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingxiantiao"></i>'.repeat(parseInt(5-r.score))):n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingxiantiao"></i>'.repeat(5);let l="";void 0!==r.formerName&&r.formerName&&(l+='<span title="'+r.formerName+'">原　名：'+r.formerName+"</span><br>"),void 0!==r.author&&r.author&&(l+='<span title="'+r.author+'">作　者：'+r.author+"</span><br>"),void 0!==r.translator&&r.translator&&(l+='<span title="'+r.translator+'">译　者：'+r.translator+"</span><br>"),void 0!==r.press&&r.press&&(l+='<span title="'+r.press+'">出版社：'+r.press+"</span><br>"),void 0!==r.year&&r.year&&(l+='<span title="'+r.year+'">出版年：'+r.year+"</span>");let c=void 0!==r.readDate?r.readDate:"",m=c?"initial;":"none",p=void 0!==r.readPercentage?r.readPercentage:"",d=p?"initial;":"none";s=e.__tools.batchTempReplacement(s,[["cover",void 0!==r.cover?r.cover:""],["name",void 0!==r.name?r.name:""],["readDate",c],["readDateStyle",m],["readPercentage",p],["readPercentageStyle",d],["scoreHtml",n],["infoHtml",l]]),o+=s})),o+="</div>"}));let t=$(".articleSuffix-flg");t.length?t.before(o):i.append(o)}})(),(0,t.A)(e)}}}]);
========
"use strict";(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[8111],{9530:function(e,i,o){o.r(i),o.d(i,{default:function(){return r}});var a='<div class="book-card"> <div class="content-wrapper"> <img src="##cover##" alt="" class="book-card-img"> <div class="card-content"> <div class="book-name" title="##name##">##name##</div> <div class="rate"> <fieldset class="rating book-rate"> ##scoreHtml## </fieldset> <span class="book-voters card-vote"> ##infoHtml## </span> </div> </div> </div> <div class="book-by"> <i class="simple-memory-iconfont simple-memory-icon-book" title="阅读时间" style="display:##readDateStyle##"></i> ##readDate## <i class="simple-memory-iconfont simple-memory-icon-schedule" title="阅读进度" style="display:##readPercentageStyle##"></i> ##readPercentage## </div> </div>',t=o(3870),s=o(7035);function r(e){(0,s.default)(e),(()=>{if(e.__config.bookList.length){let i=$("#cnblogs_post_body"),o="";$.each(e.__config.bookList,(i=>{let t=e.__config.bookList[i];t.title&&(o+="<h1>"+t.title+"</h1>"),o+='<div class="book-cards">',$.each(t.books,(i=>{let s=a,r=t.books[i],n="";void 0!==r.score&&r.score>0?(n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingquanxing"></i>'.repeat(parseInt(r.score)),r.score>parseInt(r.score)&&(n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingbanxing"></i>'),n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingxiantiao"></i>'.repeat(parseInt(5-r.score))):n+='<i class="simple-memory-iconfont simple-memory-icon-pingjixingxiantiao"></i>'.repeat(5);let l="";void 0!==r.formerName&&r.formerName&&(l+='<span title="'+r.formerName+'">原　名：'+r.formerName+"</span><br>"),void 0!==r.author&&r.author&&(l+='<span title="'+r.author+'">作　者：'+r.author+"</span><br>"),void 0!==r.translator&&r.translator&&(l+='<span title="'+r.translator+'">译　者：'+r.translator+"</span><br>"),void 0!==r.press&&r.press&&(l+='<span title="'+r.press+'">出版社：'+r.press+"</span><br>"),void 0!==r.year&&r.year&&(l+='<span title="'+r.year+'">出版年：'+r.year+"</span>");let c=void 0!==r.readDate?r.readDate:"",m=c?"initial;":"none",p=void 0!==r.readPercentage?r.readPercentage:"",d=p?"initial;":"none";s=e.__tools.batchTempReplacement(s,[["cover",void 0!==r.cover?r.cover:""],["name",void 0!==r.name?r.name:""],["readDate",c],["readDateStyle",m],["readPercentage",p],["readPercentageStyle",d],["scoreHtml",n],["infoHtml",l]]),o+=s})),o+="</div>"}));let t=$(".articleSuffix-flg");t.length?t.before(o):i.append(o)}})(),(0,t.A)(e)}}}]);
>>>>>>>> origin/v2:dist/script/page-books.fa98b6c1.js
