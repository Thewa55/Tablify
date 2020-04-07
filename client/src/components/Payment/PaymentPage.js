import React, { useState } from 'react';
import {
  SquarePaymentForm,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';

const APPLICATION_ID = process.env.REACT_APP_APPLICATION_ID;
const LOCATION_ID = process.env.REACT_APP_LOCATION_ID ;


const PaymentPage = () => {
    const [errorMessages, setErrorMessages] = useState([]);

    function cardNonceResponseReceived(errors) {
      if (errors) {
        setErrorMessages(errors.map(error => error.message));
        return;
      }
  
      setErrorMessages([]);
  
      alert("Payment succesful");
    }
  
    function createPaymentRequest() {
      return {
        requestShippingAddress: false,
        requestBillingInfo: true,
        currencyCode: 'USD',
        countryCode: 'US',
        total: {
          label: 'MERCHANT NAME',
          amount: '1',
          pending: false,
        },
        lineItems: [
          {
            label: 'Subtotal',
            amount: '1',
            pending: false,
          },
        ],
      };
    }
    function createVerificationDetails() {
        return {
          amount: '100.00',
          currencyCode: 'USD',
          intent: 'CHARGE',
          billingContact: {
            familyName: 'Smith',
            givenName: 'John',
            email: 'jsmith@example.com',
            country: 'GB',
            city: 'London',
            addressLines: ["1235 Emperor's Gate"],
            postalCode: 'SW7 4JA',
            phone: '020 7946 0532',
          },
        };
      }

    return (
        <SquarePaymentForm
          sandbox={true}
          applicationId={APPLICATION_ID}
          locationId={LOCATION_ID}
          cardNonceResponseReceived={cardNonceResponseReceived}
          createPaymentRequest={createPaymentRequest}
          createVerificationDetails={createVerificationDetails}
        >
        
          <fieldset className="sq-fieldset">
            <CreditCardNumberInput />
    
            <div className="sq-form-third">
              <CreditCardExpirationDateInput />
            </div>
    
            <div className="sq-form-third">
              <CreditCardPostalCodeInput />
            </div>
    
            <div className="sq-form-third">
              <CreditCardCVVInput />
            </div>
          </fieldset>
    
          <CreditCardSubmitButton>Pay $1.00</CreditCardSubmitButton>
    
          <div className="sq-error-message">
            {errorMessages.map(errorMessage => (
              <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
            ))}
          </div>
        </SquarePaymentForm>
      );


};


export default PaymentPage;