// Google Analytics tracking functions
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-T3XKPNYTXF', {
      page_path: path
    });
  }
};

export const trackEvent = (eventName: string, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Form tracking
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, category: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    category: category
  });
};

// Loan calculator tracking
export const trackLoanCalculator = (loanType: string, amount: number, term: number) => {
  trackEvent('loan_calculator_use', {
    loan_type: loanType,
    amount: amount,
    term: term
  });
};

// Appointment tracking
export const trackAppointmentScheduled = (appointmentType: string, date: string) => {
  trackEvent('appointment_scheduled', {
    appointment_type: appointmentType,
    date: date
  });
};