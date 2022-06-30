import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block

  let el;
  let btnEN;
  let btnNL;
  beforeEach(async () => {
    el = await fixture(html`<loan-header></loan-header>`);
    btnEN = el.shadowRoot.querySelector("button#en-GB");
    btnNL = el.shadowRoot.querySelector("button#nl-NL");
  })

  it("should display loan header", () => {
    expect(el).to.be.accessible;
  })

  it("should display EN title by default", () => {
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Apply Loan");
  })

  it("should display language buttons", () => {
    expect(btnEN).to.be.accessible;
    expect(btnNL).to.be.accessible;
  })

  it("should have correct styles by default", () => {
    expect(btnEN).not.to.have.class("btn-cursor")
    expect(btnEN).to.have.class("bg-btn-color")
    expect(btnNL).to.have.class("btn-cursor")
    expect(btnNL).not.to.have.class("bg-btn-color")
  })

  it("should display NL title on language change", async () => {
    btnNL.click();
    await elementUpdated(el);
    expect(btnNL).not.to.have.class("btn-cursor")
    expect(btnNL).to.have.class("bg-btn-color")
    expect(btnEN).to.have.class("btn-cursor")
    expect(btnEN).not.to.have.class("bg-btn-color")
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Lening toepassen");
  })

  it("should display EN title on language change", async () => {
    btnNL.click();
    btnEN.click();
    await elementUpdated(el);
    expect(btnEN).not.to.have.class("btn-cursor")
    expect(btnEN).to.have.class("bg-btn-color")
    expect(btnNL).to.have.class("btn-cursor")
    expect(btnNL).not.to.have.class("bg-btn-color")
    expect(el.shadowRoot.querySelector("p").innerText).to.equal("Apply Loan");
  })
});
