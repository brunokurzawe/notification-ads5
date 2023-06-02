import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReceiverComponent } from './notification-receiver.component';

describe('NotificationReceiverComponent', () => {
  let component: NotificationReceiverComponent;
  let fixture: ComponentFixture<NotificationReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationReceiverComponent]
    });
    fixture = TestBed.createComponent(NotificationReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
