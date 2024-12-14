---
layout: default
title: Swing Movements
description: make robor arc by itself
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These are swing turns, the robot will turn with one side of the drive with PID.  The opposite side of the drive can be set to whatever you want, making the robot travel in an arc.  



## Absolute Swing Turns

`pid_swing_set()` has many ways of calling it with many default values you can configure and override in specific motions.   

All of the normal swing turn functions use absolute heading.  This means turning to 0 degrees will always turn to face the direction the robot initially started in.  

### Simplest Swing

At minimum, you need to give the robot an angle to go to and a speed limit (0-127).  You can do this with and without okapi units.  
```cpp
// Turn to 45deg with the left side of the drive
chassis.pid_swing_set(ez::LEFT_SWING, 45_deg, 90);
chassis.pid_wait();

// Turn to 0deg with the left side of the drive
chassis.pid_swing_set(ez::LEFT_SWING, 0, 90);
chassis.pid_wait();

// Turn to 45deg with the right side of the drive
chassis.pid_swing_set(ez::RIGHT_SWING, 45_deg, 90);
chassis.pid_wait();

// Turn to 0deg with the right side of the drive
chassis.pid_swing_set(ez::RIGHT_SWING, 0, 90);
chassis.pid_wait();
```


### Arcs
```cpp
// Turn to 45deg with the left side of the drive, and the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 45_deg, 90, 30);
chassis.pid_wait();

// Turn to 0deg with the left side of the drive, and the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 0, 90);
chassis.pid_wait();

// Turn to 45deg with the right side of the drive, and the left side going 30
chassis.pid_swing_set(ez::RIGHT_SWING, 45_deg, 90, 30);
chassis.pid_wait();

// Turn to 0deg with the right side of the drive, and the left side going 30
chassis.pid_swing_set(ez::RIGHT_SWING, 0, 90, 30);
chassis.pid_wait();
```

### Swing Paths
You can set the robot to always turn a specific direction.    
```cpp
chassis.pid_swing_behavior_set(ez::shortest);

// This will turn 1 degree to the right with the left side of the drive
chassis.pid_swing_set(ez::LEFT_SWING, 361_deg, 90);
chassis.pid_wait();
```

But you can override these defaults in each motion.  
```cpp
chassis.pid_swing_behavior_set(ez::shortest);

// This will turn 361 degrees to the left
chassis.pid_swing_set(ez::LEFT_SWING, 361_deg, 90, ez::longest);
chassis.pid_wait();
```

You can also pick between turning clockwise and counterclockwise.  
```cpp
chassis.pid_swing_behavior_set(ez::shortest);

// This will turn to 180deg counter clockwise
chassis.pid_swing_set(ez::LEFT_SWING, 180_deg, 90, ez::ccw);
chassis.pid_wait();

// This will turn to 0 deg clockwise
chassis.pid_swing_set(ez::LEFT_SWING, 0_deg, 90, ez::cw);
chassis.pid_wait();
```

### Slew
Slew ramps up the speed limit of the robot to give smoother accelerations.  
```cpp
chassis.slew_swing_set(true);  // Enables global slew
chassis.slew_swing_constants_set(5_deg, 50);

// Over the first 5 degrees, the robot will ramp the speed limit from 50 to 110 
chassis.pid_swing_set(ez::LEFT_SWING, 90_deg, 110);
chassis.pid_wait();
```

You can change the behavior of slew for each motion.  In the example below, slew is disabled globally but is enabled in one of the motions.   
```cpp
chassis.slew_swing_set(false);  // Disables global slew
chassis.slew_swing_constants_set(5_deg, 50);

// Over the first 5 degrees, the robot will ramp the speed limit from 50 to 110 
chassis.pid_swing_set(ez::LEFT_SWING, 90_deg, 110, true);  // Slew will be enabled for this motion
chassis.pid_wait();

// This will not use slew to return to 0 degrees
chassis.pid_swing_set(ez::LEFT_SWING, 0_deg, 110, true);  
chassis.pid_wait();
```

### Arcs and Swing Paths
You can use slew in conjunction with different turn behavior.  
```cpp
chassis.pid_swing_behavior_set(ez::shortest);
chassis.slew_swing_constants_set(5_deg, 50);

// This will turn to 270 deg clockwise, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 270_deg, 90, 30, ez::cw);
chassis.pid_wait();

// This will take the shortest path to 0 degrees, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 360_deg, 90, 30);
chassis.pid_wait();
```

### Arcs and Slew

You can use slew in conjunction with different turn behavior.  
```cpp
chassis.slew_swing_set(false);  // Enables global slew
chassis.slew_swing_constants_set(5_deg, 50);

// This will turn to 270deg while slewing, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 270_deg, 90, 30, true);
chassis.pid_wait();

// This will turn to 270deg without slew, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 360_deg, 90, 30);
chassis.pid_wait();
```


### Arcs, Turn Paths, and Slew
You can use slew in conjunction with different turn behavior.  
```cpp
chassis.pid_swing_behavior_set(ez::shortest);
chassis.slew_swing_set(false);  // Enables global slew
chassis.slew_swing_constants_set(5_deg, 50);

// This will turn to 270 deg clockwise while slewing, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 270_deg, 90, 30, ez::cw, true);
chassis.pid_wait();

// This will take the shortest path to 0 degrees without slew, with the right side going 30
chassis.pid_swing_set(ez::LEFT_SWING, 3600_deg, 90, 30);
chassis.pid_wait();
```










