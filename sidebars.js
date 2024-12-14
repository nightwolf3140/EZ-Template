/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/**  @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'Introduction',
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      collapsible: true,
      items: [

        // Getting Started
        {
          type: 'category',
          label: 'Getting Started',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          collapsible: true,
          items: [
            'tutorials/installation',
            'tutorials/upgrading',
            'tutorials/using_autonomous_selector',
            'tutorials/adding_autonomous_routines',
            // 'tutorials/example_autons',
            'tutorials/drive_movements',
            'tutorials/turn_movements',
            'tutorials/swing_movements',
            'tutorials/odom_movements',
            'tutorials/exiting_movements',
          ],
        },

        // User Control
        {
          type: 'category',
          label: 'User Control',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'tutorials/control_schemes',
            'tutorials/joystick_curve',
            'tutorials/activebrake',
            'tutorials/practice_mode',
          ],
        },

        'tutorials/blank_pages',

        // Tuning Constants
        {
          type: 'category',
          label: 'Tuning Constants',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'tutorials/tuning_pid_constants',
            'tutorials/tuning_exit_condition_constants',
            'tutorials/tuning_slew_constants',
            'tutorials/tuning_imu_scale',
            'tutorials/tuning_wheel_diameter',
            'tutorials/tuning_tracking_wheel_width',
            // gain scheduling?
          ],
        },

        // Subsystems
        {
          type: 'category',
          label: 'Subsystems',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'tutorials/intake_tutorial',
            'tutorials/piston_tutorial',
            // gain scheduling?
          ],
        },

        /*
        // Using EZ PID
        {
          type: 'category',
          label: 'Using EZ PID',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'tutorials/pid', // this needs to get broken up
          ],
        },

        // Using a PTO
        {
          type: 'category',
          label: 'Using a PTO',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'tutorials/pto_tutorial',
          ],
        },
        */

        // Remove these when above is uncommented
        'tutorials/pid',
        'tutorials/pto_tutorial',
      ],

    },


    // Docs
    {
      type: 'category',
      label: 'Docs',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      collapsible: true,
      items: [
        'docs/constructor',

        // Auton Specific Docs
        {
          type: 'category',
          label: 'Autonomous Functions',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            'docs/general_autonomous',
            'docs/drive_movements',
            'docs/turn_movements',
            'docs/swing_movements',
            
            {
              type: 'category',
              label: 'Odometry',
              link: {
                type: 'generated-index',
              },
              collapsed: true,
              collapsible: true,
              items: [
                'docs/odom_general',
                'docs/odom_movements',
              ],
            },

          ],
        },

        
        'docs/user_control',
        'docs/auton_selector',
        'docs/pid_tuner',
        'docs/tracking_wheels',
        'docs/set_and_get_drive',
        'docs/pto',
        'docs/piston',
        'docs/pid',
        'docs/slew',
        'docs/util',
        'migration',
      ],
    },

    /*
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      collapsible: true,
      items: [
        'support',
        // Getting Started
        {
          type: 'category',
          label: 'Showcase',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          collapsible: true,
          items: [
            // 'showcase/highstakes',  // Bring this back once autos actually exist
            'showcase/overunder',
            'showcase/spinup',
            'showcase/tippingpoint',
            'showcase/changeup',
            'showcase/towertakeover',
          ],
        },
      ],
    },
    */

  ],
};
export default sidebars;