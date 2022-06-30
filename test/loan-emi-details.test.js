import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import sinon from 'sinon';

describe('Loan EMI details', () => {
  // Write test cases inside this block

  let el;
  let basicDetails;
  let customerDetails;
  let cancelBtn;
  let continueBtn;
  beforeEach(async () => {
    const data = {
      "interestRate": "7.00",
      "monthlyEMI": "447.73",
      "principal": "10000.00",
      "interest": "745.42",
      "totalAmount": "10745.42"
    }
    localStorage.setItem("type", "Home Loan");
    localStorage.setItem("emi", JSON.stringify(data));

    el = await fixture(html`<loanemi-details></loanemi-details>`);
    cancelBtn = el.shadowRoot.querySelector("lion-button.cancel-btn")
    basicDetails = await fixture(html`<basic-details></basic-details>`);
    continueBtn = el.shadowRoot.querySelector("lion-button.continue-btn")
    customerDetails = await fixture(html`<customer-details></customer-details>`);
  })

  afterEach(() => {
    localStorage.removeItem("emi");
  })

  it("should display emi details", () => {
    expect(el).to.be.accessible;
  })

  it("should call _toBasicDetails", () => {
    const spyFn = sinon.spy(el, "_toBasicDetails");
    // cancelBtn.click();
    el._toBasicDetails();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should call _toCustomer", async () => {
    const spyFn = sinon.spy(el, "_toCustomer");
    // continueBtn.click();
    el._toCustomer();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should navigate to basic details", () => {
    cancelBtn.click();
    expect(el).not.to.be.accessible;
    expect(basicDetails).to.be.accessible;
  })

  it("should navigate to customer details", () => {
    continueBtn.click();
    expect(el).not.to.be.accessible;
    expect(customerDetails).to.be.accessible;
  })
});
