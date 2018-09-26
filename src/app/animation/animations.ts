import {
  trigger,
  state,
  style,
  animate,
  query,
  transition
} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const logoFadeAnimation =
    trigger('logoFade', [
        transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ]),
    ]);

export const messageAnimation =
    trigger('slide', [
        transition(':enter', [
        style({ opacity: 0, top: '-3em' }),
        animate(100, style({ opacity: 1, top: '1em' }))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0, top: '-3em' }))
      ]),
    ]);

export const contactFormAnimation =
    trigger('slideForm', [
        transition(':enter', [
        style({ opacity: 0, right: '-30em' }),
        animate(200, style({ opacity: 1, right: '0em' }))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, right: '-30em' }))
      ]),
    ]);

export const navSlideAnimation =
    trigger('navSlide', [
        transition(':enter', [
        style({ left: '100%' }),
        animate(200, style({ left: 0 }))
      ]),
      transition(':leave', [
        animate(200, style({ left: '100%' }))
      ]),
    ]);