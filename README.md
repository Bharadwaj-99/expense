Assumptions


User Input Validation:

The application expects the user to input a non-empty string for the transaction name and a valid numeric value for the amount.
The user must select either "Credit" or "Debit" for the transaction type.


Transaction IDs:

Transaction IDs are generated using a simple random number generator (Math.random). This approach is assumed to provide sufficient uniqueness for small-scale applications. For larger-scale applications, consider using a more robust method for generating unique IDs.


State Management:

The application manages the state of transactions locally within the NewTransaction component. No external state management library (e.g., Redux) is assumed or required.


Form Resetting:

The form fields (transaction name, amount, type) are n reset automatically after submission. 
Users can manually reset these fields using the "Reset" button if needed.

Supported Transaction Types:

The application currently supports only two transaction types: "Credit" and "Debit". Any additional transaction types would require code modifications.


Client-Side Application:

The application is a client-side only solution. It does not include server-side logic or persistence. All data is managed in-memory during the session.
