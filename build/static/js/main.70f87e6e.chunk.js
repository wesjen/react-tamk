(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(6),s=n.n(a),i=(n(20),n(5)),o=n(4),u=n(2),d=n.n(u),l=n(3),j=n(7),p=n(9),b=n(1);var h=function(t){var e=Object(r.useState)({id:t.id,title:t.title,description:t.description,date:t.date,tag:t.tag,tagColor:t.tagColor}),n=Object(i.a)(e,2),c=n[0];return n[1],Object(b.jsx)(p.b,{draggableId:c.id.toString(),index:t.index,style:{display:"table"},children:function(e){return Object(b.jsxs)("tr",Object(o.a)(Object(o.a)(Object(o.a)({className:"task-container ".concat(c.tagColor)},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[Object(b.jsx)("td",{children:c.title}),Object(b.jsx)("td",{className:"icon",children:Object(b.jsx)(j.a,{style:{color:"white",cursor:"pointer"},onClick:function(){return t.update(t.id,"title")}})}),Object(b.jsx)("td",{children:c.description}),Object(b.jsx)("td",{className:"icon",children:Object(b.jsx)(j.a,{style:{color:"white",cursor:"pointer"},onClick:function(){return t.update(t.id,"description")}})}),Object(b.jsx)("td",{children:c.date}),Object(b.jsx)("td",{className:"icon",children:Object(b.jsx)(j.a,{style:{color:"white",cursor:"pointer"},onClick:function(){return t.update(t.id,"date")}})}),Object(b.jsx)("td",{className:"task-tags",children:c.tag}),Object(b.jsx)("td",{className:"icon",children:Object(b.jsx)(j.a,{style:{color:"white",cursor:"pointer"},onClick:function(){return t.update(t.id,"tag")}})}),Object(b.jsx)("td",{className:"icon",children:Object(b.jsx)(j.b,{style:{color:"white",cursor:"pointer"},onClick:function(){return t.delete(t.id)}})})]}))}})};var f=function(t){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3010,n="http://localhost:".concat(e,"/tasks/"),c=Object(r.useState)([]),a=Object(i.a)(c,2),s=a[0],u=a[1];Object(r.useEffect)((function(){var t=function(){var t=Object(l.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:e=t.sent,u(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var j=function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n+e,{method:"DELETE"});case 2:200===t.sent.status?u(s.filter((function(t){return t.id!==e}))):alert("Error with deleting task");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(l.a)(d.a.mark((function t(e,r){var c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=s.filter((function(t){return t.id===e})),a=c[0],i=function(){var t=Object(l.a)(d.a.mark((function t(){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){alert("Task edited successfully!")},c=function(){alert("Couldn't edit task")},t.next=4,fetch(n+e,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 4:200===t.sent.status?r():c();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.t0=r,t.next="title"===t.t0?6:"description"===t.t0?9:"date"===t.t0?12:"tag"===t.t0?15:18;break;case 6:return a.title=prompt("Insert new title"),i(),t.abrupt("break",19);case 9:return a.description=prompt("Insert new description"),i(),t.abrupt("break",19);case 12:return a.date=prompt("Insert new date"),i(),t.abrupt("break",19);case 15:return a.tag=prompt("Insert new tag"),i(),t.abrupt("break",19);case 18:alert("No editable attributes");case 19:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"task-list-div",children:[Object(b.jsx)("h1",{children:"Tasks"}),Object(b.jsx)(p.a,{onDragEnd:function(t){var e=t.destination,n=t.source;if(e&&(e.droppableId!==n.droppableId||e.index!==n.index)){var r=s[n.index];console.log(r),s.splice(n.index,1),s.splice(e.index,0,r)}},children:Object(b.jsx)("table",{className:"task-list-container",children:Object(b.jsx)(p.c,{droppableId:"table",children:function(t){return Object(b.jsxs)("tbody",Object(o.a)(Object(o.a)({ref:t.innerRef},t.droppableProps),{},{children:[s.map((function(t,e){return Object(b.jsx)(h,{index:e,id:t.id,title:t.title,description:t.description,date:t.date,tag:t.tag,tagColor:t.tagColor,delete:j,update:f},t.id)})),t.placeholder]}))}})})})]},Math.random())};var O=function(){return Object(b.jsxs)("div",{className:"info-div",children:[Object(b.jsx)("h1",{children:"How to use"}),Object(b.jsxs)("p",{children:["Make sure to open json-server ",Object(b.jsx)("br",{}),"Add new tasks from 'Add new task+' -tab.",Object(b.jsx)("br",{}),"All tasks listed in Home-tab.",Object(b.jsx)("br",{})," Delete tasks py pressing X-icon.",Object(b.jsx)("br",{})," Update a task py pressing pen-icon and RELOAD/move to another tap after to see the changes.",Object(b.jsx)("br",{})," Momentarily rearrange tasks by dragging."]}),Object(b.jsx)("h2",{children:"Creator"}),Object(b.jsx)("p",{children:"Creator of this App is Jenna Westerlund"}),Object(b.jsx)("h2",{children:"Licences"}),Object(b.jsx)("p",{children:"Uses Ant Design Icons from react-icons "}),Object(b.jsx)("a",{href:"https://react-icons.github.io/react-icons/icons?name=ai",children:"Link to Ant Design Icons from react-icons"}),Object(b.jsx)("p",{children:"Under Open source MIT-license "}),Object(b.jsx)("a",{href:"https://opensource.org/licenses/MIT",children:"Link to Open source MIT-license"})]})},x=n(11),v=n(15);var g=function(t){var e="http://localhost:3010/tasks/",n=Object(r.useState)([]),c=Object(i.a)(n,2),a=c[0],s=c[1],u=Object(r.useState)({title:"",description:"",date:"",tag:"",tagColor:""}),j=Object(i.a)(u,2),p=j[0],h=j[1];Object(r.useEffect)((function(){var t=function(){var t=Object(l.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var f=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,s([].concat(Object(v.a)(a),[c])),201===r.status?k():C();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){h(Object(o.a)(Object(o.a)({},p),{},Object(x.a)({},t.target.id,t.target.value)))},m=function(){h({title:"",description:"",date:"",tag:"",tagColor:""})},k=function(){m(),alert("Task added successfully!")},C=function(){m(),alert("Couldn't add task")},y=function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),O(p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"add-task-div",children:Object(b.jsxs)("form",{onSubmit:y,className:"add-form",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title of the task"}),Object(b.jsx)("input",{type:"text",id:"title",value:p.title,required:!0,onChange:g,maxLength:"50"}),Object(b.jsx)("label",{htmlFor:"description",children:"Description of task"}),Object(b.jsx)("input",{type:"textfield",id:"description",value:p.description,onChange:g,maxLength:"150"}),Object(b.jsx)("label",{htmlFor:"date",children:"Date for the task"}),Object(b.jsx)("input",{type:"date",id:"date",value:p.date,onChange:g}),Object(b.jsx)("label",{htmlFor:"tag",children:"Tag for task"}),Object(b.jsx)("input",{type:"text",id:"tag",value:p.tag,onChange:g,maxLength:"30"}),Object(b.jsx)("label",{htmlFor:"tagColor",children:"Color for this task"}),Object(b.jsxs)("select",{id:"tagColor",value:p.tagColor,onChange:g,children:[Object(b.jsx)("option",{value:"none",children:"None"}),Object(b.jsx)("option",{value:"purple",children:"Purple"}),Object(b.jsx)("option",{value:"cyan",children:"Cyan"}),Object(b.jsx)("option",{value:"orange",children:"Orange"}),Object(b.jsx)("option",{value:"golden",children:"Golden"})]}),Object(b.jsx)("button",{type:"submit",children:"Add"})]})})};n(29);var m=function(){var t=Object(r.useState)(),e=Object(i.a)(t,2),n=e[0],c=e[1],a=function(t){return c(t)};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"menu-bar",children:[Object(b.jsx)("button",{onClick:function(){return a(Object(b.jsx)(f,{}))},children:"Home"}),Object(b.jsx)("button",{onClick:function(){return a(Object(b.jsx)(g,{}))},children:"Add new +"}),Object(b.jsx)("button",{onClick:function(){return a(Object(b.jsx)(O,{}))},children:"Info"})]}),n]})};var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(m,{})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.70f87e6e.chunk.js.map