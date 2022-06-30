import { html, fixture, expect } from '@open-wc/testing';
import { stub, spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  let el;
  let prevBtn;
  let nextBtn;
  let overview;
  beforeEach( async () => {
    localStorage.setItem("type", "Home Loan");
    el = await fixture(html`<basic-details></basic-details>`);
    prevBtn = el.shadowRoot.querySelector("lion-button.btn-previous");
    nextBtn = await el.shadowRoot.querySelector("lion-button.btn-next");
    overview = await fixture(html`<dashboard-overview></dashboard-overview>`);
  })

  it("should display basic details", () => {
    expect(el).to.be.accessible;
  })

  it("should display correct loan type", () => {
    const typeInput = el.shadowRoot.querySelector("#type");
    expect(typeInput.value).to.equal("Home Loan");
  })

  it("should call _toDashboard", () => {
    const spyFn = spy(el, "_toDashboard");
    // prevBtn.click();
    el._toDashboard();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should navigate to dashboard", () => {
    prevBtn.click();
    expect(overview).to.be.accessible;
  })

  it("should call _captureDetails", () => {
    const spyFn = spy(el, "_captureDetails");
    // nextBtn.click();
    el._captureDetails();
    expect(spyFn.calledOnce).to.be.true;
  })

  it('should call fetch',()=>{
    const spyFn = spy(window,"fetch");
    nextBtn.click();
    // el._captureDetails();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should append error class", () => {
    const amountInput = el.shadowRoot.querySelector("#amount");
    amountInput.value = 50;
    // nextBtn.click();
    el._captureDetails();
    expect(amountInput).to.have.class("e-handle");
  })

  it("should call _numToWord", () => {
    const spyFn = spy(el, "_numToWord");
    const amountInput = el.shadowRoot.querySelector("#amount");
    amountInput.value = 50;
    el._numToWord();
    expect(el.shadowRoot.querySelector("#word").textContent.trim()).to.equal("fifty only")
    expect(spyFn.calledOnce).to.be.true;
  })
});
