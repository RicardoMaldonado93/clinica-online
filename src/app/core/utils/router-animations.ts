import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
export class RouterAnimationsLib {
  public static slideBack = [
    style({
      position: 'relative',
      height: '*',
      overflow: 'hidden',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '.8',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ left: '100%', opacity: '0' })),
      ]),
      query(':enter', [
        animate('500ms ease-in-out', style({ left: '0%', opacity: '1' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ];
  public static slideNext = [
    style({
      position: 'relative',
      height: '*',
      overflow: 'hidden',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '.8',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ left: '-100%', opacity: '0' })),
      ]),
      query(':enter', [
        animate('500ms ease-in-out', style({ left: '0%', opacity: '1' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ];
  public static slideIn = [
    style({
      position: 'relative',
      width: '*',
      height: '1000px',
      overflow: 'hidden',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: '1',
        /* overflow: "hidden" */
      }),
    ]),
    query(':enter', [
      style({ top: '-50px', opacity: '0' /* , overflow: "hidden" */ }),
    ]),
    group([
      query(':enter', [
        animate(
          '500ms ease-out',
          style({ top: '0', opacity: '1' /* , overflow: "hidden" */ })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ];
  public static slideOut = [
    style({
      position: 'relative',
      width: '*',
      height: '1000px',
      overflow: 'hidden',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: '1',
        /* overflow: "hidden" */
      }),
    ]),
    query(':enter', [
      style({ top: '50px', opacity: '0' /* , overflow: "hidden" */ }),
    ]),
    group([
      query(':enter', [
        animate(
          '500ms ease-out',
          style({ top: '0', opacity: '1' /* , overflow: "hidden" */ })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ];
  public static fadeIn = trigger('fadeAnimation', [
    transition('*=>*', [
      style({
        position: 'relative',
        width: '*',
        height: '1000px',
        overflow: 'hidden',
      }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            width: '100%',
            opacity: '1',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ opacity: '0'})],   { optional: true }),
      group([
        query(':enter', [animate('500ms ease-out', style({ opacity: '1' })),],   { optional: true }),
      ]),
      query(':enter', animateChild(),   { optional: true }),
    ]),
  ]);
  public static fadeOut = [
    style({
      position: 'relative',
      width: '*',
      height: '1000px',
      overflow: 'hidden',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        opacity: '1',
      }),
    ]),
    query(':enter', [style({ opacity: '0' })]),
    group([
      query(':enter', [animate('500ms ease-out', style({ opacity: '1' }))]),
    ]),
    query(':enter', animateChild()),
  ];

  public static fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0 })], { optional: true }),

      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))],
        { optional: true }
      ),

      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]);
}
