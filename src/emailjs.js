import emailjs from "@emailjs/browser";

export const sendBookingEmail =
  async (
    bookingData
  ) => {

    try {

      await emailjs.send(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        {

          customer_name:
            bookingData.name,

          customer_email:
            bookingData.email,

          package_name:
            bookingData.package,

          booking_date:
            bookingData.bookingDate,

          total:
            bookingData.total,

        },

        "YOUR_PUBLIC_KEY"

      );

      console.log(
        "Email Sent"
      );

    } catch (
      error
    ) {

      console.log(
        error
      );

    }

};