import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FormEffectsEffects } from './form-effects.effects';

describe('FormEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: FormEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FormEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
