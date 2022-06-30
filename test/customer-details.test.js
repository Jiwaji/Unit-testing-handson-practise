import { html, fixture, expect } from '@open-wc/testing';
import { stub, spy } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  let el;
  let backBtn;
  let emiDetails;
  beforeEach(async () => {
    el = await fixture(html`<customer-details></customer-details>`);
    backBtn = el.shadowRoot.querySelector("lion-button.backbg-btn-color");
    emiDetails = await fixture(html`<emi-details></emi-details>`);
  })

  it("should display customer details", () => {
    expect(el).to.be.accessible;
  })

  it("should call _toEmidetails", () => {
    const spyFn = spy(el, "_toEmidetails");
    // backBtn.click();
    el._toEmidetails();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should navigate to emi details", () => {
    backBtn.click();
    expect(emiDetails).to.be.accessible;
  })
});
