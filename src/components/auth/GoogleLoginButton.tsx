import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { googleLogin } from "../../api/googleAuth";

export const GoogleLoginButton = () => {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      try {
        console.log("Google Token received: ", credentialResponse.credential);

        //enviar idToken al backend
        const data = await googleLogin(credentialResponse.credential);

        console.log("successfull login: ", data);

        //guardar en localStorage
        localStorage.setItem("idToken", data.data.token);
      } catch (error) {
        console.log("Error sending token to backend: ", error);
      }
    }
  };

  const handleError = () => {
    console.log("FAILED LOGIN");
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
        />
      </div>
    </>
  );
};
