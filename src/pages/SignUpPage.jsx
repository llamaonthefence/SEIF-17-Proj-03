import SignUpForm from "../components/userComponents/SignUpForm";

function SignUpPage() {

  return (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SignUpForm />
    <p style={{ marginTop: '0' }}>Need help? Contact us at <a href="mailto:help@group-assembly.com" style={{ color: 'blue', textDecoration: 'underline' }}>help@group-assembly.com</a></p>
  </div>
  );
}

export default SignUpPage;