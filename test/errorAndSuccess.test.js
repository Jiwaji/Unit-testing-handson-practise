import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import sinon from 'sinon';

describe('Success screen ', () => {
  // Write test cases inside this block

  let el;
  // let homeBtn;
  beforeEach(async () => {
     el = await fixture(html`<loan-success></loan-success`);
    //  homeBtn = await el.shadowRoot.querySelector("lion-button.home-btn");
  })

  it("should display success screen", () => {
    expect(el).to.be.accessible;
  })

  it("should call _toHome", () => {
    const spyFn = sinon.spy(el, "_toHome");
    // homeBtn.click();
    el._toHome();
    expect(spyFn.calledOnce).to.be.true;
  })
});

describe('error screen', () => {
  // Write test cases inside this block

  let el;
  // let homeBtn;
  beforeEach(async () => {
     el = await fixture(html`<loan-error></loan-error`);
    //  homeBtn = await el.shadowRoot.querySelector("lion-button.home-btn");
  })
  it("should display success screen", () => {
    expect(el).to.be.accessible;
  })

  it("should call _toHome", () => {
    const spyFn = sinon.spy(el, "_toHome");
    // homeBtn.click();
    el._toHome();
    expect(spyFn.calledOnce).to.be.true;
  })
});
