import React from "react";

function Privacy() {
  return (
    <div className="shipping flex flex-col text-center  text-white h-screen">
      <div className="shipping__title p-10 text-lg font-bold">
        Privacy policy
      </div>
      <div className="shipping__details text-left ">
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">Privacy policy</h1>
          <p className="p-10 w-1/2">
            Tataroski is compliant with The General Data Protection Regulation
          </p>
        </div>
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">(GDPR) (EU) 2016/679.</h1>
          <p className="p-10 w-1/2">
            It means that we are open about our methods of tracking and use of
            the visitors’ personal data, and you can freely check what exactly
            we’re doing to it.
          </p>
        </div>

        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">
            At www.tataroski.com, we collect.
          </h1>
          <div className="p-10 w-1/2">
            <ul className="pb-5">
              <li>Your name and surname </li>
              <li>Your email address</li>
              <li>Your physical address</li>
              <li> Your phone number </li>
              <li>
                The data about the browser and device you use to view the store
              </li>
              <li>The way you navigate the store</li>
            </ul>
            <h1 className="pb-5">
              We gather your contact details because they are necessary to
              accept and process your orders, and to make sure you’ve got your
              packages.
            </h1>
            <h1 className="pb-5">
              We gather the details of your technical equipment and on-site
              behavior in order to make our store more user-friendly, and to
              personalize our store services for you (for example, to
              automatically switch the store to the mobile version.)
            </h1>
            <h1 className="pb-5">
              Our store works with outer companies that help us provide the best
              service for you, and these third parties also use some of the
              personal details you’re leaving. We limit the data they can access
              to only what is necessary for them to perform their obligations.
            </h1>
            <ul
              style={{
                listStyleType: "square",
              }}
            >
              <li>
                Payment services use your credit card number, your name and
                surname to verify and process your payments for our products
              </li>
              <li>
                Our manufacturers and stock keepers use the data of your order
                contents to assemble the necessary package for you
              </li>
              <li>
                Postal services use your first name, last name, and physical
                address to arrange the product delivery for you
              </li>
              <li>
                Mass mailing services use your email address to send you emails
                (if you have subscribed for them)
              </li>
            </ul>
            <p>
              If you keep browsing our webstore after reading this Privacy
              Policy, you give us the consent to use your personal details for
              the purposes explained above. If you don’t agree to these terms,
              please leave the website.
            </p>
          </div>
        </div>
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">
            You can email us at tataroskijewelry@gmail.com and ask:
          </h1>
          <ul
            className="p-10 w-1/2"
            style={{
              listStyleType: "square",
            }}
          >
            <li>
              To receive the copy of your personal details we have collected
            </li>
            <li>To delete your personal details from our system</li>
            <li>
              To withdraw your consent (if you previously agreed to provide us
              with the data, but then changed your mind)
            </li>
            We are doing our best to guarantee the security of your personal
            details while keeping and using them. Thank you for your
            cooperation!
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
