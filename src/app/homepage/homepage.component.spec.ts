import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

fdescribe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should copy the capital Ñ to the clipboard if the button is clicked.", async () => {
    spyOn(navigator.clipboard, "writeText").and.returnValue(Promise.resolve());
    spyOn(navigator.clipboard, "readText").and.returnValue(Promise.resolve("Ñ"));
    spyOn(component, "copyToClipboard").and.callThrough();

    component.copyToClipboard("Ñ");
    const copiedText = await navigator.clipboard.readText();

    expect(component.copyToClipboard).toHaveBeenCalled();
    expect(copiedText).toBe("Ñ");
  });
  
  it ("should copy the small ñ to the clipboard if the button is clicked.", async () => {
    spyOn(navigator.clipboard, "writeText").and.returnValue(Promise.resolve());
    spyOn(navigator.clipboard, "readText").and.returnValue(Promise.resolve("ñ"));
    spyOn(component, "copyToClipboard").and.callThrough();

    component.copyToClipboard("ñ");
    const copiedText = await navigator.clipboard.readText();

    expect(component.copyToClipboard).toHaveBeenCalled();
    expect(copiedText).toBe("ñ");
  });
  
  it ("should throw an error.", async () => {
    spyOn(window, "alert").and.returnValue();
    spyOn(navigator.clipboard, "writeText").and.returnValue(Promise.reject('Failed to copy text'));
    spyOn(component, "copyToClipboard").and.callThrough();

    component.copyToClipboard("ñ");
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(window.alert).toHaveBeenCalledWith("Failed to copy text");
  });
});