## Relative Swing Turns
All of the syntax for absolute swing turns above applies to relative turns, use `pid_swing_relative_set()` instead.  

"Relative" means the robot will swing turn X degrees relative to where it is before it starts the swing turn.  The two code blocks below do the same thing.  

:::note

Relative swing turns are based on target heading and not current heading.  If you relative swing turn +90deg, but the robot actually goes to 89deg, your next relative swing turn will be based off of 90 and not 89.  

:::

<Tabs
  groupId="swing_absolute_vs_relative_ex1"
  defaultValue="example"
  values={[
    { label: 'Relative Swing Turn',  value: 'example', },
    { label: 'Absolute Swing Turn',  value: 'proto', },
  ]
}>

<TabItem value="example">

```cpp
// Turn to Heading + 45deg
chassis.pid_swing_relative_set(ez::LEFT_SWING, 45_deg, 90);
chassis.pid_wait();

// Turn to Heading - 45deg
chassis.pid_swing_relative_set(ez::LEFT_SWING,-45, 90);
chassis.pid_wait();
```
</TabItem>


<TabItem value="proto">

```cpp
// Turn to Heading = 45deg
chassis.pid_swing_set(ez::LEFT_SWING,45_deg, 90);
chassis.pid_wait();

// Turn to Heading = 0deg
chassis.pid_swing_set(ez::LEFT_SWING,0, 90);
chassis.pid_wait();
```
</TabItem>
</Tabs>


You can also change your starting angle from 0 to whatever you want.  Here are two examples that do the same thing with absolute and relative turning, but with a starting angle of 10 degrees.  
<Tabs
  groupId="swing_absolute_vs_relative_ex2"
  defaultValue="example"
  values={[
    { label: 'Relative Swing Turn',  value: 'example', },
    { label: 'Absolute Swing Turn',  value: 'proto', },
  ]
}>

<TabItem value="example">

```cpp
// Set the starting angle to 10deg
chassis.drive_angle_set(10_deg);

// Turn to Heading + 35deg
chassis.pid_turn_relative_set(ez::LEFT_SWING, 35_deg, 90);
chassis.pid_wait();

// Turn to Heading - 35deg
chassis.pid_turn_relative_set(ez::LEFT_SWING, -35, 90);
chassis.pid_wait();
```
</TabItem>


<TabItem value="proto">

```cpp
// Set the starting angle to 10deg
chassis.drive_angle_set(10_deg);

// Turn to Heading = 45deg
chassis.pid_swing_set(ez::LEFT_SWING, 45_deg, 90);
chassis.pid_wait();

// Turn to Heading = 10deg
chassis.pid_swing_set(ez::LEFT_SWING, 10, 90);
chassis.pid_wait();
```
</TabItem>
</Tabs>








## Absolute vs Relative
At the end of the day, this is fully preference.  But, I'm still going to give an argument for why I think absolute turns should be used.  

While tuning your autonomous routine, if you decide to change the very first turn here, no other turn will be affected.  

<Tabs
  groupId="swing_absolute_vs_relative_ex3"
  defaultValue="example"
  values={[
    { label: 'Initial Absolute Auton',  value: 'example', },
    { label: 'Tuned Absolute Auton',  value: 'proto', },
  ]
}>

<TabItem value="example">

```cpp
chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 90_deg, 110);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 180_deg, 110);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 270_deg, 110);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 360_deg, 110);
chassis.pid_wait();
```
</TabItem>


<TabItem value="proto">

```cpp
chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

// This was changed to 95
chassis.pid_swing_set(ez::LEFT_SWING, 95_deg, 11900);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 180_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 270_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_set(ez::LEFT_SWING, 360_deg, 90);
chassis.pid_wait();
```
</TabItem>
</Tabs>


In order to make the Tuned auton below do the same thing as the Tuned auton above, an additional line of code is needs modifying.  This isn't a huge deal, but I don't want to add another thing to remember to do while tuning an autonomous under the stress of a tournament.  
<Tabs
  groupId="swing_absolute_vs_relative_ex4"
  defaultValue="example"
  values={[
    { label: 'Initial Relative Auton',  value: 'example', },
    { label: 'Tuned Relative Auton',  value: 'proto', },
  ]
}>

<TabItem value="example">

```cpp
chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);  
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();
```
</TabItem>


<TabItem value="proto">

```cpp
chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

// This was changed to 95
chassis.pid_swing_relative_set(ez::LEFT_SWING, 95_deg, 90);  
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

// To fix the above turn being modified, this had to be changed to 85
chassis.pid_swing_relative_set(ez::LEFT_SWING, 85_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);
chassis.pid_wait();

chassis.pid_drive_set(24_in, 110);
chassis.pid_wait();

chassis.pid_swing_relative_set(ez::LEFT_SWING, 90_deg, 90);
chassis.pid_wait();
```
</TabItem>
</Tabs>