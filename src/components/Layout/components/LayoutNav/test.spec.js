import React from 'react';
import {cleanup, render} from "@testing-library/react";

import DealsNav from '.';
import DealsContext from "../../context";

const dealsDataMock = {
  applicants: {
    applicants: {
      individuals: [
        {
          addresses: [],
          current_lender: "Gina Fox",
          current_monthly_repayment: 1560,
          dob: "2000-01-01",
          emails: [],
          estimated_value_current_property: 3245435,
          first_name: "Jon",
          first_time_buyer: true,
          id: "c27c29e8-a443-47b5-84d0-1d8b4b9bd5b6",
          is_preferred_contact: true,
          last_name: "Snow",
          national_insurance_number: null,
          nationality: "GBR",
          other_residential_status: null,
          outstanding_mortgage: 343955,
          phone_numbers: [],
          profile_id: "4690fcc6-5c26-4e61-8c43-9d4828abde38",
          residential_status: "Owner",
          salesforce_id: null,
          source: "intermediary",
          title: "Mr"
        }
      ]
    },
    companies: [],
    individuals: "Mr, first_time_buyer: true, national_insurance_number: null",
    broker_id: "38653561-3736-6165-6565-346236393361",
    broker: {trast: 'djdn'},
    completion_date: "2019-01-01",
    credit_profiles: "missed_unsecured_payments_12m: 4",
    id: "714a8087-6dae-488c-b237-8ced8a9119db",
    income_expenditures: {profile_id: "4690fcc6-5c26-4e61-8c43-9d4828abde38"},
    loan: {total_procuration_fee_percentage: 1, aprc: 5, total_facility: 435634, funds_release_fee: 8902, erc: 6},
    notes: "notes",
    reg_bridge: {additional_funds_raised: true, other_capital_raise_purpose: null},
    risk_assessment: {
      lending_exceptions: null,
      credit_profile_review: "Pass",
      offer_conditions: "Loan against property"
    },
    scenario: null,
    scenario_other: null,
    security_details: [{
      applicant_owned: null,
      current_lender: "Gina Fox",
      current_monthly_repayments: 1560,
      date_of_purchase: null,
      dip_from_new_lender: null,
      estimated_value: 450093,
      existing_mortgage: true,
      exit_strategy: "Sale of Property",
      exit_strategy_other: null,
      id: "9b68873e-b885-42c1-8528-d0b29106ae04",
      months_on_market: 0,
      on_market: false,
      outstanding_mortgage: 343955,
      property: {
        valuation: {
          id: "63da3d82-31a2-4ad0-b39e-6efae6528e05",
          notes: "Sample notes",
          reinstatement_amount: 20030,
          valuation_fee_amount: 0,
          valuation_fee_paid_date: "2019-01-01",
          valuation_instructed_date: "2019-01-01",
          valuation_post_improvements: 210000,
          valuation_present_condition: 200000,
          valuation_present_condition_90_days: 200000,
          valuation_recieved_date: "2019-01-01",
          valuation_report_addressed_correctly: true,
          valuation_report_date: "2019-01-01",
          valuation_scheduled_date: "2019-01-01",
        },
        address: {
          city: "London",
          country_iso_code: "GBR",
          county: null,
          first_line: "8 Mortimer Street",
          id: "fb12cf27-7681-4d02-8fec-5c8a21df14af",
          postal_code: "W1T",
          second_line: null,
          third_line: null,
        },
      },
      property_id: "3b180b54-954b-462d-8194-6a4afc58a1a7",
      proposed_new_lender: null,
    },
      {
        applicant_owned: null,
        current_lender: "Gina Fox",
        current_monthly_repayments: 1560,
        date_of_purchase: null,
        dip_from_new_lender: null,
        estimated_value: 450093,
        existing_mortgage: true,
        exit_strategy: "Sale of Property",
        exit_strategy_other: null,
        id: "9b68873e-b885-42c1-8528-d0b29106ae04",
        months_on_market: 0,
        on_market: false,
        outstanding_mortgage: 343955,
        property: {
          valuation: {
            id: "63da3d82-31a2-4ad0-b39e-6efae6528e05",
            notes: "Sample notes",
            reinstatement_amount: 20030,
            valuation_fee_amount: 0,
            valuation_fee_paid_date: "2019-01-01",
            valuation_instructed_date: "2019-01-01",
            valuation_post_improvements: 210000,
            valuation_present_condition: 200000,
            valuation_present_condition_90_days: 200000,
            valuation_recieved_date: "2019-01-01",
            valuation_report_addressed_correctly: true,
            valuation_report_date: "2019-01-01",
            valuation_scheduled_date: "2019-01-01",
          },
          address: {
            city: "London",
            country_iso_code: "GBR",
            county: null,
            first_line: "8 Mortimer Street",
            id: "fb12cf27-7681-4d02-8fec-5c8a21df14af",
            postal_code: "W1T",
            second_line: null,
            third_line: null,
          },
        },
        property_id: "3b180b54-954b-462d-8194-6a4afc58a1a7",
        proposed_new_lender: null,
      }
    ],
    stage: "DIP",
    sub_stage: "New",
    suppliers: {principal_firm: null, insurance_policy_number: "45654454", packagee_fca_number: "621226"},
    progress: {
      solicitor: false,
      securities: false,
      applicants: false,
      income_credit: false,
    }
  }
};
afterEach(() => {
  cleanup();
  jest.restoreAllMocks()
});
const renderDealNav = () => {
  return render(
      <DealsContext.Provider value={{dealsData: {...dealsDataMock.applicants}}}>
        <DealsNav/>
      </DealsContext.Provider>
  );
};

describe('DealsNav', () => {
  it('should render without with Data 💥', () => {
    expect(renderDealNav).toBeTruthy();
  });

  it('should render Overview link', async () => {
    const {getByText} = renderDealNav();
    const Overview = getByText('Overview');
    expect(Overview).toBeTruthy();
  });

  it('should render Broker link', async () => {
    const {getByText} = renderDealNav();
    const Broker = getByText('Broker');
    expect(Broker).toBeTruthy();
  });

  it('should render Solicitor link', async () => {
    const {getByText} = renderDealNav();
    const Solicitor = getByText('Solicitor');
    expect(Solicitor).toBeTruthy();
  });

  it('should render Security link', async () => {
    const {getByText} = renderDealNav();
    const Security = getByText('Security');
    expect(Security).toBeTruthy();
  });

  it('should render The loan link', async () => {
    const {getByText} = renderDealNav();
    const TheLoan = getByText('The loan');
    expect(TheLoan).toBeTruthy();
  });

  it('should render Applicants link', async () => {
    const {getByText} = renderDealNav();
    const Applicants = getByText('Applicants');
    expect(Applicants).toBeTruthy();
  });

  it('should render Income & credit link', async () => {
    const {getByText} = renderDealNav();
    const IncomeCredit = getByText('Income & credit');
    expect(IncomeCredit).toBeTruthy();
  });

  it('should render  Additional notes link', async () => {
    const {getByText} = renderDealNav();
    const AdditionalNotes = getByText('Additional notes');
    expect(AdditionalNotes).toBeTruthy();
  });

});
