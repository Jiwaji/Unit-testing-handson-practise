import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import { spy } from 'sinon';

describe('LoanApplication', () => {
  // Write test cases inside this block

  let el;
  let dashboard;
  let overview;
  let basicDetails;
  let cardBtn;
  beforeEach(async () => {
    el = await fixture(html`<loan-application></loan-application>`);
    dashboard = await fixture(html`<dash-board></dash-board>`);
    overview = await fixture(html`<dashboard-overview></dashboard-overview>`);
    basicDetails = await fixture(html`<basic-details></basic-details>`);
    cardBtn = overview.shadowRoot.querySelector("dashboard-menu").shadowRoot.querySelector(".card").querySelector("button");
  })

  it("should display loan application", () => {
    expect(el).to.be.accessible;
  })
  
  it("should display dashboard", () => {
    expect(dashboard).to.be.accessible;
  })

  it("should display 4 menus", () => {
    expect(overview.shadowRoot.querySelectorAll("dashboard-menu").length).to.equal(4)
  })

  it("should display basic details", () => {
    expect(overview).to.be.accessible;
    expect(basicDetails).not.to.be.accessible;
    cardBtn.click();
    expect(basicDetails).to.be.accessible;
    expect(overview).not.to.be.accessible;
  })

  it("should call _setTypeInLS", () => {
    const dashboardMenu = overview.shadowRoot.querySelector("dashboard-menu");
    const spyMethod = spy(dashboardMenu, "_setTypeInLS");
    // cardBtn.click();
    dashboardMenu._setTypeInLS();
    expect(spyMethod.calledOnce).to.be.true;
  })

  it("should spy __increment", ()  => {
    const spyFn = spy(el, "__increment");
    el.__increment();
    expect(spyFn.calledOnce).to.be.true;
  })

  it("should set value for type in local storage", () => {
    cardBtn.click();
    expect(localStorage.getItem("type")).to.equal("Home Loan");
  })
});
