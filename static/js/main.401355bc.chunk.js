(this["webpackJsonpreact-sudoku"]=this["webpackJsonpreact-sudoku"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(11),r=c.n(n),l=(c(16),c(7)),i=c(4),d=(c(17),c(2)),o=c(1);function u(e){return Object(o.jsx)(d.g,{isOpen:e.difficultyModal,"data-overlay-dismissal-disabled":"true","data-esc-dismissal-disabled":"true",children:Object(o.jsx)(d.i,{children:Object(o.jsxs)(d.h,{className:"text-center",children:[Object(o.jsx)("h3",{children:"Select Difficulty"}),Object(o.jsxs)("div",{className:"d-flex justify-content-around mt-10 mt-md-20",children:[Object(o.jsx)(d.a,{color:"success",size:"lg",onClick:function(){e.setDifficulty(20)},children:"Easy"}),Object(o.jsx)(d.a,{color:"secondary",size:"lg",onClick:function(){e.setDifficulty(30)},children:"Medium"}),Object(o.jsx)(d.a,{color:"danger",size:"lg",onClick:function(){e.setDifficulty(40)},children:"Hard"})]})]})})})}function j(e){return Object(o.jsx)(d.g,{isOpen:e.resultModal,"data-overlay-dismissal-disabled":"true","data-esc-dismissal-disabled":"true",children:Object(o.jsx)(d.i,{children:Object(o.jsx)(d.h,{className:"text-center",children:e.result?Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"text-success",children:"You Solved It!"}),Object(o.jsx)(d.a,{color:"primary",size:"lg",onClick:e.newGame,children:"New Game"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"text-danger",children:"Not Solved It Yet!"}),Object(o.jsx)(d.a,{color:"primary",size:"lg",onClick:function(){return e.setResultModal(!1)},children:"Keep trying"})]})})})})}var b=c(10);function f(e){return Object(o.jsx)("div",{children:Object(o.jsx)(d.k,{className:"h-50 w-350 w-md-450",children:[0,1,2,3,4,5,6,7,8].map((function(t){var c=e.empty[e.row].includes(t),s="h-full text-center border-0 font-size-18 font-weight-bold "+(c?"text-user ":"text-readonly ")+((Math.floor(e.row/3)+Math.floor(t/3))%2===0?"bg-light-input":"bg-input");return Object(o.jsx)(d.d,{className:"p-5",children:Object(o.jsx)(d.f,Object(b.a)(Object(b.a)({value:e.data[t]},c?{onChange:function(c){return e.update(c,e.row,t)}}:{readOnly:!0}),{},{className:s,min:"1",max:"9",type:"number"}))},t)}))})})}function m(e){return Object(o.jsxs)(d.b,{style:{width:"max-content"},className:"text-center p-10 p-md-20",children:[Object(o.jsx)(d.c,{children:Object(o.jsx)("h1",{className:"elegantshadow",children:"SUDOKU"})}),[0,1,2,3,4,5,6,7,8].map((function(t){return Object(o.jsx)(f,{data:e.board[t],row:t,update:e.update,empty:e.empty},t)})),Object(o.jsxs)("div",{className:"d-flex justify-content-around mt-10 mt-md-20",children:[Object(o.jsx)(d.a,{color:"secondary",size:"lg",onClick:e.resetGame,children:"Reset"}),Object(o.jsx)(d.a,{color:"danger",size:"lg",onClick:e.newGame,children:"New game"}),Object(o.jsx)(d.a,{color:"success",size:"lg",onClick:e.checkGame,children:"Check"})]})]})}function O(e){return Object(o.jsx)(d.j,{children:Object(o.jsxs)(d.e,{className:"h-full d-flex justify-content-center align-items-center",children:[Object(o.jsx)(m,{board:e.board,update:e.update,empty:e.empty,resetGame:e.resetGame,newGame:e.newGame,checkGame:e.checkGame}),Object(o.jsx)(u,{difficultyModal:e.difficultyModal,setDifficulty:e.setDifficulty}),Object(o.jsx)(j,{resultModal:e.resultModal,result:e.result,newGame:e.newGame,setResultModal:e.setResultModal})]})})}var h=c(9);function x(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),r=Object(i.a)(n,2),d=r[0],u=r[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),f=b[0],m=b[1],x=Object(s.useState)(Array(9).fill(Array(9).fill(""))),y=Object(i.a)(x,2),p=y[0],g=y[1],v=Object(s.useState)(Array(9).fill([])),k=Object(i.a)(v,2),w=k[0],M=k[1],G=function(){u(!1),a(!0)};return Object(s.useEffect)(G,[]),Object(o.jsx)(O,{board:p,checkGame:function(){m(!0===Object(h.checkMatrix)(p)),u(!0)},empty:w,result:f,resultModal:d,difficultyModal:c,newGame:G,update:function(e,t,c){var s=Object(l.a)(p);s[t][c]=e.target.value,g(s)},resetGame:function(){for(var e=Object(l.a)(p),t=Object(l.a)(w),c=function(c){t[c].forEach((function(t){return e[c][t]=""}))},s=0;s<9;++s)c(s);g(e)},setResultModal:u,setDifficulty:function(e){!function(e){var t=Object(h.blink)(e);g(t);for(var c=[],s=0;s<9;++s){c.push([]);for(var a=0;a<9;++a)""===t[s][a]&&c[s].push(a)}M(c)}(e),a(!1)}})}r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.401355bc.chunk.js.map