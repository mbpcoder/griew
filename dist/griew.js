"use strict";var Griew=function(){var e=function(){var e={},t="fa",n=function(t,n){e[t]=n},a=function(e){t=e||t},r=function(){return t},i=function(e){return t===e},o=function(t,n){var a=t.split(".");if(void 0==e[n])return!1;for(var r=e[n],i=0;i<a.length;i++){if(!(a[i]in r))return!1;r=r[a[i]]}return r},s=function(e,t){var n=o(e,t);return n||e},u=function(e,n){return n=n||t,e=e||"",s(e,n)};this.setLang=n,this.setLocale=a,this.getLocale=r,this.isLocale=i,this.trans=u,n("en",{filter:{string:{operators:{IsEqualTo:"Is Equal To",IsNotEqualTo:"Is Not Equal To",StartWith:"Start With",DoesNotContains:"Does Not Contains",EndsWith:"Ends With",Contains:"Contains"},operand:"Expression",accept:"Accept",clear:"Clear"},number:{operators:{IsEqualTo:"Is Equal To",IsNotEqualTo:"Is Not Equal To",Between:"Between",IsGreaterThanOrEqualTo:"Is Greater Than Or Equal To",IsGreaterThan:"Is Greater Than",IsLessThanOrEqualTo:"Is Less Than Or Equal To",IsLessThan:"Is Less Than"},operand:"Number",operand1:"From",operand2:"To",accept:"Accept",clear:"Clear"},datetime:{operators:{IsEqualTo:"Is Equal To",IsNotEqualTo:"Is Not Equal To",Between:"Between",IsAfterThanOrEqualTo:"Is After Than Or Equal To",IsAfterThan:"Is After Than",IsBeforeThanOrEqualTo:"Is Before Than Or Equal To",IsBeforeThan:"Is Before Than"},operand:{year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"},accept:"Accept",clear:"Clear"},enum:{accept:"Accept",clear:"Clear"}},order:{ascending:"Ascending",descending:"Descending","clear sort":"Clear Sort"}}),n("fa",{filter:{string:{operators:{IsEqualTo:"برابر باشد با",IsNotEqualTo:"برابر نباشد با",StartWith:"شروع شود با",DoesNotContains:"شامل نشود",EndsWith:"خاتمه یابد با",Contains:"شامل شود"},operand:"عبارت",accept:"اعمال فیلتر",clear:"حذف فیلتر"},number:{operators:{IsEqualTo:"مساوی باشد با",IsNotEqualTo:"مساوی نباشد با",Between:"بین",IsGreaterThanOrEqualTo:"بزرگ‌تر یا مساوی ",IsGreaterThan:"بزرگ‌تر از",IsLessThanOrEqualTo:"کوچک‌تر یا مساوی",IsLessThan:"کوچک‌تر از"},operand:"عدد",operand1:"از",operand2:"تا",accept:"اعمال فیلتر",clear:"حذف فیلتر"},datetime:{operators:{IsEqualTo:"برابر باشد با",IsNotEqualTo:"برابر نباشد با",Between:"بین",IsAfterThanOrEqualTo:"پس از یا برابر باشد با",IsAfterThan:"پس از",IsBeforeThanOrEqualTo:"قبل از یا برابر باشد با",IsBeforeThan:"قبل از"},operand:{year:"سال",month:"ماه",day:"روز",hour:"ساعت",minute:"دقیقه"},accept:"اعمال فیلتر",clear:"حذف فیلتر"},enum:{accept:"اعمال فیلتر",clear:"حذف فیلتر"}},order:{ascending:"ترتیب صعودی",descending:"ترتیب نزولی","clear sort":"حذف ترتیب"}})},t=function(){var e=[],t={},n=[],a=[],r={},i=function(t){var n=o(t.name);n>=0?e[n]=t:e.push(t)},o=function(t){for(var n in e)if(e[n].name==t)return n;return-1},s=function(){return e},u=function(e){t=e},l=function(){return t},d=function(e){var t=h(e.name);t>=0?n[t]=e:n.push(e)},h=function(e){for(var t in n)if(n[t].name==e)return t;return-1},v=function(){return n},b=function(e){var t=w(e.name);t>=0?a[t]=e:a.push(e)},w=function(e){for(var t in a)if(a[t].name==e)return t;return-1},C=function(){return a},y=function(e){r=e},$=function(){return[s(),v(),C(),l(),r]},P=function(){return{columns:s(),filters:v(),orders:C(),pagination:l(),extra:r}},T=function(){return JSON.stringify(P())},x=function(){for(var e=c.columns().toArray(),t=0;t<e.length;t++)i(e[t]);u(g.getPage());for(var n=p.toArray(),t=0;t<n.length;t++)d(n[t]);for(var a=f.toArray(),t=0;t<a.length;t++)b(a[t]);return m.exists("extra")&&y(m.get("extra")),{toArray:$,toObject:P,toJson:T}};this.collect=x},n=function(){var e=[],t=[],n={},a=[],r=[],i={},o=function(t){e=t},s=function(){return e},u=function(e){var n=d(e.name);n>=0?t[n]=e:t.push(e)},l=function(e){var n=d(e);return n>=0?t[n]:null},d=function(e){for(var n in t)if(t[n].name==e)return n;return-1},c=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)u(e[t])},p=function(){return t},f=function(e){n=e},g=function(){return n},m=function(e){var t=v(e.name);t>=0?a[t]=e:a.push(e)},h=function(e){var t=v(e);return t>=0?a[t]:null},v=function(e){for(var t in a)if(a[t].name==e)return t;return-1},b=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)m(e[t])},w=function(){return a},C=function(e){var t=$(e.name);t>=0?r[t]=e:r.push(e)},y=function(e){var t=$(e);return t>=0?r[t]:null},$=function(e){for(var t in r)if(r[t].name==e)return t;return-1},P=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)C(e[t])},T=function(){return r},x=function(e){i=e},I=function(){return i};this.setData=o,this.getData=s,this.addColumn=u,this.getColumn=l,this.addColumns=c,this.getColumns=p,this.setPagination=f,this.getPagination=g,this.addFilter=m,this.getFilter=h,this.addFilters=b,this.getFilters=w,this.addOrder=C,this.getOrder=y,this.addOrders=P,this.getOrders=T,this.setExtra=x,this.getExtra=I},a=function(){var e={},t="",a=function(e){t=e},r=function(){return t},i=function(t){return void 0!==e[t]},o=function(t,n){e[t]=n},s=function(t){return i(t)?new e[t](m):null},u=function(){return s(t)},l=function(e,t,a){var r=u();return"function"==typeof t?a=t:t&&(r=s(t)),null===r?r:r.run(e,new n,a)};this.set=o,this.get=s,this.setDefault=a,this.getDefault=r,this.run=l,o("json",function(e){var t,n,a,r=function(e,t){return e},i=function(e,t){return e},o=function(e,t){return t.total=e.length,t.perPage=t.perPage||15,t.currentPage=t.currentPage||1,t.from=(t.currentPage-1)*t.perPage+1,t.count=e.length-t.from>=t.perPage?t.perPage:e.length-t.from+1,t.lastPage=Math.ceil(t.total/t.perPage),e.slice(t.from-1,t.from+t.count-1)},s=function(e,t){return t},u=function(e,t){var u,l=e.toObject();return console.log(e.toArray()),console.log(l),u=r(n,l.filters),u=i(u,l.orders),u=o(u,l.pagination),t.setData(u),t.addFilters(l.filters),t.addOrders(l.orders),t.setPagination(l.pagination),t.setExtra(l.extra),a?t.addColumns(s(0,l.columns)):t.addColumns(l.columns),t};this.run=u,function(){if(a=!1,e.exists("autoGenerateColumns")&&(a=e.get("autoGenerateColumns")),e.exists("dataSource")&&(t=e.get("dataSource")),"string"==typeof t&&(n=JSON.parse(t)),!Array.isArray(n))throw"Data most be array"}()}),o("ajax",function(e){var t,n,a,r=function(e,t){return t},i=function(e,i,o){var s=e.toJson();$.post(t,{griew:s,_token:a},function(e){e=JSON.parse(e),i.setData(e.data),i.addFilters(e.filters),i.addOrders(e.orders),i.setPagination(e.pagination),i.setExtra(e.extra),n?i.addColumns(r(0,e.columns)):i.addColumns(e.columns),o(i)})};this.run=i,function(){n=!1,e.exists("autoGenerateColumns")&&(n=e.get("autoGenerateColumns")),e.exists("dataSource")&&(t=e.get("dataSource")),e.exists("token")&&(a=e.get("token"))}()})},r=function(){var e=function(){var e="tbody",t="<tr>{columns}</tr>",n=function(e,t){return t},a=function(e){return e},r=function(e,r,i,o){var s="",u="",l=0,d="";for(t=n(r,t,i);l<e.length;l++)d=e[l],s+=o(d,r,i,l+1);return u=C("columns",s,t),u=$(u).addClass("griew-data-row")[0].outerHTML,u=a(u)};Object.defineProperty(this,"beforeRender",{set:function(e){"function"==typeof e&&(n=e)}}),Object.defineProperty(this,"afterRender",{set:function(e){"function"==typeof e&&(a=e)}}),Object.defineProperty(this,"container",{set:function(t){e=t},get:function(){return e}}),Object.defineProperty(this,"template",{set:function(e){t=e},get:function(){return t}}),this.render=function(e,t,n,a){return r(e,t,n,a)}},t=function(){var e=function(e){},t=function(e){},n={},a=function(e,t){return(t?".":"")+"griew-column-"+e},r=function(e,t,a,r,i,o,s,u,l,d,c,p){n[e]={name:e,caption:t,schema:a,type:r,order:i||1,visibility:void 0===o||o,template:l||"<td>{"+e+"}</td>",sortable:s,filterable:u,options:d,beforeRender:c||function(e,t,n,a,r){return n},afterRender:p||function(e,t,n,a){return t}}},i=function(e){return n[e]},s=function(e){delete n[e]},u=function(t){$(o.getContainer()+" "+a(t,!0)).removeClass("griew-column-hide"),e(t)},l=function(e){$(o.getContainer()+" "+a(e,!0)).addClass("griew-column-hide"),t(e)},d=function(e){var t=!e,a=[],r=[];for(var i in n)n[i].visibility&&a.push(n[i]);t&&a.sort(function(e,t){return e.order-t.order});for(var i in a)a[i].visibility&&r.push(a[i].name);return r},c=function(){var e=[];for(var t in n)e.push(n[t]);return e},p=function(e,t,r,i){var o="",s=n[e],u={};u.value=t[e];var l=s.beforeRender(e,u,s.template,r,i);return t[e]=u.value,o=C(t,l),o=$(o).addClass("griew-data-column").addClass(a(e))[0].outerHTML,o=s.afterRender(e,o,r,i)};Object.defineProperty(this,"onshow",{set:function(t){"function"==typeof t&&(e=t)}}),Object.defineProperty(this,"onhide",{set:function(e){"function"==typeof e&&(t=e)}}),this.add=function(e){return"object"==typeof e&&(void 0!=e.name&&""!=e.name&&(e.caption=e.caption||e.name,e.schema=e.schema||null,e.type=e.type||"string",e.order=e.order||1,e.visibility=void 0===e.visibility||e.visibility,e.template=e.template||"<td>{"+e.name+"}</td>",e.sortable=void 0===e.sortable||e.sortable,e.filterable=void 0===e.filterable||e.filterable,e.options=e.options||null,e.beforeRender=e.beforeRender||function(e,t,n,a,r){return n},e.afterRender=e.afterRender||function(e,t,n,a){return t},void r(e.name,e.caption,e.schema,e.type,e.order,e.visibility,e.sortable,e.filterable,e.template,e.options,e.beforeRender,e.afterRender)))},this.get=function(e){return i(e)},this.remove=function(e){s(e)},this.show=function(e){u(e)},this.hide=function(e){l(e)},this.visibles=function(){return d()},this.toArray=function(){return c()},this.render=function(e,t,n,a){return p(e,t,n,a)}},n=function(){var e="thead",t="<tr>{cells}</tr>",n="<th>{cell-name}</th>",a=function(e,t){return(t?".":"")+"griew-column-"+e},r=function(e){return".griew-header-cell"+a(e,!0)},i=function(e){for(var r="",i="",o="",u=0,l="";u<e.length;u++)l=e[u],i=C("cell-name",s.get(l).caption,n),i=$(i).addClass("griew-header-cell").addClass(a(l))[0].outerHTML,r+=i;return o=C("cells",r,t),o=$(o).addClass("griew-header-row")[0].outerHTML};Object.defineProperty(this,"container",{set:function(t){e=t},get:function(){return e}}),Object.defineProperty(this,"rowTemplate",{set:function(e){t=e},get:function(){return t}}),Object.defineProperty(this,"cellTemplate",{set:function(e){n=e},get:function(){return n}}),this.render=function(e){return i(e)},this.getCellSelector=function(e){return r(e)}},a=function(){var e=function(e,t){},t=function(e,t){},n=function(e,t){return(t?".":"")+"griew-filter-"+e},a=function(e,t,a){var r=$("<div>").addClass("griew-filter-box").addClass(n(e)).append("function"==typeof a?a():a);$(t).append(r)},r=function(e,t){if(void 0===t)return void $(n(e,!0)).remove();$(t+">"+n(e,!0)).remove()},i=function(t,a){void 0===a?$(n(t,!0)).addClass("active"):$(a+">"+n(t,!0)).addClass("active"),e(t,a),P(t,a,"filter","show")},o=function(e,a){void 0===a?$(n(e,!0)).removeClass("active"):$(a+">"+n(e,!0)).removeClass("active"),t(e,a),P(e,a,"filter","hide")},u=function(a,r){void 0===r?$(n(a,!0)).toggleClass("active"):$(r+">"+n(a,!0)).toggleClass("active"),d(a,r)?e(a,r):t(a,r)},d=function(e,t){return void 0===t?$(n(e,!0)).hasClass("active"):$(t+">"+n(e,!0)).hasClass("active")};Object.defineProperty(this,"onshow",{set:function(t){e=t}}),Object.defineProperty(this,"onhide",{set:function(e){t=e}}),this.add=function(e,t,n){a(e,t,n)},this.remove=function(e,t){r(e,t)},this.show=function(e,t){i(e,t)},this.hide=function(e,t){o(e,t)},this.toggle=function(e,t){u(e,t)},this.isVisible=function(e,t){return d(e,t)},this.addString=function(e,t,n){var r=$("<div>").addClass("griew-filter-string-box"),s=$("<select>").addClass("griew-filter-string-operator"),u=$('<input type="text">').addClass("griew-filter-string-operand"),l=$('<button type="button">').addClass("griew-filter-string-btn-accept"),d=$('<button type="button">').addClass("griew-filter-string-btn-clear"),c=["Contains","DoesNotContains","IsEqualTo","IsNotEqualTo","StartWith","EndsWith"];for(var f in c)s.append($("<option>").text(h("filter.string.operators."+c[f])).val(c[f]));u.attr("placeholder",h("filter.string.operand")),l.text(h("filter.string.accept")).click(function(){p.add(e,"string",s.val(),u.val()),o(e,t)}),d.text(h("filter.string.clear")).click(function(){p.remove(e),o(e,t)}),r.append(s).append(u).append(l).append(d),a(e,t,r),n&&i(e,t),p.onCreate=function(n){n.name==e&&(u.val(n.operand1),s.val(n.operator).change(),$(t).children(".griew-filter-button").addClass("active"))},p.onUpdate=function(t){t.name==e&&(u.val(t.operand1),s.val(t.operator).change())},p.onRemove=function(n){n.name==e&&(u.val(""),s.val("Contains").change(),$(t).children(".griew-filter-button").removeClass("active"))}},this.addNumber=function(e,t,n){var r=$("<div>").addClass("griew-filter-number-box"),s=$('<select id="operator">').addClass("griew-filter-number-operator"),u=$('<input type="number" id="operand1">').addClass("griew-filter-number-operand"),l=$('<input type="number" id="operand2">').addClass("griew-filter-number-operand"),d=$('<button type="button">').addClass("griew-filter-number-btn-accept"),c=$('<button type="button">').addClass("griew-filter-number-btn-clear"),f=["IsEqualTo","IsNotEqualTo","Between","IsGreaterThanOrEqualTo","IsGreaterThan","IsLessThanOrEqualTo","IsLessThan"];for(var g in f)s.append($("<option>").text(h("filter.number.operators."+f[g])).val(f[g]));s.change(function(){"Between"===$(this).val()?(l.removeClass("hide"),u.attr("placeholder",h("filter.number.operand1"))):(l.addClass("hide"),u.attr("placeholder",h("filter.number.operand")))}),u.attr("placeholder",h("filter.number.operand1")),l.attr("placeholder",h("filter.number.operand2")),d.text(h("filter.number.accept")).click(function(){"Between"===s.val()?p.add(e,"number",s.val(),Number(u.val()),Number(l.val())):p.add(e,"number",s.val(),Number(u.val())),o(e,t)}),c.text(h("filter.number.clear")).click(function(){p.remove(e),o(e,t)}),r.append(s).append(u).append(l).append(d).append(c),a(e,t,r),s.change(),n&&i(e,t),p.onCreate=function(n){n.name==e&&(u.val(n.operand1),l.val(n.operand2),s.val(n.operator).change(),$(t).children(".griew-filter-button").addClass("active"))},p.onUpdate=function(t){t.name==e&&(u.val(t.operand1),l.val(t.operand2),s.val(t.operator).change())},p.onRemove=function(n){n.name==e&&(u.val(""),l.val(""),s.val("IsEqualTo").change(),$(t).children(".griew-filter-button").removeClass("active"))}},this.addDateTime=function(e,t,n,r){n=n||{};var s=$("<div>").addClass("griew-filter-datetime-box"),u=$('<select id="operator">').addClass("griew-filter-datetime-operator"),l=$('<div id="operand1">').addClass("griew-filter-datetime-operand"),d=$('<input type="number">').addClass("griew-filter-datetime-operand-year"),c=$('<input type="number">').addClass("griew-filter-datetime-operand-month"),f=$('<input type="number">').addClass("griew-filter-datetime-operand-day"),g=$('<input type="number">').addClass("griew-filter-datetime-operand-hour"),m=$('<input type="number">').addClass("griew-filter-datetime-operand-minute"),v=$("<div>").addClass("griew-filter-datetime-date-wrapper"),b=$("<div>").addClass("griew-filter-datetime-time-wrapper"),w=$('<div id="operand2">').addClass("griew-filter-datetime-operand"),C=$('<input type="number">').addClass("griew-filter-datetime-operand-year"),y=$('<input type="number">').addClass("griew-filter-datetime-operand-month"),P=$('<input type="number">').addClass("griew-filter-datetime-operand-day"),T=$('<input type="number">').addClass("griew-filter-datetime-operand-hour"),x=$('<input type="number">').addClass("griew-filter-datetime-operand-minute"),I=$("<div>").addClass("griew-filter-datetime-date-wrapper"),E=$("<div>").addClass("griew-filter-datetime-time-wrapper"),k='<span class="griew-filter-datetime-date-separator"></span>',O='<span class="griew-filter-datetime-time-separator"></span>',N=$('<button type="button">').addClass("griew-filter-datetime-btn-accept"),q=$('<button type="button">').addClass("griew-filter-datetime-btn-clear"),A=["IsEqualTo","IsNotEqualTo","Between","IsAfterThanOrEqualTo","IsAfterThan","IsBeforeThanOrEqualTo","IsBeforeThan"];for(var B in A)u.append($("<option>").text(h("filter.datetime.operators."+A[B])).val(A[B]));u.change(function(){"Between"===$(this).val()?w.removeClass("hide"):w.addClass("hide")}),d.attr({placeholder:h("filter.datetime.operand.year"),min:n.year&&n.year?n.year.min:1e3,max:n.year&&n.year?n.year.max:""}).val(n.default&&n.default.year?n.default.year:""),c.attr({placeholder:h("filter.datetime.operand.month"),min:1,max:12}).val(n.default&&n.default.month?n.default.month:""),f.attr({placeholder:h("filter.datetime.operand.day"),min:1,max:31}).val(n.default&&n.default.day?n.default.day:""),g.attr({placeholder:h("filter.datetime.operand.hour"),min:0,max:23}).val(n.default&&n.default.hour?n.default.hour:""),m.attr({placeholder:h("filter.datetime.operand.minute"),min:0,max:59}).val(n.default&&n.default.minute?n.default.minute:""),C.attr({placeholder:h("filter.datetime.operand.year"),min:n.year&&n.year.min?n.year.min:1e3,max:n.year&&n.year.max?n.year.max:""}).val(n.default&&n.default.year?n.default.year:""),y.attr({placeholder:h("filter.datetime.operand.month"),min:1,max:12}).val(n.default&&n.default.month?n.default.month:""),P.attr({placeholder:h("filter.datetime.operand.day"),min:1,max:31}).val(n.default&&n.default.day?n.default.day:""),T.attr({placeholder:h("filter.datetime.operand.hour"),min:0,max:23}).val(n.default&&n.default.hour?n.default.hour:""),x.attr({placeholder:h("filter.datetime.operand.minute"),min:0,max:59}).val(n.default&&n.default.minute?n.default.minute:""),N.text(h("filter.datetime.accept")).click(function(){var n={year:Number(d.val()),month:Number(c.val()),day:Number(f.val()),hour:Number(g.val()),minute:Number(m.val())},a={year:Number(C.val()),month:Number(y.val()),day:Number(P.val()),hour:Number(T.val()),minute:Number(x.val())};"Between"===u.val()?p.add(e,"datetime",u.val(),n,a):p.add(e,"datetime",u.val(),n),o(e,t)}),q.text(h("filter.datetime.clear")).click(function(){p.remove(e),o(e,t)}),n.type=n.type||"datetime",(n.type&&"date"===n.type||"datetime"===n.type)&&(v.append(d).append(k).append(c).append(k).append(f),l.append(v),I.append(C).append(k).append(y).append(k).append(P),w.append(I)),(n.type&&"time"===n.type||"datetime"===n.type)&&(b.append(g).append(O).append(m),l.append(b),E.append(T).append(O).append(x),w.append(E)),s.append(u).append(l).append(w).append(N).append(q),a(e,t,s),u.change(),r&&i(e,t),p.onCreate=function(n){n.name==e&&(n.operand1&&(d.val(n.operand1.year),c.val(n.operand1.month),f.val(n.operand1.day),g.val(n.operand1.hour),m.val(n.operand1.minute)),n.operand2&&(C.val(n.operand2.year),y.val(n.operand2.month),P.val(n.operand2.day),T.val(n.operand2.hour),x.val(n.operand2.minute)),u.val(n.operator).change(),$(t).children(".griew-filter-button").addClass("active"))},p.onUpdate=function(t){t.name==e&&(t.operand1&&(d.val(t.operand1.year),c.val(t.operand1.month),f.val(t.operand1.day),g.val(t.operand1.hour),m.val(t.operand1.minute)),t.operand2&&(C.val(t.operand2.year),y.val(t.operand2.month),P.val(t.operand2.day),T.val(t.operand2.hour),x.val(t.operand2.minute)),u.val(t.operator).change())},p.onRemove=function(n){n.name==e&&(d.val(""),c.val(""),f.val(""),g.val(""),m.val(""),C.val(""),y.val(""),P.val(""),T.val(""),x.val(""),u.val("IsEqualTo").change(),$(t).children(".griew-filter-button").removeClass("active"))}},this.addEnum=function(e,t,n,r){n=n||{};var s=$("<div>").addClass("griew-filter-enum-box"),u=$("<div>").addClass("griew-filter-enum-operand"),l=$('<button type="button">').addClass("griew-filter-enum-btn-accept"),d=$('<button type="button">').addClass("griew-filter-enum-btn-clear");n.items=n.items||{};var c=n.type&&"single"==n.type?"radio":"checkbox";for(var f in n.items)u.append($("<label>").addClass("griew-filter-enum-item-control").append($("<input>").addClass("griew-filter-enum-item-input").val(f).attr({name:"filter_"+e,type:c})).append($("<span>").addClass("griew-filter-enum-item-caption").html(n.items[f])));l.text(h("filter.enum.accept")).click(function(){var n=[];u.find(".griew-filter-enum-item-input:checked").each(function(e,t){n.push(t.value)}),p.add(e,"enum","In",n),o(e,t)}),d.text(h("filter.enum.clear")).click(function(){p.remove(e),o(e,t)}),s.append(u).append(l).append(d),a(e,t,s),r&&i(e,t),p.onCreate=function(n){if(n.name==e){u.find(".griew-filter-enum-item-input").removeAttr("checked").prop("checked",!1);for(var a=0;a<n.operand1.length;a++)u.find(".griew-filter-enum-item-input[value="+n.operand1[a]+"]").attr("checked","checked").prop("checked",!0);$(t).children(".griew-filter-button").addClass("active")}},p.onUpdate=function(t){if(t.name==e){u.find(".griew-filter-enum-item-input").removeAttr("checked").prop("checked",!1);for(var n=0;n<t.operand1.length;n++)u.find(".griew-filter-enum-item-input[value="+t.operand1[n]+"]").attr("checked","checked").prop("checked",!0)}},p.onRemove=function(n){n.name==e&&(u.find(".griew-filter-enum-item-input").removeAttr("checked").prop("checked",!1),$(t).children(".griew-filter-button").removeClass("active"))}},this.autoGenerate=function(e,t){var n=null,a="";for(var r in e)if(n=s.get(e[r]),a=t(n.name),n.filterable){var u=$("<button>");switch(u.addClass("griew-filter-button"),u.data("FilterBoxName",n.name),u.data("FilterBoxContainer",a),u.click(function(){var e=$(this).data("FilterBoxName"),t=$(this).data("FilterBoxContainer");d(e,t)?o(e,t):i(e,t)}),$(a).append(u),n.type){case"string":l.addString(n.name,a,!1);break;case"number":l.addNumber(n.name,a,!1);break;case"datetime":var c=n.options&&n.options.filter?n.options.filter:void 0;l.addDateTime(n.name,a,c,!1);break;case"enum":var c=n.options&&n.options.filter?n.options.filter:void 0;l.addEnum(n.name,a,c,!1);break;case"boolean":var c=n.options&&n.options.filter?n.options.filter:void 0;l.addBoolean(n.name,a,c,!1)}T(n.name,a,"filter",function(e,t,n,a){"show"!=a||"order"!=n&&"filter"!=n||o(e,t)})}}},r=function(){var e=function(e,t){},t=function(e,t){},n=function(e,t){return(t?".":"")+"griew-order-"+e},a=function(e,t,a){var r=$("<div>").addClass("griew-order-box").addClass(n(e)).append("function"==typeof a?a():a);$(t).append(r)},r=function(e,t){if(void 0===t)return void $(n(e,!0)).remove();$(t+">"+n(e,!0)).remove()},i=function(t,a){void 0===a?$(n(t,!0)).addClass("active"):$(a+">"+n(t,!0)).addClass("active"),e(t,a),P(t,a,"order","show")},o=function(e,a){void 0===a?$(n(e,!0)).removeClass("active"):$(a+">"+n(e,!0)).removeClass("active"),t(e,a),P(e,a,"order","hide")},u=function(a,r){void 0===r?$(n(a,!0)).toggleClass("active"):$(r+">"+n(a,!0)).toggleClass("active"),l(a,r)?e(a,r):t(a,r)},l=function(e,t){return void 0===t?$(n(e,!0)).hasClass("active"):$(t+">"+n(e,!0)).hasClass("active")};Object.defineProperty(this,"onshow",{set:function(t){e=t}}),Object.defineProperty(this,"onhide",{set:function(e){t=e}}),this.add=function(e,t,n){a(e,t,n)},this.remove=function(e,t){r(e,t)},this.show=function(e,t){i(e,t)},this.hide=function(e,t){o(e,t)},this.toggle=function(e,t){u(e,t)},this.isVisible=function(e,t){return l(e,t)},this.addDefault=function(e,t,n){var r=$("<ul>").addClass("griew-order-default-box"),s=$("<li>").addClass("griew-order-default-btn-sort").addClass("griew-order-default-asc-sort"),u=$("<li>").addClass("griew-order-default-btn-sort").addClass("griew-order-default-desc-sort"),l=$("<li>").addClass("griew-order-default-btn-sort").addClass("griew-order-default-clear-sort");s.append($("<a>").text(h("order.ascending"))),u.append($("<a>").text(h("order.descending"))),l.append($("<a>").text(h("order.clear sort"))),s.click(function(){f.addAscending(e),o(e,t)}),u.click(function(){f.addDescending(e),o(e,t)}),l.click(function(){f.remove(e),o(e,t)}),r.append(s).append(u).append(l),a(e,t,r),n&&i(e,t),f.onCreate=function(n){n.name==e&&("ASC"==n.type?(s.addClass("active"),u.removeClass("active"),$(t).children(".griew-order-button").removeClass("griew-order-desc").addClass("griew-order-asc")):"DESC"==n.type&&(u.addClass("active"),s.removeClass("active"),$(t).children(".griew-order-button").removeClass("griew-order-asc").addClass("griew-order-desc")))},f.onUpdate=function(n){n.name==e&&("ASC"==n.type?(s.addClass("active"),u.removeClass("active"),$(t).children(".griew-order-button").removeClass("griew-order-desc").addClass("griew-order-asc")):"DESC"==n.type&&(u.addClass("active"),s.removeClass("active"),$(t).children(".griew-order-button").removeClass("griew-order-asc").addClass("griew-order-desc")))},f.onRemove=function(n){n.name==e&&(u.removeClass("active"),s.removeClass("active"),$(t).children(".griew-order-button").removeClass("griew-order-asc").removeClass("griew-order-desc"))}},this.autoGenerate=function(e,t){var n=null,a="";for(var r in e)if(n=s.get(e[r]),a=t(n.name),n.sortable){var u=$("<button>");u.addClass("griew-order-button"),u.data("OrderBoxName",n.name),u.data("OrderBoxContainer",a),u.click(function(){var e=$(this).data("OrderBoxName"),t=$(this).data("OrderBoxContainer");l(e,t)?o(e,t):i(e,t)}),$(a).append(u),d.addDefault(n.name,a,!1),T(n.name,a,"order",function(e,t,n,a){"show"!=a||"order"!=n&&"filter"!=n||o(e,t)})}}},i=function(){var e,t,n,a,r,i,o,s,u,l,d=function(d){d=d||{},e=d.container||".pagination",t=d.buttonGroupTemplate||'<ul class="griew-pagination">{pagination-items}</ul>',n=d.numberButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-number}</a></li>',a=d.nextButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-next}</a></li>',r=d.previousButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-previous}</a></li>',i=d.firstButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-first}</a></li>',o=d.lastButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-last}</a></li>',s=d.jumpNextButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-jump-next}</a></li>',u=d.jumpPreviousButtonTemplate||'<li class="griew-pagination-item"><a class="griew-pagination-link" data-page="{pagination-page}" data-action="{pagination-action}">{pagination-jump-previous}</a></li>',l=d.manualNavigationTemplate||'<li class="griew-pagination-item griew-pagination-manual"><input type="number" class="griew-pagination-manual-input" value="{pagination-current}" min="1" max="{pagination-last}"><span class="griew-pagination-manual-separator"></span><span class="griew-pagination-manual-last">{pagination-last}</span></li>'},c=function(e){var d=g.getPage(),c="",p=0,f=Math.floor(2.5),m=5>d.currentPage+f?5:d.currentPage+f;m=m>d.lastPage?d.lastPage:m,e=e||{};var h=void 0==e.onePageNavigation||e.onePageNavigation,v=void 0==e.multiPagesNavigation||e.multiPagesNavigation,b=void 0==e.manualNavigation||e.manualNavigation,w=e.jumpPagesCount?e.jumpPagesCount:10;for(c=c.concat(C({"pagination-page":1,"pagination-action":"first","pagination-first":""},i)),v&&(c=c.concat(C({"pagination-page":w,"pagination-action":"previous","pagination-jump-previous":""},u))),h&&(c=c.concat(C({"pagination-page":1,"pagination-action":"previous","pagination-previous":""},r))),p=d.currentPage-f;;)if(p<=0)p++;else{if(p>m)break;c+=C({"pagination-page":p,"pagination-number":p,"pagination-action":"page"},n),p++}h&&(c=c.concat(C({"pagination-page":1,"pagination-action":"next","pagination-next":""},a))),v&&(c=c.concat(C({"pagination-page":w,"pagination-action":"next","pagination-jump-next":""},s))),c=c.concat(C({"pagination-page":d.lastPage,"pagination-action":"last","pagination-last":""},o)),b&&(c=c.concat(C({"pagination-current":d.currentPage,"pagination-last":d.lastPage},l)));var y=$(C("pagination-items",c,t));return y.find('.griew-pagination-link[data-action="page"][data-page="'+d.currentPage+'"]').parent().addClass("active"),y},p=function(){var t=m.get("pagination");d(t),$(e).html(c(t)),$(e).on("click",".griew-pagination-link",function(){var e=$(this).data("page");switch($(this).data("action")){case"page":g.gotoPage(e);break;case"next":g.gotoPage(g.getCurrentPage()+e);break;case"previous":g.gotoPage(g.getCurrentPage()-e);break;case"last":g.gotoLastPage();break;case"first":g.gotoFirstPage()}b()}),$(e).on("change",".griew-pagination-manual-input",function(){g.gotoPage($(this).val()),$(e).html(c(t)),$(e).find(".griew-pagination-manual-input").focus()})};this.render=function(){var t=m.get("pagination");$(e).html(c(t))},this.generate=function(){p()}},o=new e,s=new t,u=new n,l=new a,d=new r,c=new i,v=[],w=[],C=function(e,t,n){var a=new RegExp("[{]{1}[ ]*[a-zA-Z0-9._-]+[ ]*[}]{1}","gi"),r=new RegExp("[{]{1}[ ]*("+e+"){1}[ ]*[}]{1}","gi");if("string"==typeof e)return n.replace(r,t);n=t,t=e;for(var i=n.match(a)||[],o=0;o<i.length;o++)e=i[o].replace(/[{ }]*/gi,""),n=C(e,t[e],n);return n},y=function(e){var t=0,n=s.visibles(),a=$(o.container),r=$(u.container);a.html(""),r.html(u.render(n)),l.autoGenerate(n,function(e){return u.getCellSelector(e)}),d.autoGenerate(n,function(e){return u.getCellSelector(e)});var i=m.get("pagination")||{};for(void 0!=i.visibility&&1!=i.visibility||c.generate();t<e.length;t++)a.append(o.render(n,e[t],t+1,s.render))},P=function(e,t,n,a){for(var r=0;r<v.length;r++)v[r].name==e&&v[r].section==n||v[r].callback&&v[r].callback(v[r].name,v[r].container,n,a)},T=function(e,t,n,a){v.push({name:e,container:t,section:n,callback:a})};this.filters=function(){return l},this.orders=function(){return d},this.pagination=function(){return c},this.row=function(){return o},this.columns=function(){return s},this.render=function(e){e&&(w=Object.assign([],e)),y(w)}},i=function(){var e=[],t=[],n=[],a=[],r=function(t,n,a,r,i){var s={name:t,type:n,operator:a,operand1:r,operand2:i};o(t)?(s=o(t),s.name=t,s.type=n,s.operator=a,s.operand1=r,s.operand2=i,d(s)):(e.push(s),l(s))},i=function(t){for(var n in e)if(e[n].name===t)return c(e.splice(n,1)[0]),!0;return!1},o=function(t){for(var n in e)if(e[n].name===t)return e[n];return null},s=function(){for(var t=0;t<e.length;t++)i(e[t].name)},u=function(){return e},l=function(e){for(var n=0;n<t.length;n++)t[n](e)},d=function(e){for(var t=0;t<n.length;t++)n[t](e)},c=function(e){for(var t=0;t<a.length;t++)a[t](e)};this.add=r,this.remove=i,this.clear=s,this.find=o,this.toArray=u,Object.defineProperty(this,"onCreate",{set:function(e){t.push(e)}}),Object.defineProperty(this,"onUpdate",{set:function(e){n.push(e)}}),Object.defineProperty(this,"onRemove",{set:function(e){a.push(e)}})},o=function(){var e=[],t=[],n=[],a=[],r=function(t,n){var a={name:t,type:n.toUpperCase()};o(t)?(a=o(t),a.name=t,a.type=n.toUpperCase(),d(a)):(e.push(a),l(a))},i=function(t){for(var n in e)if(e[n].name===t)return c(e.splice(n,1)[0]),!0;return!1},o=function(t){for(var n in e)if(e[n].name===t)return e[n];return null},s=function(e){var t=o(e);if(null===t)return!1;"ASC"===t.type?t.type="DESC":t.type="ASC",d(t)},u=function(){for(var t=0;t<e.length;t++)i(e[t].name)},l=function(e){for(var n=0;n<t.length;n++)t[n](e)},d=function(e){for(var t=0;t<n.length;t++)n[t](e)},c=function(e){for(var t=0;t<a.length;t++)a[t](e)},p=function(){return e};this.addAscending=function(e){return!!e&&(r(e,"ASC"),!0)},this.addDescending=function(e){return!!e&&(r(e,"DESC"),!0)},this.remove=i,this.clear=u,this.find=o,this.swap=s,this.toArray=p,Object.defineProperty(this,"onCreate",{set:function(e){t.push(e)}}),Object.defineProperty(this,"onUpdate",{set:function(e){n.push(e)}}),Object.defineProperty(this,"onRemove",{set:function(e){a.push(e)}})},s=function(){var e={currentPage:1,lastPage:1,perPage:15,total:0,from:1,count:0},t=function(t){t&&parseInt(t)>0&&(t=parseInt(t),e.currentPage=t,t>e.lastPage&&(e.currentPage=e.lastPage))},n=function(){e.currentPage<e.lastPage&&e.currentPage++},a=function(){e.currentPage>1&&e.currentPage--},r=function(){e.currentPage=1},i=function(){e.currentPage=e.lastPage},o=function(t){
t&&parseInt(t)>0&&(e.perPage=t)},s=function(){return e.perPage},u=function(){return e.currentPage},l=function(n,a,r,i,o,s){t(n),a=parseInt(a),r=parseInt(r),i=parseInt(i),o=parseInt(o),s=parseInt(s),e.lastPage=a&&a>0?a:e.lastPage,e.perPage=r&&r>0?r:e.perPage,e.total=i&&i>=0?i:e.total,e.from=o&&o>0?o:e.from,e.count=s&&s>=0?s:e.count},d=function(){return e};this.gotoPage=t,this.gotoNextPage=n,this.gotoPreviousPage=a,this.gotoFirstPage=r,this.gotoLastPage=i,this.setPerPage=o,this.getPerPage=s,this.getCurrentPage=u,this.setPage=l,this.getPage=d},u=function(){var e={},t=function(t,n){e[t]=n},n=function(t){return e[t]},a=function(t){return void 0!==e[t]};this.set=t,this.get=n,this.exists=a},l=new e,d=new a,c=new r,p=new i,f=new o,g=new s,m=new u;d.setDefault("ajax");var h=function(e,t){return l.trans(e,t)},v=function(){c.render()},b=function(){d.run((new t).collect(),function(e){c.render(e.getData())})};this.view=function(){return c},this.filter=function(){return p},this.order=function(){return f},this.pagination=function(){return g},this.options=function(){return m},this.dataProvider=function(){return d},this.setLang=l.setLang,this.setLocale=l.setLocale,this.getLocale=l.getLocale,this.isLocale=l.isLocale,this.trans=l.trans,this.refresh=b,this.render=v};