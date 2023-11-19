"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[705],{6420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(5893),o=n(1151);const r={title:"Getting Started",nav_order:1,slug:"/",description:"Simple plug-and-play PROS template that handles drive base functions, autonomous selector, input curves, and active brake with PTO support.",image:"/img/embed.png",preview:"/img/embed.png"},s=void 0,l={id:"Installation",title:"Getting Started",description:"Simple plug-and-play PROS template that handles drive base functions, autonomous selector, input curves, and active brake with PTO support.",source:"@site/ez-template-docs/01-Installation.md",sourceDirName:".",slug:"/",permalink:"/EZ-Template/",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/ez-template-docs/01-Installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",nav_order:1,slug:"/",description:"Simple plug-and-play PROS template that handles drive base functions, autonomous selector, input curves, and active brake with PTO support.",image:"/img/embed.png",preview:"/img/embed.png"},sidebar:"tutorialSidebar",next:{title:"Tutorials",permalink:"/EZ-Template/category/tutorials"}},a={},c=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/downloads/EZ-Robotics/EZ-Template/total.svg",alt:""}),"\r\n",(0,i.jsx)(t.img,{src:"https://github.com/EZ-Robotics/EZ-Template/workflows/Build/badge.svg",alt:""}),"\r\n",(0,i.jsx)(t.a,{href:"https://opensource.org/licenses/MPL-2.0",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",alt:"License: MPL 2.0"})})]}),"\n",(0,i.jsx)(t.p,{children:"EZ-Template is a simple plug-and-play PROS template that handles drive base functions, autonomous selector, input curves, and active brake with PTO support."}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Simple to setup"}),"\n",(0,i.jsx)(t.li,{children:"PID for driving, turning, and swing turns"}),"\n",(0,i.jsx)(t.li,{children:"Speed ramp-up for driving"}),"\n",(0,i.jsx)(t.li,{children:"Asynchronous PID with blocking functions until settled and until a specific position has come"}),"\n",(0,i.jsx)(t.li,{children:"Joystick input curves"}),"\n",(0,i.jsx)(t.li,{children:"Live adjustment of input curves"}),"\n",(0,i.jsx)(t.li,{children:"Basic autonomous selector"}),"\n",(0,i.jsx)(t.li,{children:"SD card saving of autonomous selector and joystick curves"}),"\n",(0,i.jsx)(t.li,{children:'"Tug of war" detection for autonomous'}),"\n",(0,i.jsx)(t.li,{children:"PID exit conditions for when drive motors overheat"}),"\n",(0,i.jsx)(t.li,{children:"Tank drive, single stick arcade, and dual stick arcade"}),"\n",(0,i.jsx)(t.li,{children:"Loading animation during IMU calibration"}),"\n",(0,i.jsx)(t.li,{children:"3 wire encoder and rotation sensor support"}),"\n",(0,i.jsx)(t.li,{children:"Add / remove motors from the drive dynamically to allow for PTO use"}),"\n",(0,i.jsx)(t.li,{children:"Exposed PID class for use with your other subsystems"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the latest example project ",(0,i.jsx)(t.a,{href:"https://github.com/EZ-Robotics/EZ-Template/releases/latest",children:"here"}),".  Extract the zip, and open it in PROS."]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:"src/main.cpp"}),", configure drive and IMU ports to what they are on your robot.  Be sure to read the comments!"]}),"\n",(0,i.jsx)(t.li,{children:'Configure your wheel size and cartridge.  Remember that older 4" omni wheels without mounting holes are actually 4.125!'}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:"src/main.cpp"}),", at the bottom in ",(0,i.jsx)(t.code,{children:"void opcontrol()"}),", decide how you'd like to control your robot!  Any flavor of arcade or tank!"]}),"\n",(0,i.jsx)(t.li,{children:"Turn the robot on and use it in driver control.  Make sure the ports are correct and reversed correctly!"}),"\n",(0,i.jsxs)(t.li,{children:["To test the test autonomous modes, plug into a competition switch and select the autonomous mode on the brain screen by pressing the left and right buttons!  The current page will be the autonomous that runs.  For making new autonomous routines, ",(0,i.jsx)(t.a,{href:"https://ez-robotics.github.io/EZ-Template/tutorials/example_autons",children:"click here"})," for examples on how to use the drive functions."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This only works for 2.0.0 and beyond.  You cannot upgrade from 1.x to 2.x, or 2.x to 3.x."})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the most recent EZ-Template ",(0,i.jsx)(t.a,{href:"https://github.com/EZ-Robotics/EZ-Template/releases/latest",children:"here"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Move the file to your project."}),"\n",(0,i.jsxs)(t.li,{children:["Open terminal or command prompt, and ",(0,i.jsx)(t.code,{children:"cd"})," into your projects directory."]}),"\n",(0,i.jsxs)(t.li,{children:["Run this command from terminal ",(0,i.jsx)(t.code,{children:"prosv5 c fetch EZ-Template@x.x.x..zip"})," replacing ",(0,i.jsx)(t.code,{children:"x.x.x"})," with the version number of your file."]}),"\n",(0,i.jsxs)(t.li,{children:["Apply the library to the project ",(0,i.jsx)(t.code,{children:"prosv5 c apply EZ-Template"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Put ",(0,i.jsx)(t.code,{children:'#include "EZ-Template/api.hpp"'})," in your ",(0,i.jsx)(t.code,{children:"include/main.h"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);