
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useEffect,useState,useHistory } from "react";
import axios from "axios";

const KEY ="pk_test_51N9E9nSEcmfKOS0ipR91TnWpo2YvIcT4IMxIlkhI6xjq8kWnGmNfBdJSigTXz7d3f7NeB3jvy0OncYi6oZ4Se8Fe00HNWcXEYd";

const Pay=()=>{
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const onToken = (token)=>{
        setStripeToken(token);
    }


    useEffect(()=>{
        const makeRequest = async()=>{
            //console.log(stripeToken.id);
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                   
                    amount:2000,
                })
                 
                console.log(res.data);
                history.push("/success");
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest();
    },[stripeToken,history])

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {stripeToken ? (
          <span>Processing....Please wait.</span>
        ) : (
          <StripeCheckout
            name="Fashion Spook"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-yUqdx9t6Y7xXs21R2_F_2yGpQZ7O7fnJA&usqp=CAU"
            billingAddress
            ShippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <button
              style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Pay Now
            </button>
          </StripeCheckout>
        )}
      </div>
    );
};

export default Pay;
