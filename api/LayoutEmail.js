module.exports.LayoutEmailResumptionService = params => {
    
    const email = `Subject: Resumption of Services on [date]

                    Dear Sir/Madam,

                    We are writing to inform you that our services will resume on [date of resumption].

                    During our closure period, we ensured that all urgent requests were addressed promptly. If you have sent any correspondence or requests, please be assured that we will respond to them upon our return.

                    We appreciate your patience and understanding. We remain at your disposal for any further questions or requests and are committed to continuing to provide you with high-quality service from that date onwards.

                    For urgent matters, please contact us by phone at [phone number] or by email at [contact email address].
                `
    return email
  }

  