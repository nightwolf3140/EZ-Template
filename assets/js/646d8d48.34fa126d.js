"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9761],{2270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>_});var r=n(5893),i=n(1151);const o={title:"PTO Tutorial",description:"Add or remove drive motors dynamically"},s="PTO Tutorial",a={id:"tutorials/pto_tutorial",title:"PTO Tutorial",description:"Add or remove drive motors dynamically",source:"@site/ez-template-docs/tutorials/pto_tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/pto_tutorial",permalink:"/EZ-Template/next/tutorials/pto_tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/${versionDocsDirPath}/${docPath}/ez-template-docs/tutorials/pto_tutorial.md",tags:[],version:"current",frontMatter:{title:"PTO Tutorial",description:"Add or remove drive motors dynamically"},sidebar:"tutorialSidebar",previous:{title:"PID Tutorial",permalink:"/EZ-Template/next/tutorials/pid"},next:{title:"Tuning Constants",permalink:"/EZ-Template/next/tutorials/tuning_constants"}},l={},_=[{value:"Example 1 - Beginner",id:"example-1---beginner",level:2},{value:"Example 2 - Intermediate",id:"example-2---intermediate",level:2},{value:"Example 3 - Expert",id:"example-3---expert",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pto-tutorial",children:"PTO Tutorial"}),"\n",(0,r.jsx)(t.p,{children:"PTO (power take off) is used to share power between two mechanisms, usually between the drive and something else.  For example, a 6 motor drive could pneumatically shift to a 4 motor drive and a 2 motor intake."}),"\n",(0,r.jsx)(t.h2,{id:"example-1---beginner",children:"Example 1 - Beginner"}),"\n",(0,r.jsx)(t.p,{children:"The simplest way to control a PTO is to keep track of the piston state and setting motors yourself.  In this code, the driver has control over switching the PTO on and off.  The intake buttons will only work when the PTO is enabled."}),"\n",(0,r.jsxs)(t.p,{children:["The function ",(0,r.jsx)(t.code,{children:"pto_toggle_intake()"})," is in charge of triggering the piston and changing the bool ",(0,r.jsx)(t.code,{children:"pto_intake_enabled"})," to allow or disallow ",(0,r.jsx)(t.code,{children:"set_intake()"})," from setting power to the motors."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"using namespace ez;\r\n\r\n// 4th place in the chassis constructor list\r\n#define LEFT_INTAKE 3\r\n#define RIGHT_INTAKE 3\r\n\r\npros::ADIDigitalOut pto_intake_piston('A');\r\nbool pto_intake_enabled = false;\r\n\r\nvoid pto_toggle_intake(bool toggle) {\r\n  pto_intake_enabled = toggle;\r\n  chassis.pto_toggle({chassis.left_motors[LEFT_INTAKE], chassis.right_motors[RIGHT_INTAKE]}, toggle);\r\n  pto_intake_piston.set_value(toggle);\r\n  if (toggle) {\r\n    chassis.left_motors[LEFT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n    chassis.right_motors[RIGHT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n  }\r\n}\r\n\r\nvoid set_intake(int input) {\r\n  if (!pto_intake_enabled) return;\r\n  chassis.left_motors[LEFT_INTAKE] = input;\r\n  chassis.right_motors[RIGHT_INTAKE] = input;\r\n}\r\n\r\n// User control code\r\nvoid intake_control() {\r\n  if (master.get_digital_new_press(DIGITAL_DOWN)) {\r\n    pto_toggle_intake(!pto_intake_enabled);\r\n  } \r\n\r\n  if (master.get_digital(DIGITAL_L1)) {\r\n    set_intake(127);\r\n  }\r\n  else if (master.get_digital(DIGITAL_L2)) {\r\n    set_intake(-127);\r\n  }\r\n  else {\r\n    set_intake(0);\r\n  }\r\n}\r\n\r\nvoid opcontrol() {\r\n  // This is preference to what you like to drive on.\r\n  chassis.drive_brake_set(MOTOR_BRAKE_COAST);\r\n\r\n  while (true) {\r\n    chassis.opcontrol_tank(); // Tank control\r\n\r\n    intake_control();\r\n\r\n    pros::delay(util::DELAY_TIME); // This is used for timer calculations!  Keep this ez::util::DELAY_TIME\r\n  }\r\n}\r\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-2---intermediate",children:"Example 2 - Intermediate"}),"\n",(0,r.jsx)(t.p,{children:"This code is more complex, but the goal with it is to make it feel like there isn't a PTO to the driver and the programmer."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"set_intake()"})," is used to trigger the PTO here.  If a non 0 number is sent, the PTO will trigger and the motors will disengage from the drive.  Once ",(0,r.jsx)(t.code,{children:"set_intake(0);"})," is sent, the PTO will bring those motors back to the drive.  This makes autonomous routines and user control code significantly easier."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"using namespace ez;\r\n\r\n// 4th place in the chassis constructor list\r\n#define LEFT_INTAKE 3\r\n#define RIGHT_INTAKE 3\r\n\r\nPiston pto_intake_piston('A');    // PTO piston\r\nbool pto_piston_enabled = false;  // Current PTO state\r\n\r\n// Toggle motors from PTO, toggle piston, switch brake modes\r\nvoid pto_toggle_intake(bool toggle) {\r\n  pto_piston_enabled = toggle;\r\n  chassis.pto_toggle({chassis.left_motors[LEFT_INTAKE], chassis.right_motors[RIGHT_INTAKE]}, toggle);\r\n  pto_intake_piston.set(toggle);\r\n  if (toggle) {\r\n    chassis.left_motors[LEFT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n    chassis.right_motors[RIGHT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n  }\r\n}\r\n\r\n// Global intake function (for use outside of this file)\r\nvoid set_intake(int input) {\r\n  pto_toggle_intake(input == 0 ? false : true);\r\n  if (!pto_piston_enabled) return;\r\n  chassis.left_motors[LEFT_INTAKE] = -input;\r\n  chassis.right_motors[RIGHT_INTAKE] = -input;\r\n}\r\n\r\n// User control code\r\nvoid intake_control() {\r\n  if (master.get_digital(DIGITAL_L1)) {\r\n    set_intake(127);\r\n  }\r\n  else if (master.get_digital(DIGITAL_L2)) {\r\n    set_intake(-127);\r\n  }\r\n  else {\r\n    set_intake(0);\r\n  }\r\n}\r\n\r\nvoid opcontrol() {\r\n  // This is preference to what you like to drive on.\r\n  chassis.drive_brake_set(MOTOR_BRAKE_COAST);\r\n\r\n  while (true) {\r\n    chassis.opcontrol_tank(); // Tank control\r\n\r\n    intake_control();\r\n\r\n    pros::delay(util::DELAY_TIME); // This is used for timer calculations!  Keep this ez::util::DELAY_TIME\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example-3---expert",children:"Example 3 - Expert"}),"\n",(0,r.jsx)(t.p,{children:'Using the same concepts from above, this example expands on it and adds an "anti jam" function that will run the intake in the opposite direction for a short amount of time if something gets jammed.  Functions like this were incredibly useful during Tipping Point with the odd shape of rings, and this code is from the 21S Tipping Point robot.'}),"\n",(0,r.jsx)(t.p,{children:"This code checks the velocity of the motors to check if they are 0.  If they are 0, a timer is started.  Once the timer passes 250ms, we recognize a jam has happened and set the intake to go full power in the opposite direction for 250ms.  21S has problems when the PTO triggered this code would recognize a jam happening.  To prevent this another timer was started, where for 500ms after toggling a jam cannot occur."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"using namespace ez;\r\n\r\n// 4th place in the chassis constructor list\r\n#define LEFT_INTAKE 3\r\n#define RIGHT_INTAKE 3\r\n\r\nPiston pto_intake_piston('A');    // PTO piston\r\nbool pto_piston_enabled = false;  // Current PTO state\r\nint target_speed = 0;             // Global target speed\r\n\r\n// Toggle motors from PTO, toggle piston, switch brake modes\r\nvoid pto_toggle_intake(bool toggle) {\r\n  pto_piston_enabled = toggle;\r\n  chassis.pto_toggle({chassis.left_motors[LEFT_INTAKE], chassis.right_motors[RIGHT_INTAKE]}, toggle);\r\n  pto_intake_piston.set(toggle);\r\n  if (toggle) {\r\n    chassis.left_motors[LEFT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n    chassis.right_motors[RIGHT_INTAKE].set_brake_mode(pros::E_MOTOR_BRAKE_COAST);\r\n  }\r\n}\r\n\r\n// Raw intake function (intended use in this file only)\r\nvoid raw_set_intake(int input) {\r\n  if (!pto_piston_enabled) return;\r\n  chassis.left_motors[LEFT_INTAKE] = -input;\r\n  chassis.right_motors[RIGHT_INTAKE] = -input;\r\n}\r\n\r\n// Global intake function (for use outside of this file)\r\nvoid set_intake(int input) {\r\n  pto_toggle_intake(input == 0 ? false : true);\r\n  raw_set_intake(input);\r\n  if (pto_piston_enabled) target_speed = input;\r\n}\r\n\r\n// Is velocity of motors 0?\r\nbool has_intake_stopped() {\r\n  if ((chassis.left_motors[LEFT_INTAKE].get_actual_velocity() == 0 || chassis.right_motors[RIGHT_INTAKE].get_actual_velocity() == 0) && pto_piston_enabled)\r\n    return true;\r\n  return false;\r\n}\r\n\r\n// Intake task with antijam logic\r\nvoid intake_task() {\r\n  const int wait_time = 250, switch_wait_time = 500;\r\n  int switch_counter = 0, jam_counter = 0;\r\n  bool is_jammed = false, last_pto = false, just_switched = false;\r\n\r\n  while (true) {\r\n    // Detect the PTO engaging to the intake\r\n    if (pto_piston_enabled != last_pto /*&& pto_piston_enabled == true*/)\r\n      just_switched = true;\r\n\r\n    // This stops the antijam code from running 500ms after engaging the PTO to the intake\r\n    if (just_switched) {\r\n      switch_counter += util::DELAY_TIME;\r\n      if (switch_counter > switch_wait_time) {\r\n        just_switched = false;\r\n        switch_counter = 0;\r\n      }\r\n    }\r\n    last_pto = pto_piston_enabled;\r\n\r\n    // Only run this code when the PTO is engaged to the intake\r\n    if (pto_piston_enabled) {\r\n      // Run intake full power in opposite direction for 250ms when jammed, then set intake\r\n      // back to normal\r\n      if (is_jammed) {\r\n        raw_set_intake(-127 * util::sgn(target_speed));\r\n        jam_counter += ez::util::DELAY_TIME;\r\n        if (jam_counter > wait_time) {\r\n          is_jammed = false;\r\n          jam_counter = 0;\r\n          raw_set_intake(target_speed);\r\n        }\r\n      }\r\n\r\n      // Detect a jam if velocity is 0 for 250ms\r\n      else if (target_speed != 0 && has_intake_stopped() && !just_switched) {\r\n        jam_counter += util::DELAY_TIME;\r\n        if (jam_counter > wait_time) {\r\n          jam_counter = 0;\r\n          is_jammed = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    pros::delay(util::DELAY_TIME);\r\n  }\r\n}\r\npros::Task Intake_Task(intake_task);\r\n\r\n// User control code\r\nvoid intake_control() {\r\n  if (master.get_digital(DIGITAL_L1)) {\r\n    set_intake(127);\r\n  }\r\n  else if (master.get_digital(DIGITAL_L2)) {\r\n    set_intake(-127);\r\n  }\r\n  else {\r\n    set_intake(0);\r\n  }\r\n}\r\n\r\nvoid opcontrol() {\r\n  // This is preference to what you like to drive on.\r\n  chassis.drive_brake_set(MOTOR_BRAKE_COAST);\r\n\r\n  while (true) {\r\n    chassis.opcontrol_tank(); // Tank control\r\n\r\n    intake_control();\r\n\r\n    pros::delay(util::DELAY_TIME); // This is used for timer calculations!  Keep this ez::util::DELAY_TIME\r\n  }\r\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(7294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);