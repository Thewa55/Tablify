import React, { useState } from 'react';
import Jumbotron from '../Jumbotron';
import Container from '../Container';
import { Link } from "react-router-dom";

import {
  SquarePaymentForm,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton,
  GooglePayButton,
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';

// const APPLICATION_ID = process.env.REACT_APP_APPLICATION_ID;
// const LOCATION_ID = process.env.REACT_APP_LOCATION_ID ;

const APPLICATION_ID = 'sandbox-sq0idb-bWzBpuCU1yYZUP21Y1M1yw';
const LOCATION_ID = 'T1SE25464ACMA';

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

      const loadingView = <div className="sq-wallet-loading"></div>;
    
      const unavailableGoogle = <div className="sq-wallet-unavailable">Google pay unavailable.</div>;
    


    return (

      <Container>
      <Jumbotron>
        <div className="row">
          <div className="col-md-12 login-box text-center" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <SquarePaymentForm
              sandbox={true}
              applicationId={APPLICATION_ID}
              locationId={LOCATION_ID}
              cardNonceResponseReceived={cardNonceResponseReceived}
              createPaymentRequest={createPaymentRequest}
              createVerificationDetails={createVerificationDetails}
            >
              <h1 className="text-center" style={{fontFamily: "'Fredoka One', cursive"}}>Complete Transaction</h1>
              <br />

              <GooglePayButton loadingView={loadingView} unavailableView={unavailableGoogle} /> 

              <div className="sq-divider">
                <span className="sq-divider-label">Or</span>
                <hr className="sq-divider-hr" />
              </div>

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

              <CreditCardSubmitButton>Pay</CreditCardSubmitButton>
              <div style={{margin: "0 auto"}} className="text-center">

                {errorMessages.map(errorMessage => (
                  <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
                ))}
              </div>
              <Link to="/FrontDesk">
                <button className="login-button" style={{marginTop: "5%", fontSize: "14px"}}>Front Desk</button>
              </Link>
            </SquarePaymentForm>
          </div>
        </div>
      </Jumbotron>
    </Container>
      );


};


export default PaymentPage;
