(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(11),n=c.n(a),l=(c(16),c(7)),i=c(4),o=(c(17),c(2)),d=c(1);function u(e){return Object(d.jsx)(o.g,{isOpen:e.difficultyModal,"data-overlay-dismissal-disabled":"true","data-esc-dismissal-disabled":"true",children:Object(d.jsx)(o.i,{children:Object(d.jsxs)(o.h,{className:"text-center",children:[Object(d.jsx)("h3",{children:"Select Difficulty"}),Object(d.jsxs)("div",{className:"d-flex justify-content-around mt-10 mt-md-20",children:[Object(d.jsx)(o.a,{color:"success",size:"lg",onClick:function(){e.setDifficulty(20)},children:"Easy"}),Object(d.jsx)(o.a,{color:"secondary",size:"lg",onClick:function(){e.setDifficulty(30)},children:"Medium"}),Object(d.jsx)(o.a,{color:"danger",size:"lg",onClick:function(){e.setDifficulty(40)},children:"Hard"})]})]})})})}function j(e){return Object(d.jsx)(o.g,{isOpen:e.resultModal,"data-overlay-dismissal-disabled":"true","data-esc-dismissal-disabled":"true",children:Object(d.jsx)(o.i,{children:Object(d.jsx)(o.h,{className:"text-center",children:e.result?Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-success",children:"You Solved It!"}),Object(d.jsx)(o.a,{color:"primary",size:"lg",onClick:e.newGame,children:"New Game"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{className:"text-danger",children:"Not Solved It Yet!"}),Object(d.jsx)(o.a,{color:"primary",size:"lg",onClick:function(){return e.setResultModal(!1)},children:"Keep trying"})]})})})})}var b=c(10);function f(e){return Object(d.jsx)("div",{children:Object(d.jsx)(o.k,{className:"h-50 w-350 w-md-450",children:[0,1,2,3,4,5,6,7,8].map((function(t){var c=e.empty[e.row].includes(t),s="p-5 border "+(0===Math.floor(t%3)?"border-left ":"")+(8===t?"border-right ":"")+(0===Math.floor(e.row%3)?"border-top":"")+(8===e.row?"border-bottom":""),r="h-full text-center border-0 font-size-18 font-weight-bold "+(c?"text-user ":"text-readonly ")+((Math.floor(e.row/3)+Math.floor(t/3))%2===0?"bg-light-input":"bg-input");return Object(d.jsx)(o.d,{className:s,children:Object(d.jsx)(o.f,Object(b.a)(Object(b.a)({value:e.data[t]},c?{onChange:function(c){return e.update(c,e.row,t)}}:{readOnly:!0}),{},{className:r,min:"1",max:"9",type:"number"}))},t)}))})})}function h(e){return Object(d.jsxs)(o.b,{style:{width:"max-content"},className:"text-center p-10 p-md-20",children:[Object(d.jsx)(o.c,{children:Object(d.jsx)("h1",{className:"elegantshadow",children:"SUDOKU"})}),[0,1,2,3,4,5,6,7,8].map((function(t){return Object(d.jsx)(f,{data:e.board[t],row:t,update:e.update,empty:e.empty},t)})),Object(d.jsxs)("div",{className:"d-flex justify-content-around mt-10 mt-md-20",children:[Object(d.jsx)(o.a,{color:"secondary",size:"lg",onClick:e.resetGame,children:"Reset"}),Object(d.jsx)(o.a,{color:"danger",size:"lg",onClick:e.newGame,children:"New game"}),Object(d.jsx)(o.a,{color:"success",size:"lg",onClick:e.checkGame,children:"Check"})]})]})}function m(e){return Object(d.jsx)(o.j,{children:Object(d.jsxs)(o.e,{className:"h-full d-flex justify-content-center align-items-center",children:[Object(d.jsx)(h,{board:e.board,update:e.update,empty:e.empty,resetGame:e.resetGame,newGame:e.newGame,checkGame:e.checkGame}),Object(d.jsx)(u,{difficultyModal:e.difficultyModal,setDifficulty:e.setDifficulty}),Object(d.jsx)(j,{resultModal:e.resultModal,result:e.result,newGame:e.newGame,setResultModal:e.setResultModal})]})})}var O=c(9);function x(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(!1),n=Object(i.a)(a,2),o=n[0],u=n[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),f=b[0],h=b[1],x=Object(s.useState)(Array(9).fill(Array(9).fill(""))),y=Object(i.a)(x,2),p=y[0],g=y[1],w=Object(s.useState)(Array(9).fill([])),v=Object(i.a)(w,2),k=v[0],M=v[1],G=function(){u(!1),r(!0)};return Object(s.useEffect)(G,[]),Object(d.jsx)(m,{board:p,checkGame:function(){h(!0===Object(O.checkMatrix)(p)),u(!0)},empty:k,result:f,resultModal:o,difficultyModal:c,newGame:G,update:function(e,t,c){var s=Object(l.a)(p);s[t][c]=e.target.value,g(s)},resetGame:function(){for(var e=Object(l.a)(p),t=Object(l.a)(k),c=function(c){t[c].forEach((function(t){return e[c][t]=""}))},s=0;s<9;++s)c(s);g(e)},setResultModal:u,setDifficulty:function(e){!function(e){var t=Object(O.blink)(e);g(t);for(var c=[],s=0;s<9;++s){c.push([]);for(var r=0;r<9;++r)""===t[s][r]&&c[s].push(r)}M(c)}(e),r(!1)}})}n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7edb8e9a.chunk.js.map