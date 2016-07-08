let template;

let _handleRecovery = () => {
  let email = template.find( '[name="emailAddress"]' ).value;

  Accounts.forgotPassword( { email: email }, ( error ) => {
    if ( error ) {
      swal(error.reason, "", "error")
    } else {
      swal("Veja seu e-mail e clique no link para resetar sua senha!", "", "success")
    }
  });
};

let validation = () => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      }
    },
    submitHandler() { _handleRecovery(); }
  };
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

export default function( options ) {
  template = options.template;
  _validate( options.form );
}
