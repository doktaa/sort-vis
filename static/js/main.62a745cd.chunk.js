(this["webpackJsonpsort-vis"]=this["webpackJsonpsort-vis"]||[]).push([[0],{131:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a.n(n),i=a(10),r=a.n(i),o=(a(131),a(4)),c=a(32),l=(a.p,a(77),a(1)),u=function(e){var t={width:"".concat(100/e.total,"%")},a={height:"".concat(e.num,"px"),backgroundColor:e.color};return Object(l.jsxs)("div",{className:"barContainer",style:t,children:[Object(l.jsx)("div",{className:"bar",style:a})," "]})},b=function(e){var t=e.total;return Object(l.jsx)("div",{className:"graphContainer",children:e.array.map((function(e){return Object(l.jsx)(u,{num:e.value,total:t,color:e.color})}))})},d=a.p+"static/media/xbutton.f939aa43.svg",h=function(e){return Object(l.jsxs)("div",{className:"reflectionsContainer",children:[Object(l.jsx)("img",{className:"xbutton",src:d,onClick:function(){e.click({visibility:"hidden"})}}),Object(l.jsxs)("p",{children:["2021/02/26",Object(l.jsx)("br",{}),"Learnt how to use useState hook thing to save state variables (saving user input)",Object(l.jsx)("br",{}),"using props in components, in this case passing the array through to display in the display area component",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021//02/27",Object(l.jsx)("br",{}),"Finding out random things about file structure and imports  (CSS files and stuff)",Object(l.jsx)("br",{}),"State (context of constantly changing array while being sorted) is confusing, need to understand it",Object(l.jsx)("br",{}),"Dealt with array not updating even though it was being sorted correctly",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/02/28",Object(l.jsx)("br",{}),"Learnt that javascript arrays are just references and in order to actually clone an array, have to use [...xyz]",Object(l.jsx)("br",{}),"Managed to get sorter working but have to clarify why i had to use [...] syntax for a specific case",Object(l.jsx)("br",{}),"Now that bubble sort is a success, will look at refining current solution before adding more sort methods.",Object(l.jsx)("br",{}),"Changing functionality so that instead of sort button generating and sorting at the same time, split it up so that there's a button to generate an array based on user input, and a separate sort button",Object(l.jsx)("br",{}),"Doing random aesthetic stuff with css here and there",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/02",Object(l.jsx)("br",{}),"Random playing around with a border on the display area, using a variable to determine whether the display area should show the border or not (if array size is 0 then border should not be visible because it shows by default)",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/03",Object(l.jsx)("br",{}),"Running into an issue where button does not seem to update react use states on first click, but only updates on 2nd+ clicks...this is causing the generate array button to fail to render/update the graph unless i click it twice...",Object(l.jsx)("br",{}),"console log is telling me the usestate setter method for sortArray is not actually updating it.",Object(l.jsx)("br",{}),"Research tells me that react hooks run asynchronously which would explain why it wasn't immediately updating the array.",Object(l.jsx)("br",{}),"Used useffect() to resolve this issue so that react renders the array only after it changes (so wait till sortArray changes before updating)",Object(l.jsx)("br",{}),"ternary operators are sick",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/04",Object(l.jsx)("br",{}),"Created the reflections bit so i can access logs on the app. While creating this, used a hook for visibility of the reflections overlay, which involved passing the hook function as a prop to the Reflections object.",Object(l.jsx)("br",{}),"Learnt that when doing so, have to use the passed in hook function (props) within arrow function in the onClick instead of calling the props directly from onClick",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/06",Object(l.jsx)("br",{}),"Implementing quicksort algorithm without looking up code for extra challenge, not sure if I should've jumped the gun going from bubble sort to quicksort just like that...",Object(l.jsx)("br",{}),"Quicksort implemented, now need to animate it",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/08",Object(l.jsx)("br",{}),"figuring out how to animate quicksort, implemented animation changes every time a sort happens but i realised this is not that great since it doesn't represent the recursiveness of quicksort",Object(l.jsx)("br",{}),"in order for quick sort to make sense, i need to start changing bar colours while animating so that i can see comparisons etc, this would make it useful in general for every sorting algorithm.",Object(l.jsx)("br",{}),"To achieve this, modified array from numerical array to array that holds objects, which then contains the numerical value along with a colour value. Means i had to use .map a lot more whenever it was necessary",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/09",Object(l.jsx)("br",{}),'Made a sensible modification to the animation of Bubble Sort to indicate sorted bars as green, budget "hard-codey" solution but will modify to a better one later on',Object(l.jsx)("br",{}),"Animating quicksort was aids, wanted to indicate sorted bars as green so turned the array from a numerical array into an array containing objects with a number and color that was passed through the whole quicksort process but found out that OBJECTS WITHIN ARRAYS ACT AS REFERENCES AND THUS CANNOT BE CLONED IN A SHALLOW COPY.",Object(l.jsx)("br",{}),"Modified to using a separate array to just store sorted bar indexes :( much boring such zzz",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"2021/03/13",Object(l.jsx)("br",{}),"Gonna change array size and delay to a user input using sliders QUESTION FOR LATER RESEARCH: input sliders with onchange events which update state values works AFTER you move the sliders, how to make react set state using default values on first render/load? TEMPORARY SOLUTION = set default value for usestate based on a variable, input defaultvalue will also be variable for consistency...",Object(l.jsx)("br",{}),"Started off using 2 separate onchange functions for barcount and delay inputs, realised i can use e.target.id and just have one function :O Since for the delay, when the slider is HIGHER we want LESS delay (smaller value when higher value), will use negative values for input and then use absolute value, budget thinking hehe SIOIJOSEJIFJISEFPJSEPF NICE NICE NICE NICE SPEED CONTROLS LITTTTT"]})]})};a(428);var j=function(){var e,t=100,a=0,s=250,i=-11,u=-1,d=-5,j=-8,g=Object(n.useState)(t),f=Object(c.a)(g,2),O=f[0],p=f[1],m=Object(n.useState)(u),v=Object(c.a)(m,2),x=v[0],y=v[1],w=Object(n.useState)([]),k=Object(c.a)(w,2),C=k[0],S=k[1],N=Object(n.useState)({visibility:"hidden"}),E=Object(c.a)(N,2),I=E[0],T=E[1],R=Object(n.useState)({visibility:"hidden"}),A=Object(c.a)(R,2),L=A[0],F=A[1],B=[],M=0;function P(e){switch(e.target.id){case"barCountInput":p(e.target.value);break;case"delayInput":y(e.target.value)}}function H(e,t,a,n){setTimeout((function(){if(console.log("bb delay",t),"swapped"!==n){var s=a[e];a[e]=a[e+1],a[e+1]=s;var i=Object(o.a)(a).map((function(e,t){return{value:e,color:t>a.length-n?"green":"white"}}));S(i)}else{var r=Object(o.a)(a).map((function(e,t){return{value:e,color:"green"}}));S(r)}}),t)}function q(e,t,a,n){if(t<a){var s=function(e,t,a,n){console.log("arr",e,"leftidx",t,"rightidx",a);var s=e[a],i=t,r=a;console.log(s,i,r);for(;i<r;){for(;e[i]<s;)J(Object(o.a)(e),i,a,"compare",Object(o.a)(n)),i++;for(;e[r]>=s&&r!=t;)J(Object(o.a)(e),r,a,"compare",Object(o.a)(n)),r--;i<r&&(z(e,i,r,n),i=t,r=a)}return z(e,i,a,n),n.push(i),console.log("sorted nums",n),i}(e,t,a,n);console.log("array post partition",e,"new pivot",s,"left index",t,"right index",a),q(e,t,s-1,n),q(e,s+1,a,n)}else n.push(t,a),J(Object(o.a)(e),0,0,"swap",Object(o.a)(n)),console.log(n)}function z(e,t,a,n){var s=e[t];e[t]=e[a],e[a]=s,J(Object(o.a)(e),0,0,"swap",Object(o.a)(n))}function J(e,t,a,n,s){setTimeout((function(){if("compare"===n){var i=Object(o.a)(e).map((function(e,n){return{value:e,color:n===t||n===a?"red":s.indexOf(n)>=0?"green":"white"}}));S(i)}else if("swap"===n){var r=Object(o.a)(e).map((function(e,t){return{value:e,color:s.indexOf(t)>=0?"green":"white"}}));S(r)}}),M+=x*j)}return Object(n.useEffect)((function(){r.a.render(Object(l.jsx)(b,{array:C,total:O}),document.getElementById("displayArea"))}),[C]),Object(l.jsxs)("div",{className:"section is-large sectionMain",children:[Object(l.jsx)("div",{className:"reflections",style:L,children:Object(l.jsx)(h,{click:F})}),Object(l.jsxs)("div",{className:"columns columnContainer",children:[Object(l.jsx)("div",{className:"column"}),Object(l.jsxs)("div",{className:"column is-four-fifths is-centered has-text-centered mainColumn",children:[Object(l.jsxs)("button",{className:"button is-info is-light reflectionsButton ",onClick:function(){F({visibility:"visible"})},children:["Please ",Object(l.jsx)("b",{children:"CLICK HERE"})," to view a log of my project learning updates and reflections :)",Object(l.jsx)("br",{}),"This sorting visualiser project is still a work in progress!"]}),Object(l.jsx)("span",{className:"tag is-info is-light is-large margin1",children:"Please select array size"}),Object(l.jsx)("input",{className:"input is-info is-rounded margin1 sliderInput",type:"range",min:a,max:s,defaultValue:t,id:"barCountInput",onChange:P})," ",Object(l.jsx)("input",{className:"input sliderInput",type:"range",min:i,max:u,defaultValue:u,id:"delayInput",onChange:P})," ",Object(l.jsx)("button",{className:"margin1 button is-info is-light is-normal is-rounded",onClick:function(){console.log(x),T({visibility:0==O?"hidden":"visible"});for(var e=0;e<O;e++)B.push(Math.floor(Math.random()*window.innerHeight*.4));console.log("initial array",B);var t=[].concat(B).map((function(e){return{value:e,color:"white"}}));S(t)},children:"CREATE ARRAY"}),Object(l.jsxs)("div",{className:"alignBottom",children:[Object(l.jsx)("div",{id:"displayArea",style:I}),Object(l.jsx)("button",{onClick:function(){var t=Object(o.a)(C).map((function(e){return e.value}));M=0;var a=1;do{e=!1;for(var n=0;n<t.length;n++)if(t[n+1]<t[n]){H(n,M+=x*d,Object(o.a)(t),a);var s=t[n];t[n]=t[n+1],t[n+1]=s,e=!0}a+=1,!1===e&&H(0,M,Object(o.a)(t),"swapped")}while(!0===e)},children:"Bubble Sort"}),Object(l.jsx)("button",{onClick:function(){var e=Object(o.a)(C).map((function(e){return e.value}));M=0,q(e,0,e.length-1,[])},children:"Quick Sort"})]})]}),Object(l.jsx)("div",{className:"column"})]})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,429)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),g()},77:function(e,t,a){}},[[427,1,2]]]);
//# sourceMappingURL=main.62a745cd.chunk.js.map