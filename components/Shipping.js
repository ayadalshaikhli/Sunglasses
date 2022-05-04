import React from "react";

function Shipping() {
  return (
    <div>
      <div className="shipping flex flex-col text-center text-white h-screen">
        <div className="shipping__title p-10 text-lg font-bold">
          Shipping & Delivery
        </div>
        <div className="shipping__details text-left ">
          <div className="shipping__info flex pb-3">
            <h1 className="p-10 font-bold w-1/4">FREE SHIPPING</h1>
            <p className="p-10 w-1/2">
              We are glad to bring our customers great value and service. That’s
              why we provide free shipping from our warehouses in Asia by EMS
              and in the USA by USPS.
            </p>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">
              SHIPPING TO OVER 200 COUNTRIES
            </h1>
            <p className="p-10 w-1/2">
              We are proud to offer international shipping services. However,
              there are some locations we are unable to ship to. If you happen
              to be from one of those countries we will contact you.
            </p>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">LOST/MISSING PACKAGES</h1>
            <p className="p-10 w-1/2">
              TatoMaange are not liable if the incorrect address is placed
              during the checkout process. Please make sure that your billing
              and shipping address is correct before processing your order. If
              we have made an error we will fully take responsibility of the
              original order that was made for you at no charge.
            </p>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">CUSTOMS</h1>
            <p className="p-10 w-1/2">
              We are not responsible for any custom fees once the items have
              shipped. By purchasing our products, you consent that one or more
              packages may be shipped to you and may get custom fees when they
              arrive in your country.
            </p>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">SHIPPING TIME</h1>
            <div className="p-10 w-1/2">
              <h1>
                Shipping time varies by location. These are our estimates:
              </h1>
              <div className="flex flex-row text-left ml-60 p-10">
                <div className="coutry ">
                  <h1>Location</h1>
                  <h1>United States</h1>
                  <h1>Canada, Europe</h1>
                  <h1>Australia, New Zealand</h1>
                  <h1>Central & South America</h1>
                  <h1>Asia</h1>
                  <h1>Africa</h1>
                </div>
                <div className="pl-10">
                  <h1>Estimated Shipping Time</h1>
                  <h1>8-14 Business days</h1>
                  <h1>8-15 Business days</h1>
                  <h1>8-15 Business days</h1>
                  <h1>10-20 Business days</h1>
                  <h1>8-15 Business days</h1>
                  <h1>15-30 Business days</h1>
                </div>
              </div>
              <h1>
                Max delivery time – 30 business days. *This doesn’t include our
                2-5 day processing time. *All shipping times exclude
                clearance/customs delays
              </h1>
            </div>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">TRACKING INFORMATION</h1>
            <p className="p-10 w-1/2">
              You will receive an email with a tracking number once your order
              is shipped but sometimes due to free shipping tracking is not
              available. MY TRACKING SAYS “NO INFORMATION AVAILABLE AT THE
              MOMENT”. For some shipping companies, it takes 2-5 business days
              for the tracking information to update on the system. If your
              order was placed more than 5 business days ago and there is still
              no information on your tracking number, please contact us.
            </p>
          </div>
          <div className="shipping__info flex">
            <h1 className="p-10 font-bold w-1/4">
              WILL MY ITEMS BE SENT IN ONE PACKAGE?
            </h1>
            <p className="p-10 w-1/2">
              For logistical reasons, items in the same purchase will sometimes
              be sent in separate packages, even if you’ve specified combined
              shipping. If you have any other questions, please contact us and
              we will do our best to help you out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
