/* eslint-disable no-unused-vars */
import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";


const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  
    const signIn = async ({ username, password }) => {
    //   try {
    //     const response = await mutate({
    //       variables: {
    //         username,
    //         password,
    //       },
    //     });
  
  
    //     return response;
    //   } catch (error) {
    //     console.error("Authentication failed:", error);
    //     throw error;
    //   }
    };
  
    return [signIn];
  };

  export default useSignIn