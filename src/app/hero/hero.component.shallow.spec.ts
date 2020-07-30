import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Super Dude', strength: 3 };

    expect(fixture.componentInstance.hero.name).toEqual('Super Dude');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Super Dude', strength: 3 };
    fixture.detectChanges();

    // const el = fixture.debugElement.query(By.css('a').nativeElement.textContent);
    const el = fixture.nativeElement.querySelector('a').textContent;

    expect(el).toContain('Super Dude');
  });
});
